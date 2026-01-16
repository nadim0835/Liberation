import React from 'react';
import { FaImages, FaDownload } from 'react-icons/fa';

const Gallery = () => {
  return (
    <div className="min-h-screen mt-16  bg-gray-50">
      
      {/* Header */}
      <div className="bg-red-700 text-white py-6 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center">
            <FaImages className="text-3xl mr-3" />
            <div>
              <h1 className="text-2xl font-bold">মুক্তিযুদ্ধের ছবি</h1>
              <p className="text-red-200">১৯৭১ সালের ঐতিহাসিক মুহূর্ত</p>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white py-4 px-4 shadow">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2">
            <button className="px-4 py-2 bg-red-100 text-red-700 rounded-full font-medium">
              সব ছবি
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full font-medium">
              যুদ্ধক্ষেত্র
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full font-medium">
              মুক্তিযোদ্ধা
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full font-medium">
              বিজয় উৎসব
            </button>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="p-4 max-w-6xl  mx-auto">
        
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          
          {/* Photo 1 */}
          <div className="flex-1 bg-white rounded-lg shadow p-4">
            <div className="h-48 bg-red-100 rounded mb-3 flex items-center justify-center">
              <span className="text-red-700 font-bold"><img src="https://c.files.bbci.co.uk/50B8/production/_98546602_mediaitem98546601.jpg" alt="" /></span>
            </div>
            <h3 className="font-bold text-gray-800 mb-1">৭ই মার্চের ভাষণ</h3>
            <p className="text-gray-600 text-sm mb-3">১৯৭১ সালের ঐতিহাসিক ভাষণ</p>
            <button className="flex items-center text-red-600">
              <FaDownload className="mr-2" /> ডাউনলোড
            </button>
          </div>

          {/* Photo 2 */}
          <div className="flex-1 bg-white rounded-lg shadow p-4">
            <div className="h-48 bg-green-100 rounded mb-3 flex items-center justify-center">
              <span className="text-green-700 font-bold"><img src="https://www.womennews24.com/media/imgAll/2019January/1-%E0%A7%A8-2103141338.jpg" alt="" /></span>
            </div>
            <h3 className="font-bold text-gray-800 mb-1">মুক্তিবাহিনী</h3>
            <p className="text-gray-600 text-sm mb-3">যুদ্ধরত মুক্তিযোদ্ধা</p>
            <button className="flex items-center text-green-600">
              <FaDownload className="mr-2" /> ডাউনলোড
            </button>
          </div>

          {/* Photo 3 */}
          <div className="flex-1 bg-white rounded-lg shadow p-4">
            <div className="h-48 bg-blue-100 rounded mb-3 flex items-center justify-center">
              <span className="text-blue-700 font-bold"><img src="https://www.newsbangla24.com/assets/news_images/2021/12/15/06.webp" alt="" /></span>
            </div>
            <h3 className="font-bold text-gray-800 mt-6 mb-1">আত্মসমর্পণ দলিল</h3>
            <p className="text-gray-600 text-sm mb-3">১৬ ডিসেম্বর, ১৯৭১</p>
            <button className="flex items-center text-blue-600">
              <FaDownload className="mr-2" /> ডাউনলোড
            </button>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          
          {/* Photo 4 */}
          <div className="flex-1 bg-white rounded-lg shadow p-4">
            <div className="h-48 bg-yellow-100 rounded mb-3 flex items-center justify-center">
              <span className="text-yellow-700 font-bold"><img src="https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/4dc3/live/c635d3a0-0a16-11f0-94d4-6f954f5dcfa3.jpg.webp" alt="" /></span>
            </div>
            <h3 className="font-bold text-gray-800 mb-1">বিজয় দিবস</h3>
            <p className="text-gray-600 text-sm mb-3">রেসকোর্স ময়দান</p>
            <button className="flex items-center text-yellow-600">
              <FaDownload className="mr-2" /> ডাউনলোড
            </button>
          </div>

          {/* Photo 5 */}
          <div className="flex-1 bg-white rounded-lg shadow p-4">
            <div className="h-48 bg-purple-100 rounded mb-3 flex items-center justify-center">
              <span className="text-purple-700 font-bold"><img src="https://cdn.risingbd.com/media/imgAll/2023December/5464-2312180302.jpg" alt="" /></span>
            </div>
            <h3 className="font-bold text-gray-800 mb-1">শরণার্থী শিবির</h3>
            <p className="text-gray-600 text-sm mb-3">ভারতের সীমান্ত</p>
            <button className="flex items-center text-purple-600">
              <FaDownload className="mr-2" /> ডাউনলোড
            </button>
          </div>

          {/* Photo 6 */}
          <div className="flex-1 bg-white rounded-lg shadow p-4">
            <div className="h-48 bg-pink-100 rounded mb-3 flex items-center justify-center">
              <span className="text-pink-700 font-bold"><img src="https://assets.roar.media/Bangla/2017/12/bangladesh-field-hospital-1971-1200x15701.jpg?w=1200" alt="" /></span>
            </div>
            <h3 className="font-bold text-gray-800 mb-1">যুদ্ধাহত চিকিৎসা</h3>
            <p className="text-gray-600 text-sm mb-3">ফিল্ড হাসপাতাল</p>
            <button className="flex items-center text-pink-600">
              <FaDownload className="mr-2" /> ডাউনলোড
            </button>
          </div>
        </div>

      </div>

      {/* Zoom Info */}
      <div className="p-4 max-w-6xl mx-auto">
        <div className="bg-gray-100 rounded-lg p-6">
          <h3 className="font-bold text-gray-800 mb-3">ছবি দেখার নিয়ম</h3>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <h4 className="font-bold text-gray-700 mb-2">জুম করতে</h4>
              <p className="text-gray-600">ছবির উপর ক্লিক করে বড় দেখুন</p>
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-gray-700 mb-2">ডাউনলোড করতে</h4>
              <p className="text-gray-600">ডাউনলোড বাটনে ক্লিক করুন</p>
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-gray-700 mb-2">ক্যাটেগরি</h4>
              <p className="text-gray-600">উপরে বাটন থেকে নির্বাচন করুন</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Gallery;