import React from 'react'
import { MapPin, Phone, Clock} from 'lucide-react';

function Footer() {
    return (
        <>
            <footer className="w-full bg-zinc-950 pt-20 pb-10 border-t-4 border-red-500 text-zinc-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                        {/* Brand Col */}
                        <div>
                            <h3 className="text-white text-2xl font-extrabold mb-6 tracking-tight">
                                Ultimate<span className="text-red-500">Burger</span>
                            </h3>
                            <p className="text-zinc-400 mb-6 leading-relaxed">
                                Serving the best hand-crafted burgers and pizzas since 2021. Your satisfaction is our absolute priority.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
                            <ul className="space-y-4">
                                <li><a href="/menu" className="hover:text-red-500 transition-colors">Order Now</a></li>
                                <li><a href="/location" className="hover:text-red-500 transition-colors">Find a Branch</a></li>
                                <li><a href="/review" className="hover:text-red-500 transition-colors">Customer Reviews</a></li>
                                <li><a href="/contactus" className="hover:text-red-500 transition-colors">Contact Us</a></li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <MapPin size={20} className="text-red-500 shrink-0 mt-1" />
                                    <span>33 T. Gener St., Corner K2nd, Brgy. Kamuning<br />Quezon City, Metro Manila</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Phone size={20} className="text-red-500 shrink-0" />
                                    <span>+63 932 589 0802</span>
                                </li>
                            </ul>
                        </div>

                        {/* Hours */}
                        <div>
                            <h4 className="text-white font-bold text-lg mb-6">Opening Hours</h4>
                            <ul className="space-y-4">
                                <li className="flex items-center justify-between border-b border-zinc-800 pb-2">
                                    <div className="flex items-center gap-2"><Clock size={16} /> Mon - Fri</div>
                                    <span>10:00 AM - 10:00 PM</span>
                                </li>
                                <li className="flex items-center justify-between border-b border-zinc-800 pb-2">
                                    <div className="flex items-center gap-2"><Clock size={16} /> Saturday</div>
                                    <span>10:00 AM - 11:00 PM</span>
                                </li>
                                <li className="flex items-center justify-between border-b border-zinc-800 pb-2 text-red-400">
                                    <div className="flex items-center gap-2"><Clock size={16} /> Sunday</div>
                                    <span>Closed</span>
                                </li>
                            </ul>
                        </div>

                    </div>

                    {/* Copyright */}
                    <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row items-center justify-between">
                        <p className="text-zinc-500 text-sm text-center md:text-left mb-4 md:mb-0">
                            &copy; {new Date().getFullYear()} Ultimate Burger and Pizza. All rights reserved.
                        </p>
                        <div className="flex items-center gap-4 text-sm text-zinc-500">
                            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer