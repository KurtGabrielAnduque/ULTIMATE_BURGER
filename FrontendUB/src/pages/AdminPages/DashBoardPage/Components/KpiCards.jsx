import React from 'react'

// Import utils
import { pesoFormatter } from '../../../../utils/ProjectUtilities';

import { TrendingUp, DollarSign, ShoppingBag, Clock, User2} from 'lucide-react';

function KpiCards({ stats }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">

              {/* Sales Card */}
              <div className="bg-white p-6 rounded-3xl border border-zinc-200 shadow-sm flex flex-col relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform duration-300">
                  <DollarSign size={80} className="text-red-500" />
                </div>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2 relative z-10">Today's Sales</p>
                <h3 className="text-3xl font-extrabold text-slate-900 mb-4 relative z-10">{pesoFormatter.format(stats.totalSalesToday)}</h3>
                <div className="flex items-center gap-2 text-sm font-bold text-emerald-500 bg-emerald-50 w-fit px-2 py-1 rounded-md relative z-10">
                  <TrendingUp size={16} /> +5.2% from yesterday
                </div>
              </div>

              {/* Orders Card */}
              <div className="bg-white p-6 rounded-3xl border border-zinc-200 shadow-sm flex flex-col relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform duration-300">
                  <ShoppingBag size={80} className="text-blue-500" />
                </div>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2 relative z-10">Completed Orders</p>
                <h3 className="text-3xl font-extrabold text-slate-900 mb-4 relative z-10">{stats.completedOrders}</h3>
                <div className="flex items-center gap-2 text-sm font-bold text-emerald-500 bg-emerald-50 w-fit px-2 py-1 rounded-md relative z-10">
                  <TrendingUp size={16} /> +12 orders
                </div>
              </div>

              {/* Pending Card */}
              <div className="bg-white p-6 rounded-3xl border border-zinc-200 shadow-sm flex flex-col relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform duration-300">
                  <Clock size={80} className="text-orange-500" />
                </div>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2 relative z-10">Orders Pending</p>
                <h3 className="text-3xl font-extrabold text-slate-900 mb-4 relative z-10">{stats.pendingOrders}</h3>
                <div className="flex items-center gap-2 text-sm font-bold text-orange-500 bg-orange-50 w-fit px-2 py-1 rounded-md relative z-10">
                  Needs attention in kitchen
                </div>
              </div>


              <div className="bg-white p-6 rounded-3xl border border-zinc-200 shadow-sm flex flex-col relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform duration-300">
                  <User2 size={80} className="text-red-500" />
                </div>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2 relative z-10">Today's Total Orders</p>
                <h3 className="text-3xl font-extrabold text-slate-900 mb-4 relative z-10">{stats.totalOrdersToday}</h3>
                <div className="flex items-center gap-2 text-sm font-bold text-emerald-500 bg-emerald-50 w-fit px-2 py-1 rounded-md relative z-10">
                  <TrendingUp size={16} /> +2 from yesterday
                </div>
              </div>

            </div>
  )
}

export default KpiCards