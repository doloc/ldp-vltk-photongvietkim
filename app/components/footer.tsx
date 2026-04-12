const Footer = () => {
  return (
    <footer className="overflow-hidden relative w-full aspect-750/232 md:aspect-1920/298 bg-cover bg-center bg-no-repeat
    bg-[url('/images/footer_mb-bg.webp')] md:bg-[url('/images/footer_pc-bg.webp')] flex flex-col items-center text-[#F9E4C0] [font-family:var(--font-roboto),Roboto,sans-serif]">
      <img src="/images/logo-zagoo.webp" alt="" className="mt-[1%] w-[15.33%] md:w-[10.10%] object-contain" />
      {/* PC */}
      <div className="hidden md:flex mt-[1%] font-medium flex-col items-center text-center text-[1vw] leading-relaxed px-[10%]">
        <p>Công ty TNHH Giải Trí ZIE.</p>
        <p>Địa chỉ trụ sở chính: Tầng 17, Tòa nhà ROX Tower, số 54A Nguyễn Chí Thanh, Phường Láng, Thành phố Hà Nội</p>
        <p>Quyết định phê duyệt nội dung kịch bản trò chơi điện tử G1 trên mạng số: 39/QĐ-PTTH&TTĐT do Bộ Thông tin và Truyền thông cấp ngày 18/02/2025</p>
        <p>Giấy phép cung cấp dịch vụ trò chơi điện tử G1 trên mạng: số 43/GP-BTTTT do Bộ Thông tin và Truyền thông cấp ngày 21/01/2025</p>
      </div>
      <p className="hidden md:block mt-[0.5%] text-[1vw] font-bold">
        Điều khoản sử dụng | Quy trình khiếu nại | Tài liệu pháp lý | Chính sách bảo mật
      </p>
      {/* Mobile */}
      <div className="md:hidden font-medium flex flex-col items-center text-center text-[1.8vw] leading-relaxed px-[5%]">
        <p>Công ty TNHH Giải Trí ZIE.</p>
        <p>Địa chỉ trụ sở chính: Tầng 17, Tòa nhà ROX Tower,</p>
        <p>số 54A Nguyễn Chí Thanh, Phường Láng, Thành phố Hà Nội</p>
        <p>Quyết định phê duyệt nội dung kịch bản trò chơi điện tử G1 trên mạng số:</p>
        <p>39/QĐ-PTTH&TTĐT do Bộ Thông tin và Truyền thông cấp ngày 18/02/2025</p>
        <p>Giấy phép cung cấp dịch vụ trò chơi điện tử G1 trên mạng: số 43/GP-BTTTT</p>
        <p>do Bộ Thông tin và Truyền thông cấp ngày 21/01/2025</p>
      </div>
      <p className="md:hidden text-[2.4vw] font-bold text-center px-[5%]">
        Điều khoản sử dụng | Quy trình khiếu nại | Tài liệu pháp lý | Chính sách bảo mật
      </p>
    </footer>
  );
};

export default Footer;