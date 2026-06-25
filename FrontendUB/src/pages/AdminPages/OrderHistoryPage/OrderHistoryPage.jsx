import React, { useState } from 'react';
import { CircleCheck, Calendar } from 'lucide-react';

// Imports based on your setup
import AdminNavBar from '../Components/AdminNavBar';
import AdminHeader from '../Components/AdminHeader';
import CompletedOrders from './Components/CompletedOrders';
import { CustomerOrder } from '../DashBoardPage/DashboardData';

// ==========================================
// UTILITY FUNCTIONS (Safer Date Handling)
// ==========================================

// 1. Gets today's date exactly as "YYYY-MM-DD" for the HTML Input
const getTodayFormatted = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

// 2. Safely converts your database timestamp to "YYYY-MM-DD" to compare strings instead of JS Date objects!
const getLocalDateString = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export default function OrderHistoryPage() {
  
  // SENIOR FIX 1: Only store the selected string! 
  // We initialize it to today so the calendar isn't blank when they open the page.
  const [selectedDate, setSelectedDate] = useState(getTodayFormatted());

  // SENIOR FIX 2: Derived State. Notice this is NOT a useState! 
  // Every time selectedDate changes, React automatically recalculates this list.
  const dateOrders = CustomerOrder.filter(order => {
    const isCompleted = order.orderStatus === 'Completed';
    const matchesDate = getLocalDateString(order.createdAt) === selectedDate;
    return isCompleted && matchesDate;
  });

  const formatTime = (dateString) => {
    return new Date(dateString).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
  };

  return (
    <div className="bg-zinc-50 flex flex-row min-h-screen font-sans">
      <AdminNavBar />

      <div className="flex-1 flex flex-col min-w-0">
        <AdminHeader />

        <main className="flex-1 p-6 md:p-10 overflow-y-auto">
          
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Order History</h1>
            <p className="text-slate-500">Review past transactions and completed deliveries.</p>
          </div>

          <div className="bg-white rounded-2xl border border-green-200 shadow-sm flex flex-col overflow-hidden mb-8 max-h-[600px]">

            {/* Header Area */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 border-b border-green-200 flex flex-col sm:flex-row justify-between sm:items-center gap-4 shrink-0">
              
              {/* SENIOR FIX 3: Updated text to match the History context */}
              <div>
                <h2 className="text-green-600 text-xl font-bold flex items-center gap-2">
                  <CircleCheck size={24} /> Completed Orders ({dateOrders.length})
                </h2>
                <p className="text-zinc-600 font-medium text-sm mt-1">
                  Successfully completed and handed out.
                </p>
              </div>

              {/* Date Picker Tool */}
              <div className="bg-white p-3 rounded-xl border border-zinc-200 shadow-sm flex items-center gap-3">
                <div className="p-2 bg-zinc-100 rounded-lg text-zinc-500">
                  <Calendar size={20} />
                </div>
                <div className="flex flex-col">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Filter by Date</label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => {
                      // e.target.value from a date input is guaranteed to be "YYYY-MM-DD"
                      const newDateString = e.target.value;
                      if(newDateString) {
                         setSelectedDate(newDateString);
                      }
                    }} 
                    className="text-sm font-bold text-slate-900 bg-transparent focus:outline-none cursor-pointer"
                  />
                </div>
              </div>

            </div>

            {/* Scrollable List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-zinc-50/50">
              {dateOrders.length === 0 ? (
                <div className="text-center py-12 flex flex-col items-center justify-center opacity-60">
                    <Calendar size={48} className="text-zinc-400 mb-3" />
                    <p className="text-zinc-500 font-medium text-lg">No completed orders found for {selectedDate}.</p>
                </div>
              ) : (
                <CompletedOrders
                  completedOrders={dateOrders}
                  formatTime={formatTime}
                />
              )}
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}