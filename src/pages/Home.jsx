import React from 'react';
import { FaFlag, FaFileAlt, FaMicrophone, FaImages, FaCalendarAlt, FaHistory } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen md:mt-16 mt-10 bg-gray-50">
      
      {/* Hero Section - Introduction */}
      <div className="bg-linear-to-r from-red-700 to-red-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            
            {/* Left Side - Text */}
            <div className="md:w-2/3 mb-12 md:mb-0">
              <div className="flex items-center mb-6">
                <FaFlag className="text-yellow-400 text-4xl mr-4" />
                <h1 className="text-4xl md:text-5xl font-bold">
                  মুক্তিযুদ্ধ আর্কাইভ
                </h1>
              </div>
              
              <h2 className="text-2xl text-yellow-200 mb-6">
                বাংলাদেশের গৌরবময় মুক্তিযুদ্ধের ইতিহাস সংরক্ষণ
              </h2>
              
              <p className="text-lg text-red-100 mb-8">
                এই ডিজিটাল আর্কাইভ বাংলাদেশের মুক্তিযুদ্ধের ইতিহাস, নথিপত্র, সাক্ষাৎকার এবং ছবি সংরক্ষণের জন্য তৈরি করা হয়েছে। 
                ১৯৭১ সালের মহান মুক্তিযুদ্ধের সঠিক ইতিহাস ও স্মৃতি নতুন প্রজন্মের কাছে পৌঁছে দেওয়া আমাদের মূল লক্ষ্য।
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/documents" className="bg-yellow-400 text-red-800 px-6 py-3 rounded-lg font-bold hover:bg-yellow-300">
                  <FaFileAlt className="inline mr-2" /> নথিপত্র দেখুন
                </Link>
                <Link to="/gallery" className="border-2 border-yellow-400 text-yellow-400 px-6 py-3 rounded-lg font-bold hover:bg-red-900">
                  <FaImages className="inline mr-2" /> ছবির গ্যালারি
                </Link>
              </div>
            </div>

            {/* Right Side - Symbol */}
            <div className="md:w-1/3 flex justify-center">
              <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center shadow-2xl">
                <FaHistory className="text-red-700 text-8xl" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Sections */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            <FaCalendarAlt className="inline mr-3 text-red-600" />
            গুরুত্বপূর্ণ সংগ্রহসমূহ
          </h2>
          
          <div className="flex flex-col md:flex-row gap-8">
            
            {/* Featured Documents */}
            <div className="flex-1 bg-white rounded-xl shadow-lg p-8 border-t-4 border-red-600">
              <div className="flex items-center mb-6">
                <div className="bg-red-100 p-3 rounded-lg mr-4">
                  <FaFileAlt className="text-red-600 text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">নথিপত্র</h3>
              </div>
              <p className="text-gray-700 mb-6">
                মুক্তিযুদ্ধের গুরুত্বপূর্ণ দলিল, ঘোষণাপত্র, চিঠিপত্র এবং সরকারি নথির সংগ্রহ। 
                স্বাধীনতার ঘোষণাপত্র, আত্মসমর্পণ দলিলসহ ঐতিহাসিক নথি।
              </p>
              <Link to="/documents" className="text-red-600 font-bold flex items-center">
                সকল নথি দেখুন →
              </Link>
            </div>

            {/* Featured Interviews */}
            <div className="flex-1 bg-white rounded-xl shadow-lg p-8 border-t-4 border-green-600">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <FaMicrophone className="text-green-600 text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">সাক্ষাৎকার</h3>
              </div>
              <p className="text-gray-700 mb-6">
                মুক্তিযোদ্ধা, বীরাঙ্গনা, শহীদের পরিবার এবং প্রত্যক্ষদর্শীদের সাক্ষাৎকারের সংগ্রহ। 
                সরাসরি কথোপকথনের মাধ্যমে ইতিহাসের জীবন্ত দলিল।
              </p>
              <Link to="/interviews" className="text-green-600 font-bold flex items-center">
                সকল সাক্ষাৎকার দেখুন →
              </Link>
            </div>

            {/* Featured Photos */}
            <div className="flex-1 bg-white rounded-xl shadow-lg p-8 border-t-4 border-blue-600">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <FaImages className="text-blue-600 text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">ছবির সংগ্রহ</h3>
              </div>
              <p className="text-gray-700 mb-6">
                ১৯৭১ সালের ঐতিহাসিক মুহূর্তের অসংখ্য দুর্লভ ছবি। যুদ্ধক্ষেত্র, শরণার্থী শিবির, 
                বিজয়ের মুহূর্তসহ গুরুত্বপূর্ণ সকল ঘটনার আলোকচিত্র।
              </p>
              <Link to="/gallery" className="text-blue-600 font-bold flex items-center">
                ছবির গ্যালারি দেখুন →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Significance Section */}
      <div className="bg-red-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-red-800 mb-12">
            বাংলাদেশের ইতিহাসে গুরুত্ব
          </h2>
          
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 flex justify-center">
                <div className="w-32 h-32 bg-red-100 rounded-full flex items-center justify-center">
                  <FaFlag className="text-red-600 text-5xl" />
                </div>
              </div>
              
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  কেন এই আর্কাইভ গুরুত্বপূর্ণ?
                </h3>
                
                <div className="space-y-4 text-gray-700">
                  <p className="flex items-start">
                    <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">১</span>
                    <span>মুক্তিযুদ্ধের সঠিক ইতিহাস সংরক্ষণ ও প্রজন্মান্তরে বাহন করা</span>
                  </p>
                  
                  <p className="flex items-start">
                    <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">২</span>
                    <span>গবেষক, শিক্ষার্থী ও ইতিহাস অনুরাগীদের জন্য নির্ভরযোগ্য তথ্যভাণ্ডার তৈরি</span>
                  </p>
                  
                  <p className="flex items-start">
                    <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">৩</span>
                    <span>মুক্তিযুদ্ধের শহীদ ও বীরদের স্মৃতি চিরস্মরণীয় করে রাখা</span>
                  </p>
                  
                  <p className="flex items-start">
                    <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">৪</span>
                    <span>ইতিহাস বিকৃতি রোধে মূল দলিল ও সাক্ষ্যের সংগ্রহ প্রদান</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-linear-to-r from-green-700 to-green-800 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">
            মুক্তিযুদ্ধের ইতিহাস সংরক্ষণে অংশ নিন
          </h2>
          <p className="text-green-100 mb-8 text-lg">
            আপনার কাছে থাকা যেকোনো দলিল, সাক্ষাৎকার বা ছবি আমাদের সাথে শেয়ার করুন
          </p>
          <Link to="/contact" className="inline-block bg-white text-green-800 px-10 py-3 rounded-lg font-bold text-lg hover:bg-gray-100">
            যোগাযোগ করুন
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;