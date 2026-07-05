import React, { useState } from "react";
import CustomerNavbar from "../Components/CustomerNavbar";
import Footer from "../Components/Footer";
import Community from "../HomePage/Components/Community";


import ReviewIntro from "./Components/ReviewIntro";
import CommentSlider from "./Components/CommentSlider";
import ImageSlider from "./Components/ImageSlider";



{/*
    Other features to complete:
    - shop rating computation average all the ratings of user and turn into decimal type and 1 decimal place
    - let the user upload image in their comment
    - if user press one comment in the slider it should turn into modal showing the complete comment aswell as the uploaded image.
    */}

function ReviewPage({ cartData, reviewsData, loadReview }) {
  
  return (
    <div className="bg-zinc-950 min-h-screen flex flex-col">
      
      {/* Import the Header here*/}
      <CustomerNavbar  cartData={cartData} />

      <main className="max-w-7xl mx-auto px-4 py-6 flex-grow w-full">

        {/* Review Top Part*/}
        <ReviewIntro/>

        {/* ── Review Carousel + Feedback CTA ────────────────────────────── */}
        <CommentSlider 
          reviewsData = {reviewsData}
          loadReview = {loadReview}
        
        />

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