const Section4 = () => {
  return (
    <section className="relative w-full aspect-750/1334 md:aspect-1920/1914 bg-cover bg-center bg-no-repeat
    bg-[url('/images/section4_mb-bg.jpg')] md:bg-[url('/images/section4_pc-bg.jpg')] flex flex-col items-center">
      <img src="/images/section4_title.png" alt="" className="w-[63.18%] object-contain" />
      <div className="z-10 -mt-[1%] w-[25.63%] aspect-492/58 flex items-center justify-between">
        <img src="/images/section4_btn-reward.png" alt="" className="w-[51.22%] object-contain img-btn" />
        <img src="/images/section4_btn-reward.png" alt="" className="w-[46.13%] object-contain img-btn" />
      </div>
      <div className="z-10 -mt-[1%] w-[38.72%] aspect-705/113 flex items-center justify-center bg-cover bg-center bg-no-repeat
      bg-[url('/images/section3_sub-text.png')]">
        <p className="text-[1.2vw] text-[#FFFFFF] text-center">Đại Hiệp đang có <span className="text-[#FFE648]">xxx</span> sát thương</p>
      </div>
      <div className="-mt-[1%] w-[50.47%] aspect-969/445 flex items-center justify-between">
      <div className="w-[28.38%] aspect-275/369 bg-cover bg-center bg-no-repeat bg-[url('/images/section4_rank-2.png')]"></div>
        <div className="w-[34.26%] aspect-332/445 bg-cover bg-center bg-no-repeat bg-[url('/images/section4_rank-1.png')]"></div>
        <div className="w-[28.38%] aspect-275/369 bg-cover bg-center bg-no-repeat bg-[url('/images/section4_rank-3.png')]"></div>
      </div>
    </section>
  );
};

export default Section4;