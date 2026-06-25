import React, { useMemo } from 'react';

function TopSellingTable({ orders }) {
  // 1. The Logic Engine: This runs every time 'orders' changes
  const topProducts = useMemo(() => {
    const productStats = {};

    orders.forEach(order => {
      order.products.forEach(item => {
        const id = item.product.productId;
        
        if (!productStats[id]) {
          productStats[id] = {
            name: item.product.name,
            category: item.product.category,
            image: item.product.image,
            quantitySold: 0,
            totalSales: 0
          };
        }
        
        productStats[id].quantitySold += item.quantity;
        productStats[id].totalSales += item.totalPrice;
      });
    });

    // 2. Convert to Array and Sort by Quantity
    return Object.values(productStats).sort((a, b) => b.quantitySold - a.quantitySold);
  }, [orders]);

  return (
    <div className="bg-white rounded-3xl border border-zinc-200 shadow-sm overflow-hidden mb-8">
      <div className="p-6 sm:p-8 border-b border-zinc-100 flex justify-between items-center">
        <h3 className="text-lg font-bold text-slate-900">Top Selling Products</h3>
        <button className="text-red-500 text-sm font-bold hover:underline">View All</button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-zinc-50/50 text-xs uppercase tracking-wider text-slate-500 border-b border-zinc-100">
              <th className="px-6 py-4 font-bold">Product Name</th>
              <th className="px-6 py-4 font-bold">Category</th>
              <th className="px-6 py-4 font-bold">Quantity Sold</th>
              <th className="px-6 py-4 font-bold">Total Sales</th>
            </tr>
          </thead>
          <tbody className="text-sm divide-y divide-zinc-50">
            {topProducts.map((product, idx) => (
              <tr key={idx} className="hover:bg-zinc-50 transition-colors">
                <td className="px-6 py-4 flex items-center gap-3">
                  <img src={product.image} className="w-10 h-10 rounded-lg object-cover bg-zinc-100" alt={product.name} />
                  <span className="font-bold text-slate-900">{product.name}</span>
                </td>
                <td className="px-6 py-4 text-slate-600 font-medium capitalize">{product.category}</td>
                <td className="px-6 py-4 font-bold text-slate-900">{product.quantitySold}</td>
                <td className="px-6 py-4 font-bold text-emerald-600">₱{product.totalSales.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TopSellingTable;