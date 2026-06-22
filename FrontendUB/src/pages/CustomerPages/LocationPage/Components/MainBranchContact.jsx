import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock } from 'lucide-react'; 

function MainBranchContact() {
  return (
    <>
        <div className="max-w-7xl mx-auto px-4 py-12 w-full flex-grow">
          {/* Information & Map Grid */}
          <div className="mt-5 grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl">
            
            {/* LEFT: Store Details */}
            <div className="bg-zinc-900 p-8 md:p-12 flex flex-col justify-center">
              <h2 className='text-white text-3xl font-extrabold pb-4 border-b border-zinc-700 mb-8'>
                MAIN BRANCH
              </h2>

              <div className="space-y-8 pb-8">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-500/10 rounded-xl">
                    <MapPin className="text-red-500" size={24} />
                  </div>
                  <div>
                    <h3 className="text-zinc-200 font-bold text-lg mb-1">Address</h3>
                    <p className="text-zinc-400 leading-relaxed">33 T. Gener St., Corner K2nd<br />Brgy. Kamuning, Quezon City</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-500/10 rounded-xl">
                    <Clock className="text-red-500" size={24} />
                  </div>
                  <div>
                    <h3 className="text-zinc-200 font-bold text-lg mb-1">Store Hours</h3>
                    <p className="text-zinc-400 leading-relaxed">Mon - Fri: 10:00 AM - 10:00 PM<br />Sat: 10:00 AM - 11:00 PM</p>
                  </div>
                </div>

                {/* Contact */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-500/10 rounded-xl">
                    <Phone className="text-red-500" size={24} />
                  </div>
                  <div>
                    <h3 className="text-zinc-200 font-bold text-lg mb-1">Contact Us</h3>
                    <p className="text-zinc-400 leading-relaxed">Phone: +63 932 589 0802 <br/>gmail: sylvia.sales2018@gmail.com</p>
                  </div>
                </div>
              </div>

              {/*contact button*/}
              <div className='flex flex-row justify-center'>
                  <Link to = "/contactus">
                    <button className='text-2xl bg-red-500 text-white py-3 px-8 rounded-xl hover:-translate-y-1 transition-all cursor-pointer'> 
                      Contact for Enquiries
                    </button>
                  </Link>
              </div>
            </div>

            {/* RIGHT: Google Maps Embed */}
            {/* min-h-[400px] ensures the map doesn't shrink to 0 height on mobile */}
            <div className="bg-zinc-950 min-h-[400px] lg:min-h-full">
              <iframe
                src="https://maps.google.com/maps?q=14.6271371,121.0366218&z=16&output=embed"
                loading="lazy"
                className="w-full h-full border-0 " 
                /* Note: grayscale invert opacity-80 gives the map a cool dark mode look! */
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>

          </div>
        </div>
    </>
  )
}

export default MainBranchContact