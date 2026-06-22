import React from 'react'
import SecondUB from '../../../../assets/images/UB-payatas-branch.png'
import { MapPin, Phone, Clock } from 'lucide-react';

function SubBranchContact() {
    return (
        <>
            <div className='flex flex-col border-t border-white/50 pt-12'>
                <h1 className="text-white text-[26px] md:text-[4vw] xl:text-[3.5vw] 2xl:text-[3.5vw] mb-4 md:mb-8 leading-[1.2] text-center text-balance">
                    Visit our <span className='text-red-500'>Sub</span> Branch as well
                </h1>

                <div className="max-w-7xl mx-auto px-4 pb-12 w-full flex-grow">
                    {/* Information & Map Grid */}
                    <div className="mt-1 grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl mb-12">

                        {/* LEFT: Store Details */}
                        <div className="bg-zinc-900 flex flex-col justify-center">
                            <img src={SecondUB} className='w-full h-full border-0 hover:scale-105 transition-transform duration-500 object-cover' />
                        </div>

                        {/* RIGHT: Google Maps Embed */}
                        {/* min-h-[400px] ensures the map doesn't shrink to 0 height on mobile */}
                        <div className="bg-zinc-950 min-h-[400px] lg:min-h-full">
                            <iframe
                                src="https://maps.google.com/maps?q=14.6984328,121.0952116&z=16&output=embed"
                                loading="lazy"
                                className="w-full h-full border-0 opacity-80"
                                /* Note: grayscale invert opacity-80 gives the map a cool dark mode look! */
                                allowFullScreen=""
                                aria-hidden="false"
                                tabIndex="0"
                            ></iframe>

                        </div>

                    </div>


                    <div className="grid md:grid-cols-3 gap-6">

                        {/* Address */}
                        <div className="flex flex-col bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-red-500 transition-all duration-300">

                            
                            <div className='flex flex-row  items-center gap-2'>
                                <div className="w-fit p-3 bg-red-500/10 rounded-xl flex mb-3">
                                    <MapPin className="text-red-500" size={24} />
                                </div>
                                <h3 className="text-xl text-zinc-200 font-bold mb-1">Address</h3>
                            </div>

                            <div>
                                <p className="text-zinc-400 leading-relaxed">43 Ilang-ilang St.<br />Brgy. Payatas-A, Quezon City</p>
                            </div>

                        </div>

                        {/* Hours */}
                        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-red-500 transition-all duration-300">

                           
                            <div className='flex flex-row  items-center gap-2'>
                                <div className="w-fit p-3 bg-red-500/10 rounded-xl flex mb-3">
                                    <Clock className="text-red-500" size={24} />
                                </div>
                                <h3 className="text-xl text-zinc-200 font-bold mb-1">Store Hours</h3>
                            </div>

                            <div>
                                <p className="text-zinc-400 leading-relaxed">Mon - Fri: 10:00 AM - 10:00 PM<br />Sat: 10:00 AM - 11:00 PM</p>
                            </div>

                        </div>

                        {/* Contact */}
                        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-red-500 transition-all duration-300">

                            <div className='flex flex-row  items-center gap-2'>
                                <div className="w-fit p-3 bg-red-500/10 rounded-xl flex mb-3">
                                    <Phone className="text-red-500" size={24} />
                                </div>
                                <h3 className="text-xl text-zinc-200 font-bold mb-1">Contact Us</h3>
                            </div>

                            <div>
                                <p className="text-zinc-400 leading-relaxed">Phone: +63 932 589 0802 <br/>gmail: sylvia.sales2018@gmail.com</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default SubBranchContact