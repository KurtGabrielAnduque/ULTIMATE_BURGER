import React from 'react'
import { Clock, Power, AlertCircle } from 'lucide-react';

function StoreHours({ storeData, setStoreData }) {
    return (
        <div className="space-y-8">

            {/* 3. Master Store Status */}
            <div className={`rounded-2xl border shadow-sm p-6 sm:p-8 transition-colors ${storeData.isAcceptingOrders ? 'bg-white border-zinc-200' : 'bg-red-50 border-red-200'}`}>
                <div className="flex items-center gap-3 mb-4">
                    <Power className={storeData.isAcceptingOrders ? "text-emerald-500" : "text-red-500"} size={24} />
                    <h2 className="text-xl font-bold text-slate-900">Store Status</h2>
                </div>

                <p className="text-sm text-slate-600 mb-6">
                    {storeData.isAcceptingOrders
                        ? "Your store is currently online and accepting orders from customers."
                        : "Your store is OFFLINE. Customers cannot place new orders."}
                </p>

                <button
                    onClick={() => setStoreData({ ...storeData, isAcceptingOrders: !storeData.isAcceptingOrders })}
                    className={`w-full py-4 rounded-xl font-bold text-white shadow-sm flex justify-center items-center gap-2 transition-all ${storeData.isAcceptingOrders
                        ? 'bg-red-500 hover:bg-red-600'
                        : 'bg-emerald-500 hover:bg-emerald-600'
                        }`}
                >
                    {storeData.isAcceptingOrders ? (
                        <><AlertCircle size={20} /> Stop Accepting Orders</>
                    ) : (
                        <><Power size={20} /> Re-open Store</>
                    )}
                </button>
            </div>

            {/* 4. Operating Hours */}
            <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6 border-b border-zinc-100 pb-4">
                    <Clock className="text-orange-500" size={24} />
                    <h2 className="text-xl font-bold text-slate-900">Operating Hours</h2>
                </div>

                <div className="space-y-4">
                    {storeData.hours.map((schedule, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col sm:flex-row sm:items-center gap-3"
                        >
                            <span className="font-bold text-sm text-slate-700 sm:w-24">
                                {schedule.day}
                            </span>

                            {schedule.isClosed ? (
                                <div className="flex-1 text-center bg-red-50 text-red-500 text-sm font-bold py-2 rounded-lg border border-red-100">
                                    Closed
                                </div>
                            ) : (
                                <div className="flex-1 flex items-center gap-2 overflow-hidden">
                                    <input
                                        type="time"
                                        defaultValue={schedule.open}
                                        className="flex-1 min-w-0 w-full bg-zinc-50 border border-zinc-200 rounded-lg px-2 py-2 text-sm"
                                    />
                                    <span className="text-slate-400 shrink-0">-</span>
                                    <input
                                        type="time"
                                        defaultValue={schedule.close}
                                        className="flex-1 min-w-0 w-full bg-zinc-50 border border-zinc-200 rounded-lg px-2 py-2 text-sm"
                                    />
                                </div>
                            )}

                            <button className="text-xs font-bold text-slate-400 hover:text-red-500 uppercase tracking-wider sm:w-16">
                                {schedule.isClosed ? 'Open' : 'Close'}
                            </button>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default StoreHours