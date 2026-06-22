import React, { useState } from "react";
import CustomerNavbar from "../Components/CustomerNavbar";
import Footer from "../Components/Footer";
import Community from "../HomePage/Components/Community";


import ReviewIntro from "./Components/ReviewIntro";
import CommentSlider from "./Components/CommentSlider";
import ImageSlider from "./Components/ImageSlider";



function ReviewPage() {
  
  return (
    <div className="bg-zinc-950 min-h-screen flex flex-col">
      
      {/* Import the Header here*/}
      <CustomerNavbar />

      <main className="max-w-7xl mx-auto px-4 py-6 flex-grow w-full">

        {/* Review Top Part*/}
        <ReviewIntro/>

        {/* ── Review Carousel + Feedback CTA ────────────────────────────── */}
        <CommentSlider/>

        {/* ── Tagline strip ─────────────────────────────────────────────── */}
        <div className="mt-12 py-5 text-center">
          <h1 className="text-white text-5xl font-bold mb-8 border-t pt-10">
            Where the <span className="text-red-500"> comfort food </span> 
            meets the good times.
          </h1>
        </div>

        {/* ── Image Slider ──────────────────────────────────────────────── */}
        <ImageSlider/>

        
      </main>
      
      {/* Import Communit Component Here*/}
      <Community />

      {/* Import Footer Global Component here*/}
      <Footer />
    </div>
  );
}

export default ReviewPage;