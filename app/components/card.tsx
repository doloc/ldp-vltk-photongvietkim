const Card = () => {
  return (
    <div className="relative w-full aspect-196/230 bg-cover bg-center bg-no-repeat
    bg-[url('/images/card-bg.png')] flex flex-col items-center justify-between pt-[18%] pb-[8%]">
      <div className="w-[70%] flex flex-col items-center text-[#FEFF95] text-[0.8vw] font-bold">
        <p>300.000</p>
        <p>Điểm sát thương</p>
      </div>
      <img src="/images/icon-reward.png" alt="" className="w-[45.41%] object-contain" />
      <img src="/images/btn-receive-reward.png" alt="" className="w-[57.14%] object-contain img-btn" />
    </div>
  );
};

export default Card;