import React from 'react'
import { ShoppingBag, Store, Wallet, CreditCard } from 'lucide-react'

function OrderSummary({serviceMode, setServiceMode, paymentMethod, setPaymentMethod, subtotal, setIsConfirmModalOpen}) {
    return (
        <div className="bg-zinc-900 border border-zinc-800 p-6 sm:p-8 rounded-3xl sticky top-28 shadow-2xl">

            <h2 className="text-2xl font-extrabold text-white mb-6 border-b border-zinc-800 pb-4">Order Summary</h2>

            {/* Mode of Service */}
            <div className="mb-8">
                <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-wider mb-3">Mode of Service</h3>
                <div className="grid grid-cols-2 gap-3">
                    <button
                        onClick={() => setServiceMode('dine-in')}
                        className={`flex flex-col items-center justify-center p-4 border rounded-xl transition-all ${serviceMode === 'dine-in' ? 'border-red-500 bg-red-500/10 text-red-500' : 'border-zinc-800 bg-zinc-950 text-zinc-400 hover:border-zinc-600'}`}
                    >
                        <Store size={24} className="mb-2" />
                        <span className="font-semibold text-sm">Dine-in</span>
                    </button>
                    <button
                        onClick={() => setServiceMode('take-out')}
                        className={`flex flex-col items-center justify-center p-4 border rounded-xl transition-all ${serviceMode === 'take-out' ? 'border-red-500 bg-red-500/10 text-red-500' : 'border-zinc-800 bg-zinc-950 text-zinc-400 hover:border-zinc-600'}`}
                    >
                        <ShoppingBag size={24} className="mb-2" />
                        <span className="font-semibold text-sm text-center">Take-out<br /><span className="text-xs font-normal opacity-80">(Self Pick-up)</span></span>
                    </button>
                </div>
            </div>

            {/* Payment Method */}
            <div className="mb-8">
                <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-wider mb-3">Payment Method</h3>
                <div className="flex flex-col gap-3">
                    <button
                        onClick={() => setPaymentMethod('gcash')}
                        className={`flex items-center gap-4 p-4 border rounded-xl transition-all ${paymentMethod === 'gcash' ? 'border-blue-500 bg-blue-500/10 text-blue-400' : 'border-zinc-800 bg-zinc-950 text-zinc-400 hover:border-zinc-600'}`}
                    >
                        <Wallet size={24} className={paymentMethod === 'gcash' ? 'text-blue-500' : ''} />
                        <span className="font-bold">GCash</span>
                    </button>
                    <button
                        onClick={() => setPaymentMethod('paymaya')}
                        className={`flex items-center gap-4 p-4 border rounded-xl transition-all ${paymentMethod === 'paymaya' ? 'border-green-500 bg-green-500/10 text-green-400' : 'border-zinc-800 bg-zinc-950 text-zinc-400 hover:border-zinc-600'}`}
                    >
                        <Wallet size={24} className={paymentMethod === 'paymaya' ? 'text-green-500' : ''} />
                        <span className="font-bold">Maya</span>
                    </button>
                    <button
                        onClick={() => setPaymentMethod('otc')}
                        className={`flex items-center gap-4 p-4 border rounded-xl transition-all ${paymentMethod === 'otc' ? 'border-red-500 bg-red-500/10 text-red-500' : 'border-zinc-800 bg-zinc-950 text-zinc-400 hover:border-zinc-600'}`}
                    >
                        <CreditCard size={24} />
                        <span className="font-bold">Over the Counter (Cash)</span>
                    </button>
                </div>
            </div>

            {/* Total Breakdown */}
            <div className="border-t border-zinc-800 pt-6 mb-6">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-zinc-400">Subtotal</span>
                    <span className="text-white font-medium">₱{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                    <span className="text-zinc-400">Convenience Fee</span>
                    <span className="text-white font-medium">₱0.00</span>
                </div>
                <div className="flex justify-between items-end">
                    <span className="text-lg font-bold text-white">Total</span>
                    <span className="text-3xl font-extrabold text-red-500">₱{subtotal.toFixed(2)}</span>
                </div>
            </div>

            <button
                onClick={() => setIsConfirmModalOpen(true)}
                className="w-full bg-red-500 text-white font-bold text-lg py-4 rounded-xl hover:bg-red-600 hover:-translate-y-1 hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300"
            >
                Place Order
            </button>

        </div>
    )
}

export default OrderSummary