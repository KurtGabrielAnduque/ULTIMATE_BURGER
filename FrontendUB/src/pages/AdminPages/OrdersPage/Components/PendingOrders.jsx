import React from 'react'
import { useState } from 'react';

import ViewDetails from './ViewDetails';

import { pesoFormatter } from '../../../../utils/ProjectUtilities';
import { ChevronRight, ArrowRight, ChefHat } from 'lucide-react';

function PendingOrders({ pendingOrders, formatTime }) {
    // Here we are going to get the state if the user select a product or not
    // since we are going to create a modal base on the details of every product
    // therefore instead of true or false state we use the id of product to check if that specific product is opened
    const [selectProductDetails, setSelectProductDetails] = useState(null);

    return (
        <>
            {pendingOrders.map(order => {
                return (
                    <div key={order.orderId} className="bg-white border border-zinc-200 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-orange-300 transition-colors shadow-sm">

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
                                <p className={`text-xs font-bold ${order.paymentStatus === 'Paid' ? 'text-green-600' : 'text-red-500'}`}>
                                    {order.paymentStatus} ({order.paymentMethod.toUpperCase()})
                                </p>
                            </div>
                            <div className="flex items-center">
                                <span className="bg-orange-100 text-orange-600 text-xs font-bold px-3 py-1 rounded-full border border-orange-200">
                                    {order.orderStatus}
                                </span>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-4 shrink-0">
                            <button onClick={() => setSelectProductDetails(order)} 
                            className="p-2 text-zinc-400 hover:text-slate-900 hover:bg-zinc-100 rounded-lg transition-colors border border-transparent hover:border-zinc-200" title="View Details">
                                <ChevronRight size={20} />
                            </button>

                            <button
                                className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-4 py-2 rounded-lg transition-colors shadow-sm"
                            >
                                <ChefHat size={16} /> Cook Now 
                            </button>
                        </div>

                    </div>

                );

            })
            }
            {/*make the modal outside*/}
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

export default PendingOrders