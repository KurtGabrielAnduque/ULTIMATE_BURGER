import React from 'react'

import { Store, QrCode, ImagePlus } from 'lucide-react';

function GeneralInformation({ storeData, editMode }) {
    return (
        <div className="xl:col-span-2 space-y-8">

            {/* 1. General Information */}
            <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6 border-b border-zinc-100 pb-4">
                    <Store className="text-red-500" size={24} />
                    <h2 className="text-xl font-bold text-slate-900">General Information</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2 sm:col-span-2">
                        <label className="text-sm font-bold text-slate-700">Branch Name</label>
                        {editMode ? (
                            <>
                                <input type="text" defaultValue={storeData.branchName} className="bg-zinc-50 border border-zinc-200 text-slate-900 rounded-xl px-4 py-3 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all" />
                            </>
                        ) : (

                            <div className="bg-zinc-50 border border-zinc-200 text-slate-900 rounded-xl px-4 py-3 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all">{storeData.branchName}</div>
                        )}
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-slate-700">Contact Number</label>
                        {editMode ? (
                            <>
                                <input type="tel" defaultValue={storeData.contactNumber} className="bg-zinc-50 border border-zinc-200 text-slate-900 rounded-xl px-4 py-3 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all" />
                            </>
                        ) : (
                            <div className="bg-zinc-50 border border-zinc-200 text-slate-900 rounded-xl px-4 py-3 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all">{storeData.contactNumber}</div>
                        )}
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-slate-700">Support Email</label>
                        {editMode ? (
                            <>
                                <input type="email" defaultValue={storeData.email} className="bg-zinc-50 border border-zinc-200 text-slate-900 rounded-xl px-4 py-3 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all" />
                            </>
                        ) : (
                            <div className="bg-zinc-50 border border-zinc-200 text-slate-900 rounded-xl px-4 py-3 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all">{storeData.email}</div>
                        )

                        }
                    </div>
                    <div className="flex flex-col gap-2 sm:col-span-2">
                        <label className="text-sm font-bold text-slate-700">Full Branch Address</label>
                        {editMode ? (
                            <input type="text" defaultValue={storeData.address} className="bg-zinc-50 border border-zinc-200 text-slate-900 rounded-xl px-4 py-3 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all" />
                        ) : (
                            <div className="bg-zinc-50 border border-zinc-200 text-slate-900 rounded-xl px-4 py-3 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all">{storeData.address}</div>
                        )}
                    </div>
                </div>
            </div>

            {/* 2. Payment Configuration (GCash) */}
            <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6 border-b border-zinc-100 pb-4">
                    <QrCode className="text-blue-500" size={24} />
                    <h2 className="text-xl font-bold text-slate-900">GCash Payment Details</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold text-slate-700">GCash Registered Name</label>
                            {editMode ? (
                                <>
                                    <input type="text" defaultValue={storeData.gcashName} className="bg-zinc-50 border border-zinc-200 text-slate-900 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" />
                                </>
                            ) : (
                                <div className="bg-zinc-50 border border-zinc-200 text-slate-900 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all">{storeData.gcashName}</div>
                            )}


                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold text-slate-700">GCash Number</label>
                            {editMode ? (
                                <>
                                    <input type="text" defaultValue={storeData.gcashNumber} className="bg-zinc-50 border border-zinc-200 text-slate-900 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" />
                                </>
                            ):(
                                <div className="bg-zinc-50 border border-zinc-200 text-slate-900 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all">{storeData.gcashNumber}</div>
                            )}
                        </div>
                        <p className="text-sm text-slate-500 bg-blue-50 p-4 rounded-xl border border-blue-100">
                            These details and the QR code will be shown to customers when they select GCash at checkout.
                        </p>
                    </div>

                    {/* QR Code Upload Area */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-slate-700">Store QR Code</label>
                        <div className="border-2 border-dashed border-zinc-200 rounded-2xl p-4 flex flex-col items-center justify-center text-center bg-zinc-50 hover:bg-zinc-100 transition-colors cursor-pointer group h-full min-h-[200px]">
                            <img src={storeData.qrCodeImage} alt="QR Code" className="w-32 h-32 object-contain mb-4 rounded-lg mix-blend-multiply" />
                            <div className="flex items-center gap-2 text-blue-600 font-bold group-hover:text-blue-700">
                                <ImagePlus size={20} /> Update QR Image
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default GeneralInformation