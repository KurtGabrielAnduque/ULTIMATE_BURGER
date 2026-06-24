import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './App.css'

// Import the Pages for customer side
// Arrange it base on the sequence of the navigation bar

// Import the homepage (default page for client)
import HomePage from './pages/CustomerPages/HomePage/HomePage'
// Import Menu Page (showing list of menus)
import MenuPage from './pages/CustomerPages/MenuPage/MenuPage'
// Import Locations (showing branches locations of the Ultimate Burger)
import LocationPage from './pages/CustomerPages/LocationPage/LocationPage'
// Import Review (showing all review of customer after experience eating in UB)
import ReviewPage from './pages/CustomerPages/ReviewPage/ReviewPage'
// Import Contact Page
import ContactPage from './pages/CustomerPages/ContactPage/ContactPage'
// Import CartPage (it must be Icon not a text type (a cart Icon))
import CartPage from './pages/CustomerPages/CartPage/CartPage'
// Import Account Page (also in icon form)
import AccountPage from './pages/CustomerPages/AccountPage/AccountPage'

// Import Orders Page (in form of icon)
import CustomerOrdersPage from './pages/CustomerPages/CustomerOrdersPage/CustomerOrdersPage'

// Import the Pages for the admin side
// Arrange it base on the sequence of the navigation bar
import DashBoard from './pages/AdminPages/DashBoardPage/DashBoardPage'
import OrdersPage from './pages/AdminPages/OrdersPage/OrdersPage'
import InventoryPage from './pages/AdminPages/InventoryPage/InventoryPage'
import OrderHistoryPage from './pages/AdminPages/OrderHistoryPage/OrderHistoryPage'
import ManageMenuPage from './pages/AdminPages/ManageMenuPage/ManageMenuPage'
import StorePage from './pages/AdminPages/StorePage/StorePage'



import LoginPage from './pages/Components/LoginPage'

// this is just the illustration of how the guard will work
// this will become real when we start doing the backend part
function AdminNavigator({ children }){
  let isAdmin = true

  if  (!isAdmin){
    return <Navigate to = '/' replace/>
  }

  return children
}


// main app here
function App() {
  return(
    <>
      
      <Routes>
        {/* router for the  Customers*/}
        <Route index element = {<HomePage />}/>
        <Route path='/menu' element = {<MenuPage/>}/>
        <Route path='/location' element = {<LocationPage />}/>
        <Route path='/review' element = {<ReviewPage />}/>
        <Route path='/contactus' element = {<ContactPage />}/>
        <Route path='/mycart' element = {<CartPage />}/>
        <Route path='/account' element = {<AccountPage/>}/>
        <Route path='/customer-orders' element = {<CustomerOrdersPage/>}/>

        <Route path='/login-signup' element = {<LoginPage/>}/>


        {/* route for the Admin side*/}
        <Route path='/admin/dashboard' element = {
          <AdminNavigator>
            <DashBoard/>
          </AdminNavigator>
        }/>

        <Route path='/admin/orders' element = {
          <AdminNavigator>
            <OrdersPage/>
          </AdminNavigator>
        }/>

        <Route path='/admin/inventory' element = {
          <AdminNavigator>
            <InventoryPage/>
          </AdminNavigator>
        }/>

        <Route path='/admin/orderhistory' element = {
          <AdminNavigator>
            <OrderHistoryPage/>
          </AdminNavigator>
        }/>

        <Route path='/admin/managemenu' element = {
          <AdminNavigator>
            <ManageMenuPage/>
          </AdminNavigator>
        }/>

        <Route path='/admin/store' element = {
          <AdminNavigator>
            <StorePage/>
          </AdminNavigator>
        }/>


        {/* catcher if the user type a url that doesnt even exist*/}
        <Route path='*' element = {<Navigate to = '/' replace/>}/>
      </Routes>
       
      
    </>
  );
}

export default App
