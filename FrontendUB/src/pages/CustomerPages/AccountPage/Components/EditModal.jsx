import React from 'react'
import { X } from 'lucide-react'

function EditModal({ sampleData, closeModal }) {
    // We grab the first user and their first address from your sample array
    const user = sampleData[0];
    const address = user.Address[0];

    return (
        <div className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4 sm:p-6 backdrop-blur-sm animate-in fade-in duration-200">

            {/* The Main Modal Container */}
            {/* Changed from 2-column Shopee style to a centered 1-column Dashboard style */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl max-w-3xl w-full max-h-[90vh] shadow-2xl flex flex-col overflow-hidden">

                {/* Header Area */}
                <div className="flex justify-between items-center p-6 sm:p-8 border-b border-zinc-800 shrink-0">
                    <h2 className="text-2xl font-bold text-white">Edit Profile</h2>
                    <button 
                        onClick={closeModal} 
                        className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-full transition-colors"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* THE FORM */}
                <form 
                    className="flex flex-col h-full overflow-hidden" 
                    onSubmit={(e) => { 
                        e.preventDefault(); 
                        alert("Profile Updated!"); 
                        closeModal(); 
                    }}
                >
                    {/* Scrollable Input Area */}
                    <div className="p-6 sm:p-8 overflow-y-auto flex-grow space-y-8">
                        
                        {/* 1. Personal Info Section */}
                        <div>
                            <h3 className="text-red-500 font-bold mb-5 uppercase tracking-wider text-sm">Personal Information</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div className="flex flex-col gap-2">
                                    <label className="text-zinc-400 text-sm font-bold ml-1">First Name</label>
                                    <input type="text" defaultValue={user.FirstName} className="bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 rounded-xl px-4 py-3 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-zinc-400 text-sm font-bold ml-1">Last Name</label>
                                    <input type="text" defaultValue={user.LastName} className="bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 rounded-xl px-4 py-3 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-zinc-400 text-sm font-bold ml-1">Email Address</label>
                                    <input type="email" defaultValue={user.Email} className="bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 rounded-xl px-4 py-3 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-zinc-400 text-sm font-bold ml-1">Phone Number</label>
                                    <input type="tel" defaultValue={user.PhoneNumber} className="bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 rounded-xl px-4 py-3 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all" />
                                </div>
                            </div>
                        </div>

                        <hr className="border-zinc-800" />

                        {/* 2. Address Section */}
                        <div>
                            <h3 className="text-red-500 font-bold mb-5 uppercase tracking-wider text-sm">Delivery Address</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div className="flex flex-col gap-2 sm:col-span-2">
                                    <label className="text-zinc-400 text-sm font-bold ml-1">Street / Building</label>
                                    <input type="text" defaultValue={address.Street} className="bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 rounded-xl px-4 py-3 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-zinc-400 text-sm font-bold ml-1">Barangay</label>
                                    <input type="text" defaultValue={address.Barangay} className="bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 rounded-xl px-4 py-3 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-zinc-400 text-sm font-bold ml-1">City</label>
                                    <input type="text" defaultValue={address.City} className="bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 rounded-xl px-4 py-3 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-zinc-400 text-sm font-bold ml-1">Region</label>
                                    <input type="text" defaultValue={address.Region} className="bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 rounded-xl px-4 py-3 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-zinc-400 text-sm font-bold ml-1">Zip Code</label>
                                    <input type="text" defaultValue={address.ZipCode} className="bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 rounded-xl px-4 py-3 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all" />
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Sticky Footer */}
                    <div className="p-6 sm:p-8 border-t border-zinc-800 bg-zinc-900 shrink-0">
                        <div className="flex gap-4 justify-end">
                            {/* Notice type="button" here so it doesn't trigger the form submit */}
                            <button 
                                type="button" 
                                onClick={closeModal} 
                                className="px-6 py-3 rounded-xl font-bold text-white bg-zinc-800 hover:bg-zinc-700 transition-colors"
                            >
                                Cancel
                            </button>
                            
                            {/* Notice type="submit" here! */}
                            <button 
                                type="submit" 
                                className="px-8 py-3 rounded-xl font-bold text-white bg-red-500 hover:bg-red-600 transition-all duration-300 shadow-lg shadow-red-500/20 hover:-translate-y-1"
                            >
                                Save Changes
                            </button>
                        </div>
                    </div>
                    
                </form>

            </div>
        </div>
    );
}

export default EditModal;