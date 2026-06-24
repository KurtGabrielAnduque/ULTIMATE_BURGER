// Components
import CustomerNavbar from '../Components/CustomerNavbar'
import StatusTracker from './Components/StatusTracker';
import ActiveOrders from './Components/ActiveOrders';
import CompletedOrders from './Components/CompletedOrders';

// Packages
import { Package, CheckCircle, Clock, ChevronRight } from 'lucide-react';
import { CustomerOrder } from './CustomerOrder'
import { useState } from 'react';



function CustomerOrdersPage() {
  const [activeTab, setActiveTab] = useState('active'); // 'active' | 'history'

  // Filter orders based on the active tab
  const activeOrders = CustomerOrder.filter(order => order.orderStatus !== 'Completed');
  const pastOrders = CustomerOrder.filter(order => order.orderStatus === 'Completed');

  // Format date helper
  const formatDate = (dateString) => {
    const options = { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className='bg-zinc-950 min-h-screen flex flex-col w-full font-sans'>

      {/* Import the Customer Navbar*/}
      <CustomerNavbar />

      <div className='max-w-4xl mx-auto px-4 py-12 flex-grow w-full'>

        {/* Page Header */}
        <h1 className="text-white text-4xl font-extrabold mb-8">
          My <span className='text-red-500'>Orders</span>
        </h1>

        {/* Custom Tab Navigation */}
        <div className="flex gap-2 bg-zinc-900 p-1.5 rounded-2xl mb-8 border border-zinc-800 w-fit">
          <button
            onClick={() => setActiveTab('active')}
            className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all ${activeTab === 'active' ? 'bg-red-500 text-white shadow-lg shadow-red-500/20' : 'text-zinc-400 hover:text-white'}`}
          >
            Active Orders ({activeOrders.length})
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all ${activeTab === 'history' ? 'bg-zinc-800 text-white shadow-md' : 'text-zinc-400 hover:text-white'}`}
          >
            Order History
          </button>
        </div>

        {/* Order List Container */}
        <div className="flex flex-col gap-8">

          {/* Determine which list to show */}
          {activeTab === 'active' ? (
            activeOrders.length === 0 ? (
              <div className="text-center py-20 bg-zinc-900 border border-zinc-800 rounded-3xl">
                <Package size={48} className="mx-auto text-zinc-700 mb-4" />
                <p className="text-zinc-400 text-lg">You have no active orders right now.</p>
              </div>
            ) : (
              // Import the Active order tracker here
              <ActiveOrders
                activeOrders={activeOrders}
                formatDate={formatDate}
              />
            )
          ) : (
            /* HISTORY TAB VIEW */
            pastOrders.length === 0 ? (
              <div className="text-center py-20 bg-zinc-900 border border-zinc-800 rounded-3xl">
                <Clock size={48} className="mx-auto text-zinc-700 mb-4" />
                <p className="text-zinc-400 text-lg">Your order history is empty.</p>
              </div>
            ) : (
              // Import the Completed orders tracker here
              <CompletedOrders 
                pastOrders = {pastOrders}
                formatDate = {formatDate}
              />
            )
          )}

        </div>
      </div>
    </div>
  );
}

export default CustomerOrdersPage