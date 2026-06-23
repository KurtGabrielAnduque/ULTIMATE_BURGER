import { useState } from 'react'
import CustomerNavbar from '../Components/CustomerNavbar'
import Footer from '../Components/Footer'
import { menuData } from './menu';
import BurgerCard from './Components/BurgerCard';
import Modal from './Components/Modal';

// The Main Menu Page
export default function MenuPage() {
  // STATE LIFTED UP: MenuPage now controls which product is active in the modal
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);

  return (
    <div className="bg-slate-50 min-h-screen">
      <CustomerNavbar />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-6xl font-extrabold text-slate-900 mb-8 text-center sm:text-left">Our Menu</h1>

        {/* Burgers Category */}
        <div className='border-b-2 border-slate-200 mb-6'>
          <h2 className="text-4xl sm:text-6xl font-extrabold text-orange-600 mb-4 text-center">Burgers</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {menuData.filter(item => item.category === 'burger').map((item) => (
            /* Pass the state updater down as a prop */
            <BurgerCard key={item.productId} product={item} onOpenModal={setSelectedProduct} />
          ))}
        </div>

        {/* Sides Category */}
        <div className='border-b-2 border-slate-200 mb-6'>
          <h2 className="text-4xl sm:text-6xl font-extrabold text-orange-600 mb-4 text-center">Sides</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {menuData.filter(item => item.category === 'sides').map((item) => (
            /* Pass the state updater down as a prop */
            <BurgerCard key={item.productId} product={item} onOpenModal={setSelectedProduct} />
          ))}
        </div>


        {/* Pizza Category */}
        <div className='border-b-2 border-slate-200 mb-6'>
          <h2 className="text-4xl sm:text-6xl font-extrabold text-orange-600 mb-4 text-center">Pizza</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {menuData.filter(item => item.category === 'pizza').map((item) => (
            /* Pass the state updater down as a prop */
            <BurgerCard key={item.productId} product={item} onOpenModal={setSelectedProduct} />
          ))}
        </div>

        {/* Pizza Burger Category */}
        <div className='border-b-2 border-slate-200 mb-6'>
          <h2 className="text-4xl sm:text-6xl font-extrabold text-orange-600 mb-4 text-center">Pizza Burger</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {menuData.filter(item => item.category === 'pizzaBurger').map((item) => (
            /* Pass the state updater down as a prop */
            <BurgerCard key={item.productId} product={item} onOpenModal={setSelectedProduct} />
          ))}
        </div>
        
        {/* 2 in 1 Pizza Burger Category */}
        <div className='border-b-2 border-slate-200 mb-6'>
          <h2 className="text-4xl sm:text-6xl font-extrabold text-orange-600 mb-4 text-center">2 in 1 Flavor Pizza Burger</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {menuData.filter(item => item.category === 'pizzaBurger2in1').map((item) => (
            /* Pass the state updater down as a prop */
            <BurgerCard key={item.productId} product={item} onOpenModal={setSelectedProduct} />
          ))}
        </div>
        

      </div>

      {/*Import the footer*/}
      <Footer />

      {/* Render the modal at the root level if a product is selected */}
      {selectedProduct && (
        <Modal
          product={selectedProduct}
          closeModal={() => setSelectedProduct(null)}
        />
      )}

    </div>
  );
}