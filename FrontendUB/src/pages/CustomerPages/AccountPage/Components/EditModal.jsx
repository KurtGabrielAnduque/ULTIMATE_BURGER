import React from 'react'
import { Tag, X } from 'lucide-react'
import { useState } from 'react';
import axios from 'axios';

{/*
    Future Update:
    - show a success modal after success updating the user profile
        - lower the value of z in the model so you can add this new modal of showing success

    - of course auth you will not user the user id anymore last part of project journey
    */}


function EditModal({ closeModal, userData, loadUser }) {
    // We grab the first user and their first address from your sample array
    
    const address = userData.address[0];

    // Data fields
    const [firstName, setFirstName] = useState(userData.first_name);
    const [lastName, setLastName] = useState(userData.last_name);
    const [email, setEmail] = useState(userData.email);
    const [phone, setPhone] = useState(userData.contact_number);
    const [street, setStreet] = useState(address.street);
    const [barangay, setBarangay] = useState(address.barangay);
    const [city, setCity] = useState(address.city);
    const [region, setRegion] = useState(address.region);
    const [zipCode, setZipCode] = useState(address.zip_code);


    const payLoadFormat = () => {

        const payload = {
            first_name : firstName,
            last_name : lastName,
            email : email,
            contact_number: phone,
            address: [{
                street : street,
                barangay : barangay,
                city : city,
                region : region,
                zip_code : zipCode
            }]
        }

        console.log(JSON.stringify(payload, null, 2))
        return payload
    }


    const updateUserProfile = async () => {
        const payLoad = payLoadFormat();

        try{
            await axios.put('http://127.0.0.1:8000/user/profile/1/', payLoad) // it supposed to be a user id 
            // but now lets keep it to 1 since we are using proxy
            await loadUser();
            closeModal();
            console.log('Success Update');
        }catch (error){
            console.log(error.response?.data);
        }
    }

    return (
        <div className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4 sm:p-6 backdrop-blur-sm animate-in fade-in duration-200">

            {/* The Main Modal Container */}
            {/* Changed from 2-column Shopee style to a centered 1-column Dashboard style */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl max-w-3xl w-full max-h-[90vh] shadow-2xl flex flex-col overflow-hidden">

                {/* Header Area */}
                <div className="flex justify-between items-center p-6 sm:p-8 border-b border-zinc-800 shrink-0">
                    <h2 className="text-2xl font-bold text-white">Edit Profile</h2>
                    <button
                        onClick={closeModal}
                        className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-full transition-colors"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* THE FORM */}
                <form
                    className="flex flex-col h-full overflow-hidden"
                    onSubmit={(e) => {
                        e.preventDefault();
                        updateUserProfile();
                    }}
                >
                    {/* Scrollable Input Area */}
                    <div className="p-6 sm:p-8 overflow-y-auto flex-grow space-y-8">

                        {/* 1. Personal Info Section */}
                        <div>
                            <h3 className="text-red-500 font-bold mb-5 uppercase tracking-wider text-sm">Personal Information</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div className="flex flex-col gap-2">
                                    <label className="text-zinc-400 text-sm font-bold ml-1">First Name</label>
                                    <input
                                        type="text"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        defaultValue={userData.first_name}
                                        placeholder='First Name'
                                        required
                                        className="bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 rounded-xl px-4 py-3 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-zinc-400 text-sm font-bold ml-1">Last Name</label>
                                    <input
                                        type="text"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        defaultValue={userData.last_name}
                                        placeholder='Last Name'
                                        required
                                        className="bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 rounded-xl px-4 py-3 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-zinc-400 text-sm font-bold ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        value = {email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        defaultValue={userData.email}
                                        placeholder='user@gmail.com'
                                        required
                                        className="bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 rounded-xl px-4 py-3 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-zinc-400 text-sm font-bold ml-1">Phone Number</label>
                                    <input
                                        type="tel"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        defaultValue={userData.contact_number}
                                        placeholder='09123456789'
                                        pattern="[0]{1}[9]{1}[0-9]{9}"
                                        required
                                        className="bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 rounded-xl px-4 py-3 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all" />
                                </div>
                            </div>
                        </div>

                        <hr className="border-zinc-800" />

                        {/* 2. Address Section */}
                        <div>
                            <h3 className="text-red-500 font-bold mb-5 uppercase tracking-wider text-sm">Delivery Address</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div className="flex flex-col gap-2 sm:col-span-2">
                                    <label className="text-zinc-400 text-sm font-bold ml-1">Street / Building</label>
                                    <input
                                        type="text"
                                        value={street}
                                        onChange={(e) => setStreet(e.target.value)}
                                        defaultValue={address.street}
                                        placeholder='Street'
                                        required
                                        className="bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 rounded-xl px-4 py-3 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-zinc-400 text-sm font-bold ml-1">Barangay</label>
                                    <input
                                        type="text"
                                        value={barangay}
                                        onChange={(e) => setBarangay(e.target.value)}
                                        defaultValue={address.barangay}
                                        placeholder='Barangay'
                                        required
                                        className="bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 rounded-xl px-4 py-3 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-zinc-400 text-sm font-bold ml-1">City</label>
                                    <input
                                        type="text"
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                        defaultValue={address.city}
                                        placeholder='City'
                                        required
                                        className="bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 rounded-xl px-4 py-3 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-zinc-400 text-sm font-bold ml-1">Region</label>
                                    <input
                                        type="text"
                                        value={region}
                                        onChange={(e) => setRegion(e.target.value)}
                                        defaultValue={address.region}
                                        placeholder='Region'
                                        required
                                        className="bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 rounded-xl px-4 py-3 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-zinc-400 text-sm font-bold ml-1">Zip Code</label>
                                    <input
                                        type="text"
                                        value={zipCode}
                                        onChange={(e) => setZipCode(e.target.value)}
                                        defaultValue={address.zip_code}
                                        placeholder='Zip Code'
                                        maxLength={4}
                                        required
                                        className="bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 rounded-xl px-4 py-3 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all" />
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Sticky Footer */}
                    <div className="p-6 sm:p-8 border-t border-zinc-800 bg-zinc-900 shrink-0">
                        <div className="flex gap-4 justify-end">
                            {/* Notice type="button" here so it doesn't trigger the form submit */}
                            <button
                                type="button"
                                onClick={closeModal}
                                className="px-6 py-3 rounded-xl font-bold text-white bg-zinc-800 hover:bg-zinc-700 transition-colors"
                            >
                                Cancel
                            </button>

                            {/* Notice type="submit" here! */}
                            <button
                                type="submit"
                                className="px-8 py-3 rounded-xl font-bold text-white bg-red-500 hover:bg-red-600 transition-all duration-300 shadow-lg shadow-red-500/20 hover:-translate-y-1"
                            >
                                Save Changes
                            </button>
                        </div>
                    </div>

                </form>

            </div>
        </div>
    );
}

export default EditModal;