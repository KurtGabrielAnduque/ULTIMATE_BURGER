import React from 'react'
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from 'react';

// Load all the images here
const GALLERY_IMAGES = [
    { src: "/images/Memories/MemoryImage1.jpg"},
    { src: "/images/Memories/MemoryImage2.jpg"},
    { src: "/images/Memories/MemoryImage3.jpg"},
    { src: "/images/Memories/MemoryImage4.jpg"},
    { src: "/images/Memories/MemoryImage5.jpg"},
    { src: "/images/Memories/MemoryImage6.jpg"},
    { src: "/images/Memories/MemoryImage7.jpg"},
    { src: "/images/Memories/MemoryImage8.jpg"},
    { src: "/images/Memories/MemoryImage9.jpg"},
    { src: "/images/Memories/MemoryImage10.jpg"},
    { src: "/images/Memories/MemoryImage11.png"},
];

function ImageSlider() {
    const [currentImg, setCurrentImg] = useState(0);
    const total = GALLERY_IMAGES.length;

    const prev = () => setCurrentImg((p) => (p - 1 + total) % total);
    const next = () => setCurrentImg((p) => (p + 1) % total);

    return (
        <>
            <section className="max-w-7xl mx-auto px-6 pb-20">
                <div
                    // CHANGED: Removed inline style and added h-[400px] md:h-[600px] for a perfectly stable container
                    className="relative rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800
                       flex items-center justify-center h-[400px] md:h-[600px]"
                >
                    
                  <img
                    src={GALLERY_IMAGES[currentImg].src}
                    // CHANGED: object-cover is now object-contain!
                    // Added p-4 (padding) so the image doesn't touch the absolute edge of the box
                    className="w-full h-full object-contain absolute inset-0 p-4"
                  />
                  
                    {/* Prev / Next buttons */}
                    <button
                        onClick={prev}
                        aria-label="Previous image"
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full
                         bg-zinc-800 border border-zinc-700 flex items-center justify-center
                         text-white hover:bg-red-500 hover:border-red-500 transition-all z-20"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button
                        onClick={next}
                        aria-label="Next image"
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full
                         bg-zinc-800 border border-zinc-700 flex items-center justify-center
                         text-white hover:bg-red-500 hover:border-red-500 transition-all z-20"
                    >
                        <ChevronRight size={20} />
                    </button>

                    {/* Dot indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                        {GALLERY_IMAGES.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentImg(i)}
                                aria-label={`Go to image ${i + 1}`}
                                className={`h-2 rounded-full transition-all duration-300 ${i === currentImg
                                    ? "bg-red-500 w-5"
                                    : "bg-zinc-600 w-2 hover:bg-zinc-400"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default ImageSlider