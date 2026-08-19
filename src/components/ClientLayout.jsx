"use client";

import { useState, useEffect } from 'react';
import Preloader from './Preloader';

export default function ClientLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // দুটি কন্ডিশন চেক করার জন্য ভেরিয়েবল
    let isMinimumTimeElapsed = false;
    let isPageLoaded = false;

    const removeLoader = () => {
      // যখন পেজ পুরোপুরি লোড হবে এবং ন্যূনতম ১.৫ সেকেন্ড পার হবে, তখনই লোডার সরবে
      if (isMinimumTimeElapsed && isPageLoaded) {
        setLoading(false);
      }
    };

    // ১. ন্যূনতম ডিসপ্লে টাইম (১.৫ সেকেন্ড)
    const minTimer = setTimeout(() => {
      isMinimumTimeElapsed = true;
      removeLoader();
    }, 1500); // অ্যানিমেশনটি দেখার জন্য এই সময়টি বাড়িয়ে ২ বা ৩ সেকেন্ডও (2000/3000) করতে পারেন

    // ২. ব্রাউজারের আসল লোড ইভেন্ট (ছবি, ফন্ট, সিএসএস সব লোড হওয়া পর্যন্ত)
    const handlePageLoad = () => {
      isPageLoaded = true;
      removeLoader();
    };

    // পেজ যদি আগে থেকেই লোড হয়ে থাকে (যেমন ব্যাক বাটনে ক্লিক করলে)
    if (document.readyState === 'complete') {
      isPageLoaded = true;
      removeLoader();
    } else {
      // নাহলে রিয়েল-টাইম লোড ইভেন্টের জন্য অপেক্ষা করবে
      window.addEventListener('load', handlePageLoad);
    }

    // ক্লিনআপ ফাংশন
    return () => {
      clearTimeout(minTimer);
      window.removeEventListener('load', handlePageLoad);
    };
  }, []);

  return (
    <>
      {loading && <Preloader />}
      
      <main className={`relative z-10 transition-opacity duration-700 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        {children}
      </main>
      
    </>
  );
}