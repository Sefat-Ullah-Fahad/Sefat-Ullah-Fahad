export default function Preloader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-r from-purple-700 to-pink-300">
      <style jsx>{`
        .loader-wrap {
          width: 340px;
          max-width: 90vw;
        }

        svg {
          width: 100%;
          height: auto;
          overflow: visible;
        }

        .stroke-text {
          font-family: 'Dancing Script', cursive;
          font-size: 90px;
          fill: none;
          stroke: #f7f7f7;
          stroke-width: 2.5;
          stroke-linejoin: round;
          stroke-linecap: round;
          stroke-dasharray: 900;
          stroke-dashoffset: 900;
          animation: draw 4s ease-in-out infinite;
        }

        .fill-text {
          font-family: 'Dancing Script', cursive;
          font-size: 90px;
          fill: #D4537E;
          opacity: 0;
          animation: fadeIn 4s ease-in-out infinite;
        }

        @keyframes draw {
          0%   { stroke-dashoffset: 900; }
          70%  { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: 0; }
        }

        @keyframes fadeIn {
          0%, 78%  { opacity: 0; }
          88%, 100% { opacity: 1; }
        }
      `}</style>

      <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap" rel="stylesheet" />

      <div className="loader-wrap">
        <svg viewBox="0 0 340 150" xmlns="http://www.w3.org/2000/svg">
          <text x="170" y="100" textAnchor="middle" className="stroke-text">sefat ullah Fahad</text>
          <text x="170" y="100" textAnchor="middle" className="fill-text">sefat ullah Fahad</text>
        </svg>
      </div>
    </div>
  );
}