import React from 'react'
import { Star} from "lucide-react";

function ReviewIntro() {
    return (
        <>
            {/* ── Hero ──────────────────────────────────────────────────────── */}
            <section className="max-w-7xl mx-auto px-6 py-20 text-center">
                <span className="text-red-500 font-semibold uppercase tracking-widest text-sm">
                    Customer Reviews
                </span>

                <h1 className="text-5xl md:text-6xl font-bold text-white mt-4 leading-tight">
                    What Our Customers Say
                </h1>

                <p className="text-zinc-400 mt-4 max-w-2xl mx-auto text-base leading-relaxed">
                    From juicy burgers to cheesy pizzas and our famous Pizza Burger,
                    customers keep coming back for more.
                </p>

                <div className="flex justify-center items-center gap-1 mt-6">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} size={22} className="fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-white font-semibold text-lg ml-3">
                        4.9 / 5 Rating
                    </span>
                </div>
            </section>

            {/* ── Stats ─────────────────────────────────────────────────────── */}
            <section className="max-w-5xl mx-auto px-6 mb-14">
                <div className="grid md:grid-cols-3 gap-4">
                    {[
                        { value: "500+", label: "Happy Customers" },
                        { value: "4.9", label: "Average Rating" },
                        { value: "95%", label: "Would Recommend" },
                    ].map((stat) => (
                        <div
                            key={stat.label}
                            className="bg-zinc-900 rounded-2xl p-6 text-center border border-zinc-800"
                        >
                            <h2 className="text-4xl font-bold text-red-500">{stat.value}</h2>
                            <p className="text-zinc-400 mt-2 text-sm">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default ReviewIntro