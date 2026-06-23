import React from 'react'
import { Pin, User, Mail, Phone, MapPin } from 'lucide-react'
import { Fragment } from 'react';


function UserDetails({ sampleData, openEdit }) {



    return (
        <>
            {sampleData.map((user) => {
                return (
                    <Fragment key={user.userID}>

                        {/* Name Row */}
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                            <div className='flex flex-col gap-2'>
                                <label className="text-zinc-400 text-sm font-bold ml-1 uppercase tracking-wider">First Name</label>
                                <div className='relative'>
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={24} />
                                    <p className='w-full bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 rounded-xl pl-14 pr-4 py-3 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all'>
                                        {user.FirstName}
                                    </p>
                                </div>

                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className="text-zinc-400 text-sm font-bold ml-1 uppercase tracking-wider">Last Name</label>
                                <p className='w-full bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 rounded-xl pl-14 pr-4 py-3 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all'>
                                    {user.LastName}
                                </p>
                            </div>
                        </div>

                        {/* Contact Info Row */}
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 pb-5'>
                            <div className='flex flex-col gap-2'>
                                <label className="text-zinc-400 text-sm font-bold ml-1 uppercase tracking-wider">Email Address</label>
                                <div className="relative">

                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={24} />
                                    <p className='w-full bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 rounded-xl pl-14 pr-4 py-3 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all'>
                                        {user.Email}
                                    </p>
                                </div>
                            </div>

                            <div className='flex flex-col gap-2'>
                                <label className="text-zinc-400 text-sm font-bold ml-1 uppercase tracking-wider">Phone Number</label>
                                <div className="relative">
                                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={24} />
                                    <p className='w-full bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 rounded-xl pl-14 pr-4 py-3 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all'>
                                        {user.PhoneNumber}
                                    </p>
                                </div>
                            </div>
                        </div>




                        <div className="flex items-center gap-3 mb-1 border-b border-zinc-800 pb-4">
                            <Pin className="text-red-500" size={32} />
                            <h2 className="text-2xl text-white font-bold">Saved Address</h2>
                        </div>

                        {/**/}

                        {/* Single Address Item */}
                        <div className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 p-6 transition-all duration-300 hover:border-red-500/40 hover:shadow-lg hover:shadow-red-500/10 hover:-translate-y-1">

                            {/* left accent */}
                            <div className="absolute left-0 top-0 h-full w-1 bg-red-500"></div>

                            <div className="flex justify-between items-start">

                                <div>

                                    <div className="flex items-center gap-2 mb-5">

                                        <span className="bg-red-500/15 text-red-400 border border-red-500/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                            Home
                                        </span>

                                        <span className="bg-green-500/15 text-green-400 border border-green-500/20 px-3 py-1 rounded-full text-xs font-bold">
                                            Default
                                        </span>

                                    </div>

                                    {user.Address.map((useraddress) => {
                                        return (
                                            <div key={useraddress.addressID} className="flex gap-4">

                                                <div className="mt-1">
                                                    <MapPin className="text-red-500" size={22} />
                                                </div>

                                                <div className="space-y-1">

                                                    <p className="text-lg font-semibold text-white">
                                                        {useraddress.Street}
                                                    </p>

                                                    <p className="text-zinc-400">
                                                        {useraddress.Barangay}
                                                    </p>

                                                    <p className="text-zinc-400">
                                                        {`${useraddress.City}, ${useraddress.Region} ${useraddress.ZipCode}`}
                                                    </p>

                                                </div>

                                            </div>
                                        );
                                    })}

                                </div>
                            </div>

                        </div>
                        {/**/}


                    </Fragment>
                );
            })

            }
        </>
    )
}

export default UserDetails