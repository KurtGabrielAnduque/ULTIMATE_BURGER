import React, { useState } from 'react';
import { Save, PenLine } from 'lucide-react';

import AdminNavBar from '../Components/AdminNavBar'
import AdminHeader from '../Components/AdminHeader'
import GeneralInformation from './Components/GeneralInformation';
import StoreHours from './Components/StoreHours';

// MOCK DATA for initial load
const initialStoreData = {
  branchName: "Ultimate Burger - Main Branch",
  contactNumber: "+63 932 589 0802",
  email: "sylvia.sales2018@gmail.com",
  address: "33 T. Gener St., Corner K2nd, Brgy. Kamuning, Quezon City",
  gcashNumber: "0932 589 0802",
  gcashName: "Sylvia Sales",
  qrCodeImage: "https://placehold.co/300x300/F1F5F9/94A3B8?text=Current+QR+Code",
  isAcceptingOrders: true,
  hours: [
    { day: 'Monday', open: '10:00', close: '22:00', isClosed: false },
    { day: 'Tuesday', open: '10:00', close: '22:00', isClosed: false },
    { day: 'Wednesday', open: '10:00', close: '22:00', isClosed: false },
    { day: 'Thursday', open: '10:00', close: '22:00', isClosed: false },
    { day: 'Friday', open: '10:00', close: '22:00', isClosed: false },
    { day: 'Saturday', open: '10:00', close: '23:00', isClosed: false },
    { day: 'Sunday', open: '00:00', close: '00:00', isClosed: true },
  ]
};

function StorePage() {
  const [storeData, setStoreData] = useState(initialStoreData);
  const [editMode, setEditMode] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    alert("Store settings saved successfully!");
  };

  return (
    <div className="bg-zinc-50 flex flex-row min-h-screen font-sans">
      <AdminNavBar />

      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        <AdminHeader />

        <main className="flex-1 p-6 md:p-10 overflow-y-auto">
          <div className="max-w-9xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">

            {/* Page Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
              <div>
                <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Store Settings</h1>
                <p className="text-slate-500">Manage your business details, operating hours, and payment configurations.</p>
              </div>
              {editMode ? (
                <>
                  <div className='flex felx-row gap-5'>
                    <button
                      onClick={() => setEditMode(false)}
                      className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-bold px-6 py-3 rounded-xl shadow-lg shadow-red-500/20 transition-all hover:-translate-y-0.5"
                    >
                      Cancel
                    </button>

                    <button
                      onClick={handleSave}
                      className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-bold px-6 py-3 rounded-xl shadow-lg shadow-red-500/20 transition-all hover:-translate-y-0.5"
                    >
                      <Save size={20} /> Save Changes
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <button
                    onClick={() => setEditMode(true)}
                    className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-bold px-6 py-3 rounded-xl shadow-lg shadow-red-500/20 transition-all hover:-translate-y-0.5"
                  >
                    <PenLine size={20} /> Edit Mode
                  </button>
                </>
              )}

            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

              {/* ========================================================= */}
              {/* LEFT COLUMN (Forms) */}
              {/* ========================================================= */}
              <GeneralInformation storeData={storeData} editMode = {editMode}/>

              {/* ========================================================= */}
              {/* RIGHT COLUMN (Store Status & Hours) */}
              {/* ========================================================= */}
              <StoreHours storeData={storeData} setStoreData={setStoreData} />

            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default StorePage