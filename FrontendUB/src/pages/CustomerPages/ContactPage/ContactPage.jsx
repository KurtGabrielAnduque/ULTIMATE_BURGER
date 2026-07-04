import React from 'react'
import CustomerNavbar from '../Components/CustomerNavbar'
import Footer from '../Components/Footer'
import { MapPin, Phone, Mail, Send } from 'lucide-react';

function ContactPage({cartData}) {
  return (
    <div className='bg-zinc-950 flex flex-col min-h-screen font-sans'>

      {/* Import the Header */}
      <CustomerNavbar cartData={cartData}/>

      <div className='max-w-7xl mx-auto px-4 py-12 md:py-20 flex-grow w-full'>

        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className='text-4xl md:text-5xl lg:text-6xl text-white font-extrabold mb-6 leading-tight'>
            How can we <span className="text-red-500">help</span> you today?
          </h1>
          <p className='text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto'>
            Our dedicated customer support team is just a message or call away. We're always ready to assist you.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className='grid lg:grid-cols-2 gap-12 lg:gap-20 items-start'>

          {/* LEFT COLUMN: Contact Information */}
          <div className='flex flex-col gap-8 bg-zinc-900 border border-zinc-800 rounded-2xl justify-center p-12'>

            {/* Email Card */}
            <div className='flex items-start gap-6 group'>
              <div className="w-fit p-4 bg-zinc-900 border border-zinc-800 rounded-2xl group-hover:border-red-500/50 transition-colors duration-300">
                <Mail className="text-red-500" size={28} />
              </div>
              <div className="pt-2">
                <h3 className="text-2xl text-white font-bold mb-2">Email Us</h3>
                <p className="text-zinc-400 text-lg">sylvia.sales2018@gmail.com</p>
              </div>
            </div>

            {/* Phone Card */}
            <div className='flex items-start gap-6 group'>
              <div className="w-fit p-4 bg-zinc-900 border border-zinc-800 rounded-2xl group-hover:border-red-500/50 transition-colors duration-300">
                <Phone className="text-red-500" size={28} />
              </div>
              <div className="pt-2">
                <h3 className="text-2xl text-white font-bold mb-2">Call Us</h3>
                <p className="text-zinc-400 text-lg">+63 932 589 0802</p>
              </div>
            </div>

            {/* Location Card */}
            <div className='flex items-start gap-6 group'>
              <div className="w-fit p-4 bg-zinc-900 border border-zinc-800 rounded-2xl group-hover:border-red-500/50 transition-colors duration-300">
                <MapPin className="text-red-500" size={28} />
              </div>
              <div className="pt-2">
                <h3 className="text-2xl text-white font-bold mb-2">Visit Us</h3>
                <p className="text-zinc-400 text-lg">43 Ilang-ilang St.<br />Brgy. Payatas-A, Quezon City</p>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Contact Form */}
          <div className='bg-zinc-900 border border-zinc-800 p-8 sm:p-10 rounded-3xl shadow-2xl'>
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>

              {/* Name Row */}
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                <div className='flex flex-col gap-2'>
                  <label className="text-zinc-300 font-medium ml-1">First Name</label>
                  <input
                    type="text"
                    placeholder='Juan'
                    className='bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 rounded-xl px-4 py-3 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all'
                  />
                </div>
                <div className='flex flex-col gap-2'>
                  <label className="text-zinc-300 font-medium ml-1">Last Name</label>
                  <input
                    type="text"
                    placeholder='Dela Cruz'
                    className='bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 rounded-xl px-4 py-3 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all'
                  />
                </div>
              </div>

              {/* Email */}
              <div className='flex flex-col gap-2'>
                <label className="text-zinc-300 font-medium ml-1">Email Address</label>
                <input
                  type="email"
                  placeholder='juan@example.com'
                  className='w-full bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 rounded-xl px-4 py-3 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all'
                />
              </div>

              {/* Phone with +63 Prefix */}
              <div className='flex flex-col gap-2'>
                <label className="text-zinc-300 font-medium ml-1">Phone Number</label>
                <div className='flex flex-row'>
                  <div className='flex items-center justify-center bg-zinc-800 border border-zinc-700 border-r-0 text-zinc-300 font-bold px-4 rounded-l-xl'>
                    +63
                  </div>
                  <input
                    type="tel"
                    placeholder='912 345 6789'
                    className='w-full bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 rounded-r-xl px-4 py-3 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all'
                  />
                </div>
              </div>

              {/* Message Textarea */}
              <div className='flex flex-col gap-2'>
                <label className="text-zinc-300 font-medium ml-1">Message</label>
                <textarea
                  rows="4"
                  placeholder="How can we help you?"
                  className='w-full bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 rounded-xl px-4 py-3 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all resize-none'
                ></textarea>
              </div>

              {/* Submit Button */}
              <button className="w-full mt-2 flex items-center justify-center gap-2 bg-red-500 text-white font-bold text-lg py-4 rounded-xl hover:bg-red-600 hover:-translate-y-1 hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300">
                <Send size={20} />
                Send Message
              </button>

            </form>
          </div>
        </div>

      </div>

      {/* Import the footer */}
      <Footer />

    </div>
  )
}

export default ContactPage