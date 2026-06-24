import React from 'react'
import { Package, ChefHat, Receipt } from 'lucide-react';

function StatusTracker({ status }) {

    // Identify the keys of what to indicate base on the status of the order
    const steps = [
        { key: 'Pending', label: 'Order Placed', icon: <Receipt size={20} /> },
        { key: 'Preparing', label: 'Preparing', icon: <ChefHat size={20} /> },
        { key: 'Ready', label: 'Ready for Pickup', icon: <Package size={20} /> },
    ];

    // Determine current step index (0, 1, or 2)
    const currentIndex = steps.findIndex(s => s.key === status) >= 0 ? steps.findIndex(s => s.key === status) : 0;

    return (
        <div className="flex items-center justify-between relative mt-6 mb-8 px-2 sm:px-10">
            {/* Background connecting line */}
            <div className="absolute top-1/2 left-10 right-10 h-1 bg-zinc-800 -translate-y-1/2 z-0 hidden sm:block"></div>

            {/* Active connecting line */}
            <div
                className="absolute top-1/2 left-10 h-1 bg-red-500 -translate-y-1/2 z-0 hidden sm:block transition-all duration-500"
                style={{ width: currentIndex === 0 ? '0%' : currentIndex === 1 ? '50%' : 'calc(100% - 80px)' }}
            ></div>

            {steps.map((step, index) => {
                const isActive = index <= currentIndex;
                const isCurrent = index === currentIndex;

                return (
                    <div key={step.key} className="relative z-10 flex flex-col items-center gap-3">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center border-4 transition-colors duration-300 ${isActive ? 'bg-red-500 border-zinc-900 text-white' : 'bg-zinc-900 border-zinc-800 text-zinc-600'
                            } ${isCurrent ? 'ring-4 ring-red-500/20' : ''}`}>
                            {step.icon}
                        </div>
                        <span className={`text-xs sm:text-sm font-bold ${isActive ? 'text-white' : 'text-zinc-500'}`}>
                            {step.label}
                        </span>
                    </div>
                );
            })}
        </div>
    );
}

export default StatusTracker
