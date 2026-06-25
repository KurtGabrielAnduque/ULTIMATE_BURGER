
import AdminNavBar from '../Components/AdminNavBar'
import AdminHeader from '../Components/AdminHeader'
import PendingOrders from './Components/PendingOrders';
import ReadyOrders from './Components/ReadyOrders';
import PreparingOrder from './Components/PreparingOrder';

import { Clock, CheckCircle, ChefHat} from 'lucide-react';
import { CustomerOrder } from '../DashBoardPage/DashboardData';



function OrdersPage() {

  const pendingOrders = CustomerOrder.filter(order => order.orderStatus === 'Pending');
  const preparingOrders = CustomerOrder.filter(order => order.orderStatus === 'Preparing')
  const readyOrders = CustomerOrder.filter(order => order.orderStatus === 'Ready');

  const formatTime = (dateString) => {
    return new Date(dateString).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
  };

  return (
    <div className="bg-zinc-50 flex flex-row min-h-screen font-sans">
      <AdminNavBar />

      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        <AdminHeader />

        <main className="flex-1 p-6 md:p-10 overflow-y-auto">
          <div className="flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-7xl mx-auto">

            {/* Page Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Active Orders</h1>
              <p className="text-slate-500">Manage the kitchen queue and incoming deliveries.</p>
            </div>

            {/* ==================================================== */}
            {/* PENDING ORDERS QUEUE (ORANGE)                        */}
            {/* ==================================================== */}
            <div className="bg-white rounded-2xl border border-orange-200 shadow-sm flex flex-col overflow-hidden mb-8 max-h-[500px]">

              {/* Header */}
              <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 border-b border-orange-200 flex justify-between items-center shrink-0">
                <div>
                  <h2 className="text-orange-600 text-xl font-bold flex items-center gap-2">
                    <Clock size={24} /> Pending & Preparing ({pendingOrders.length})
                  </h2>
                  <p className="text-zinc-600 font-medium text-sm mt-1">
                    Orders that need to be cooked.
                  </p>
                </div>
              </div>

              {/* Scrollable List */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-zinc-50/50">
                {pendingOrders.length === 0 ? (
                  <p className="text-center text-zinc-400 py-10 font-medium">No pending orders right now.</p>
                ) :
                  (<PendingOrders
                    pendingOrders={pendingOrders} 
                    formatTime = {formatTime}/>)}
              </div>
            </div>


            {/* ==================================================== */}
            {/* PREPAIRING ORDERS QUEUE (BLUE)                        */}
            {/* ==================================================== */}
            <div className="bg-white rounded-2xl border border-blue-200 shadow-sm flex flex-col overflow-hidden mb-8 max-h-[500px]">

              {/* Header */}
              <div className="bg-gradient-to-r from-blue-50 to-blue-50 p-6 border-b border-blue-200 flex justify-between items-center shrink-0">
                <div>
                  <h2 className="text-blue-600 text-xl font-bold flex items-center gap-2">
                    <Clock size={24} /> Pending & Preparing ({pendingOrders.length})
                  </h2>
                  <p className="text-zinc-600 font-medium text-sm mt-1">
                    Orders that need to be cooked.
                  </p>
                </div>
              </div>

              {/* Scrollable List */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-zinc-50/50">
                {preparingOrders.length === 0 ? (
                  <p className="text-center text-zinc-400 py-10 font-medium">Nothing in list to cook.</p>
                ) :
                  (<PreparingOrder
                    PrepairingOrders={preparingOrders} 
                    formatTime = {formatTime}/>)}
              </div>
            </div>

            {/* ==================================================== */}
            {/* READY ORDERS QUEUE (GREEN)                           */}
            {/* ==================================================== */}
            <div className="bg-white rounded-2xl border border-green-200 shadow-sm flex flex-col overflow-hidden max-h-[500px]">

              {/* Header */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 border-b border-green-200 flex justify-between items-center shrink-0">
                <div>
                  <h2 className="text-green-600 text-xl font-bold flex items-center gap-2">
                    <CheckCircle size={24} /> Ready for Pickup ({readyOrders.length})
                  </h2>
                  <p className="text-zinc-600 font-medium text-sm mt-1">
                    Waiting to be handed to the customer or rider.
                  </p>
                </div>
              </div>

              {/* Scrollable List */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-zinc-50/50">
                {readyOrders.length === 0 ? (
                  <p className="text-center text-zinc-400 py-10 font-medium">No ready orders right now.</p>
                ) : (
                  <ReadyOrders
                    readyOrders = {readyOrders}
                    formatTime = {formatTime}
                  />
                )}
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}

export default OrdersPage