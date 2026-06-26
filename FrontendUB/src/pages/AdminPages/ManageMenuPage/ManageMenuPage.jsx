import React from 'react'
import AdminNavBar from '../Components/AdminNavBar'
import AdminHeader from '../Components/AdminHeader'
import MenuModal from './Components/MenuModal'
import MenuCardsDisplay from './Components/MenuCardsDisplay'

import { Hamburger, Sandwich, Pizza } from 'lucide-react'
import { menuData } from './MenuData'

function ManageMenuPage() {

  //call all the the categories of menu
  // filter by category
  const hamburgerMenu = menuData.filter(order => order.category === 'burger');
  const sidesMenu = menuData.filter(order => order.category === 'sides');
  const pizzaMenu = menuData.filter(order => order.category === 'pizza');
  const pizzaBurgerMenu = menuData.filter(order => order.category === 'pizzaBurger');
  const twoPizzaBurgerMenu = menuData.filter(order => order.category === 'pizzaBurger2in1');
  return (
    // This is the master wrapper. flex-row makes the sidebar and content sit side-by-side
    <div className="bg-zinc-50 flex flex-row min-h-screen font-sans">

      {/* The Sidebar Component */}
      <AdminNavBar />

      {/* The Main Content Area */}
      {/* flex-1 makes it take up all remaining space. flex-col lets us stack the Header and Content */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">

        {/*Import the Header here*/}
        <AdminHeader />

        {/* Dynamic Content View */}
        <main className="flex-1 p-6 md:p-10 overflow-y-auto">


          <div className="flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-7xl mx-auto">

            {/*Headre Message*/}
            <div className="mb-8">
              <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Manage Menu</h1>
              <p className="text-slate-500">Select all the orders that you want to update the price.</p>
            </div>

            {/* ==================================================== */}
            {/* Burgers Menu                                         */}
            {/* ==================================================== */}
            <div className="bg-white rounded-2xl border border-orange-200 shadow-sm flex flex-col overflow-hidden mb-8 max-h-[500px]">

              {/* Header */}
              <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 border-b border-orange-200 flex justify-between items-center shrink-0">
                <div>
                  <h2 className="text-orange-600 text-xl font-bold flex items-center gap-2">
                    <Hamburger size={24} /> Burger Category ({hamburgerMenu.length})
                  </h2>
                  <p className="text-zinc-600 font-medium text-sm mt-1">
                    List of Burger Menu
                  </p>
                </div>
              </div>

              {/* Scrollable List */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-zinc-50/50">
                {hamburgerMenu.length === 0 ? (
                  <p className="text-center text-zinc-400 py-10 font-medium">No pending orders right now.</p>
                ) :
                  (<MenuCardsDisplay
                    menuToDisplay={hamburgerMenu}
                  />)}
              </div>
            </div>



            {/* ==================================================== */}
            {/* Sides menu                                     */}
            {/* ==================================================== */}
            <div className="bg-white rounded-2xl border border-orange-200 shadow-sm flex flex-col overflow-hidden mb-8 max-h-[500px]">

              {/* Header */}
              <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 border-b border-orange-200 flex justify-between items-center shrink-0">
                <div>
                  <h2 className="text-orange-600 text-xl font-bold flex items-center gap-2">
                    <Sandwich size={24} /> Sides Category ({sidesMenu.length})
                  </h2>
                  <p className="text-zinc-600 font-medium text-sm mt-1">
                    List of Sides Menu
                  </p>
                </div>
              </div>

              {/* Scrollable List */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-zinc-50/50">
                {sidesMenu.length === 0 ? (
                  <p className="text-center text-zinc-400 py-10 font-medium">No Order in the List Right Now.</p>
                ) :
                  (<MenuCardsDisplay
                    menuToDisplay={sidesMenu}
                  />)}
              </div>
            </div>


            {/* ==================================================== */}
            {/* Pizza menu                                     */}
            {/* ==================================================== */}
            <div className="bg-white rounded-2xl border border-orange-200 shadow-sm flex flex-col overflow-hidden mb-8 max-h-[500px]">

              {/* Header */}
              <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 border-b border-orange-200 flex justify-between items-center shrink-0">
                <div>
                  <h2 className="text-orange-600 text-xl font-bold flex items-center gap-2">
                    <Pizza size={24} /> Pizza Category ({pizzaMenu.length})
                  </h2>
                  <p className="text-zinc-600 font-medium text-sm mt-1">
                    List of Pizza Menu
                  </p>
                </div>
              </div>

              {/* Scrollable List */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-zinc-50/50">
                {pizzaMenu.length === 0 ? (
                  <p className="text-center text-zinc-400 py-10 font-medium">No Order in the List Right Now.</p>
                ) :
                  (<MenuCardsDisplay
                    menuToDisplay={pizzaMenu}
                  />)}
              </div>
            </div>

            {/* ==================================================== */}
            {/* Pizza Burger menu                                     */}
            {/* ==================================================== */}
            <div className="bg-white rounded-2xl border border-orange-200 shadow-sm flex flex-col overflow-hidden mb-8 max-h-[500px]">

              {/* Header */}
              <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 border-b border-orange-200 flex justify-between items-center shrink-0">
                <div>
                  <h2 className="text-orange-600 text-xl font-bold flex items-center gap-2">
                    <Pizza size={24} /> Pizza Burger Category ({pizzaBurgerMenu.length})
                  </h2>
                  <p className="text-zinc-600 font-medium text-sm mt-1">
                    List of Pizza Burger Menu
                  </p>
                </div>
              </div>

              {/* Scrollable List */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-zinc-50/50">
                {pizzaBurgerMenu.length === 0 ? (
                  <p className="text-center text-zinc-400 py-10 font-medium">No Order in the List Right Now.</p>
                ) :
                  (<MenuCardsDisplay
                    menuToDisplay={pizzaBurgerMenu}
                  />)}
              </div>
            </div>


            {/* ==================================================== */}
            {/* 2 in 1 Pizza Burger menu                                     */}
            {/* ==================================================== */}
            <div className="bg-white rounded-2xl border border-orange-200 shadow-sm flex flex-col overflow-hidden mb-8 max-h-[500px]">

              {/* Header */}
              <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 border-b border-orange-200 flex justify-between items-center shrink-0">
                <div>
                  <h2 className="text-orange-600 text-xl font-bold flex items-center gap-2">
                    <Pizza size={24} /> 2 in 1 Pizza Burger Category ({twoPizzaBurgerMenu.length})
                  </h2>
                  <p className="text-zinc-600 font-medium text-sm mt-1">
                    List of 2 in 1 Pizza Burger Menu
                  </p>
                </div>
              </div>

              {/* Scrollable List */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-zinc-50/50">
                {twoPizzaBurgerMenu.length === 0 ? (
                  <p className="text-center text-zinc-400 py-10 font-medium">No Order in the List Right Now.</p>
                ) :
                  (<MenuCardsDisplay
                    menuToDisplay={twoPizzaBurgerMenu}
                  />)}
              </div>
            </div>


          </div>

        </main>
      </div>

    </div>
  )
}

export default ManageMenuPage