import React from 'react'
import { useState } from 'react';

function Modal({ closeModal, product }) {
  // Local State for Selections
  const [selectedSize, setSelectedSize] = useState(product.size?.[0]?.id || null);
  const [selectedFlavor, setSelectedFlavor] = useState(product.friesFlavor?.[0]?.id || null);
  
  // Track multiple add-ons and drinks
  const [selectedAddOns, setSelectedAddOns] = useState({});
  const [selectedDrinks, setSelectedDrinks] = useState({});

  // Toggle helper for checkboxes
  const toggleAddOn = (id) => {
    setSelectedAddOns(prev => ({ ...prev, [id]: !prev[id] }));
  };
  const toggleDrink = (id) => {
    setSelectedDrinks(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Dynamic Price Calculation
  let currentTotal = product.price;

  if (selectedSize && product.size) {
    const sizeData = product.size.find(s => s.id === selectedSize);
    if (sizeData) currentTotal = sizeData.price;
  }
  
  if (selectedFlavor && product.friesFlavor) {
    const flavorData = product.friesFlavor.find(f => f.id === selectedFlavor);
    if (flavorData && flavorData.price) currentTotal += flavorData.price;
  }

  product.addOns?.forEach(addon => {
    if (selectedAddOns[addon.id]) currentTotal += addon.price;
  });

  product.drinks?.forEach(drink => {
    if (selectedDrinks[drink.id]) currentTotal += drink.price;
  });

  return (
    <div className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4 sm:p-6 backdrop-blur-sm">
      
      {/* The Main Modal Container - Shopee Style Two Column */}
      <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] shadow-2xl flex flex-col md:flex-row overflow-hidden">
        
        {/* Left Half: Product Image */}
        <div className="w-full md:w-1/2 h-64 md:h-auto bg-slate-100 shrink-0">
          <img 
            src={product.image || `https://placehold.co/800x800/E63946/FFF?text=${product.name.replace(/ /g, '+')}`} 
            className="w-full h-full object-cover"
            alt={product.name}
          />
        </div>

        {/* Right Half: Product Details & Sticky Footer */}
        <div className="w-full md:w-1/2 flex flex-col h-full max-h-[60vh] md:max-h-[90vh]">
          
          {/* Scrollable Content Area */}
          <div className="p-6 sm:p-8 flex-grow overflow-y-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-2 leading-tight">{product.name}</h2>
            
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-red-100 text-red-600 font-bold px-3 py-1 rounded-full text-sm">
                Price: ₱{product.price?.toFixed(2)}
              </span>
              <span className="text-yellow-400 text-sm">{'★'.repeat(product.rating?.stars || 5)}</span>
              <span className="text-xs text-slate-500 font-medium">({product.rating?.count?.toLocaleString() || 0} reviews)</span>
            </div>

            <hr className="border-slate-100 my-6" />

            {/* MAPPING SECTION */}
            <div className="space-y-8">
              
              {/* SIZES */}
              {product.size && (
                <div>
                  <h3 className="font-bold text-slate-900 mb-3">Select Size</h3>
                  <div className="flex flex-wrap gap-3">
                    {product.size.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => setSelectedSize(s.id)}
                        className={`px-4 py-2 border rounded-md text-sm font-medium transition-all ${
                          selectedSize === s.id 
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
              {product.friesFlavor && (
                <div>
                  <h3 className="font-bold text-slate-900 mb-3">Select Flavor</h3>
                  <div className="flex flex-wrap gap-3">
                    {product.friesFlavor.map((f) => (
                      <button
                        key={f.id}
                        onClick={() => setSelectedFlavor(f.id)}
                        className={`px-4 py-2 border rounded-md text-sm font-medium transition-all ${
                          selectedFlavor === f.id 
                            ? 'border-red-500 text-red-500 bg-red-50' 
                            : 'border-slate-200 text-slate-600 hover:border-slate-300'
                        }`}
                      >
                        {f.name} {f.price > 0 && `(+₱${f.price})`}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* ADD-ONS */}
              {product.addOns && product.addOns.length > 0 && (
                <div>
                  <h3 className="font-bold text-slate-900 mb-3">Add-ons (Optional)</h3>
                  <div className="space-y-2">
                    {product.addOns.map((addon) => (
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
                          <span className="text-slate-500 font-medium">+₱{addon.price.toFixed(2)}</span>
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
              {product.drinks && product.drinks.length > 0 && (
                <div>
                  <h3 className="font-bold text-slate-900 mb-3">Add a Drink</h3>
                  <div className="space-y-2">
                    {product.drinks.map((drink) => (
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
                        <span className="text-slate-500 font-medium">+₱{drink.price.toFixed(2)}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sticky Footer for Buttons (Always visible) */}
          <div className="p-6 sm:p-8 bg-white border-t border-slate-100 shrink-0">
            <div className="flex items-center justify-between mb-4">
              <span className="font-bold text-slate-900">Total</span>
              <span className="text-2xl font-extrabold text-red-500">₱{currentTotal.toFixed(2)}</span>
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
                  alert("Added to cart logic coming soon!");
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