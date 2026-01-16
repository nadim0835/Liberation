import React from 'react';
import { FaEnvelope, FaUser, FaPhone, FaMapMarker, FaPaperPlane, FaUpload } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="min-h-screen mt-16 bg-gray-50">
      
      {/* Header */}
      <div className="bg-purple-700 text-white py-6 px-4">
        <div className="flex items-center max-w-6xl mx-auto">
          <FaEnvelope className="text-2xl mr-3" />
          <h1 className="text-2xl font-bold">যোগাযোগ করুন</h1>
        </div>
      </div>

      <div className="p-4 max-w-6xl mx-auto">
        
        {/* Contact Info */}
        <div className="bg-white rounded shadow p-4 mb-6">
          <h2 className="font-bold text-gray-800 mb-4">আমাদের ঠিকানা</h2>
          
          <div className="space-y-4">
            <div className="flex items-center">
              <FaMapMarker className="text-red-600 mr-3" />
              <div>
                <p className="font-bold">মুক্তিযুদ্ধ আর্কাইভ</p>
                <p className="text-gray-600">ঢাকা, বাংলাদেশ</p>
              </div>
            </div>

            <div className="flex items-center">
              <FaEnvelope className="text-blue-600 mr-3" />
              <div>
                <p className="font-bold">ইমেইল</p>
                <p className="text-gray-600">archive@muktijuddho.gov.bd</p>
              </div>
            </div>

            <div className="flex items-center">
              <FaPhone className="text-green-600 mr-3" />
              <div>
                <p className="font-bold">ফোন</p>
                <p className="text-gray-600">+৮৮০ ২ ৫৫৫৫ ১২৩৪</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded shadow p-4">
          <h2 className="font-bold text-gray-800 mb-4">বার্তা পাঠান</h2>
          
          <form className="space-y-4">
            
            <div>
              <div className="flex items-center mb-2">
                <FaUser className="text-gray-600 mr-2" />
                <label className="text-gray-700">আপনার নাম</label>
              </div>
              <input 
                type="text" 
                className="w-full border border-gray-300 rounded p-2"
                placeholder="নাম লিখুন"
              />
            </div>

            <div>
              <div className="flex items-center mb-2">
                <FaEnvelope className="text-gray-600 mr-2" />
                <label className="text-gray-700">ইমেইল ঠিকানা</label>
              </div>
              <input 
                type="email" 
                className="w-full border border-gray-300 rounded p-2"
                placeholder="ইমেইল লিখুন"
              />
            </div>

            <div>
              <div className="flex items-center mb-2">
                <FaPhone className="text-gray-600 mr-2" />
                <label className="text-gray-700">বিষয়</label>
              </div>
              <input 
                type="text" 
                className="w-full border border-gray-300 rounded p-2"
                placeholder="বার্তার বিষয়"
              />
            </div>

            <div>
              <label className="text-gray-700 block mb-2">বার্তা</label>
              <textarea 
                rows="4"
                className="w-full border border-gray-300 rounded p-2"
                placeholder="আপনার বার্তা লিখুন..."
              />
            </div>

            <div>
              <div className="flex items-center mb-2">
                <FaUpload className="text-gray-600 mr-2" />
                <label className="text-gray-700">ফাইল আপলোড (ঐচ্ছিক)</label>
              </div>
              <input 
                type="file" 
                className="w-full border border-gray-300 rounded p-2"
              />
              <p className="text-gray-500 text-sm mt-1">ছবি বা নথি আপলোড করতে পারেন</p>
            </div>

            <button className="flex items-center justify-center bg-purple-600 text-white w-full py-3 rounded font-bold">
              <FaPaperPlane className="mr-2" /> পাঠান
            </button>

          </form>
        </div>

        {/* Note */}
        <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded p-4">
          <p className="text-gray-700">
            আপনার কাছে থাকা মুক্তিযুদ্ধ সংক্রান্ত যেকোনো নথি, ছবি বা তথ্য আমাদের সাথে শেয়ার করতে পারেন। 
            আমরা তা আর্কাইভে সংরক্ষণ করব।
          </p>
        </div>

      </div>
    </div>
  );
};

export default Contact;