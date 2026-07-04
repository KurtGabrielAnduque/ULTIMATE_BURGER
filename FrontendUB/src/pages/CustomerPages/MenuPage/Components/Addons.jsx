import React from 'react'
import { pesoFormatter } from '../../../../utils/ProjectUtilities'


function Addons({detailedProduct, selectedAddOns, toggleAddOn, toggleSauce, selectedSauce}) {
    return (
        <div>
            <h3 className="font-bold text-slate-900 mb-3">Add-ons (Optional)</h3>
            <div className="space-y-2">
                {detailedProduct.addons.map((addon) => (
                    <div key={addon.id}>
                        <label className="flex items-center justify-between p-3 border border-slate-100 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors">
                            <div className="flex items-center gap-3">
                                <input
                                    type="checkbox"
                                    checked={!!selectedAddOns[addon.id]} // double flip since the initial mapping will make the selectedAddons undefined and we need to avoid it
                                    onChange={() => toggleAddOn(addon.id)}
                                    className="w-5 h-5 text-red-500 rounded border-slate-300 focus:ring-red-500"
                                />
                                <span className="font-medium text-slate-700">{addon.name}</span>
                            </div>
                            <span className="text-slate-500 font-medium">+{pesoFormatter.format(addon.price)}</span>
                        </label>

                        {addon.sauces?.length > 0 && selectedAddOns[addon.id] && (
                            <div className="ml-10 mt-2 space-y-2 p-3 bg-slate-50 rounded-lg border border-slate-100">
                                <p className="text-xs font-bold text-slate-500 uppercase">Choose your sauce:</p>
                                {addon.sauces.map((sauce) => (
                                    <label key={sauce.id} className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
                                        <input
                                            type="radio"
                                            name={`sauce-${addon.id}`}
                                            className="text-red-500 focus:ring-red-500"
                                            checked={selectedSauce[addon.id] === sauce.id}
                                            onChange={() => toggleSauce(addon.id, sauce.id)}
                                        />
                                        {sauce.name}
                                    </label>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Addons