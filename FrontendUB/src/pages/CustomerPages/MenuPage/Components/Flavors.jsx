import React from 'react'
import { pesoFormatter } from '../../../../utils/ProjectUtilities'

function Flavors({detailedProduct, selectedFlavor, setSelectedFlavor}) {
    return (
        <div>
            <h3 className="font-bold text-slate-900 mb-3">Select Flavor</h3>
            <div className="flex flex-wrap gap-3">
                {detailedProduct.flavors.map((f) => (
                    <button
                        key={f.id}
                        onClick={() => setSelectedFlavor(f.id)}
                        className={`px-4 py-2 border rounded-md text-sm font-medium transition-all ${selectedFlavor === f.id
                            ? 'border-red-500 text-red-500 bg-red-50'
                            : 'border-slate-200 text-slate-600 hover:border-slate-300'
                            }`}
                    >
                        {f.name} {f.price > 0 && `(+${pesoFormatter.format(f.price)})`}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Flavors