
function Header() {
  return (
    <>
      <header>
        <nav className="flex flex-row justify-between items-center">
          <div className="header-logo basis-1/3">
            <img src="https://via.placeholder.com/30" alt="logo" />
          </div>
          <ul className="basis-2/3">
            <li className="inline-block px-4 py-2 font-semibold text-white-700 ">Home</li>
            <li className="inline-block px-4 py-2 text-white-700 font-semibold">About</li>
            <li className="inline-block px-4 py-2 text-white-700 font-semibold">Contact</li>
          </ul>
        </nav>
      </header>
      <div className="">
        Subheader: Ảnh Cưới Tự Nhiên Xanh Mát Nhất mà bạn từng xem Header
      </div>
    </>
  )
}

export default Header