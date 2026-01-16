import React from 'react';
import { FaMicrophone, FaUser, FaCalendar, FaPlay, FaHeadphones } from 'react-icons/fa';
import { Link } from 'react-router';

const Interviews = () => {
  return (
    <div className="min-h-screen md:mt-16 mt-10 bg-gray-50">
      
      {/* Header */}
      <div className="bg-green-700 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center">
            <FaMicrophone className="text-3xl mr-4" />
            <div>
              <h1 className="text-3xl font-bold">সাক্ষাৎকার সংগ্রহ</h1>
              <p className="text-green-100">মুক্তিযুদ্ধের প্রত্যক্ষদর্শীদের কথা</p>
            </div>
          </div>
        </div>
      </div>

      {/* Interviews List */}
      <div className="py-8 px-4">
        <div className="max-w-7xl mx-auto space-y-6">
          
          {/* Interview 1 */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex flex-col md:flex-row items-start">
              
              {/* Left - Person Info */}
              <div className="md:w-1/3 mb-6 md:mb-0 md:mr-6">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <FaUser className="text-green-600 text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">মুক্তিযোদ্ধা আবদুল করিম</h3>
                    <div className="flex items-center text-gray-600 text-sm mt-1">
                      <FaCalendar className="mr-1" /> সাক্ষাৎকার: ২০২০
                    </div>
                  </div>
                </div>
                <div className="bg-green-50 p-4 rounded">
                  <h4 className="font-bold text-gray-800 mb-2">জীবনী</h4>
                  <p className="text-gray-700 text-sm">
                    ৭ নং সেক্টরে যুদ্ধ করেছেন। আহত হয়েছিলেন যশোর সীমান্তে। বর্তমানে মুক্তিযোদ্ধা কল্যাণ ট্রাস্টের সাথে যুক্ত।
                  </p>
                </div>
              </div>

              {/* Right - Interview */}
              <div className="md:w-2/3">
                <h4 className="font-bold text-gray-800 mb-3">সাক্ষ্যপ্রমাণ</h4>
                <p className="text-gray-700 mb-6">
                  "আমরা যখন প্রথম যুদ্ধে যাই, তখন আমাদের কাছে শুধু দেশপ্রেম ছাড়া কিছুই ছিল না। 
                  যশোর সীমান্তের সেই যুদ্ধের কথা আজও মনে পড়ে। পাকিস্তানি সেনারা আমাদের গ্রামে আগুন দিয়েছিল..."
                </p>
                
                {/* Audio Player */}
                <div className="bg-gray-100 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <FaHeadphones className="text-green-600 mr-2" />
                      <span className="font-bold">অডিও সাক্ষাৎকার</span>
                    </div>
                    <span className="text-gray-600 text-sm">দৈর্ঘ্য: ৪৫ মিনিট</span>
                  </div>
                  <button className="flex items-center bg-green-600 text-white px-6 py-2 rounded font-bold">
                    <FaPlay className="mr-2" /> শুনুন
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Interview 2 */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex flex-col md:flex-row items-start">
              
              <div className="md:w-1/3 mb-6 md:mb-0 md:mr-6">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <FaUser className="text-blue-600 text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">বীরাঙ্গনা সেলিনা বেগম</h3>
                    <div className="flex items-center text-gray-600 text-sm mt-1">
                      <FaCalendar className="mr-1" /> সাক্ষাৎকার: ২০১৯
                    </div>
                  </div>
                </div>
                <div className="bg-blue-50 p-4 rounded">
                  <h4 className="font-bold text-gray-800 mb-2">জীবনী</h4>
                  <p className="text-gray-700 text-sm">
                    মুক্তিযুদ্ধের সময় ময়মনসিংহে ছিলেন। যুদ্ধপরবর্তী সময়ে নারী পুনর্বাসনে কাজ করছেন।
                  </p>
                </div>
              </div>

              <div className="md:w-2/3">
                <h4 className="font-bold text-gray-800 mb-3">সাক্ষ্যপ্রমাণ</h4>
                <p className="text-gray-700 mb-6">
                  "১৯৭১ সালের সেই ভয়ংকর দিনগুলো ভুলবার নয়। আমাদের গ্রামে যখন হানাদার বাহিনী এসেছিল, 
                  তখন আমরা জঙ্গলে লুকিয়ে ছিলাম। অনেক নারীসহ আমি অপহৃত হয়েছিলাম..."
                </p>
                
                <div className="bg-gray-100 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <FaHeadphones className="text-blue-600 mr-2" />
                      <span className="font-bold">ভিডিও সাক্ষাৎকার</span>
                    </div>
                    <span className="text-gray-600 text-sm">দৈর্ঘ্য: ১ ঘণ্টা</span>
                  </div>
                  <button className="flex items-center bg-blue-600 text-white px-6 py-2 rounded font-bold">
                    <FaPlay className="mr-2" /> দেখুন
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Interview 3 */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex flex-col md:flex-row items-start">
              
              <div className="md:w-1/3 mb-6 md:mb-0 md:mr-6">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <FaUser className="text-purple-600 text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">শহীদ পরিবারের সদস্য</h3>
                    <div className="flex items-center text-gray-600 text-sm mt-1">
                      <FaCalendar className="mr-1" /> সাক্ষাৎকার: ২০২১
                    </div>
                  </div>
                </div>
                <div className="bg-purple-50 p-4 rounded">
                  <h4 className="font-bold text-gray-800 mb-2">জীবনী</h4>
                  <p className="text-gray-700 text-sm">
                    বাবা ছিলেন মুক্তিযোদ্ধা এবং শহীদ। যুদ্ধের সময় মাত্র ১০ বছর বয়স ছিল।
                  </p>
                </div>
              </div>

              <div className="md:w-2/3">
                <h4 className="font-bold text-gray-800 mb-3">সাক্ষ্যপ্রমাণ</h4>
                <p className="text-gray-700 mb-6">
                  "আমার বাবা শেষবার বাড়ি এসেছিলেন ১৯৭১ সালের নভেম্বরে। তিনি বলেছিলেন, 'দেশ স্বাধীন না হলে ফিরব না।' 
                  তিনি আর ফিরেননি। বাবাকে হারানোর বেদনা আজও বয়ে বেড়াচ্ছি..."
                </p>
                
                <div className="bg-gray-100 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <FaHeadphones className="text-purple-600 mr-2" />
                      <span className="font-bold">অডিও সাক্ষাৎকার</span>
                    </div>
                    <span className="text-gray-600 text-sm">দৈর্ঘ্য: ৩০ মিনিট</span>
                  </div>
                  <button className="flex items-center bg-purple-600 text-white px-6 py-2 rounded font-bold">
                    <FaPlay className="mr-2" /> শুনুন
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Interview 4 */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex flex-col md:flex-row items-start">
              
              <div className="md:w-1/3 mb-6 md:mb-0 md:mr-6">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <FaUser className="text-red-600 text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">যুদ্ধ সাংবাদিক</h3>
                    <div className="flex items-center text-gray-600 text-sm mt-1">
                      <FaCalendar className="mr-1" /> সাক্ষাৎকার: ২০১৮
                    </div>
                  </div>
                </div>
                <div className="bg-red-50 p-4 rounded">
                  <h4 className="font-bold text-gray-800 mb-2">জীবনী</h4>
                  <p className="text-gray-700 text-sm">
                    মুক্তিযুদ্ধের সময় বিদেশি সংবাদমাধ্যমের সাথে কাজ করেছেন। যুদ্ধক্ষেত্র থেকে সরাসরি সংবাদ পাঠাতেন।
                  </p>
                </div>
              </div>

              <div className="md:w-2/3">
                <h4 className="font-bold text-gray-800 mb-3">সাক্ষ্যপ্রমাণ</h4>
                <p className="text-gray-700 mb-6">
                  "আমি নিজ চোখে দেখেছি কিভাবে সাধারণ মানুষ অস্ত্র হাতে নিয়েছে। 
                  মুক্তিবাহিনীর তরুণ যোদ্ধাদের আগ্রহ ও দেশপ্রেম ছিল অবিশ্বাস্য। 
                  তাদের সাথে前线 ঘুরে বেড়ানোর অভিজ্ঞতা আমার জীবনের সবচেয়ে মূল্যবান স্মৃতি..."
                </p>
                
                <div className="bg-gray-100 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <FaHeadphones className="text-red-600 mr-2" />
                      <span className="font-bold">ভিডিও সাক্ষাৎকার</span>
                    </div>
                    <span className="text-gray-600 text-sm">দৈর্ঘ্য: ৫০ মিনিট</span>
                  </div>
                  <Link to={`https://www.youtube.com/shorts/RX1z86MLEgA`} className="flex  items-center bg-red-600 text-white px-6 py-2 rounded font-bold">
                    <FaPlay className="mr-2" /> দেখুন
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Interviews;