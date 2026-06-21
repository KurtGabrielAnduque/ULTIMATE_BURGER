import React from 'react'

function Community() {
    return (
        // 1. Changed to a premium dark background to match your footer
        <div className="w-full bg-zinc-900 py-20 border-t border-zinc-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* 2. Responsive Flexbox: Stack on mobile (flex-col), side-by-side on desktop (lg:flex-row) */}
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    
                    {/* Left Side: Image */}
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                        {/* Added a subtle tilt and shadow to make the image look dynamic and premium */}
                        <img 
                            src="/images/facebook-page.png" 
                            alt="Ultimate Burger Facebook Community"
                            className="w-full max-w-[800px] object-contain rounded-2xl shadow-2xl -rotate-2 hover:rotate-0 transition-transform duration-500 border-4 border-zinc-800" 
                        />
                    </div>

                    {/* Right Side: Text */}
                    {/* Text centers on mobile, aligns left on desktop */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        
                        
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
                            Join the Ultimate <br className="hidden lg:block" /> Community
                        </h2>
                        
                        <p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto lg:mx-0">
                            Follow us on Facebook for exclusive secret menu drops, daily promos, and to share your amazing food photos with us!
                        </p>
                        
                        {/* 3. The Button: This is where we use the Facebook Blue to draw the eye! */}
                        <a
                            href="https://www.facebook.com/profile.php?id=100090151506557"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center gap-3 bg-blue-600 text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg shadow-blue-600/30 hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-1 transition-all duration-300"
                        >
                            {/* Raw Facebook SVG Icon */}
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="24" 
                                height="24" 
                                viewBox="0 0 24 24" 
                                fill="currentColor" 
                                stroke="none" 
                                className="w-6 h-6"
                            >
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                            Visit our Facebook Page
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Community