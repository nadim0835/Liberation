import React from 'react';
import { FaFileAlt, FaCalendar, FaTag, FaDownload, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router';

const Documents = () => {
  return (
    <div className="min-h-screen md:mt-16 mt-10 bg-gray-50">
      
      {/* Header */}
      <div className="bg-red-700 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center">
            <FaFileAlt className="text-3xl mr-4" />
            <div>
              <h1 className="text-3xl font-bold">নথিপত্র সংগ্রহ</h1>
              <p className="text-red-100">মুক্তিযুদ্ধের ঐতিহাসিক দলিল ও নথি</p>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center bg-white px-4 py-2 rounded shadow">
              <FaTag className="text-red-600 mr-2" />
              <span className="font-bold">ঘোষণাপত্র</span>
            </div>
            <div className="flex items-center bg-white px-4 py-2 rounded shadow">
              <FaTag className="text-green-600 mr-2" />
              <span className="font-bold">চিঠিপত্র</span>
            </div>
            <div className="flex items-center bg-white px-4 py-2 rounded shadow">
              <FaTag className="text-blue-600 mr-2" />
              <span className="font-bold">সরকারি নথি</span>
            </div>
            <div className="flex items-center bg-white px-4 py-2 rounded shadow">
              <FaTag className="text-purple-600 mr-2" />
              <span className="font-bold">আত্মসমর্পণ দলিল</span>
            </div>
          </div>

          {/* Document List */}
          <div className="space-y-6">
            
            {/* Document 1 */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 p-3 rounded mr-4">
                  <FaFileAlt className="text-red-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">স্বাধীনতার ঘোষণাপত্র</h3>
                  <div className="flex items-center text-gray-600 mt-1">
                    <FaCalendar className="mr-2" /> ২৬ মার্চ, ১৯৭১
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                বাংলাদেশের স্বাধীনতা ঘোষণার আনুষ্ঠানিক দলিল। বঙ্গবন্ধু শেখ মুজিবুর রহমানের স্বাধীনতা ঘোষণা।
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center text-gray-600">
                  <FaTag className="mr-2" /> ঘোষণাপত্র
                </div>
                <button className="flex items-center text-red-600 font-bold">
                  <FaDownload className="mr-2" /> ডাউনলোড
                </button>
              </div>
            </div>

            {/* Document 2 */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded mr-4">
                  <FaFileAlt className="text-green-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">আত্মসমর্পণ দলিল</h3>
                  <div className="flex items-center text-gray-600 mt-1">
                    <FaCalendar className="mr-2" /> ১৬ ডিসেম্বর, ১৯৭১
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                পাকিস্তানি বাহিনীর আত্মসমর্পণের আনুষ্ঠানিক দলিল। ঐতিহাসিক রেসকোর্স ময়দানে স্বাক্ষরিত।
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center text-gray-600">
                  <FaTag className="mr-2" /> আত্মসমর্পণ দলিল
                </div>
                <button className="flex items-center text-red-600 font-bold">
                  <FaDownload className="mr-2" /> ডাউনলোড
                </button>
              </div>
            </div>

            {/* Document 3 */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded mr-4">
                  <FaFileAlt className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">যুদ্ধবন্দী বিনিময় চুক্তি</h3>
                  <div className="flex items-center text-gray-600 mt-1">
                    <FaCalendar className="mr-2" /> ১৯৭২
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                ভারত-পাকিস্তান যুদ্ধবন্দী বিনিময় চুক্তি। সিমলা চুক্তির পূর্ববর্তী গুরুত্বপূর্ণ দলিল।
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center text-gray-600">
                  <FaTag className="mr-2" /> চুক্তিপত্র
                </div>
                <button className="flex items-center text-red-600 font-bold">
                  <FaDownload className="mr-2" /> ডাউনলোড
                </button>
              </div>
            </div>

            {/* Document 4 */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 p-3 rounded mr-4">
                  <FaFileAlt className="text-purple-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">মুজিবনগর সরকারের আদেশ</h3>
                  <div className="flex items-center text-gray-600 mt-1">
                    <FaCalendar className="mr-2" /> ১৭ এপ্রিল, ১৯৭১
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                মুজিবনগর সরকারের প্রথম আদেশ ও নির্দেশনা। অস্থায়ী বাংলাদেশ সরকারের কার্যক্রম।
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center text-gray-600">
                  <FaTag className="mr-2" /> সরকারি নথি
                </div>
                <button className="flex items-center text-red-600 font-bold">
                  <FaDownload className="mr-2" /> ডাউনলোড
                </button>
              </div>
            </div>
          </div>

          {/* Source Info */}
          <div className="mt-12 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
            <h3 className="font-bold text-gray-800 mb-3">তথ্যসূত্র</h3>
            <p className="text-gray-700">
              সকল নথি বাংলাদেশ জাতীয় আর্কাইভ, মুক্তিযুদ্ধ জাদুঘর ও সরকারি সংগ্রহ থেকে সংগৃহীত। 
              প্রতিটি দলিলের সত্যতা যাচাইকৃত।
            </p>
          </div>

          {/* Back Button */}
          <div className="mt-8">
            <Link to={`/`} className="flex items-center  text-red-600 font-bold">
              <FaArrowLeft className="mr-2  " /> হোমপেজে ফিরুন
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documents;