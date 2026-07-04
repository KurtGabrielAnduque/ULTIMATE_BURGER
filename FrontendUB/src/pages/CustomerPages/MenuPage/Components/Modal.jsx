import React, { useEffect } from 'react'
import { useState } from 'react';
import { pesoFormatter } from '../../../../utils/ProjectUtilities';
import axios from 'axios';

// Components to import
import Flavors from './Flavors';
import Sizes from './Sizes';
import Addons from './Addons';
import Drinks from './Drinks';
import ModalFooter from './ModalFooter';

function Modal({ product, closeModal, loadCart }) {
  const [detailedProduct, setDetailedProduct] = useState({});
  // Local State for Selections
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedFlavor, setSelectedFlavor] = useState(null);

  // Track Quantity
  const [quantity, setQuantity] = useState(1);

  // Track multiple add-ons and drinks
  const [selectedAddOns, setSelectedAddOns] = useState({});
  const [selectedDrinks, setSelectedDrinks] = useState({});

  // to add the selection of sauce useState
  const [selectedSauce, setSelectedSauce] = useState([]);

  // A api call for get of the product detail
  useEffect(() => {
    const fetchDetailedProduct = async () => {
      try {
        let response = await axios.get(`http://127.0.0.1:8000/products/${product.id}`);
        const data = response.data
        setDetailedProduct(response.data);
        console.log(data);
        // Set default selections AFTER data is fetched
        if (data.sizes && data.sizes.length > 0) setSelectedSize(data.sizes[0].id);
        if (data.flavors && data.flavors.length > 0) setSelectedFlavor(data.flavors[0].id);

        // auto set a default in the sauce
        if (data.addons) {
          const defaultSauce = {}
          data.addons.forEach((addon) => {
            // if the specific product has an addon of sauce available
            if (addon.sauces && addon.sauces.length > 0) {
              defaultSauce[addon.id] = addon.sauces[0].id;
            }
          });
          setSelectedSauce(defaultSauce);
        }

      } catch (error) {
        console.log(`Error Fetching Data: ${error}`)
      }

    }

    fetchDetailedProduct();
  }, [product.id])


  // Toggle helper for checkboxes
  const toggleAddOn = (id) => {
    setSelectedAddOns(prev => ({ ...prev, [id]: !prev[id] }));
  };
  const toggleDrink = (id) => {
    setSelectedDrinks(prev => ({ ...prev, [id]: !prev[id] }));
  };


  const toggleSauce = (addonID, sauceID) => {
    setSelectedSauce(prev => ({ ...prev, [addonID]: sauceID }))
  }

  // Dynamic Price Calculation for ONE single item
  let singleItemTotal = parseFloat(detailedProduct.base_price || 0);

  if (selectedSize && detailedProduct.sizes) {
    const sizeData = detailedProduct.sizes.find(s => s.id === selectedSize);
    if (sizeData) singleItemTotal = parseFloat(sizeData.price);
  }

  if (selectedFlavor && detailedProduct.flavors) {
    const flavorData = detailedProduct.flavors.find(f => f.id === selectedFlavor);
    if (flavorData && flavorData.price) singleItemTotal += parseFloat(flavorData.price);
  }

  detailedProduct.addons?.forEach(addon => {
    if (selectedAddOns[addon.id]) singleItemTotal += parseFloat(addon.price);
  });

  detailedProduct.drinks?.forEach(drink => {
    if (selectedDrinks[drink.id]) singleItemTotal += parseFloat(drink.price);
  });

  // NEW: Final Total is the single item multiplied by quantity
  const currentTotal = singleItemTotal * quantity;




  // formation of the payload after user press add to cart
  const payLoadFormat = () => {

    const formattedAddOns = (detailedProduct.addons || []) //check if there is an addons first
      .filter(addon => selectedAddOns[addon.id]) // filter the ids that are only exist in selectectAddOns
      .map(addon => {
        const addonPayLoad = {
          addonId: parseInt(addon.id) // get the id only
        }

        if (addon.sauces && addon.sauces?.length > 0 && selectedSauce[addon.id]) { // if the addon in addons have sauces and its length is above 0 and there is a existing addon selected in selected Addons
          const chosenSauce = addon.sauces.find(x => x.id === selectedSauce[addon.id]) // find sauce id that is similar to the checked id in radio button
          if (chosenSauce) {
            addonPayLoad.sauces = [chosenSauce.id];
          }
        }

        return addonPayLoad
      });

    const formattedDrinks = (detailedProduct.drinks || [])
      .filter(drink => selectedDrinks[drink.id])
      .map(drink => {
        const drinkPayLoad = {
          drinkId: parseInt(drink.id)
        }

        return drinkPayLoad
      });



    const payload = {
      product: detailedProduct.id,
      user: 1, //proxy since we havent start setting up the user serializers
      quantity: quantity,
      selections: {
        flavor: selectedFlavor,
        size: selectedSize,
        addons: formattedAddOns,
        drinks: formattedDrinks
      }
    };



    return payload
  }

  const addToCart = async () => {
    const payload = payLoadFormat();

    // create a post method
    await axios.post('http://127.0.0.1:8000/cart/', payload);

    // reload the cart to header update
    await loadCart();

    closeModal();
  }


  return (
    <div className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4 sm:p-6 backdrop-blur-sm">

      {/* The Main Modal Container - Shopee Style Two Column */}
      <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] shadow-2xl flex flex-col md:flex-row overflow-hidden">

        {/* Left Half: Product Image */}
        <div className="w-full md:w-1/2 h-64 md:h-auto bg-slate-100 shrink-0">
          <img
            src={detailedProduct.image}
            className="w-full h-full object-cover"
            alt={detailedProduct.name}
          />
        </div>

        {/* Right Half: Product Details & Sticky Footer */}
        <div className="w-full md:w-1/2 flex flex-col h-full max-h-[60vh] md:max-h-[90vh]">

          {/* Scrollable Content Area */}
          <div className="p-6 sm:p-8 flex-grow overflow-y-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-2 leading-tight">{detailedProduct.name}</h2>

            <div className="flex items-center gap-2 mb-4">
              <span className="bg-red-100 text-red-600 font-bold px-3 py-1 rounded-full text-sm">
                Price: {pesoFormatter.format(detailedProduct.base_price)}
              </span>                                       {/*since our model holds a decimal number*/}
              <span className="text-yellow-400 text-sm">{"★".repeat(Math.floor(Number(detailedProduct.rating_stars || 0)))}</span>
              <span className="text-xs text-slate-500 font-medium">({detailedProduct.rating_count?.toLocaleString() || 0} reviews)</span>
            </div>

            <hr className="border-slate-100 my-6" />

            {/* MAPPING SECTION */}
            <div className="space-y-8">

              {/* SIZES */}
              {detailedProduct.sizes?.length > 0 && (
                <Sizes
                  detailedProduct={detailedProduct}
                  selectedSize={selectedSize}
                  setSelectedSize={setSelectedSize}
                />
              )}

              {/* FLAVORS */}
              {detailedProduct.flavors?.length > 0 && (
                <Flavors
                  detailedProduct={detailedProduct}
                  selectedFlavor={selectedFlavor}
                  setSelectedFlavor={selectedFlavor}
                />
              )}

              {/* ADD-ONS */}
              {detailedProduct.addons && detailedProduct.addons.length > 0 && (
                <Addons
                  detailedProduct={detailedProduct}
                  selectedAddOns={selectedAddOns}
                  toggleAddOn={toggleAddOn}
                  toggleSauce={toggleSauce}
                  selectedSauce={selectedSauce}
                />
              )}

              {/* DRINKS */}
              {detailedProduct.drinks && detailedProduct.drinks.length > 0 && (
                <Drinks
                  detailedProduct = {detailedProduct}
                  selectedDrinks = {selectedDrinks}
                  toggleDrink = {toggleDrink}
                />
              )}
            </div>
          </div>

          {/* Sticky Footer for Buttons (Always visible) */}
          <ModalFooter
            quantity = {quantity}
            setQuantity = {setQuantity}
            currentTotal = {currentTotal}
            closeModal = {closeModal}
            addToCart = {addToCart}
          />
        </div>
      </div>
    </div>
  );
}

export default Modal