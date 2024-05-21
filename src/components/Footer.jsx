import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
function Footer() {
  const location = useLocation();

  const moveToLuuVu = (event) => {
    event.preventDefault();
    const confirmMessage = window.confirm('Chuyển tới trang cá nhân của Lưu Vũ?');
    if(confirmMessage){
      window.open("https://www.facebook.com/luuvu2003/");
    }
  };
  
  return (
    <>
    <div className="container w-[95%] mx-auto">
    {location.pathname === "/" ?
        <div className="text-center mb-1">
          <div className="text-xl font-semibold hover:text-pink-400 hover:scale-75"><Link to={"/about"}>Tác giả</Link></div>
          <div className="text-xl font-semibold hover:text-pink-400 hover:scale-75"><a onClick={(event) => moveToLuuVu(event)} href="https://www.facebook.com/luuvu2003/">Liên hệ</a></div>
          <div className="">© <span className="text-xl">2024</span> Luu Vu. All rights reserved.</div>
        </div>
         : 
        <div className="text-center mb-1">
          <div className="text-xl font-semibold hover:text-pink-400 hover:scale-75"><Link to={"/"}>Trang chủ</Link></div>
          <div className="text-xl font-semibold hover:text-pink-400 hover:scale-75"><a onClick={(event) => moveToLuuVu(event)} href="https://www.facebook.com/luuvu2003/">Liên hệ</a></div>
          <div className="">© <span className="text-xl">2024</span> Luu Vu. All rights reserved.</div>
       </div>
        }
      
    </div>
    <div className="mx-auto"></div>
    </>
  )
}

export default Footer