import React from 'react'

import { Trash2 } from 'lucide-react';

function CartItems({ setCartItems, cartItems }) {
    // Delete function for the trash can
    const handleDelete = (cartIdToDelete) => {
        setCartItems(prev => prev.filter(item => item.cartId !== cartIdToDelete));
    };

    return (
        <>
            {cartItems.length === 0 ? (
                <div className="text-center py-10 bg-zinc-900 border border-zinc-800 rounded-3xl p-6 sm:p-8">
                    <p className="text-zinc-500 text-lg">Your cart is currently empty.</p>
                </div>
            ) : (
                cartItems.map((item) => (
                    <div key={item.cartId} className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center bg-zinc-900 border border-zinc-800 p-4 sm:p-0 sm:bg-transparent sm:border-0 rounded-2xl sm:rounded-none sm:border-b sm:border-zinc-800 sm:pb-6">

                        {/* Product Image & Info */}
                        <div className="col-span-1 sm:col-span-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                            <img src={item.product.image} alt={item.product.name} className="w-full sm:w-24 h-32 sm:h-24 object-cover rounded-xl bg-zinc-800 shrink-0 border border-zinc-700/50" />
                            <div className="flex flex-col min-w-0 w-full">
                                <h3 className="text-lg font-bold text-white leading-tight mb-1">{item.product.name}</h3>

                                {/* Dynamic Base Price (Handles 0 base price items like Fries) */}
                                <p className="text-red-500 font-semibold text-sm mb-3">
                                    Base Price: ₱{(item.product.basePrice > 0 ? item.product.basePrice : (item.selections.selectedSize?.price || 0)).toFixed(2)}
                                </p>

                                {/* Dynamic Configurations */}
                                <div className="text-xs text-zinc-400 space-y-1.5">
                                    {item.selections.selectedSize && (
                                        <span className="block flex justify-between">
                                            <span>• Size: {item.selections.selectedSize.name}</span>
                                            {/* Only show + price if base price isn't already 0 (like Fries) */}
                                            {item.product.basePrice > 0 && <span>+ ₱{item.selections.selectedSize.price.toFixed(2)}</span>}
                                        </span>
                                    )}
                                    {item.selections.selectedFlavor && (
                                        <span className="block flex justify-between">
                                            <span>• Flavor: {item.selections.selectedFlavor.name}</span>
                                            <span>+ ₱{item.selections.selectedFlavor.price.toFixed(2)}</span>
                                        </span>
                                    )}
                                    {item.selections.selectedAddOns?.map(addon => (
                                        <span key={addon.id} className="block flex justify-between pr-4 sm:pr-0">
                                            <span className="truncate pr-2">• Add-on: {addon.name} {addon.selectedSauces ? `(${addon.selectedSauces[0].name})` : ''}</span>
                                            <span className="shrink-0">+ ₱{addon.price.toFixed(2)}</span>
                                        </span>
                                    ))}
                                    {item.selections.selectedDrinks?.map(drink => (
                                        <span key={drink.id} className="block flex justify-between pr-4 sm:pr-0">
                                            <span className="truncate pr-2">• Drink: {drink.name}</span>
                                            <span className="shrink-0">+ ₱{drink.price.toFixed(2)}</span>
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Quantity Controls */}
                        <div className="col-span-1 sm:col-span-3 flex items-center justify-between sm:justify-center mt-4 sm:mt-0">
                            <span className="sm:hidden text-zinc-500 font-medium">Quantity:</span>
                            <div className="flex items-center bg-zinc-950 border border-zinc-800 rounded-full px-4 py-2">
                                <button className="text-zinc-700 cursor-not-allowed" disabled></button>
                                <span className="text-white font-bold w-4 text-center">{item.quantity}</span>
                                <button className="text-zinc-700 cursor-not-allowed" disabled></button>
                            </div>
                        </div>

                        {/* Item Total */}
                        <div className="col-span-1 sm:col-span-2 flex items-center justify-between sm:justify-end">
                            <span className="sm:hidden text-zinc-500 font-medium">Total:</span>
                            <span className="text-lg font-bold text-white">₱{item.totalPrice.toFixed(2)}</span>
                        </div>

                        {/* Remove Button */}
                        <div className="col-span-1 sm:col-span-1 flex justify-end">
                            <button
                                onClick={() => handleDelete(item.cartId)}
                                className="p-2 text-zinc-500 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-colors w-full sm:w-auto flex justify-center"
                            >
                                <Trash2 size={20} />
                            </button>
                        </div>
                    </div>
                ))
            )}
        </>
    );
}

export default CartItems