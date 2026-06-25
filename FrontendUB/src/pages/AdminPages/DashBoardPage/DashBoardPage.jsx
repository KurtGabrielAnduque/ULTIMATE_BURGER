
import { TrendingUp, ShoppingBag, MousePointerClick, Calendar } from 'lucide-react';


import AdminNavBar from '../Components/AdminNavBar';
import AdminHeader from '../Components/AdminHeader';
import KpiCards from './Components/KpiCards';
import TopSellingTable from './Components/TopSellingTable';
import RevenueTrend from './Components/RevenueTrend';

// utilities import
import { CustomerOrder } from './DashboardData';
import { getWeeklyRevenue, getMonthlyRevenue, getYearlyRevenue } from '../../../utils/DashboardAnalytics';

function isToday(dateString) {
  const date = new Date(dateString);
  const today = new Date();

  return (
    date.getFullYear() === today.getFullYear() &&
    date.getMonth() === today.getMonth() &&
    date.getDate() === today.getDate()
  );
}

export default function DashBoardPage() {

  const pendingOrders = CustomerOrder.filter(order => isToday(order.createdAt) && order.orderStatus === 'Pending').length;
  const completedOrders = CustomerOrder.filter(order => isToday(order.createdAt) && order.orderStatus === 'Completed').length;
  const totalOrdersToday = CustomerOrder.filter(order => isToday(order.createdAt)).length;
  // get today's date
  const today = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const totalSalesToday = CustomerOrder
    .filter(order => isToday(order.createdAt))
    .reduce((sum, order) => sum + order.orderTotal, 0);


  // Make the dashboard stats single for future update scalability
  const dashboardStats = {
    totalSalesToday,
    completedOrders,
    pendingOrders,
    totalOrdersToday
  };

  // aggregation selection in the trend line dashboard
  const revenueData = {
    weekly: getWeeklyRevenue(CustomerOrder),
    monthly: getMonthlyRevenue(CustomerOrder),
    yearly: getYearlyRevenue(CustomerOrder)
  };

  return (
    <div className="bg-zinc-50 flex flex-row min-h-screen font-sans">
      <AdminNavBar />

      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        <AdminHeader />

        <main className="flex-1 p-6 md:p-10 overflow-y-auto">

          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-7xl mx-auto">

            <div className="flex justify-between items-end mb-8">
              <div>
                <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Dashboard Overview</h1>
                <p className="text-slate-500">Here is what is happening in your store today.</p>
              </div>
              <div className="hidden sm:flex items-center gap-2 bg-white border border-zinc-200 text-slate-600 px-4 py-2 rounded-lg text-sm font-bold hover:bg-zinc-50 transition-colors shadow-sm">
                <Calendar size={16} />
                {today}
              </div>
            </div>

            {/* --- ROW 1: TOP KPI CARDS --- */}
            <KpiCards
              stats={dashboardStats}
            />

            {/* --- ROW 2: GRAPH & CONVERSION WIDGET --- */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">

              {/* Sales Graph Placeholder */}
              <div className="lg:col-span-2 bg-white rounded-3xl border border-zinc-200 p-6 sm:p-8 shadow-sm flex flex-col min-h-[350px]">
                <h3 className="text-lg font-bold text-slate-900 mb-6">Revenue Trend</h3>
                <div className="flex-1 bg-zinc-50 border border-dashed border-zinc-200 rounded-2xl">
                  <RevenueTrend data={revenueData} />
                </div>
              </div>

              {/* The SaaS Conversion Widget */}
              <div className="lg:col-span-1 bg-zinc-900 rounded-3xl border border-zinc-800 p-6 sm:p-8 shadow-xl flex flex-col relative overflow-hidden text-white">
                {/* Decorative Background */}
                <div className="absolute -top-20 -right-20 w-48 h-48 bg-red-500/20 rounded-full blur-3xl"></div>

                <h3 className="text-lg font-bold text-white mb-2 relative z-10">Website Conversion</h3>
                <p className="text-zinc-400 text-sm mb-8 relative z-10">Traffic to Order Ratio</p>

                <div className="flex-1 flex flex-col justify-center relative z-10">
                  <div className="flex items-end gap-2 mb-2">
                    <span className="text-5xl font-extrabold text-white">12.4</span>
                    <span className="text-2xl font-bold text-red-500 mb-1">%</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-bold text-emerald-400 mb-8">
                    <TrendingUp size={16} /> +2.1% this week
                  </div>

                  {/* Mini Funnel Data */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-zinc-400 flex items-center gap-2"><MousePointerClick size={16} /> Total Visitors</span>
                      <span className="font-bold text-white">1,204</span>
                    </div>
                    <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                      <div className="h-full bg-zinc-600 w-full"></div>
                    </div>

                    <div className="flex justify-between items-center text-sm mt-4">
                      <span className="text-zinc-400 flex items-center gap-2"><ShoppingBag size={16} /> Orders Placed</span>
                      <span className="font-bold text-white">149</span>
                    </div>
                    <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                      <div className="h-full bg-red-500 w-[12.4%]"></div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* --- ROW 3: TOP PRODUCTS TABLE --- */}
            <TopSellingTable orders={CustomerOrder} />

          </div>
        </main>
      </div>
    </div>
  );
}