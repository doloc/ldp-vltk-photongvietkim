const Footer = () => {
  return (
    <footer className="relative w-full aspect-750/1334 md:aspect-1920/298 bg-cover bg-center bg-no-repeat
    bg-[url('/images/footer_mb-bg.jpg')] md:bg-[url('/images/footer_pc-bg.jpg')] flex flex-col items-center text-[#F9E4C0]">
      <img src="/images/logo-zagoo.png" alt="" className="mt-[1%] w-[10.10%] object-contain" />
      <div className="mt-[1%] font-medium flex flex-col items-center text-center text-[1vw] leading-relaxed px-[10%]">
        <p>Công ty TNHH Giải Trí ZIE.</p>
        <p>Địa chỉ trụ sở chính: Tầng 17, Tòa nhà ROX Tower, số 54A Nguyễn Chí Thanh, Phường Láng, Thành phố Hà Nội</p>
        <p>Quyết định phê duyệt nội dung kịch bản trò chơi điện tử G1 trên mạng số: 39/QĐ-PTTH&TTĐT do Bộ Thông tin và Truyền thông cấp ngày 18/02/2025</p>
        <p>Giấy phép cung cấp dịch vụ trò chơi điện tử G1 trên mạng: số 43/GP-BTTTT do Bộ Thông tin và Truyền thông cấp ngày 21/01/2025</p>
      </div>
      <p className="mt-[0.5%] text-[1vw] font-bold">
        Điều khoản sử dụng | Quy trình khiếu nại | Tài liệu pháp lý | Chính sách bảo mật
      </p>
    </footer>
  );
};

export default Footer;