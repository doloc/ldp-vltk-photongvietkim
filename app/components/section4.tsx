const Section4 = () => {
  return (
    <section className="relative w-full aspect-750/1102 md:aspect-1920/1914 bg-cover bg-center bg-no-repeat
    bg-[url('/images/section4_mb-bg.webp')] md:bg-[url('/images/section4_pc-bg.webp')] flex flex-col items-center">
      <img src="/images/section4_pc-title.webp" alt="" className="hidden md:block w-[63.18%] object-contain" />
      <img src="/images/section4_mb-title.webp" alt="" className="mt-[4%] md:hidden w-full object-contain" />
      <div className="z-10 -mt-[1%] w-[51.73%] md:w-[25.63%] aspect-492/58 flex items-center justify-between">
        <img src="/images/section4_btn-reward.webp" alt="" className="w-[51.22%] object-contain img-btn" />
        <img src="/images/section4_btn-reward.webp" alt="" className="w-[46.13%] object-contain img-btn" />
      </div>
      <div className="z-10 -mt-[1%] w-[74.13%] md:w-[38.72%] aspect-705/113 flex items-center justify-center bg-cover bg-center bg-no-repeat
      bg-[url('/images/section3_sub-text.webp')]">
        <p className="text-[2.6vw] md:text-[1.2vw] text-[#FFFFFF] text-center">Đại Hiệp đang có <span className="text-[#FFE648]">xxx</span> sát thương</p>
      </div>
      <div className="-mt-[1%] w-[80.8%] md:w-[50.47%] aspect-969/445 flex items-center justify-between">
        <div className="w-[28.38%] aspect-275/369 bg-cover bg-center bg-no-repeat bg-[url('/images/section4_rank-2.webp')]"></div>
        <div className="w-[34.26%] aspect-332/445 bg-cover bg-center bg-no-repeat bg-[url('/images/section4_rank-1.webp')]"></div>
        <div className="w-[28.38%] aspect-275/369 bg-cover bg-center bg-no-repeat bg-[url('/images/section4_rank-3.webp')]"></div>
      </div>
      <div className="w-[92.13%] md:w-[88%] aspect-1735/1180 bg-cover bg-center bg-no-repeat bg-[url('/images/section4_fr-ranking.webp')] flex flex-col justify-start px-[7%] pt-[4%]">
        {/* Header */}
        <div className="grid grid-cols-3 text-center text-[2.8vw] md:text-[2vw] font-bold text-[#7B2D1E] pb-[1%]">
          <span>Hạng</span>
          <span>Đại hiệp</span>
          <span>Điểm sát thương</span>
        </div>
        {/* Rows */}
        {[
          { name: "Nguyen Van A", score: "1.000.000" },
          { name: "Nguyen Van A", score: "1.000.000" },
          { name: "Nguyen Van A", score: "1.000.000" },
          { name: "Nguyen Van A", score: "1.000.000" },
          { name: "", score: "" },
          { name: "", score: "" },
          { name: "", score: "" },
        ].map((row, i) => (
          <div
            key={i}
            className={`grid grid-cols-3 items-center text-center text-[2.4vw] md:text-[1.4vw] font-bold text-[#7B2D1E] py-[1.1%] ${
              i % 2 === 0 ? "bg-[#FFB082]/40" : "bg-[#FFECDE]"
            }`}
          >
            <div className="flex items-center justify-center">
              {i < 3 ? (
                <img src={`/images/icon-rank-${i + 1}.webp`} alt={`rank ${i + 1}`} className="h-[3.5vw] object-contain" />
              ) : (
                <span>{i + 1}</span>
              )}
            </div>
            <span>{row.name}</span>
            <span>{row.score}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section4;