
import React, { useState, useEffect, useCallback } from 'react';
import FloatingHearts from './components/FloatingHearts';
import { AppState } from './types';

const RetroBorder: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const borderText = "ALWAYS LOVE YOU • ";
  const repeatedText = borderText.repeat(15);

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-4 md:p-12 overflow-hidden bg-[#f5f5dc] font-body">
      {/* Borders */}
      <div className="fixed top-0 left-0 w-full bg-[#d12d3e] text-[#f48498] py-2 overflow-hidden whitespace-nowrap z-50 font-bold border-b-4 border-[#8b1e2a] tracking-widest">
        <div className="animate-[scroll_30s_linear_infinite] inline-block">
          {repeatedText}{repeatedText}
        </div>
      </div>
      <div className="fixed bottom-0 left-0 w-full bg-[#d12d3e] text-[#f48498] py-2 overflow-hidden whitespace-nowrap z-50 font-bold border-t-4 border-[#8b1e2a] tracking-widest">
        <div className="animate-[scroll_30s_linear_infinite_reverse] inline-block">
          {repeatedText}{repeatedText}
        </div>
      </div>
      <div className="fixed left-0 top-0 h-full bg-[#d12d3e] text-[#f48498] w-8 md:w-12 z-50 flex items-center overflow-hidden border-r-4 border-[#8b1e2a]">
        <div className="rotate-90 whitespace-nowrap font-bold uppercase tracking-widest">
            {repeatedText}
        </div>
      </div>
      <div className="fixed right-0 top-0 h-full bg-[#d12d3e] text-[#f48498] w-8 md:w-12 z-50 flex items-center overflow-hidden border-l-4 border-[#8b1e2a]">
        <div className="-rotate-90 whitespace-nowrap font-bold uppercase tracking-widest">
            {repeatedText}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
      {children}
    </div>
  );
};

const App: React.FC = () => {
  const [state, setState] = useState<AppState>(AppState.ASKING);
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);
  
  const DRIVE_IMG_ID = "1yVbRKE2SyZWmkXe6ThIPGRh7xheFFhpw";
  const DRIVE_IMAGE_URL = `https://lh3.googleusercontent.com/d/${DRIVE_IMG_ID}`;
  const FALLBACK_IMAGE = "https://storage.googleapis.com/mweb-content/interactive-ai/images/cute-hearts.png";
  const [imgSrc, setImgSrc] = useState(DRIVE_IMAGE_URL);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const moveNoButton = useCallback(() => {
    const x = Math.random() * (window.innerWidth - 200) + 100;
    const y = Math.random() * (window.innerHeight - 100) + 50;
    setNoButtonPos({ x, y });
  }, []);

  const handleYes = () => {
    setState(AppState.ACCEPTED);
  };

  if (!isClient) return null;

  return (
    <RetroBorder>
      <FloatingHearts />
      
      <div className="z-10 bg-transparent p-6 md:p-10 rounded-2xl border-4 border-[#d12d3e] text-center max-w-xl w-full relative transition-all duration-300">
        
        {state === AppState.ASKING && (
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-title text-[#d12d3e]">
              Be my Valentine
            </h1>
            
            <div className="relative py-2 min-h-[250px] flex items-center justify-center">
                <img 
                  src={imgSrc} 
                  alt="Valentine Illustration" 
                  onError={() => setImgSrc(FALLBACK_IMAGE)}
                  className="w-64 h-64 md:w-72 md:h-72 object-contain drop-shadow-2xl animate-pulse"
                />
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <button
                onClick={handleYes}
                className="bg-[#d12d3e] hover:bg-[#a11d2e] text-white font-bold py-4 px-12 rounded-full shadow-lg transform transition hover:scale-110 active:scale-95 text-2xl uppercase font-body"
              >
                Yes!
              </button>

              <button
                onMouseEnter={moveNoButton}
                onClick={moveNoButton}
                style={{
                  position: noButtonPos.x === 0 ? 'relative' : 'fixed',
                  left: noButtonPos.x === 0 ? 'auto' : `${noButtonPos.x}px`,
                  top: noButtonPos.y === 0 ? 'auto' : `${noButtonPos.y}px`,
                  transition: 'all 0.15s ease-out',
                  zIndex: 100
                }}
                className="bg-[#8c8c8c] hover:bg-[#707070] text-white font-bold py-4 px-12 rounded-full shadow-lg text-2xl uppercase font-body"
              >
                No
              </button>
            </div>
          </div>
        )}

        {state === AppState.ACCEPTED && (
          <div className="space-y-6 animate-in fade-in zoom-in duration-500">
            <h2 className="text-6xl md:text-7xl font-title text-[#d12d3e]">
              Yay! ✨
            </h2>
            <div className="relative py-2">
                <img 
                  src={imgSrc} 
                  alt="Happy Valentine" 
                  onError={() => setImgSrc(FALLBACK_IMAGE)}
                  className="w-48 h-48 mx-auto object-contain animate-bounce"
                />
            </div>
            <div className="p-6 rounded-xl border-2 border-dashed border-[#d12d3e]">
                <p className="text-xl md:text-2xl text-[#d12d3e] leading-relaxed font-body italic font-semibold">
                    "You make me the happiest person alive! I'm so lucky to have you as my Valentine. I can't wait to spend time with you! ❤️"
                    <span className="block mt-4 not-italic font-bold text-2xl">- Jonathan</span>
                </p>
            </div>
            <div className="flex flex-col items-center gap-4">
                <a 
                    href="tel:0349380132"
                    className="bg-[#d12d3e] text-white font-bold py-4 px-10 rounded-full shadow-xl hover:scale-105 transition active:scale-95 text-xl flex items-center gap-3 font-body"
                >
                    <span>Call me</span> 📞
                </a>
                <button
                    onClick={() => { setState(AppState.ASKING); setNoButtonPos({x:0, y:0}); }}
                    className="text-[#d12d3e] font-bold opacity-50 hover:opacity-100 transition text-sm uppercase"
                >
                    Restart?
                </button>
            </div>
          </div>
        )}
      </div>

      <div className="fixed bottom-14 right-14 text-[#d12d3e] text-xs font-bold opacity-40 pointer-events-none hidden md:block uppercase font-body">
        Jonathan
      </div>
    </RetroBorder>
  );
};

export default App;
