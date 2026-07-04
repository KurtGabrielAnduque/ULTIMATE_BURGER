import React from 'react'
import { pesoFormatter } from '../../../../utils/ProjectUtilities'


function ModalFooter({quantity, setQuantity, currentTotal, closeModal, addToCart}) {
    return (
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
                    onClick={addToCart}
                    className="w-2/3 bg-red-500 text-white font-bold py-3 sm:py-4 rounded-xl hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/30 hover:-translate-y-1 transition-all duration-300"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    )
}

export default ModalFooter