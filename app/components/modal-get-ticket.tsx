"use client";

import { useState } from "react";
import Modal from "./modal";

type Tab = "login" | "deposit";

const ModalGetTicket = ({ setShowPopup }: { setShowPopup: (show: boolean) => void }) => {
  const [currentTab, setCurrentTab] = useState<Tab>("login");

  return (
      <Modal onClose={() => setShowPopup(false)}>
        <div className="relative w-4/5 md:w-[29.22%] aspect-561/778 bg-cover bg-center bg-no-repeat bg-[url('/images/modal-rule-bg.webp')] flex flex-col items-center" onClick={e => e.stopPropagation()}>
          <img src="/images/btn-close.webp" alt="" className="absolute top-0 right-[0.5%] w-[15%] object-contain img-btn" onClick={() => setShowPopup(false)} />
          <div className="mt-[12%] text-[#C7100F] text-[4.4vw] md:text-[2vw] leading-relaxed text-center">
            <p className="font-medium">Nhận Lượt</p>
            <p className="text-[3.2vw] md:text-[1.4vw] leading-relaxed text-center">Khiêu Chiến Đại Tướng</p>
            <p className="text-[3.2vw] md:text-[1.4vw] leading-relaxed text-center">Quân Kim</p>
          </div>
          <div className="mt-[5%] text-[#691514] text-[3.2vw] md:text-[1.1vw] leading-relaxed pl-[5%] pr-[10%] w-[85%] flex flex-col gap-[5%]">
            <div className="grid grid-cols-2 gap-x-[3%] gap-y-[6%] mb-[5%] md:mb-0">
              <button
                className={`py-[2%] tracking-wide text-white ${currentTab === "login" ? "bg-[#C7100F]" : "bg-[#691514]"}`}
                onClick={() => setCurrentTab("login")}
              >
                ĐĂNG NHẬP
              </button>
              <button
                className={`py-[2%] tracking-wide text-white ${currentTab === "deposit" ? "bg-[#C7100F]" : "bg-[#691514]"}`}
                onClick={() => setCurrentTab("deposit")}
              >
                NẠP
              </button>
              <button className="bg-[#691514] text-white py-[2%] tracking-wide">CHIA SẺ BẠN BÈ</button>
              <button className="bg-[#691514] text-white py-[2%] tracking-wide">CHIA SẺ TƯỜNG</button>
            </div>

            {currentTab === "login" ? (
              <div className="overflow-y-auto max-h-[50vw] md:max-h-[18vw] text-[#691514] text-[3.2vw] md:text-[1vw] leading-relaxed">
                <p>Chào mừng Ngày hội lớn - Ngày hội Đại Thắng của toàn dân tộc. Nhận lượt lật thẻ bằng những cách sau Huynh Tỷ nhé !!!</p>
                <p className="text-[#FF0000]">Đăng nhập bằng tài khoản Zalo:</p>
                <p>- Đăng nhập hàng ngày: +1 lượt lật (Tối đa +1 lượt lật/ngày).</p>
                <p className="text-[#FF0000]">Chia sẻ:</p>
                <p>- Chia sẻ tường Zalo: +1 lượt lật</p>
                <p className="text-[#FF0000]">Nạp:</p>
                <p>- Nạp lần đầu (Bất kì mệnh giá nào): +5 lượt lật.</p>
                <p>Ghi chú: 01 lần duy nhất đối với 1 tài khoản.</p>
                <p>+ Nạp tích lũy các mốc sau sẽ nhận được lượt quay tương ứng:</p>
              </div>
            ) : (
              <div className="flex flex-col">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="bg-[#691514] text-white text-center py-[3%] px-[2%]">MỐC NẠP</th>
                      <th className="bg-[#691514] text-white text-center py-[3%] px-[2%]">LƯỢT LẬT THẺ</th>
                    </tr>
                  </thead>
                </table>
                <div className="overflow-y-auto max-h-[14vw]">
                  <table className="w-full">
                    <tbody>
                      {[
                        { moc: "VNĐ 20,000", luot: 2 },
                        { moc: "VNĐ 50,000", luot: 5 },
                        { moc: "VNĐ 100,000", luot: 10 },
                        { moc: "VNĐ 200,000", luot: 14 },
                        { moc: "VNĐ 500,000", luot: 20 },
                        { moc: "VNĐ 1,000,000", luot: 30 },
                        { moc: "VNĐ 2,000,000", luot: 40 },
                        { moc: "VNĐ 5,000,000", luot: 50 },
                        { moc: "VNĐ 10,000,000", luot: 65 },
                        { moc: "VNĐ 20,000,000", luot: 80 },
                        { moc: "VNĐ 50,000,000", luot: 100 },
                      ].map(({ moc, luot }) => (
                        <tr key={moc} className="border-b border-l border-r border-[#C7B99A] bg-[#FDFFCC]">
                          <td className="text-center py-[3%] px-[2%] border-r border-[#C7B99A] w-1/2">{moc}</td>
                          <td className="text-center py-[3%] px-[2%] w-1/2">{luot}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </Modal>
    );
};

export default ModalGetTicket;