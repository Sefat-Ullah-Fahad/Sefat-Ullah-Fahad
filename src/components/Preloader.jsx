import { useState, useEffect } from 'react';
import { Dancing_Script } from 'next/font/google';

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['700'],
  display: 'swap',
});

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const removeLoader = () => {
      setIsFading(true);
      setTimeout(() => setIsVisible(false), 600);
    };

    if (document.readyState === 'complete') {
      const minTimer = setTimeout(removeLoader, 1800);
      return () => clearTimeout(minTimer);
    } else {
      window.addEventListener('load', removeLoader);
      const fallbackTimer = setTimeout(removeLoader, 3500);
      return () => {
        window.removeEventListener('load', removeLoader);
        clearTimeout(fallbackTimer);
      };
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-r from-purple-700 to-pink-300 transition-opacity duration-700 ease-in-out ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <style jsx>{`
        .loader-wrap {
          width: 100%;
          max-width: 700px;
          padding: 0 20px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        svg {
          width: 100%;
          height: auto;
          overflow: visible;
        }

        .stroke-text, .fill-text {
          font-size: 80px;
          text-anchor: middle;
          dominant-baseline: middle;
        }

        .stroke-text {
          fill: none;
          stroke: #f7f7f7;
          stroke-width: 2.5;
          stroke-linejoin: round;
          stroke-linecap: round;
          stroke-dasharray: 1500;
          stroke-dashoffset: 1500;
          animation: draw 2.5s ease-in-out forwards;
        }

        .fill-text {
          fill: #D4537E;
          opacity: 0;
          animation: fadeIn 2.5s ease-in-out forwards;
        }

        @keyframes draw {
          0% { stroke-dashoffset: 1500; }
          70% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: 0; }
        }

        @keyframes fadeIn {
          0%, 75% { opacity: 0; }
          100% { opacity: 1; }
        }

        @media (max-width: 480px) {
          .stroke-text, .fill-text {
            font-size: 60px;
          }
        }
      `}</style>

      <div className={`loader-wrap ${dancingScript.className}`}>
        <svg viewBox="0 0 700 150" xmlns="http://www.w3.org/2000/svg">
          <text x="350" y="75" className="stroke-text">sefat ullah Fahad</text>
          <text x="350" y="75" className="fill-text">sefat ullah Fahad</text>
        </svg>
      </div>
    </div>
  );
}