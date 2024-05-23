function AboutMe() {
  const moveToLuuVuFB = (event) => {
    event.preventDefault();
    const confirmMessage = window.confirm('Chuyển tới trang Facebook của Lưu Vũ?');
    if(confirmMessage){
      window.open("https://www.facebook.com/luuvu2003/");
    }
  };

  const moveToLuuVuInstagram = (event) => {
    event.preventDefault();
    const confirmMessage = window.confirm('Chuyển tới trang Instagram của Lưu Vũ?');
    if(confirmMessage){
      window.open("https://www.instagram.com/lvu237.it/");
    }
  };

  const alertInformationMessage = (event) => {
    event.preventDefault();
    const confirmMessage = window.confirm('Thông tin này hiện tại chưa được cập nhật. Vui lòng liên hệ trực tiếp. Bạn có muốn chuyển tới trang Facebook của Lưu Vũ?');
    if(confirmMessage){
      window.open("https://www.facebook.com/luuvu2003/");
    }
  };
  return (
    <>
      <div className="container w-[95%] mx-auto justify-center">
        <div className="my-6">
        <div className="animatecss animatecss-fadeInDown text-base w-full h-auto bg-slate-50 rounded-lg shadow-sm">
          <div className="information"> {/* information */}
            <div className="flex justify-between p-5 md:px-20 md:py-5">
              {/* image and name */}
              <div className="flex flex-col md:flex-row image-and-name basis-1/2 lg:basis-1/4 my-auto justify-center items-center gap-2 md:gap-4">
                <img onClick={(event) => moveToLuuVuFB(event)} src="./logo/me.jpg" alt="vulv" className="w-1/2 basis-1/2 cursor-pointer mx-auto block rounded-full bg-cover bg-center bg-no-repeat"/>
                <div className="flex flex-col items-center md:items-start basis-1/2">
                  <div className="text-xl font-semibold">Lưu Vũ</div>
                  <div className="instagram">
                    <a onClick={(event) => moveToLuuVuInstagram(event)} className="hover:text-pink-400" href="https://www.instagram.com/lvu237.it/">
                      <div className="flex flex-row gap-1">
                        <img src="./logo/instagram-icon.png" className="w-6" alt="instagram"/> 
                        <div className="">@lvu237.it</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="basis-1/2 lg:basis-2/4">
              </div>
              {/* phone and contact */}
              <div className="phone-and-contact my-auto basis-1/2 lg:basis-1/4 justify-center items-center">
                <div className="flex flex-col md:flex-row gap-5 justify-center">
                  {/* phone button */}
                  <div className="phone-button button-about-contact">
                    <div onClick={(event) => alertInformationMessage(event)} className="flex p-2 gap-1">
                      <div className="phone-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                      </div>
                      <span>Phone</span>
                    </div>
                  </div>
                  {/* email button */}
                  <div className="email-button button-about-contact">
                    <div onClick={(event) => alertInformationMessage(event)} className="flex p-2 gap-1">
                      <div className="email-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75H6.912a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859M12 3v8.25m0 0-3-3m3 3 3-3" />
                        </svg>
                      </div>
                      <span>Email</span>
                    </div>
                  </div>
                </div>
            </div>
            </div>
          </div>
          <hr className="border-1 border-slate-300"/>
          <div className="description w-full px-10 py-3 md:px-40 md:py-5">{/* description */}
            <p className="description-me">Họ và tên: Lưu Văn Vũ</p>
            <p className="description-me">Ngày sinh: 23/07/2003</p>
            <p className="description-me">Cung hoàng đạo: Sư Tử</p>
            <p className="description-me">Chuyên môn: Lập trình viên phát triển ứng dụng Web</p>
            <p className="description-me">Sở thích: Ca hát, nghe nhạc, game, sports</p>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default AboutMe