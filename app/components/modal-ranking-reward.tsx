"use client";

import { useState } from "react";
import Modal from "./modal";

const SLIDES = [
  "/images/top-1.webp",
  "/images/top-2.webp",
  "/images/top-3.webp",
  "/images/top-4-6.webp",
  "/images/top-7-10.webp",
  "/images/top-11-20.webp",
];

const ModalRankingReward = ({ setShowPopup }: { setShowPopup: (show: boolean) => void }) => {
  const [current, setCurrent] = useState(0);

  return (
      <Modal onClose={() => setShowPopup(false)}>
        <div className="relative w-4/5 md:w-[29.22%] aspect-561/778 bg-cover bg-center bg-no-repeat bg-[url('/images/modal-rule-bg.webp')] flex flex-col items-center" onClick={e => e.stopPropagation()}>
          <img src="/images/btn-close.webp" alt="" className="absolute top-0 right-[0.5%] w-[15%] object-contain img-btn" onClick={() => setShowPopup(false)} />
          <div className="mt-[12%] text-[#C7100F] text-[4.4vw] md:text-[2vw] leading-relaxed text-center">
            <p className="font-medium">Phần Thưởng</p>
            <p className="font-medium">Đua Top</p>
          </div>
          <div className="mt-[5%] pl-[5%] pr-[10%] w-[95%] flex flex-col items-center">
            <img src="/images/ranking.webp" alt="" className="w-[95%] object-contain" />
          </div>
          <div className="mt-[3%] w-[95%] flex flex-col items-center gap-[3%]">
            <img src={SLIDES[current]} alt="" className={`object-contain ${current === 0 || current === 1 || current === 2 ? "w-[65%]" : current === 3 ? "w-[48%]" : "w-[50%]"}`} />
            <div className="absolute w-[22%] md:w-[18%] bottom-[10%] flex justify-between">
              {SLIDES.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`rounded-full border border-[#691514] transition-all ${
                    index === current
                      ? "bg-[#691514] w-[2.4vw] md:w-[0.8vw] h-[2.4vw] md:h-[0.8vw] -mt-[3%]"
                      : "bg-transparent w-[2vw] md:w-[0.6vw] h-[2vw] md:h-[0.6vw]"
                  } md:-mt-[3%]`}
                />
              ))}
            </div>
          </div>
          
        </div>
      </Modal>
    );
};

export default ModalRankingReward;