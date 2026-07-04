import React from 'react'
import { pesoFormatter } from '../../../../utils/ProjectUtilities'

function Drinks({detailedProduct, selectedDrinks, toggleDrink}) {
    return (
        <div>
            <h3 className="font-bold text-slate-900 mb-3">Add a Drink</h3>
            <div className="space-y-2">
                {detailedProduct.drinks.map((drink) => (
                    <label key={drink.id} className="flex items-center justify-between p-3 border border-slate-100 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors">
                        <div className="flex items-center gap-3">
                            <input
                                type="checkbox"
                                checked={!!selectedDrinks[drink.id]}
                                onChange={() => toggleDrink(drink.id)}
                                className="w-5 h-5 text-red-500 rounded border-slate-300 focus:ring-red-500"
                            />
                            <span className="font-medium text-slate-700">{drink.name}</span>
                        </div>
                        <span className="text-slate-500 font-medium">+{pesoFormatter.format(drink.price)}</span>
                    </label>
                ))}
            </div>  
        </div>
    )
}

export default Drinks