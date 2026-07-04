import React from 'react'

function Sizes({detailedProduct, setSelectedSize, selectedSize}) {
    return (
        <div>
            <h3 className="font-bold text-slate-900 mb-3">Select Size</h3>
            <div className="flex flex-wrap gap-3">
                {detailedProduct.sizes.map((s) => (
                    <button
                        key={s.id}
                        onClick={() => setSelectedSize(s.id)}
                        className={`px-4 py-2 border rounded-md text-sm font-medium transition-all ${selectedSize === s.id
                            ? 'border-red-500 text-red-500 bg-red-50'
                            : 'border-slate-200 text-slate-600 hover:border-slate-300'
                            }`}
                    >
                        {s.name}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Sizes