import React from 'react'
import AdminNavBar from '../Components/AdminNavBar'
import AdminHeader from '../Components/AdminHeader'

function OrderHistoryPage() {
  return (
    // This is the master wrapper. flex-row makes the sidebar and content sit side-by-side
    <div className="bg-zinc-50 flex flex-row min-h-screen font-sans">

      {/* The Sidebar Component */}
      <AdminNavBar />

      {/* The Main Content Area */}
      {/* flex-1 makes it take up all remaining space. flex-col lets us stack the Header and Content */}
      <div className="flex-1 flex flex-col min-w-0">

        <AdminHeader />

        {/* Dynamic Content View */}
        <main className="flex-1 p-6 md:p-10 overflow-y-auto">


          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Order History</h1>
              <p className="text-slate-500 mb-8">View all the completed orders base on the date the admin selected</p>
              <div className="h-[400px] bg-white rounded-2xl border border-zinc-200 shadow-sm flex items-center justify-center text-slate-400 font-medium">
                Completed Orders List Component will go here!
              </div>
              <div className="h-[400px] bg-white rounded-2xl border border-zinc-200 shadow-sm flex items-center justify-center text-slate-400 font-medium">
                Completed Orders List Component will go here!
              </div>
            </div>

        </main>
      </div>

    </div>
  )
}

export default OrderHistoryPage