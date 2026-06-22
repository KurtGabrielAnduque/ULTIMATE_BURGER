import React from 'react'
import { ReviewData } from '../ReviewsData';
import { Star, MessageSquarePlus } from "lucide-react";
import { useState } from 'react';
import CommentModal from './CommentModal';

const marqueeStyle = `
  @keyframes marquee {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .marquee-track {
    display: flex;
    width: max-content;
    animation: marquee 120s linear infinite;
  }
  .marquee-track:hover {
    animation-play-state: paused;
  }
`;


function CommentSlider() {
    const [onComment, setOnComment] = useState(false);

    return (
        <>
            <style>{marqueeStyle}</style>

            <section className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row border border-zinc-800 rounded-2xl overflow-hidden">

                    {/* Left: auto-scrolling review strip */}
                    <div className="flex-1 relative overflow-hidden bg-zinc-900 py-10">
                        {/* Fade edges so cards fade in/out cleanly */}
                        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 z-10
                              bg-gradient-to-r from-zinc-900 to-transparent" />
                        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 z-10
                              bg-gradient-to-l from-zinc-900 to-transparent" />

                        {/* Duplicate ReviewData so the loop is seamless */}
                        <div className="marquee-track gap-5 px-4">
                            {[...ReviewData, ...ReviewData].map((review, idx) => (
                                <div
                                    key={idx}
                                    className="flex-shrink-0 w-72 bg-zinc-800 border border-zinc-700
                               rounded-xl p-5 mx-2"
                                >
                                    <div className="flex gap-0.5 mb-3">
                                        {[...Array(review.rating)].map((_, i) => (
                                            <Star key={i} size={13} className="fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                    <p className="text-zinc-300 text-sm leading-relaxed mb-4 line-clamp-3">
                                        "{review.text}"
                                    </p>
                                    <div className="border-t border-zinc-700 pt-3">
                                        <p className="text-white text-sm font-semibold">{review.name}</p>
                                        <p className="text-zinc-500 text-xs mt-0.5">{review.date}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: leave a review CTA */}
                    <div className="lg:w-72 shrink-0 bg-zinc-950 border-t lg:border-t-0 lg:border-l
                            border-zinc-800 p-8 flex flex-col justify-center gap-6">
                        <p className="text-white text-lg font-medium leading-snug">
                            Your opinion matters. Help us improve by leaving a review!
                        </p>
                        <button onClick={() => setOnComment(true)}
                            className="w-full border border-zinc-600 text-white py-3 px-5 rounded-xl
                           hover:border-red-500 hover:text-red-400 transition-all duration-300
                           flex items-center justify-center gap-2 font-medium text-sm"
                        >
                            <MessageSquarePlus size={17} />
                            Leave Feedback
                        </button>

                        {/* Create Modal for comment after pressing button*/}
                        {/*Modal for user to commet theier reviews*/}
                        {onComment && (
                            <CommentModal
                                closeModal={() => setOnComment(false)}
                            />
                        )}
                    </div>

                </div>
            </section>
        </>
    )
}

export default CommentSlider