"use client";

import Modal from "./modal";

const ModalHistoryFight  = ({ setShowPopup }: { setShowPopup: (show: boolean) => void }) => {

  return (
      <Modal onClose={() => setShowPopup(false)}>
        <div className="relative w-4/5 md:w-[29.22%] aspect-561/778 bg-cover bg-center bg-no-repeat bg-[url('/images/modal-rule-bg.webp')] flex flex-col items-center" onClick={e => e.stopPropagation()}>
          <img src="/images/btn-close.webp" alt="" className="absolute top-0 right-[0.5%] w-[15%] object-contain img-btn" onClick={() => setShowPopup(false)} />
          <div className="mt-[12%] text-[#C7100F] text-[4.4vw] md:text-[2vw] leading-relaxed text-center">
            <p className="font-medium">Lịch Sử</p>
            <p className="text-[3.2vw] md:text-[1.4vw] leading-relaxed text-center">Khiêu Chiến Đại Tướng</p>
            <p className="text-[3.2vw] md:text-[1.4vw] leading-relaxed text-center">Quân Kim</p>
          </div>
          <div className="mt-[5%] text-[#691514] text-[3.2vw] md:text-[1.1vw] leading-relaxed pl-[5%] pr-[10%] w-[95%] flex flex-col">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="bg-[#691514] text-white text-center py-[2%] px-[2%]">THỜI GIAN</th>
                  <th className="bg-[#691514] text-white text-center py-[2%] px-[2%]">THƯỞNG</th>
                </tr>
              </thead>
            </table>
            <div className="overflow-y-auto max-h-[20vw]">
              <table className="w-full">
                <tbody>
                  {[
                    { time: "25-04-2024  10:00", reward: "XXXXXX Sát Thương" },
                    { time: "30-04-2024  11:30", reward: "XXXXXX Sát Thương" },
                  ].map(({ time, reward }) => (
                    <tr key={time}>
                      <td className="text-center py-[1%] px-[2%]  w-1/2">{time}</td>
                      <td className="text-center py-[1%] px-[2%] w-1/2">{reward}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Modal>
    );
};

export default ModalHistoryFight;