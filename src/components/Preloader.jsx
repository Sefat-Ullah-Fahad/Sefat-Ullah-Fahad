export default function Preloader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-r from-purple-700 to-pink-300">
      <style jsx>{`
        .loader-wrap {
          width: 100%;
          max-width: 700px; /* ডেস্কটপের জন্য ম্যাক্সিমাম সাইজ */
          padding: 0 20px; /* মোবাইলের জন্য সাইডে সেফটি প্যাডিং */
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
          font-family: 'Dancing Script', cursive;
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
          stroke-dasharray: 1500; /* নাম বড় হওয়ায় অ্যানিমেশন পাথ বাড়ানো হয়েছে */
          stroke-dashoffset: 1500;
          animation: draw 4s ease-in-out infinite;
        }

        .fill-text {
          fill: #D4537E;
          opacity: 0;
          animation: fadeIn 4s ease-in-out infinite;
        }

        @keyframes draw {
          0%   { stroke-dashoffset: 1500; }
          70%  { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: 0; }
        }

        @keyframes fadeIn {
          0%, 78%  { opacity: 0; }
          88%, 100% { opacity: 1; }
        }

        /* ছোট মোবাইলের জন্য ফন্ট সাইজ অ্যাডজাস্টমেন্ট */
        @media (max-width: 480px) {
          .stroke-text, .fill-text {
            font-size: 70px;
          }
        }
      `}</style>

      <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap" rel="stylesheet" />

      <div className="loader-wrap">
        {/* viewBox বাড়ানো হয়েছে যাতে পুরো নাম সুন্দরভাবে ফিট হয় */}
        <svg viewBox="0 0 700 150" xmlns="http://www.w3.org/2000/svg">
          <text x="350" y="75" className="stroke-text">sefat ullah Fahad</text>
          <text x="350" y="75" className="fill-text">sefat ullah Fahad</text>
        </svg>
      </div>
    </div>
  );
}