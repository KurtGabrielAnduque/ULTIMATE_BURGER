import { CheckCircle2 } from 'lucide-react';

function CartModal({serviceMode, paymentMethod, cartItems, subtotal, setIsConfirmModalOpen}) {
    return (
        <div className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4 backdrop-blur-sm">
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl flex flex-col relative overflow-hidden">

                {/* Top accent line */}
                <div className="absolute top-0 left-0 w-full h-2 bg-red-500"></div>

                <div className="flex flex-col items-center text-center mb-6 mt-4">
                    <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mb-4 text-red-500">
                        <CheckCircle2 size={32} />
                    </div>
                    <h2 className="text-2xl font-extrabold text-white mb-2">Confirm Your Order</h2>
                    <p className="text-zinc-400">Please review your order details before proceeding to payment.</p>
                </div>

                <div className="bg-zinc-950 rounded-2xl p-5 mb-6 border border-zinc-800">
                    <div className="flex justify-between mb-2">
                        <span className="text-zinc-400 text-sm">Service:</span>
                        <span className="text-white font-bold text-sm uppercase">{serviceMode.replace('-', ' ')}</span>
                    </div>
                    <div className="flex justify-between mb-4 pb-4 border-b border-zinc-800">
                        <span className="text-zinc-400 text-sm">Payment:</span>
                        <span className="text-white font-bold text-sm uppercase">{paymentMethod === 'otc' ? 'Cash' : paymentMethod}</span>
                    </div>

                    <div className="space-y-3 mb-4 max-h-32 overflow-y-auto pr-2">
                        {cartItems.map(item => (
                            <div key={item.cartId} className="flex justify-between items-start">
                                <span className="text-white text-sm"><span className="text-zinc-500">{item.quantity}x</span> {item.product.name}</span>
                                <span className="text-white text-sm font-medium">₱{item.totalPrice.toFixed(2)}</span>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t border-zinc-800">
                        <span className="text-white font-bold">Total to Pay:</span>
                        <span className="text-red-500 font-extrabold text-xl">₱{subtotal.toFixed(2)}</span>
                    </div>
                </div>

                <div className="flex gap-3">
                    <button
                        onClick={() => setIsConfirmModalOpen(false)}
                        className="w-1/3 bg-zinc-800 text-white font-bold py-3 sm:py-4 rounded-xl hover:bg-zinc-700 transition-colors"
                    >
                        Back
                    </button>
                    <button
                        onClick={() => {
                            alert(`Proceeding to ${paymentMethod.toUpperCase()} payment gateway!`);
                            setIsConfirmModalOpen(false);
                        }}
                        className="w-2/3 bg-red-500 text-white font-bold py-3 sm:py-4 rounded-xl hover:bg-red-600 transition-all shadow-lg shadow-red-500/20"
                    >
                        Confirm & Pay
                    </button>
                </div>

            </div>
        </div>
    )
}

export default CartModal