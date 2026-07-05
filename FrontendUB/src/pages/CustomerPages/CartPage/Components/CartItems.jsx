import React from 'react'
import { pesoFormatter } from '../../../../utils/ProjectUtilities';

import { Trash2 } from 'lucide-react';

function CartItems({ setCartItems, cartItems, cartData }) {
    // Delete function for the trash can
    const handleDelete = (cartIdToDelete) => {
        setCartItems(prev => prev.filter(item => item.cartId !== cartIdToDelete));
    };

    return (
        <>
            {cartData.length === 0 ? (
                <div className="text-center py-10 bg-zinc-900 border border-zinc-800 rounded-3xl p-6 sm:p-8">
                    <p className="text-zinc-500 text-lg">Your cart is currently empty.</p>
                </div>
            ) : (
                cartData.map((item) => (
                    <div key={item.id} className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center bg-zinc-900 border border-zinc-800 p-4 sm:p-0 sm:bg-transparent sm:border-0 rounded-2xl sm:rounded-none sm:border-b sm:border-zinc-800 sm:pb-6">

                        {/* Product Image & Info */}
                        <div className="col-span-1 sm:col-span-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                            <img src={item.product.image} alt={item.product.name} className="w-full sm:w-24 h-32 sm:h-24 object-cover rounded-xl bg-zinc-800 shrink-0 border border-zinc-700/50" />
                            <div className="flex flex-col min-w-0 w-full">
                                <h3 className="text-lg font-bold text-white leading-tight mb-1">{item.product.name}</h3>

                                {/* Dynamic Base Price (Handles 0 base price items like Fries) */}
                                <p className="text-red-500 font-semibold text-sm mb-3">
                                    Base Price: {pesoFormatter.format(parseFloat(item.product.base_price) > 0 ? parseFloat(item.product.base_price) : (parseFloat(item.selections.size?.price) || 0))}
                                </p>

                                {/* Dynamic Configurations */}
                                <p className="text-red-500 font-semibold text-sm mb-1">
                                    Additional Charges:
                                </p>
                                <div className="text-xs text-zinc-400 space-y-1.5">
                                    {item.selections.selectedSize && (
                                        <span className="block flex justify-between">
                                            <span>• Size: {item.selections.size.name}</span>
                                            {/* Only show + price if base price isn't already 0 (like Fries) */}
                                            {parseFloat(item.product.basePrice) > 0 && <span>+ {pesoFormatter.format(parseFloat(item.selections.selectedSize.price))}</span>}
                                        </span>
                                    )}
                                    {item.selections.flavor && (
                                        <span className="block flex justify-between">
                                            <span>• Flavor: {item.selections.flavor.name}</span>
                                            <span>+ {pesoFormatter.format(parseFloat(item.selections.flavor.price))}</span>
                                        </span>
                                    )}
                                    {item.selections.addons?.map(addon => (
                                        <span key={addon.id} className="block flex justify-between pr-4 sm:pr-0">
                                            <span className="truncate pr-2">• Add-on: {addon.name} {addon.sauces && addon.sauces.length > 0 ? `(${addon?.sauces[0]?.name})` : ''}</span>
                                            <span className="shrink-0">+ {pesoFormatter.format(parseFloat(addon.price))}</span>
                                        </span>
                                    ))}
                                    {item.selections.drinks?.map(drink => (
                                        <span key={drink.id} className="block flex justify-between pr-4 sm:pr-0">
                                            <span className="truncate pr-2">• Drink: {drink.name}</span>
                                            <span className="shrink-0">+ {pesoFormatter.format(parseFloat(drink.price))}</span>
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
                            <span className="text-lg font-bold text-white">{pesoFormatter.format(parseFloat(item.total_price))}</span>
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