"use client";

import { useState, useEffect } from 'react';
import Preloader from './Preloader';

export default function ClientLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
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