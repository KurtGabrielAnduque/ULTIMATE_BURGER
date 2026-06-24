import React from 'react'
import { CheckCircle, ChevronRight } from 'lucide-react'

function CompletedOrders({ pastOrders, formatDate }) {
    return (
        <>
            {pastOrders.map(order => (
                // Past Order Card (More compact)
                <div key={order.orderId} className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:border-zinc-700 transition-colors cursor-pointer group">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 shrink-0">
                            <CheckCircle size={24} />
                        </div>
                        <div>
                            <p className="text-white font-bold text-lg mb-1">{order.orderId}</p>
                            <p className="text-zinc-400 text-sm">{formatDate(order.createdAt)} • {order.products.length} Items</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-end">
                        <p className="text-white font-extrabold text-xl">₱{order.orderTotal.toFixed(2)}</p>
                        <button className="text-zinc-400 group-hover:text-red-500 transition-colors">
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>
            ))}
        </>
    )
}

export default CompletedOrders