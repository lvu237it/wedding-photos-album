import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
function Header() {
  const [menuShow, setMenuShow] = useState(false);

    // Close the menu when clicking outside
    useEffect(() => {
      const handleClickOutside = (event) => {
        const menu = document.getElementById('vulv-top-menu');
        const menuIcon = document.getElementById('vulv-top-menu-toggle-icon');
        if (menu && !menu.contains(event.target) && !menuIcon.contains(event.target)) {
          setMenuShow(false);
        }
      };
  
      document.addEventListener('click', handleClickOutside);
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }, []);

  return (
    <>
      <div className="mx-auto">
        <header>
          <nav className="flex flex-row justify-between items-center shadow shadow-zinc-200 p-3">
            <div className="header-logo basis-1/3">
              <img src="./logo/logo.png" alt="logo" className="w-[40px] sm:w-[50px] xl:w-[70px] h-full mx-auto rounded-lg shadow shadow-zinc-300" />
            </div>
            <ul id="vulv-top-menu" className={`vulv-top-menu basis-1/3 hidden md:flex justify-center ${menuShow ? 'vulv-top-menu-expanded' : 'hidden'}`}>
              <li className="header-content"><Link to={"/"}>Home</Link></li>
              <li className="header-content"><Link to={'https://www.facebook.com/luuvu2003/'}>About</Link></li>
              <li className="header-content"><a href=''>Contact</a></li>
            </ul>
            <FontAwesomeIcon id='vulv-top-menu-toggle-icon' icon={faBars} className="text-xl block md:hidden cursor-pointer" onClick={() => setMenuShow(!menuShow)} />
            <div className="header-logo basis-1/3">
              <img src="./logo/logo-2.png" alt="logo-give-you-my-heart" className="w-[40px] sm:w-[50px] xl:w-[70px] h-full mx-auto rounded-lg shadow shadow-zinc-300"/>
            </div>
          </nav>
        </header>
        <hr/>
        <div className="text-center text-lg bg-slate-200 hover:bg-slate-300 rounded-xl mx-8 my-6 px-8 py-4">
         Tình yêu là cả một hành trình dài. Chúng ta quyết định đến với nhau đã là hữu duyên. Dù có bao nhiêu chông gai hay thử thách, thì đó cũng là những bài học giúp chúng ta thấu hiểu và thương yêu nhau nhiều hơn. Vì thế, hãy luôn dành cho nhau những điều tuyệt vời nhất nhé!
          <div className="w-[10%] mx-auto my-1">
            <div className="flex justify-center items-center gap-1">
              <img src="./logo/logo-3.png" alt="logo-give-you-my-heart" className="w-[10px]"/>
              <img src="./logo/logo-3.png" alt="logo-give-you-my-heart" className="w-[10px]"/>
              <img src="./logo/logo-3.png" alt="logo-give-you-my-heart" className="w-[10px]"/>
            </div>
          </div>
          <div className='mx-auto'>--- Lưu Vũ ---</div>
        </div>
      </div>
    </>
  )
}

export default Header