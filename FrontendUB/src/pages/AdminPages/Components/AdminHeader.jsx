import React from 'react'
import { Bell, Menu} from 'lucide-react';

function AdminHeader() {
    return (
        <header className="h-20 bg-white border-b border-zinc-200 flex items-center justify-between px-8 sticky top-0 z-10">
            <div className="flex items-center gap-4">
                {/* Mobile menu button (hidden on desktop) */}
                <button className="md:hidden text-slate-500 hover:text-slate-900">
                    <Menu size={24} />
                </button>
                <h2 className="text-xl font-extrabold text-slate-800 hidden sm:block">Welcome back, Admin!!</h2>
            </div>

            <div className="flex items-center gap-6">
                {/* Notification Bell */}
                <button className="relative text-slate-400 hover:text-slate-600 transition-colors">
                    <Bell size={24} />
                    <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white ring-2 ring-white">
                        3
                    </span>
                </button>

                {/* User Profile */}
                <div className="flex items-center gap-3 pl-6 border-l border-zinc-200">
                    <div className="flex flex-col text-right hidden sm:flex">
                        <span className="text-sm font-bold text-slate-900">Sylvia</span>
                        <span className="text-xs font-medium text-slate-500">Store Owner</span>
                    </div>
                    <img
                        src="https://ui-avatars.com/api/?name=Tita+Joy&background=f8fafc&color=0f172a&rounded=true"
                        alt="Admin"
                        className="w-10 h-10 rounded-full border border-slate-200 shadow-sm"
                    />
                </div>
            </div>
        </header>
    );
}

export default AdminHeader