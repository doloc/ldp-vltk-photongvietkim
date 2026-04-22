"use client";

import Modal from "./modal";

const ModalRuleFight = ({ setShowPopup }: { setShowPopup: (show: boolean) => void }) => {

  return (
      <Modal onClose={() => setShowPopup(false)}>
        <div className="relative w-4/5 md:w-[29.22%] aspect-561/778 bg-cover bg-center bg-no-repeat bg-[url('/images/modal-rule-bg.webp')] flex flex-col items-center" onClick={e => e.stopPropagation()}>
          <img src="/images/btn-close.webp" alt="" className="absolute top-0 right-[0.5%] w-[15%] object-contain img-btn" onClick={() => setShowPopup(false)} />
          <div className="mt-[12%] text-[#C7100F] text-[4.4vw] md:text-[2vw] leading-relaxed text-center">
            <p className="font-medium">Thể Lệ</p>
            <p className="text-[3.2vw] md:text-[1.4vw] leading-relaxed text-center">Khiêu Chiến Đại Tướng</p>
            <p className="text-[3.2vw] md:text-[1.4vw] leading-relaxed text-center">Quân Kim</p>
          </div>
          <div className="mt-[5%] text-[#691514] text-[3.2vw] md:text-[1.1vw] leading-relaxed pl-[5%] pr-[10%] w-[90%] flex flex-col gap-[3%]">
            <p>- Sau khi khiêu chiến sẽ nhận Điểm Sát Thương, tích đủ các mốc Điểm Sát Thương sẽ nhận được thưởng Vật phẩm hiếm</p>
            <p>- Quy định sự kiện:</p>
            <p>- Huynh Tỷ phải đăng nhập đúng tài khoản Zalo liên kết với Game để có thể nhận được các phần thưởng ingame. Trường hợp đăng nhập sai tài khoản, BTC không hỗ trợ xử lý.</p>
            <p>- Trong suốt thời gian diễn ra sự kiện, quyết định của BTC là quyết định cuối cùng</p>
          </div>
        </div>
      </Modal>
    );
};

export default ModalRuleFight;