import Card from "./card";

const Section2 = () => {
  return (
    <section className="relative w-full aspect-750/1334 md:aspect-1920/1080 bg-cover bg-center bg-no-repeat
    bg-[url('/images/section2_mb-bg.jpg')] md:bg-[url('/images/section2_pc-bg.jpg')] flex flex-col items-center">
      <img src="/images/section2_title.png" alt="" className="w-[48.75%] object-contain" />
      <div className="absolute top-[17%] left-[5.2%] w-[58.54%] aspect-1124/763 grid grid-cols-[62.27%_1fr] gap-[1.3%]">
        <div className="flex flex-col items-center justify-between">
          <p className="text-[1.4vw] text-[#6B1A10] text-center">Đại Hiệp đang có <span className="text-[#DE2E17]">xxx</span> sát thương</p>
          <div className="mt-[2%] relative w-[83.7%] aspect-586/618 bg-cover bg-center bg-no-repeat
            bg-[url('/images/section2_pc-fr.png')] flex items-center justify-center">
            <div className="w-[73%] h-[82%] grid grid-cols-3 gap-x-[10%] gap-y-[5%] content-start">
              {Array.from({ length: 10 }, (_, i) => (
                <div
                  key={i + 1}
                  className={`aspect-117/110 bg-cover bg-center bg-no-repeat bg-[url('/images/section2_fr-bg.png')] flex items-center justify-center${i === 9 ? ' col-start-2' : ''}`}
                >
                  <span className="text-white font-bold text-[2vw] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">{i + 1}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full flex items-between justify-center">
            <img src="/images/section2_btn-history.png" alt="" className="w-[32.43%] object-contain img-btn" />
            <img src="/images/section2_btn-checkin.png" alt="" className="w-[32.43%] object-contain img-btn" />
            <img src="/images/section2_btn-rule.png" alt="" className="w-[32.43%] object-contain img-btn" />
          </div>
        </div>
        <div className="flex flex-wrap gap-y-[3%] gap-x-[3.8%] content-start justify-center pt-[2%]">
          {Array.from({ length: 5 }, (_, i) => (
            <div key={i} className="w-[48.1%]">
              <Card />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section2;