"use client";

import { useState, useCallback } from 'react';
import Preloader from './Preloader';

export default function ClientLayout({ children }) {
  const [showPreloader, setShowPreloader] = useState(true);
  const handleComplete = useCallback(() => setShowPreloader(false), []);

  return (
    <>
      {showPreloader && <Preloader onComplete={handleComplete} />}
      <main className="relative z-10">{children}</main>
    </>
  );
}
