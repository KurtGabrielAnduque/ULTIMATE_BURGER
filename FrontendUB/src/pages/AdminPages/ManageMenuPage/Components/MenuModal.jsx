import React from 'react';
import { PencilLine, X, Save, ImagePlus } from 'lucide-react';

function MenuModal({ product, closeModal }) {
    // Defensive check: If there's no product, don't render the modal to prevent crashes
    if (!product) return null;

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Successfully updated: ${product.name}!`);
        // In the future, this is where you send the updated data to Django
        closeModal();
    };

    return (
        <div className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4 sm:p-6 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
                
                {/* Modal Header */}
                <div className="bg-slate-900 p-6 text-white flex justify-between items-center shrink-0">
                    <h2 className="text-xl font-bold flex items-center gap-2">
                        <PencilLine className="text-blue-400" size={24} />
                        Edit: {product.name}
                    </h2>
                    <button 
                        onClick={closeModal} 
                        className="p-2 bg-slate-800 hover:bg-red-500 text-slate-300 hover:text-white rounded-full transition-all duration-300"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Modal Form Content */}
                {/* Wrapping this in a <form> lets us use 'onSubmit' and the 'required' attributes */}
                <form onSubmit={handleSubmit} className="flex flex-col flex-1 overflow-hidden">
                    
                    <div className="p-6 sm:p-8 flex-1 overflow-y-auto bg-slate-50 space-y-6">
                        
                        {/* Image Upload Area */}
                        <div className="flex gap-6 items-center bg-white p-4 rounded-2xl border border-slate-200">
                            <img src={product.image} alt="Preview" className="w-24 h-24 rounded-xl object-cover border border-slate-200" />
                            <div className="flex-1">
                                <p className="text-sm font-bold text-slate-700 mb-2">Product Image</p>
                                <button type="button" className="flex items-center gap-2 text-sm font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-lg transition-colors border border-blue-200">
                                    <ImagePlus size={16} /> Upload New Photo
                                </button>
                            </div>
                        </div>

                        {/* Input Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div className="flex flex-col gap-2 sm:col-span-2">
                                <label className="text-sm font-bold text-slate-700 ml-1">Product Name</label>
                                <input 
                                    type="text" 
                                    defaultValue={product.name} 
                                    required
                                    className="bg-white border border-slate-200 text-slate-900 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-sm" 
                                />
                            </div>
                            
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-slate-700 ml-1">Base Price (₱)</label>
                                <input 
                                    type="number" 
                                    step="0.01" 
                                    defaultValue={product.price} 
                                    required
                                    className="bg-white border border-slate-200 text-slate-900 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-sm" 
                                />
                            </div>
                            
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-slate-700 ml-1">Category</label>
                                <select 
                                    defaultValue={product.category} 
                                    className="bg-white border border-slate-200 text-slate-900 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-sm capitalize"
                                >
                                    <option value="burger">Burger</option>
                                    <option value="sides">Sides</option>
                                    <option value="pizza">Pizza</option>
                                    <option value="pizzaBurger">Pizza Burger</option>
                                    <option value="pizzaBurger2in1">2 in 1 Pizza Burger</option>
                                    <option value="drinks">Drinks</option>
                                </select>
                            </div>
                            
                            <div className="flex flex-col gap-2 sm:col-span-2">
                                <label className="text-sm font-bold text-slate-700 ml-1">Description (Optional)</label>
                                <textarea 
                                    rows="3" 
                                    defaultValue={product.desc || ""} 
                                    className="bg-white border border-slate-200 text-slate-900 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-sm resize-none"
                                ></textarea>
                            </div>
                        </div>
                    </div>

                    {/* Modal Footer */}
                    <div className="p-6 bg-white border-t border-slate-100 flex justify-end gap-3 shrink-0">
                        <button 
                            type="button"
                            onClick={closeModal}
                            className="px-6 py-2.5 rounded-xl font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors"
                        >
                            Cancel
                        </button>
                        <button 
                            type="submit"
                            className="flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/20 transition-all hover:-translate-y-0.5"
                        >
                            <Save size={18} /> Save Changes
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default MenuModal;