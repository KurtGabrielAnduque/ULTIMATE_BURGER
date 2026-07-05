import React from 'react'

// Import Components
import CustomerNavbar from '../Components/CustomerNavbar'
import OrderSummary from './Components/OrderSummary';
import CartItems from './Components/CartItems';
import CartModal from './Components/CartModal';

import { useState } from 'react';

// Import the data the proper Mock data we create for preparation in backend part
import { userCartDataExpanded } from './UserCart';



function CartPage({ cartData, loadCart }) {

  console.log(cartData);
  const [cartItems, setCartItems] = useState(userCartDataExpanded);
  const [serviceMode, setServiceMode] = useState('dine-in'); // 'dine-in' | 'take-out'
  const [paymentMethod, setPaymentMethod] = useState('gcash'); // 'otc' | 'gcash' | 'paymaya'
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  // Calculate Subtotal dynamically
  let subtotal = 0

  cartData.map((item) => {
    subtotal += parseFloat(item.total_price)
  });



  return (
    <>
      <div className='bg-zinc-950 min-h-screen flex flex-col w-full'>
        {/* Import the Navbar Here */}
        <CustomerNavbar cartData={cartData}/>

        <div className='max-w-7xl mx-auto px-4 py-12 flex-grow w-full'>
          <h1 className="text-white text-[36px] md:text-[6vw] xl:text-[3.5vw] 2xl:text-[3.5vw] mb-4 md:mb-8 leading-[1.2] text-center text-balance border-b-1 py-8 ">
            My <span className='text-red-500'>Cart</span>
          </h1>

          {/* Main div for division of Cart Items and Order Summary*/}
          <div className="grid lg:grid-cols-12 gap-10 items-start">

            {/* Left Cart Items (Mapping from Data) */}
            <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-6">

              {/* Header row for list */}
              <div className="hidden sm:grid grid-cols-12 gap-4 text-zinc-500 font-bold text-sm uppercase tracking-wider pb-4 border-b border-zinc-800">
                <div className="col-span-6">Product Details</div>
                <div className="col-span-3 text-center">Quantity</div>
                <div className="col-span-2 text-right">Total</div>
                <div className="col-span-1"></div>
              </div>

              {/* Import the Cart Items Here*/}
              <CartItems
                setCartItems={setCartItems}
                cartItems={cartItems}
                cartData={cartData}
                loadCart = { loadCart }
              />

            </div>


            {/*Order Summary*/}
            <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-6">
              <OrderSummary
                serviceMode={serviceMode}
                setServiceMode={setServiceMode}
                paymentMethod={paymentMethod}
                setPaymentMethod={setPaymentMethod}
                subtotal={subtotal}
                setIsConfirmModalOpen={setIsConfirmModalOpen}
              />
            </div>


          </div>

        </div>

      </div>

      {/* Import the modal of cart here when place order is pressed*/}
      {isConfirmModalOpen && (
        <CartModal
          serviceMode = {serviceMode}
          paymentMethod = {paymentMethod}
          cartItems = {cartItems}
          subtotal = {subtotal}
          setIsConfirmModalOpen = {setIsConfirmModalOpen}
        />
      )}
    </>
  )
}

export default CartPage