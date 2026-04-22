"use client";

import Modal from "./modal";

const ModalHistoryCheckin = ({ setShowPopup }: { setShowPopup: (show: boolean) => void }) => {
  return (
      <Modal onClose={() => setShowPopup(false)}>
        <div className="relative w-4/5 md:w-[29.22%] aspect-561/778 bg-cover bg-center bg-no-repeat bg-[url('/images/modal-rule-bg.webp')] flex flex-col items-center" onClick={e => e.stopPropagation()}>
          <img src="/images/btn-close.webp" alt="" className="absolute top-0 right-[0.5%] w-[15%] object-contain img-btn" onClick={() => setShowPopup(false)} />
          <div className="mt-[12%] text-[#C7100F] text-[4.4vw] md:text-[2vw] leading-relaxed text-center">
            <p>Lịch Sử</p>
            <p>Điểm Danh</p>
          </div>
          <div className="mt-[5%] text-[#691514] text-[3.2vw] md:text-[1.2vw] leading-relaxed pl-[8%] pr-[12%] w-full">
            <table className="w-full">
              <thead>
                <tr>
                  <th colSpan={2} className="bg-[#691514] text-[#F5DEB3] text-center py-[1%] px-[2%]">THỜI GIAN</th>
                  <th className="bg-[#691514] text-[#F5DEB3] text-center py-[1%] px-[2%]">GHI CHÚ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center py-[1%] px-[2%]">25-04-2024</td>
                  <td className="text-center py-[1%] px-[2%]">10:00</td>
                  <td className="text-center py-[1%] px-[2%]">1 Lượt Khiêu Chiến</td>
                </tr>
                <tr>
                  <td className="text-center py-[1%] px-[2%]">30-04-2024</td>
                  <td className="text-center py-[1%] px-[2%]">11:30</td>
                  <td className="text-center py-[1%] px-[2%]">1 Lượt Khiêu Chiến</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Modal>
    );
};

export default ModalHistoryCheckin;