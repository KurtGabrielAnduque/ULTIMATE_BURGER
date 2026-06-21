import React from 'react'
import { Play, ChevronRight} from 'lucide-react';

function Presentation() {
    return (
        <>
            <div className="w-full py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        {/* Text Side */}
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-600 font-semibold text-sm mb-6">
                                Behind the Scenes
                            </div>
                            <h2 className="text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
                                Crafted with passion, <br /> served with pride.
                            </h2>
                            <p className="text-lg text-slate-600 mb-6">
                                Every morning, our kitchen comes alive. We source only the freshest local ingredients, hand-press our pure beef patties, and bake our signature buns to perfection.
                            </p>
                            <p className="text-lg text-slate-600 mb-8">
                                Watch our culinary team in action and see exactly what goes into making the Ultimate Burger experience.
                            </p>
                            <button className="flex items-center gap-2 text-slate-900 font-bold hover:text-red-500 transition-colors">
                                Read our full story <ChevronRight size={20} />
                            </button>
                        </div>

                        {/* Video Side (Fake Video Player) */}
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer aspect-video bg-zinc-900">
                            {/* Background Image Placeholder */}
                            <img
                                src="https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Kitchen Preparation"
                                className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-300"
                            />
                            {/* Play Button Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <Play size={32} className="text-white ml-1 fill-current" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Presentation