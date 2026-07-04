import React from 'react';


import CustomerNavbar from '../Components/CustomerNavbar'; // Adjust path if needed
import IntroductionPart from './Components/IntroductionPart'; // Adjust path if needed
import Category from './Components/Category';
import Reviews from './Components/Reviews';
import Presentation from './Components/Presentation';
import Community from './Components/Community';
import Footer from '../Components/Footer';




export default function HomePage({ cartData }) {
  return (
    <>
      {/* Navigation Bar */}
      {/* NOTE: If you already put CustomerNavbar in App.jsx, you can remove it from here to avoid showing two navbars! */}
      <CustomerNavbar cartData={cartData} />

      <div className="bg-zinc-50 font-sans min-h-[calc(100vh-80px)] flex flex-col w-full">

        {/* 1. HERO SECTION */}
        <IntroductionPart />
        
        {/* 2. DISCOVER YOUR TASTE (Categories) */}
        <Category />

        {/* 3. REVIEWS SECTION */}
        <Reviews/>

        {/* 4. VIDEO PRESENTATION */}
        <Presentation />

        {/* 5. FACEBOOK CALL TO ACTION */}
        <Community />

        {/* 6. CONTACTS / FOOTER */}
        <Footer/>

      </div>
    </>
  );
}