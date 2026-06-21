import React from 'react'
import { Link } from 'react-router-dom';

function Category() {
    // 1. Added a leading '/' to all image paths!
    const categories = [
        { name: 'Burgers', image: "/images/burger-category.png", color: 'bg-orange-100 text-orange-600' },
        { name: 'Sides', image: "/images/sides-category.png", color: 'bg-yellow-100 text-yellow-600' },
        { name: 'Pizza', image: "/images/pizza-category.jpg", color: 'bg-red-100 text-red-600' },
        { name: 'Combos', image: "/images/combo-category.png", color: 'bg-blue-100 text-blue-600' },
    ];

    return (
        <>
            <div className="w-full py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-6xl font-extrabold text-slate-900 mb-4 border-b-2 pb-5 border-red-500">Discover Your Taste</h2>
                        <p className="text-slate-500 max-w-3xl font-bold mx-auto">Explore our wide variety of mouth-watering options made fresh daily.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {categories.map((cat, index) => (
                            <div
                                key={index}
                                className="
                                            group
                                            bg-zinc-50
                                            rounded-3xl
                                            p-6
                                            border border-zinc-200
                                            hover:bg-white
                                            hover:shadow-xl
                                            hover:-translate-y-2
                                            transition-all
                                            duration-300
                                            cursor-pointer
                                            flex
                                            flex-col
                                            items-center
                                        ">
                                <div
                                    className={`
                                                ${cat.color}
                                                w-48
                                                h-48
                                                rounded-lg
                                                flex
                                                items-center
                                                justify-center
                                                overflow-hidden
                                                mb-6
                                                transition-transform
                                                duration-300
                                                group-hover:scale-110
                                            `}>
                                    <img src={cat.image} alt={cat.name} className="w-48 h-48 object-cover rounded-lg"/>

                                </div>

                                <h3 className="text-2xl font-bold text-slate-800">
                                    {cat.name}
                                </h3>
                            </div>
                        ))}
                    </div>

                    <div className='flex justify-center mt-10'>
                        <Link to="/menu"
                                className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-red-500 hover:bg-red-600 text-white text-3xl font-medium rounded-full transition-all duration-200 transform hover:-translate-y-1 shadow-lg hover:shadow-red-500/30"
                            >
                                Check Our Menu 
                        </Link>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Category