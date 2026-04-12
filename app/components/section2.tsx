import Card from "./card";

const checkedInDays = [1, 2, 3, 5];

const Section2 = () => {
  return (
    <section className="relative -mt-[1%] md:mt-0 w-full aspect-750/1334 md:aspect-1920/1080 bg-cover bg-center bg-no-repeat
    bg-[url('/images/section2_mb-bg.webp')] md:bg-[url('/images/section2_pc-bg.webp')] flex flex-col items-center">
      <img src="/images/section2_title.webp" alt="" className="mt-[2%] md:mt-0 w-full md:w-[48.75%] object-contain" />
      {/* Mobile */}
      <div className="grid md:hidden w-[86.13%] grid-cols-[65.33%_1fr] gap-[3%]">
        <div className="flex flex-col items-center justify-between">
          <div className="relative w-full aspect-586/618 bg-cover bg-center bg-no-repeat
            bg-[url('/images/section2_pc-fr.webp')] flex items-center justify-center">
            <div className="w-[73%] h-[82%] grid grid-cols-3 gap-x-[10%] gap-y-[5%] content-start">
              {Array.from({ length: 12 }, (_, i) => {
                const day = i + 1;
                const checked = checkedInDays.includes(day);
                return (
                  <div
                    key={day}
                    className={`relative aspect-117/110 bg-cover bg-center bg-no-repeat bg-[url('/images/section2_fr-bg.webp')] flex items-center justify-center
                      ${checked ? "brightness-75" : ""}`}
                  >
                    <span className="text-white font-bold text-[2vw] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">{day}</span>
                    {checked && (
                      <span className="absolute inset-0 flex items-center justify-center text-[2.5vw] text-green-400 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">✓</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-between justify-center gap-[8%]">
          <img src="/images/section2_btn-history.webp" alt="" className="w-full object-contain img-btn" />
          <img src="/images/section2_btn-checkin.webp" alt="" className="w-full object-contain img-btn" />
          <img src="/images/section2_btn-rule.webp" alt="" className="w-full object-contain img-btn" />
        </div>
      </div>
      <div className="md:hidden mt-[2%] w-[86.13%] grid grid-cols-[65.33%_1fr]">
        <div className="w-full flex justify-center">
          <div className="w-[78.44%]">
            <div className="flex flex-wrap gap-y-[3%] gap-x-[3.8%] content-start justify-center pt-[2%]">
              {Array.from({ length: 5 }, (_, i) => (
                <div key={i} className="w-[48.1%] mt-[5%]">
                  <Card point={i == 0 ? 500000 : i == 1 ? 1000000 : i == 2 ? 2000000 : i == 3 ? 5000000 : 10000000} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="md:hidden absolute bottom-[20%] left-[5%] w-[44.13%] aspect-331/580 bg-red-300">
        <div className="flex flex-wrap gap-y-[3%] gap-x-[3.8%] content-start justify-center pt-[2%]">
          {Array.from({ length: 5 }, (_, i) => (
            <div key={i} className="w-[48.1%]">
              <Card point={i == 0 ? 500000 : i == 1 ? 1000000 : i == 2 ? 2000000 : i == 3 ? 5000000 : 10000000} />
            </div>
          ))}
        </div>
      </div>       */}

      {/* PC */}
      <div className="hidden md:grid absolute top-[17%] left-[5.2%] w-[58.54%] aspect-1124/763 
      grid-cols-[62.27%_1fr] gap-[1.3%]">
        <div className="flex flex-col items-center justify-between">
          <p className="text-[1.8vw] text-[#6B1A10] text-center">Đại Hiệp đang có <span className="text-[#DE2E17]">xxx</span> sát thương</p>
          <div className="relative w-[83.7%] aspect-586/618 bg-cover bg-center bg-no-repeat
            bg-[url('/images/section2_pc-fr.webp')] flex items-center justify-center">
            <div className="w-[73%] h-[82%] grid grid-cols-3 gap-x-[10%] gap-y-[5%] content-start">
              {Array.from({ length: 12 }, (_, i) => {
                const day = i + 1;
                const checked = checkedInDays.includes(day);
                return (
                  <div
                    key={day}
                    className={`relative aspect-117/110 bg-cover bg-center bg-no-repeat bg-[url('/images/section2_fr-bg.webp')] flex items-center justify-center
                      ${checked ? "brightness-75" : ""}`}
                  >
                    <span className="text-white font-bold text-[2vw] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">{day}</span>
                    {checked && (
                      <span className="absolute inset-0 flex items-center justify-center text-[2.5vw] text-green-400 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">✓</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-full flex items-between justify-center">
            <img src="/images/section2_btn-history.webp" alt="" className="w-[32.43%] object-contain img-btn" />
            <img src="/images/section2_btn-checkin.webp" alt="" className="w-[32.43%] object-contain img-btn" />
            <img src="/images/section2_btn-rule.webp" alt="" className="w-[32.43%] object-contain img-btn" />
          </div>
        </div>
        <div className="flex flex-wrap gap-y-[3%] gap-x-[3.8%] content-start justify-center pt-[2%]">
          {Array.from({ length: 5 }, (_, i) => (
            <div key={i} className="w-[48.1%]">
              <Card point={i == 0 ? 500000 : i == 1 ? 1000000 : i == 2 ? 2000000 : i == 3 ? 5000000 : 10000000} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section2;