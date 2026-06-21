import React from 'react'
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';

import BurgerHero from '../../../../assets/burger-hero.png'

function IntroductionPart() {
    return (
        <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* LEFT SIDE: Text & Buttons */}
                    <div className="flex flex-col justify-center text-center lg:text-left order-2 lg:order-1">



                        {/* Main Headline */}
                        <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
                            Savor the <br className="hidden lg:block" />
                            <span className="text-red-500 relative whitespace-nowrap">
                                Ultimate
                                {/* Decorative underline effect */}
                                <svg className="absolute -bottom-2 left-0 w-full h-3 text-red-200 -z-10" viewBox="0 0 100 20" preserveAspectRatio="none">
                                    <path d="M0 10 Q 50 20 100 10" fill="transparent" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
                                </svg>
                            </span>
                            <br /> Taste Experience.
                        </h1>

                        {/* Subheadline */}
                        <p className="text-lg lg:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            Hand-crafted burgers made with 100% pure beef, fresh locally-sourced ingredients, and our secret signature sauce. Delivered hot to your door or ready for pickup.
                        </p>

                        {/* Call to Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link
                                to="/menu"
                                className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-red-500 hover:bg-red-600 text-white font-bold rounded-full transition-all duration-200 transform hover:-translate-y-1 shadow-lg hover:shadow-red-500/30 text-lg"
                            >
                                Order Now <ArrowRight size={20} />
                            </Link>

                            <Link
                                to="/location"
                                className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-white border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 font-bold rounded-full transition-all duration-200 text-lg"
                            >
                                Find a Branch
                            </Link>
                        </div>

                        {/* Social Proof / Stats */}
                        <div className="mt-10 pt-8 border-t border-slate-200 flex items-center justify-center lg:justify-start gap-8">
                            <div>
                                <p className="text-3xl font-extrabold text-slate-900">5k+</p>
                                <p className="text-sm font-medium text-slate-500">Happy Customers</p>
                            </div>
                            <div className="w-px h-12 bg-slate-200"></div>
                            <div>
                                <p className="text-3xl font-extrabold text-slate-900">4.9</p>
                                <div className="flex items-center gap-1 text-yellow-400">
                                    <Star size={16} className="fill-current" />
                                    <Star size={16} className="fill-current" />
                                    <Star size={16} className="fill-current" />
                                    <Star size={16} className="fill-current" />
                                    <Star size={16} className="fill-current" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE: Hero Image */}
                    <div className="relative order-1 lg:order-2">
                        {/* Background Blob/Shape to make the image pop */}
                        <div className="absolute inset-0 bg-red-100 rounded-full blur-3xl opacity-50 transform scale-90 translate-y-10"></div>

                        {/* 
                  The actual Image. 
                  Right now it uses a gorgeous placeholder from Unsplash.
                  When you are ready, you can change the src to your {heroImg} !
                */}
                        <img
                            src={BurgerHero}
                            alt="Delicious Ultimate Burger"
                            className="relative z-10 w-full h-auto max-w-lg mx-auto transform hover:scale-105 transition-transform duration-500 drop-shadow-2xl rounded-2xl object-cover aspect-square lg:aspect-auto lg:h-[600px]"
                        />
                    </div>



                </div>
            </div>
        </>
    )
}

export default IntroductionPart