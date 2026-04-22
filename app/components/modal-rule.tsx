"use client";

import Modal from "./modal";

const ModalRule = ({ setShowPopup }: { setShowPopup: (show: boolean) => void }) => {
  return (
      <Modal onClose={() => setShowPopup(false)}>
        <div className="relative w-4/5 md:w-[29.22%] aspect-561/778 bg-cover bg-center bg-no-repeat bg-[url('/images/modal-rule-bg.webp')] flex flex-col items-center" onClick={e => e.stopPropagation()}>
          <img src="/images/btn-close.webp" alt="" className="absolute top-0 right-[0.5%] w-[15%] object-contain img-btn" onClick={() => setShowPopup(false)} />
          <div className="mt-[12%] text-[#C7100F] text-[4.4vw] md:text-[2vw] leading-relaxed text-center">
            <p>Thể Lệ</p>
            <p>Điểm Danh</p>
          </div>
          <div className="mt-[5%] text-[#691514] text-[3.2vw] md:text-[1.4vw] leading-relaxed text-center pl-[5%] pr-[10%] w-[95%]">
            <p>- Ví dụ: Đại Hiệp điểm danh ngày 1, không điểm danh ngày 2, và tiếp tục điểm danh vào ngày 3. Hệ thống sẽ ghi nhận Đại Hiệp đang có 2 Lượt Khiêu Chiến. Tương tự với những ngày tiếp theo.</p>
          </div>
        </div>
      </Modal>
    );
};

export default ModalRule;