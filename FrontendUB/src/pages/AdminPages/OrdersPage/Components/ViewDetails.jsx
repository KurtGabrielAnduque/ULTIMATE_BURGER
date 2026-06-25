import React from 'react'

import { pesoFormatter } from '../../../../utils/ProjectUtilities';

import { X, Receipt, User, Phone } from 'lucide-react';

function ViewDetails({ order, closeModal }) {
  // Prevent crash if order is somehow null
  if (!order) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4 sm:p-6 backdrop-blur-sm animate-in fade-in duration-200">

      {/* Modal Container */}
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">

        {/* Header Section */}
        <div className="bg-zinc-950 p-6 sm:p-8 text-white flex justify-between items-center shrink-0">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold flex items-center gap-3">
              <Receipt className="text-red-500" size={32} />
              {order.orderId}
            </h2>
            <div className="flex gap-3 mt-3">
              <span className="bg-zinc-800 text-zinc-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {order.orderService.replace('-', ' ')}
              </span>
              <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${order.paymentStatus === 'Paid' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                {order.paymentStatus} ({order.paymentMethod})
              </span>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={closeModal}
            className="p-2 bg-zinc-800/50 hover:bg-red-500 text-zinc-300 hover:text-white rounded-full transition-all duration-300 self-start"
          >
            <X size={24} />
          </button>
        </div>

        {/* Scrollable Content Section */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 bg-slate-50">

          {/* Customer Information Card */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 mb-6 shadow-sm">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 border-b border-slate-100 pb-2">Customer Details</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-50 text-red-500 flex items-center justify-center shrink-0"><User size={20} /></div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Name</p>
                  <p className="font-bold text-slate-900">{order.customerName}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-50 text-red-500 flex items-center justify-center shrink-0"><Phone size={20} /></div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Contact</p>
                  <p className="font-bold text-slate-900">{order.contactNumber}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Order Items List */}
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 px-2">Order Items ({order.products.length})</h3>
          <div className="space-y-4">
            {order.products.map(item => (
              <div key={item.cartId} className="bg-white border border-slate-200 rounded-2xl p-4 flex flex-col sm:flex-row gap-4 shadow-sm">
                <img src={item.product.image} alt={item.product.name} className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-xl bg-slate-100 border border-slate-200 shrink-0" />

                <div className="flex-1 flex flex-col justify-center">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-lg text-slate-900 leading-tight">
                      <span className="text-slate-400 mr-2">{item.quantity}x</span>
                      {item.product.name}
                    </h4>
                    <span className="font-bold text-red-500 whitespace-nowrap ml-4">
                      {pesoFormatter.format(item.totalPrice)}
                    </span>
                  </div>

                  {/* Render Custom Selections if they exist */}
                  {item.selections && (
                    <div className="text-sm text-slate-600 space-y-1 bg-slate-50 p-3 rounded-lg border border-slate-100 mt-2">
                      {item.selections.selectedSize && (
                        <p><span className="font-semibold text-slate-800">Size:</span> {item.selections.selectedSize.name}</p>
                      )}
                      {item.selections.selectedFlavor && (
                        <p><span className="font-semibold text-slate-800">Flavor:</span> {item.selections.selectedFlavor.name}</p>
                      )}
                      {item.selections.selectedAddOns?.length > 0 && (
                        <p>
                          <span className="font-semibold text-slate-800">
                            Add-ons: 
                          </span> 

                          {item.selections.selectedAddOns.map(addOn => (
                            <span key={addOn.id}>
                              {` ${addOn.name}`}

                              {addOn.name === 'Extra Sauce' &&
                                addOn.selectedSauces?.length > 0 &&
                                ` (${addOn.selectedSauces
                                  .map(sauce => sauce.name)
                                  .join(', ')})`
                              }

                              {', '}
                            </span>
                          ))}
                        </p>
                      )}
                      {item.selections.selectedDrinks?.length > 0 && (
                        <p><span className="font-semibold text-slate-800">Drinks:</span> {item.selections.selectedDrinks.map(d => d.name).join(', ')}</p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Sticky Footer */}
        <div className="p-6 sm:p-8 bg-white border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between shrink-0 gap-4">
          <div className="flex items-center gap-4 text-slate-900">
            <span className="text-slate-500 font-medium">Grand Total:</span>
            <span className="text-3xl font-extrabold text-red-500">{pesoFormatter.format(order.orderTotal)}</span>
          </div>

          <button
            onClick={closeModal}
            className="w-full sm:w-auto bg-slate-900 text-white font-bold py-3 px-8 rounded-xl hover:bg-slate-800 transition-colors shadow-md"
          >
            Close Details
          </button>
        </div>

      </div>
    </div>
  );
}

export default ViewDetails