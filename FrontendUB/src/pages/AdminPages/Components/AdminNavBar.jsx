import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { LayoutDashboard, ChefHat, Package, History, Utensils, Settings, LogOut, Bell, Menu, User2 } from 'lucide-react'

// Import the image
import UBLOGO from '../../../assets/images/UBLOGO.jpg'


function AdminNavBar() {

  const navLinks = [
    { name: 'DashBoard', path: '/admin/dashboard', icon: <LayoutDashboard size={20} /> },
    { name: 'Orders', path: '/admin/orders', icon: <ChefHat size={20} /> },
    { name: 'Inventory', path: '/admin/inventory', icon: <Package size={20} /> },
    { name: 'OrderHistory', path: '/admin/orderhistory', icon: <History size={20} /> },
    { name: 'ManageMenu', path: '/admin/managemenu', icon: <Utensils size={20} /> },
    { name: 'Store', path: '/admin/store', icon: <Settings size={20} /> },
  ]

  // tell the user on where the user is
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <aside className="w-64 bg-white border-r border-zinc-200 flex flex-col h-screen sticky top-0 shrink-0 hidden md:flex shadow-sm z-20">
      {/* Brand Logo Area */}
      <div className="h-20 flex items-center gap-3 px-6 border-b border-zinc-100">
        <img
          src={UBLOGO}
          className="h-10 w-10 object-cover rounded-lg shadow-sm"
          alt="Logo"
        />
        <div className="flex flex-col">
          <span className="font-extrabold text-lg text-slate-900 leading-tight">Ultimate<span className="text-red-500">Burger</span></span>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Admin Portal</span>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 py-6 px-4 space-y-2 overflow-y-auto">
        <p className="px-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Main Menu</p>

        {/* SENIOR FIX: Changed from { } to ( ) for implicit return! */}
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-semibold text-sm ${isActive(link.path)
              ? 'bg-red-50 text-red-600 shadow-sm ring-1 ring-red-500/10' // Active State
              : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'    // Inactive State
              }`}
          >
            {/* Highlight bar on the left for active items */}
            {isActive(link.path) && <div className="absolute left-4 w-1 h-6 bg-red-500 rounded-full" />}
            <span className={isActive(link.path) ? 'text-red-500' : 'text-slate-400'}>
              {link.icon}
            </span>
            {link.name}
          </Link>
        ))}
      </div>


      {/* User / Logout Area */}
      <div className="p-4 border-t border-zinc-100">
        <button className="w-full flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-red-50 hover:text-red-600 rounded-xl transition-colors font-semibold text-sm group">
          <LogOut size={20} className="text-slate-400 group-hover:text-red-500 transition-colors" />
          Sign Out
        </button>
      </div>

    </aside>
  )
}

export default AdminNavBar