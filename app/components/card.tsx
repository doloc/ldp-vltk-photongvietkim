import { FC } from "react";
import { convertNumberToCommaSeparatedString } from "../libs/common";

const Card:FC<{point: number}> = ({point}) => {
  return (
    <div className="relative w-full aspect-196/230 bg-cover bg-center bg-no-repeat
    bg-[url('/images/card-bg.webp')] flex flex-col items-center justify-between pt-[14%] pb-[8%]">
      <div className="w-[70%] flex flex-col items-center text-[#FBF9E6] text-[1vw]">
        <p className="text-[1.2vw]">{convertNumberToCommaSeparatedString(point)}</p>
        <p>Điểm sát thương</p>
      </div>
      <img src="/images/icon-reward.webp" alt="" className="w-[45.41%] object-contain" />
      <img src="/images/btn-receive-reward.webp" alt="" className="w-[57.14%] object-contain img-btn" />
    </div>
  );
};

export default Card;