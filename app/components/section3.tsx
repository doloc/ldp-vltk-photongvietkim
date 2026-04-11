"use client";
import { useState, useRef } from "react";

const TOTAL = 6;

const Section3 = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [spinning, setSpinning] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [winner, setWinner] = useState<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleFight = () => {
    if (spinning) return;
    setShowPopup(false);
    setWinner(null);
    setSpinning(true);

    const finalIndex = Math.floor(Math.random() * TOTAL);
    // Build schedule: fast -> slow
    const steps: number[] = [];
    const totalSteps = 24;
    for (let s = 0; s < totalSteps; s++) {
      steps.push(s % TOTAL);
    }
    // Ensure we end on finalIndex: extend until last step matches
    while (steps[steps.length - 1] !== finalIndex) {
      steps.push(steps[steps.length - 1] === TOTAL - 1 ? 0 : steps[steps.length - 1] + 1);
    }

    let elapsed = 0;
    steps.forEach((idx, i) => {
      // delay: start fast (50ms) ramp to slow (400ms)
      const progress = i / steps.length;
      const delay = elapsed;
      const duration = Math.round(50 + progress * progress * 350);
      elapsed += duration;
      timerRef.current = setTimeout(() => {
        setActiveIndex(idx);
        if (i === steps.length - 1) {
          setSpinning(false);
          setWinner(idx);
          setTimeout(() => setShowPopup(true), 800);
        }
      }, delay);
    });
  };

  return (
    <section className="relative w-full aspect-750/1334 md:aspect-1920/1080 bg-cover bg-center bg-no-repeat
    bg-[url('/images/section3_mb-bg.jpg')] md:bg-[url('/images/section3_pc-bg.jpg')] flex flex-col items-center">
      <img src="/images/section3_title.png" alt="" className="mt-[1%] w-[63.18%] object-contain" />
      <div className="z-10 -mt-[1%] w-[36.56%] flex items-center justify-between">
        <img src="/images/section2_btn-history.png" alt="" className="w-[32.33%] object-contain img-btn" />
        <img src="/images/section3_btn-receive-ticket.png" alt="" className="w-[32.33%] object-contain img-btn" />
        <img src="/images/section2_btn-rule.png" alt="" className="w-[32.33%] object-contain img-btn" />
      </div>
      <div className="z-10 -mt-[1%] w-[38.72%] aspect-705/113 flex items-center justify-center bg-cover bg-center bg-no-repeat
      bg-[url('/images/section3_sub-text.png')]">
        <p className="text-[1.2vw] text-[#FFFFFF] text-center">Đại Hiệp đang có <span className="text-[#FFE648]">xxx</span> sát thương</p>
      </div>
      {/* <img src="/images/section3_char.png" alt="" className="absolute bottom-[7%] right-[5.2%] w-[54.06%] object-contain" /> */}
      <img src="/images/section3_vs.png" alt="" className="mt-[3%] w-[17.97%] object-contain" />
      <div className="absolute bottom-[25%] left-[5%] w-[37.03%] aspect-711/480 grid grid-cols-3 gap-[3%] content-center">
        {Array.from({ length: TOTAL }, (_, i) => (
          <div
            key={i}
            className={`relative aspect-square transition-all duration-100 ${
              (activeIndex === i && spinning) || winner === i ? "brightness-150 scale-105 drop-shadow-[0_0_12px_#FFD700]" : "brightness-100"
            }`}
          >
            <img src={`/images/section3_char-${i + 1}.png`} alt="" className="w-full h-full object-contain" />
          </div>
        ))}
      </div>
      <img
        src="/images/section3_btn-fight.png"
        alt=""
        className={`mt-[5%] w-[27.4%] object-contain img-btn ${spinning ? "opacity-60 pointer-events-none" : ""}`}
        onClick={handleFight}
      />

      {showPopup && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/50" onClick={() => setShowPopup(false)}>
          <div className="bg-[url('/images/card-bg.png')] bg-cover bg-center w-[30%] aspect-196/230 flex flex-col items-center justify-center gap-[5%] px-[5%]">
            <p className="text-[#FEFF95] text-[1.6vw] font-bold text-center">Chúc mừng!</p>
            <p className="text-[#FEFF95] text-[1.2vw] text-center">Bạn nhận được phần thưởng từ ô số {(winner ?? 0) + 1}</p>
            <img src="/images/btn-receive-reward.png" alt="" className="w-[60%] object-contain img-btn" onClick={() => setShowPopup(false)} />
          </div>
        </div>
      )}
    </section>
  );
};

export default Section3;