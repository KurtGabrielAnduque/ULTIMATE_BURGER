import React from 'react'

import { useState } from 'react'

import { ChevronRight, Package } from 'lucide-react'
import { pesoFormatter } from '../../../../utils/ProjectUtilities'

import ViewDetails from './ViewDetails'

function PreparingOrder({ PrepairingOrders, formatTime }) {
    // Here we are going to get the state if the user select a product or not
    // since we are going to create a modal base on the details of every product
    // therefore instead of true or false state we use the id of product to check if that specific product is opened
    const [selectProductDetails, setSelectProductDetails,] = useState(null);

    return (
        <>
            {PrepairingOrders.map(order => (
                <div key={order.orderId} className="bg-white border border-zinc-200 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-blue-300 transition-colors shadow-sm">

                    {/* Grid for Order Data */}
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 flex-1">
                        <div>
                            <p className="font-bold text-slate-900">{order.orderId}</p>
                            <p className="text-xs text-slate-500 font-medium">{formatTime(order.createdAt)} • {order.orderService.toUpperCase()}</p>
                        </div>
                        <div>
                            <p className="font-semibold text-slate-700">{order.customerName}</p>
                            <p className="text-xs text-slate-500">{order.products.length} item(s)</p>
                        </div>
                        <div>
                            <p className="font-bold text-slate-900">{pesoFormatter.format(order.orderTotal)}</p>
                            <p className={`text-xs font-bold ${order.paymentStatus === 'Paid' ? 'text-blue-600' : 'text-red-500'}`}>
                                {order.paymentStatus} ({order.paymentMethod.toUpperCase()})
                            </p>
                        </div>
                        <div className="flex items-center">
                            <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full border border-blue-200">
                                {order.orderStatus}
                            </span>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 shrink-0">
                        <button onClick={() => setSelectProductDetails(order)}
                        className="p-2 text-zinc-400 hover:text-slate-900 hover:bg-zinc-100 rounded-lg transition-colors border border-transparent hover:border-zinc-200" title="View Details">
                            <ChevronRight size={20} />
                        </button>
                        <button
                            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-lg transition-colors shadow-sm"
                        >
                            <Package size={16} /> Mark Ready
                        </button>
                    </div>


                </div>
            ))}
            {/* make the modal pressed outside */}
            {/*check details of product if modal is pressed*/}
            {selectProductDetails && (
                <ViewDetails
                    // here we return the parameters of selected order
                    // so we can use it to call other property for presentation
                    order={selectProductDetails}
                    closeModal={() => setSelectProductDetails(null)}
                />
            )}

        </>
    )
}

export default PreparingOrder