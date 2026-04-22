"use client";

import Modal from "./modal";

const ModalRulleRanking = ({ setShowPopup }: { setShowPopup: (show: boolean) => void }) => {
  return (
      <Modal onClose={() => setShowPopup(false)}>
        <div className="relative w-4/5 md:w-[29.22%] aspect-561/778 bg-cover bg-center bg-no-repeat bg-[url('/images/modal-rule-bg.webp')] flex flex-col items-center" onClick={e => e.stopPropagation()}>
          <img src="/images/btn-close.webp" alt="" className="absolute top-0 right-[0.5%] w-[15%] object-contain img-btn" onClick={() => setShowPopup(false)} />
          <div className="mt-[12%] text-[#C7100F] text-[4.4vw] md:text-[2vw] leading-relaxed text-center">
            <p className="font-medium">Thể Lệ</p>
          </div>          
        </div>
      </Modal>
    );
};

export default ModalRulleRanking;