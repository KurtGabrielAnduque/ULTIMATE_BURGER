import React, { useState } from 'react';
import { Star, X, ImagePlus, MessageSquareHeart } from 'lucide-react';

function CommentModal({ closeModal }) {
    // State to track the star rating interaction
    const [rating, setRating] = useState(0);
    const [hoveredStar, setHoveredStar] = useState(0);
    const [reviewText, setReviewText] = useState("");

    return (
        <>
            <div className="fixed inset-0 bg-black/70 z-[100] flex items-center justify-center p-4 sm:p-6 backdrop-blur-sm animate-in fade-in duration-200">
                
                {/* Modal Container */}
                <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden flex flex-col relative animate-in zoom-in-95 duration-200">
                    
                    {/* Header Section */}
                    <div className="bg-zinc-950 p-6 sm:p-8 text-white flex justify-between items-center shrink-0">
                        <div>
                            <h2 className="text-2xl sm:text-3xl font-extrabold flex items-center gap-3">
                                <MessageSquareHeart className="text-red-500" size={32} />
                                Share Your Experience
                            </h2>
                            <p className="text-zinc-400 mt-2 text-sm sm:text-base">
                                Tell us what you loved about your meal!
                            </p>
                        </div>
                        
                        {/* Close Button (X) */}
                        <button 
                            onClick={closeModal}
                            className="p-2 bg-zinc-800/50 hover:bg-red-500 text-zinc-300 hover:text-white rounded-full transition-all duration-300 absolute top-6 right-6"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    {/* Form Content Section */}
                    <div className="p-6 sm:p-8 flex-grow overflow-y-auto bg-slate-50">
                        
                        {/* Interactive Star Rating */}
                        <div className="mb-8 flex flex-col items-center">
                            <p className="text-slate-600 font-bold mb-3 uppercase tracking-wider text-sm">Overall Rating</p>
                            <div className="flex gap-2">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                        key={star}
                                        type="button"
                                        onClick={() => setRating(star)}
                                        onMouseEnter={() => setHoveredStar(star)}
                                        onMouseLeave={() => setHoveredStar(0)}
                                        className="transition-transform hover:scale-110 focus:outline-none"
                                    >
                                        <Star 
                                            size={40} 
                                            className={`transition-colors duration-200 ${
                                                (hoveredStar || rating) >= star 
                                                ? "fill-yellow-400 text-yellow-400 drop-shadow-sm" 
                                                : "fill-slate-200 text-slate-300"
                                            }`} 
                                        />
                                    </button>
                                ))}
                            </div>
                            {/* Dynamic Rating Text */}
                            <p className="text-sm font-medium mt-3 h-5 text-red-500">
                                {rating === 1 && "Not Great"}
                                {rating === 2 && "Could be better"}
                                {rating === 3 && "It was Okay"}
                                {rating === 4 && "Really Good!"}
                                {rating === 5 && "Absolutely Delicious! 🤤"}
                            </p>
                        </div>

                        {/* Text Area */}
                        <div className="mb-6">
                            <label htmlFor="review" className="block text-slate-700 font-bold mb-2">
                                Write your review
                            </label>
                            <textarea
                                id="review"
                                rows="4"
                                value={reviewText}
                                onChange={(e) => setReviewText(e.target.value)}
                                placeholder="What did you order? How was the taste and service?"
                                className="w-full bg-white border border-slate-200 rounded-xl p-4 text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-shadow resize-none shadow-sm placeholder:text-slate-400"
                            ></textarea>
                        </div>

                        {/* Photo Upload (UI Placeholder) */}
                        <div className="mb-4">
                            <button className="flex items-center gap-2 px-4 py-3 bg-white border-2 border-dashed border-slate-300 rounded-xl text-slate-600 font-semibold hover:border-red-400 hover:text-red-500 hover:bg-red-50 transition-all w-full justify-center group">
                                <ImagePlus size={20} className="group-hover:scale-110 transition-transform" />
                                Add Food Photos
                            </button>
                        </div>

                    </div>

                    {/* Footer / Action Buttons */}
                    <div className="p-6 sm:p-8 bg-white border-t border-slate-100 flex flex-col sm:flex-row gap-4 shrink-0">
                        <button
                            onClick={closeModal}
                            className="w-full sm:w-1/3 bg-slate-100 text-slate-700 font-bold py-3 sm:py-4 rounded-xl hover:bg-slate-200 transition-colors order-2 sm:order-1"
                        >
                            Cancel
                        </button>
                        
                        <button
                            onClick={() => {
                                // Add your submit logic here later!
                                console.log("Submitted!", { rating, reviewText });
                                closeModal();
                            }}
                            disabled={rating === 0} // Prevent submission if no rating is given
                            className="w-full sm:w-2/3 bg-red-500 text-white font-bold py-3 sm:py-4 rounded-xl hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/30 hover:-translate-y-1 transition-all duration-300 disabled:bg-slate-300 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none order-1 sm:order-2"
                        >
                            Post Review
                        </button>
                    </div>

                </div>
            </div>
        </>
    );
}

export default CommentModal;