import React from 'react'
import { pesoFormatter } from '../../../../utils/ProjectUtilities';

function BurgerCard({ product, onOpenModal }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:shadow-red-500/10 transition-all duration-300 flex flex-col">
      <img
        className="w-full h-48 object-cover bg-slate-200"
        src={product.image || `https://placehold.co/400x300/E63946/FFF?text=${product.name.replace(/ /g, '+')}`}
        alt={product.name}
      />
      <div className="p-6 flex flex-col flex-grow">
        <h2 className="text-xl font-extrabold text-slate-900 mb-1">{product.name}</h2>

        <div className="flex items-center gap-1 mb-3">
          <span className="text-yellow-400 text-sm">{'★'.repeat(product?.rating_stars || 5)}</span>
          <span className="text-xs text-slate-500 font-medium tracking-wide">
            ({product.rating_count?.toLocaleString() || 0} reviews)
          </span>
        </div>

        <p className="text-red-500 font-bold text-lg mb-6 mt-auto">{pesoFormatter.format(product.base_price)}</p>

        {/* When clicked, tell the parent (MenuPage) to open this product */}
        <button
          onClick={() => onOpenModal(product)}
          className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-4 rounded-xl transition-colors"
        >
          Select Options
          
        </button>
      </div>
    </div>
  );
}
export default BurgerCard