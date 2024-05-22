import { useState, useEffect } from "react";
import imagelist from "../data/imagelist";

function Body() {
  const [modalBiggestPhoto, setModalBiggestPhoto] = useState(false);//modal hiển thị ảnh section 1 - biggest photo
  const [modalSmallerPhoto, setModalSmallerPhoto] = useState(null);//modal hiển thị ảnh section 2 - smaller photos
  const photosList = imagelist;

  const handleKeyDownESC = (event) => {
    if (event.key === "Escape") {
      setModalBiggestPhoto(false);
      setModalSmallerPhoto(null);
    }
  };
  
  const handleClickBiggestPhoto = () => {
    setModalBiggestPhoto(true);
  };
  const handleClickSmallerPhoto = (photo) => {
    setModalSmallerPhoto(photo);
  };

  const handleCloseModalSmallerPhoto = () => {
    setModalSmallerPhoto(null);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDownESC);
    return () => {
      document.removeEventListener("keydown", handleKeyDownESC);
    };
  }, []);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !modalBiggestPhoto) {
        entry.target.classList.add("animate-fadeIn");
      } else {
        entry.target.classList.remove("animate-fadeIn");
      }
    });
  });
  
  useEffect(() => {
    const sections = document.querySelectorAll(".wrapped-photo-section .wrapped-photo-item");
    sections.forEach((section) => observer.observe(section));
  
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [modalBiggestPhoto]);
  
  // useEffect(() => {
  //   const updateColumns = () => {
  //     setColumnGrid(window.innerWidth >= 576 ? 3 : 2);
  //   };

  //   // Cập nhật số cột ngay lập tức khi component mount
  //   updateColumns();

  //   const gridContainer = document.querySelector('.grid-container');
  //   const gridItems = gridContainer.querySelectorAll('.grid-item');

  //   const columns = columnGrid;
  //   const remainder = gridItems.length % columns;//ví dụ có 19 items - 3 column => remainder = 1 (dư 1 => chỉ có 1 element ở hàng cuối thay vì 3 element mới đủ 1 hàng)

  //   // Xóa các phần tử trống cũ (nếu có)
  //   document.querySelectorAll('.grid-item.invisible').forEach(el => el.remove());

  //   if (remainder !== 0) {
  //     const emptySlots = columns - remainder;//lấy số lượng cột hiện tại trừ số phần tử hiện có trên hàng cuối => số lượng phần tử cần thêm vào để đủ hàng
  //     for (let i = 0; i < emptySlots; i++) {//tạo các thẻ trống để thêm vào hàng cuối cùng
  //       const emptyDiv = document.createElement('div');
  //       emptyDiv.classList.add('grid-item', 'invisible');
  //       gridContainer.appendChild(emptyDiv); //nối các thẻ trống vừa tạo, vào phần cuối của grid hiện tại
  //     }
  //   }


  //   // Thêm event listener khi window resize
  //   window.addEventListener('resize', updateColumns);

  //   // Cleanup event listener khi component unmount
  //   return () => {
  //     window.removeEventListener('resize', updateColumns);
  //   };
  // }, [columnGrid]); // Chỉ chạy một lần khi component mount


  
    
  return (
    <>
      <div className="content-wrapper-section w-[95%] mx-auto mb-10">
        <section className="impressive-photo-section text-center mb-16">
          <img
            onClick={handleClickBiggestPhoto}
            id="biggest-image"
            src="./images/2U3A8579.JPG"
            className="single-photo-biggest w-[80%] md:w-[60%] h-full hover:border-none hover:scale-105 hover:ease-in-out hover:duration-300]"
          />
          <div
            id="modal-biggest"
            style={{ display: modalBiggestPhoto ? "flex" : "none" }}
            onClick={() => setModalBiggestPhoto(false)}
            className="modal fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center"
          >
            <img
              id="modal-image-biggest"
              src="./images/2U3A8579.JPG"
              alt="Image"
              className="max-w-full max-h-full shadow shadow-red-50"
            />
          </div>
        </section>
        <section className="wrapped-photo-section">
          <div className="flex flex-wrap gap-3 lg:gap-4">
            {photosList.map((photo) => (
              <div key={photo.id} id={`wrapped-photo-id-${photo.id}`} className="basis-1/3 gap-4 max-w-screen-sm my-auto w-[80%] lg:w-[70%] wrapped-photo-item mx-auto bg-white border-white border-[10px] md:border-8">
                  <img
                    id={photo.id}
                    src={`./images/${photo.name}`}
                    onClick={() => handleClickSmallerPhoto(photo)}
                    alt="Image"
                    className="hover:border-none cursor-pointer bg-cover bg-center bg-no-repeat hover:scale-105 mmd:hover:scale-110 hover:ease-in-out hover:duration-300"
                  />
              </div>
            ))}
          </div>
        </section>
      </div>
      {modalSmallerPhoto && (
        <div
          id={`modal-smaller-${modalSmallerPhoto.id}`}
          onClick={handleCloseModalSmallerPhoto}
          className="modal fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center"
        >
          <img
            id={`modal-image-smaller-${modalSmallerPhoto.id}`}
            src={`./images/${modalSmallerPhoto.name}`}
            alt="Image-modal"
            className="max-w-full max-h-full shadow shadow-red-50"
          />
        </div>
      )}
      <div className="container w-[95%] mx-auto mb-3">
        <div className="text-3xl text-gray-700 mb-4 font-bold text-center hover:text-pink-400">
            Chúc Khanh và Thương sẽ hạnh phúc bên nhau tới trọn đời!
            <div className="inline-block">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 flex justify-center items-center">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
            </div>  
        </div>
        <hr className="border-1 border-slate-400"/>
      </div>
    </>
  );
}

export default Body;
