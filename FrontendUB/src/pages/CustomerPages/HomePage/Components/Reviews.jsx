import React from 'react'
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

function Reviews() {
    // mock data
    const mockReviews = [
        { id: 1, name: 'Kurt Anduque', rating: 5, text: 'Best burger I have ever had in Quezon City! The patties are incredibly juicy.', date: '2 days ago' },
        { id: 2, name: 'Jhon Paul', rating: 5, text: 'Their cheese overload pizza is to die for. Fast delivery and food arrived hot.', date: '1 week ago' },
        { id: 3, name: 'Khent Chua', rating: 4, text: 'Great food, the crispy chicken sandwich is perfectly seasoned. Will order again.', date: '2 weeks ago' },
        { id: 4, name: 'Kurt Anduque', rating: 5, text: 'Affordable but tastes like premium dining. The secret sauce is absolute magic.', date: '1 month ago' },
    ];

    return (
        <>
            <div className="w-full py-20 bg-zinc-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-4xl font-extrabold text-slate-900 mb-2">Loved by Locals</h2>
                            <p className="text-slate-500">Don't just take our word for it.</p>
                        </div>
                        <Link to = '/review'>
                            <button className="text-red-500 font-bold hover:underline hidden sm:block">
                                View all reviews &rarr;
                            </button>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {mockReviews.map((review) => (
                            <div key={review.id} className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 flex flex-col">
                                <div className="flex text-yellow-400 mb-4">
                                    {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} className="fill-current" />)}
                                </div>
                                <p className="text-slate-600 flex-grow mb-6 italic">"{review.text}"</p>
                                <div className="flex items-center gap-3">
                                    <img
                                        src={`https://ui-avatars.com/api/?name=${review.name.replace(' ', '+')}&background=random`}
                                        alt={review.name}
                                        className="w-10 h-10 rounded-full"
                                    />
                                    <div>
                                        <p className="font-bold text-slate-900 text-sm">{review.name}</p>
                                        <p className="text-xs text-slate-400">{review.date}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Reviews