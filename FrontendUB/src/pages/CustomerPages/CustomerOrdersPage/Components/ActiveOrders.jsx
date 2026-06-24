import React from 'react'
import StatusTracker from './StatusTracker'

function ActiveOrders({ activeOrders, formatDate }) {
    return (
        <>
            {activeOrders.map(order => (
                // Single Active Order Card
                <div key={order.orderId} className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-xl">

                    {/* Card Header */}
                    <div className="bg-zinc-950 p-6 border-b border-zinc-800 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                        <div>
                            <p className="text-zinc-400 text-sm font-bold mb-1">Order {order.orderId}</p>
                            <p className="text-white font-medium">{formatDate(order.createdAt)} • <span className="uppercase text-zinc-500">{order.orderService.replace('-', ' ')}</span></p>
                        </div>
                        <div className="text-left sm:text-right">
                            <p className="text-zinc-400 text-sm font-bold mb-1">Total</p>
                            <p className="text-red-500 font-extrabold text-xl">₱{order.orderTotal.toFixed(2)}</p>
                        </div>
                    </div>

                    {/* Status Tracker */}
                    <div className="p-6 pb-2">
                        <StatusTracker status={order.orderStatus} />
                    </div>

                    {/* Item Summary */}
                    <div className="px-6 py-6 border-t border-zinc-800/50 bg-zinc-900/50">
                        <h4 className="text-zinc-300 font-bold mb-4 text-sm uppercase tracking-wider">Order Items</h4>
                        <div className="space-y-4">
                            {order.products.map(item => (
                                <div key={item.cartId} className="flex items-center gap-4">
                                    <img src={item.product.image} alt={item.product.name} className="w-12 h-12 rounded-lg object-cover bg-zinc-800 border border-zinc-700" />
                                    <div className="flex-grow">
                                        <p className="text-white font-medium"><span className="text-zinc-500 mr-2">{item.quantity}x</span> {item.product.name}</p>
                                        {/* Shortened details for the receipt view */}
                                        <p className="text-xs text-zinc-500 truncate">
                                            {item.selections?.selectedSize?.name}
                                            {item.selections?.selectedAddOns ? ` + Add-ons` : ''}
                                        </p>
                                    </div>
                                    <p className="text-white font-medium">₱{item.totalPrice.toFixed(2)}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            ))}
        </>
    )
}

export default ActiveOrders