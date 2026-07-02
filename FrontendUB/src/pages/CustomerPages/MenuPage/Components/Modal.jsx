import React, { useEffect } from 'react'
import { useState } from 'react';
import { pesoFormatter } from '../../../../utils/ProjectUtilities';
import axios from 'axios';

function Modal({ closeModal, product }) {
  const [detailedProduct, setDetailedProduct] = useState({});
  // Local State for Selections
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedFlavor, setSelectedFlavor] = useState(null);

  // NEW: Track Quantity
  const [quantity, setQuantity] = useState(1);

  // Track multiple add-ons and drinks
  const [selectedAddOns, setSelectedAddOns] = useState({});
  const [selectedDrinks, setSelectedDrinks] = useState({});
  
  //===========================
  // to add the selection of sauce useState
  //=======================

  useEffect(() => {
    const fetchDetailedProduct = async () => {
      try {
        let response = await axios.get(`http://127.0.0.1:8000/products/${product.id}`);
        const data = response.data
        setDetailedProduct(response.data);

        // Set default selections AFTER data is fetched
        if (data.sizes && data.sizes.length > 0) setSelectedSize(data.sizes[0].id);
        if (data.flavors && data.flavors.length > 0) setSelectedFlavor(data.flavors[0].id);

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

  // Dynamic Price Calculation for ONE single item
  let singleItemTotal = parseFloat(detailedProduct.base_price || 0);

  if (selectedSize && detailedProduct.sizes) {
    const sizeData = detailedProduct.sizes.find(s => s.id === selectedSize);
    if (sizeData) singleItemTotal = sizeData.price;
  }

  if (selectedFlavor && detailedProduct.flavors) {
    const flavorData = detailedProduct.flavors.find(f => f.id === selectedFlavor);
    if (flavorData && flavorData.price) singleItemTotal += flavorData.price;
  }

  detailedProduct.addons?.forEach(addon => {
    if (selectedAddOns[addon.id]) singleItemTotal += addon.price;
  });

  detailedProduct.drinks?.forEach(drink => {
    if (selectedDrinks[drink.id]) singleItemTotal += drink.price;
  });

  // NEW: Final Total is the single item multiplied by quantity
  const currentTotal = singleItemTotal * quantity;

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
              </span>
              <span className="text-yellow-400 text-sm">{'★'.repeat(detailedProduct.rating_stars || 5)}</span>
              <span className="text-xs text-slate-500 font-medium">({detailedProduct.rating_count?.toLocaleString() || 0} reviews)</span>
            </div>

            <hr className="border-slate-100 my-6" />

            {/* MAPPING SECTION */}
            <div className="space-y-8">

              {/* SIZES */}
              {detailedProduct.sizes && (
                <div>
                  <h3 className="font-bold text-slate-900 mb-3">Select Size</h3>
                  <div className="flex flex-wrap gap-3">
                    {detailedProduct.sizes.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => setSelectedSize(s.id)}
                        className={`px-4 py-2 border rounded-md text-sm font-medium transition-all ${selectedSize === s.id
                          ? 'border-red-500 text-red-500 bg-red-50'
                          : 'border-slate-200 text-slate-600 hover:border-slate-300'
                          }`}
                      >
                        {s.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* FLAVORS */}
              {detailedProduct.flavors && (
                <div>
                  <h3 className="font-bold text-slate-900 mb-3">Select Flavor</h3>
                  <div className="flex flex-wrap gap-3">
                    {detailedProduct.flavors.map((f) => (
                      <button
                        key={f.id}
                        onClick={() => setSelectedFlavor(f.id)}
                        className={`px-4 py-2 border rounded-md text-sm font-medium transition-all ${selectedFlavor === f.id
                          ? 'border-red-500 text-red-500 bg-red-50'
                          : 'border-slate-200 text-slate-600 hover:border-slate-300'
                          }`}
                      >
                        {f.name} {f.price > 0 && `(+${pesoFormatter.format(f.price)})`}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* ADD-ONS */}
              {detailedProduct.addons && detailedProduct.addons.length > 0 && (
                <div>
                  <h3 className="font-bold text-slate-900 mb-3">Add-ons (Optional)</h3>
                  <div className="space-y-2">
                    {detailedProduct.addons.map((addon) => (
                      <div key={addon.id}>
                        <label className="flex items-center justify-between p-3 border border-slate-100 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors">
                          <div className="flex items-center gap-3">
                            <input
                              type="checkbox"
                              checked={!!selectedAddOns[addon.id]}
                              onChange={() => toggleAddOn(addon.id)}
                              className="w-5 h-5 text-red-500 rounded border-slate-300 focus:ring-red-500"
                            />
                            <span className="font-medium text-slate-700">{addon.name}</span>
                          </div>
                          <span className="text-slate-500 font-medium">+{pesoFormatter.format(addon.price)}</span>
                        </label>

                        {addon.sauces && selectedAddOns[addon.id] && (
                          <div className="ml-10 mt-2 space-y-2 p-3 bg-slate-50 rounded-lg border border-slate-100">
                            <p className="text-xs font-bold text-slate-500 uppercase">Choose your sauce:</p>
                            {addon.sauces.map((sauce) => (
                              <label key={sauce.id} className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
                                <input type="radio" name={`sauce-${addon.id}`} className="text-red-500 focus:ring-red-500" defaultChecked={sauce.id === addon.sauces[0].id} />
                                {sauce.name}
                              </label>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* DRINKS */}
              {detailedProduct.drinks && detailedProduct.drinks.length > 0 && (
                <div>
                  <h3 className="font-bold text-slate-900 mb-3">Add a Drink</h3>
                  <div className="space-y-2">
                    {detailedProduct.drinks.map((drink) => (
                      <label key={drink.id} className="flex items-center justify-between p-3 border border-slate-100 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors">
                        <div className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={!!selectedDrinks[drink.id]}
                            onChange={() => toggleDrink(drink.id)}
                            className="w-5 h-5 text-red-500 rounded border-slate-300 focus:ring-red-500"
                          />
                          <span className="font-medium text-slate-700">{drink.name}</span>
                        </div>
                        <span className="text-slate-500 font-medium">+{pesoFormatter.format(drink.price)}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sticky Footer for Buttons (Always visible) */}
          <div className="p-6 sm:p-8 bg-white border-t border-slate-100 shrink-0">

            {/* NEW: Quantity Selector */}
            <div className="flex items-center justify-between mb-4">
              <span className="font-bold text-slate-900">Quantity</span>
              <div className="flex items-center bg-slate-100 rounded-lg p-1 border border-slate-200">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 flex items-center justify-center text-slate-600 hover:bg-white hover:shadow-sm rounded-md transition-all font-bold text-lg"
                >
                  -
                </button>
                <span className="w-10 text-center font-bold text-slate-900">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 flex items-center justify-center text-slate-600 hover:bg-white hover:shadow-sm rounded-md transition-all font-bold text-lg"
                >
                  +
                </button>
              </div>
            </div>

            {/* Total Row */}
            <div className="flex items-center justify-between mb-6">
              <span className="font-bold text-slate-900">Total</span>
              <span className="text-3xl font-extrabold text-red-500">{pesoFormatter.format(currentTotal)}</span>
            </div>

            <div className='flex gap-3 sm:gap-4'>
              <button
                onClick={closeModal}
                className="w-1/3 bg-slate-100 text-slate-700 font-bold py-3 sm:py-4 rounded-xl hover:bg-slate-200 transition-colors"
              >
                Cancel
              </button>

              <button
                onClick={() => {
                  alert(`Added ${quantity}x to cart logic coming soon!`);
                  closeModal();
                }}
                className="w-2/3 bg-red-500 text-white font-bold py-3 sm:py-4 rounded-xl hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/30 hover:-translate-y-1 transition-all duration-300"
              >
                Add to Cart
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Modal