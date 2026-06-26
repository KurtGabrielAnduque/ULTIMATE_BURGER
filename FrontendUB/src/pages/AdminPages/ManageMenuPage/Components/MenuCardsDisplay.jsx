import React from 'react'
import { PencilLine } from 'lucide-react';
import { Star } from 'lucide-react';

import { useState } from 'react';

import MenuModal from './MenuModal';

function MenuCardsDisplay({ menuToDisplay }) {
    // Here we are going to get the state if the user select a product or not
    // since we are going to create a modal base on the details of every product
    // therefore instead of true or false state we use the id of product to check if that specific product is opened
    const [selectProductDetails, setSelectProductDetails,] = useState(null);

    return (
        <>
            {menuToDisplay.map(menu => (
                <div
                    key={menu.productId}
                    className="bg-white border border-zinc-200 rounded-xl p-4 hover:border-orange-300 transition-all shadow-sm"
                >
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

                        {/* Left Side */}
                        <div className="flex flex-1 items-center gap-5">

                            {/* Product Image */}
                            <img
                                src={menu.image}
                                alt={menu.name}
                                className="w-20 h-20 lg:w-24 lg:h-24 rounded-xl object-cover border border-slate-200 bg-slate-100 shrink-0"
                            />

                            {/* Product Info */}
                            <div className="flex-1 min-w-0">
                                <h3 className="font-semibold text-lg text-slate-800 truncate">
                                    {menu.name}
                                </h3>

                                <p className="text-sm text-slate-500">
                                    {menu.category}
                                </p>
                            </div>

                            {/* Rating */}
                            <div className="hidden sm:flex flex-col items-start border-l border-slate-200 pl-5">
                                <div className="flex items-center gap-1 font-semibold text-slate-800">
                                    <Star
                                        size={17}
                                        className="fill-yellow-400 text-yellow-400"
                                    />
                                    {menu.rating.stars}
                                </div>

                                <p className="text-xs text-slate-500">
                                    {menu.rating.count} Reviews
                                </p>
                            </div>

                        </div>

                        {/* Right Side */}
                        <button
                            onClick={() => setSelectProductDetails(menu)}
                            className="flex items-center justify-center gap-2 bg-zinc-100 hover:bg-zinc-300 text-black font-semibold px-5 py-2.5 rounded-lg transition-all shadow-sm whitespace-nowrap"
                        >
                            <PencilLine size={17} />
                            Edit Menu
                        </button>

                    </div>
                </div>
            ))}
            {/* make the modal pressed outside */}
            {/*check details of product if modal is pressed*/}
            {selectProductDetails && (
                <MenuModal
                    product={selectProductDetails}
                    closeModal={() => setSelectProductDetails(null)}
                />
            )}

        </>
    )
}

export default MenuCardsDisplay