import React from 'react'
import { useState } from 'react'
import CustomerNavbar from '../Components/CustomerNavbar'
import { User, Save} from 'lucide-react'

import ProfileHero from './Components/ProfileHero'
import EditModal from './Components/EditModal'
import UserDetails from './Components/UserDetails'



function AccountPage({ cartData }) {
  const [userEdit, setUserEdit] = useState(false);

  const sampleData = [{
    userID: '1',
    Status: 'Member',
    FirstName: 'Kurt Gabriel',
    LastName: 'Anduque',
    Email: 'anduquekurt@gmail.com',
    PhoneNumber: '09687929730',
    Address: [{
      addressID : '1',
      Street: '49 Int. Tomas Morato',
      Barangay: 'Brgy. Kristong Hari',
      City: 'Quezon City',
      Region: 'Metro Manila',
      ZipCode: '1112',
    }],
  }]

  return (

    <div className='bg-zinc-950 flex flex-col min-h-screen font-sans'>
      {/*Import Navigation Bar*/}
      <CustomerNavbar cartData={cartData}/>

      <div className='max-w-7xl mx-auto px-4 py-12 md:py-20 flex-grow w-full'>

        {/*Profile Hero page in this part*/}
        <ProfileHero
          sampleData={sampleData}
        />


        {/*Profile Details*/}
        <div className=' col-span-2 flex flex-col'>
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center gap-3 mb-8 border-b border-zinc-800 pb-4">
              <User className="text-red-500" size={32} />
              <h2 className="text-2xl text-white font-bold">Profile Details</h2>
            </div>



            <div className="flex flex-col gap-6">

              <UserDetails
                sampleData={sampleData}
              />


              {/* Save Button */}
              <div className="flex justify-end mt-4">
                <button className="flex items-center gap-2 bg-red-500 text-white font-bold py-3 px-8 rounded-xl hover:bg-red-600 hover:-translate-y-1 hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300"
                  onClick={() => setUserEdit(true)}
                >
                  <Save size={24} />
                  Edit Profile
                </button>
              </div>


            </div>

            {/* Create Modal if user Click the edit button*/}
            {userEdit && (
              <EditModal
                sampleData={sampleData}
                closeModal={() => setUserEdit(false)}
              />
            )}

          </div>
        </div>
      </div>
    </div>

  )

}

export default AccountPage

