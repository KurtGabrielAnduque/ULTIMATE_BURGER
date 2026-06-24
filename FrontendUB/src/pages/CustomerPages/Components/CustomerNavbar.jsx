import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, User, Menu, X, ClipboardCheck } from 'lucide-react';

import UBLOGO from '../../../assets/images/UBLOGO.jpg';

export default function CustomerNavbar() {
  // State to handle the mobile menu opening and closing
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // This hook tells us what page the user is currently on (e.g., '/menu')
  const location = useLocation();

  // Helper function to check if a link is active so we can make it red
  const isActive = (path) => location.pathname === path;

  // Array of our navigation links so we don't have to copy/paste HTML over and over
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Locations', path: '/location' },
    { name: 'Reviews', path: '/review' },
    { name: 'Contact Us', path: '/contactus' },
  ];

  return (
    // Updated to a premium dark background (zinc-950) with subtle dark borders
    <nav className="sticky top-0 z-50 bg-zinc-950 border-b border-zinc-800 shadow-md font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* 1. LOGO SECTION */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-3">
              {/* Replace the URL below with {UBLOGO} in your VS Code */}
              <img 
                src= {UBLOGO}
                className="h-10 w-10 object-cover rounded-md shadow-sm"
                alt="Ultimate Burger Logo"
              />
              
              {/* Updated text colors for dark mode readability */}
              <div className="flex flex-col justify-center">
                <span className="font-extrabold text-2xl text-white tracking-tight leading-none">Ultimate</span>
                <span className="font-bold text-xl text-red-500 leading-tight">Burger and Pizza</span>
              </div>
            </Link>
          </div>

          {/* 2. DESKTOP LINKS (Hidden on mobile) */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`p-3 rounded-lg text-sm font-semibold transition-colors duration-200 ${
                  isActive(link.path) 
                    ? 'text-white bg-zinc-800' 
                    : 'text-zinc-400 hover:text-white' // Subtle gray that turns bright white on hover
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* 3. ICONS SECTION (Cart & Account) */}
          <div className="flex items-center gap-4">
            
            {/* Account Icon */}
            <Link 
              to="/account" 
              className={`p-2 rounded-full transition-colors ${
                isActive('/account') 
                  ? 'bg-red-500/20 text-red-400' // Dark mode active state
                  : 'text-zinc-400 hover:bg-zinc-800 hover:text-white'
              }`}
            >
              <User size={24} />
            </Link>

            {/* Cart Icon with Notification Badge */}
            <Link 
              to="/mycart" 
              className={`relative p-2 rounded-full transition-colors ${
                isActive('/mycart') 
                  ? 'bg-red-500/20 text-red-400' 
                  : 'text-zinc-400 hover:bg-zinc-800 hover:text-white'
              }`}
            >
              <ShoppingCart size={24} />
              {/* Badge border matches the dark background */}
              <span className="absolute top-0 right-0 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full border-2 border-zinc-950">
                3
              </span>
            </Link>


            <Link 
              to='/customer-orders'
              className={`relative p-2 rounded-full transition-colors ${
                isActive('/customer-orders') 
                  ? 'bg-red-500/20 text-red-400' 
                  : 'text-zinc-400 hover:bg-zinc-800 hover:text-white'
              }`}
            >
              <ClipboardCheck size={24} />
              {/* Badge border matches the dark background */}
              <span className="absolute top-0 right-0 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full border-2 border-zinc-950">
                3
              </span>
            </Link>

            {/* this will only appear if the user haven't login yet*/}
            <Link
                to='/login-signup'
                className={`p-3 rounded-lg text-sm font-semibold transition-colors duration-200 ${
                  isActive('/login-signup') 
                    ? 'text-white bg-zinc-800' 
                    : 'text-zinc-400 hover:text-white' // Subtle gray that turns bright white on hover
                }`}
              >
                Login/Sign Up
              </Link>

            {/* Mobile Menu Hamburger Button (Hidden on Desktop) */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-zinc-400 hover:bg-zinc-800 hover:text-white rounded-md transition-colors"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* 4. MOBILE MENU DROPDOWN (Only visible if isMobileMenuOpen is true) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-zinc-950 border-t border-zinc-800 shadow-xl absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)} // Close menu when they click a link
                className={`block px-3 py-3 rounded-md text-base font-medium transition-colors ${
                  isActive(link.path)
                    ? 'bg-red-500/10 text-red-500'
                    : 'text-zinc-300 hover:bg-zinc-900 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}