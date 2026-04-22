"use client";

import { FC } from "react";
import Modal from "./modal";

interface ModalRewardsProps {
  milstone: number;
  setShowPopup: (show: boolean) => void;
}

const MILESTONE_KEY_MAP: Record<number, { key: string; count: number }> = {
  5000000: { key: "5M", count: 4 },
  2000000: { key: "2M", count: 4 },
  1000000: { key: "1M", count: 4 },
  600000:  { key: "600k", count: 4 },
  300000:  { key: "300k", count: 3 },
};

const ModalRewards: FC<ModalRewardsProps> = ({ milstone, setShowPopup }) => {
  const milestone = MILESTONE_KEY_MAP[milstone];
  if (!milestone) return null;

  const { key, count } = milestone;
  const is3Items = count === 3;

  return (
    <Modal onClose={() => setShowPopup(false)}>
      <div className="relative w-4/5 md:w-[29.22%] aspect-561/778 bg-cover bg-center bg-no-repeat bg-[url('/images/modal-rule-bg.webp')] flex flex-col items-center" onClick={e => e.stopPropagation()}>
        <img src="/images/btn-close.webp" alt="" className="absolute top-0 right-[0.5%] w-[15%] object-contain img-btn" onClick={() => setShowPopup(false)} />
        <div className="mt-[12%] text-[#C7100F] text-[4.4vw] md:text-[2vw] leading-relaxed text-center">
          <p className="font-medium">Nhận Thưởng</p>
          <p className="text-[3.2vw] md:text-[1.4vw] leading-relaxed text-center">Mốc {milstone} Điểm Sát Thương</p>
        </div>
        <div className="mt-[2%] pl-[8%] pr-[12%] w-[85%]">
          <div className="grid grid-cols-2 gap-[4%]">
            {Array.from({ length: count }, (_, index) => (
              <div
                key={index}
                className={`flex items-center justify-center py-[6%] px-[4%] ${is3Items && index === 2 ? "col-span-2 w-[48%] mx-auto" : ""}`}
              >
                <img
                  src={`/images/milstone-${key}-reward-${index + 1}.webp`}
                  alt=""
                  className="w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalRewards;