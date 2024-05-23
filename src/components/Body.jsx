import { useState, useEffect } from "react";
import imagelist from "../data/imagelist";

function Body() {
  const [modalBiggestPhoto, setModalBiggestPhoto] = useState(false);
  const [modalSmallerPhoto, setModalSmallerPhoto] = useState(null);
  const [columnGrid, setColumnGrid] = useState(3);
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

  useEffect(() => {
    const updateColumns = () => {
      setColumnGrid(window.innerWidth >= 576 ? 3 : 2);
    };

    updateColumns();

    const gridContainer = document.querySelector('.grid-container');
    const gridItems = gridContainer.querySelectorAll('.grid-item');

    const columns = columnGrid;
    const remainder = gridItems.length % columns;

    // if (remainder !== 0) {
    //   // Chuyển NodeList thành mảng và duyệt qua
    //   const gridItemsArray = Array.from(gridItems);
    //   // Duyệt số phần tử remainder ở hàng cuối
    //   for (let i = gridItemsArray.length - remainder; i < gridItemsArray.length; i++) {
    //     // gridItemsArray[i].classList.add('ml-auto', 'xxl:ml-[calc(34rem_+_10px)]');
    //   }
    // }

    window.addEventListener('resize', updateColumns);

    return () => {
      window.removeEventListener('resize', updateColumns);
    };
  }, [columnGrid]);

  return (
    <>
      <div className="content-wrapper-section w-[95%] mx-auto mb-10">
        <section className="impressive-photo-section text-center mb-16 animatecss animatecss-fadeInDown">
          <img
            onClick={handleClickBiggestPhoto}
            id="biggest-image"
            src="./images/section-1/2U3A8579.JPG"
            className="single-photo-biggest w-[80%] md:w-[60%] h-full bg-cover bg-center bg-no-repeat hover:border-none hover:scale-110 hover:ease-in-out hover:duration-300]"
          />
          <div
            id="modal-biggest"
            style={{ display: modalBiggestPhoto ? "flex" : "none" }}
            onClick={() => setModalBiggestPhoto(false)}
            className="modal fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center"
          >
            <img
              id="modal-image-biggest"
              src="./images/section-1/2U3A8579.JPG"
              alt="Image"
              className="max-w-full max-h-full shadow shadow-red-50"
            />
          </div>
        </section>
        <section className="wrapped-photo-section">
          <div className="grid grid-cols-1 mmd:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 lg:gap-4 grid-container">
            {photosList.map((photo) => (
              <div key={photo.id} id={`wrapped-photo-id-${photo.id}`} className="grid-item basis-1/3 gap-4 max-w-screen-sm my-auto w-[80%] lg:w-[70%] wrapped-photo-item mx-auto bg-white border-white border-[10px] md:border-8">
                <img
                  id={photo.id}
                  src={`./images/section-2/${photo.name}`}
                  onClick={() => handleClickSmallerPhoto(photo)}
                  alt="Image"
                  className="hover:border-none cursor-pointer bg-cover bg-center bg-no-repeat hover:scale-110 hover:ease-in-out hover:duration-300"
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
            src={`./images/section-2/${modalSmallerPhoto.name}`}
            alt="Image-modal"
            className="max-w-full max-h-full shadow shadow-red-50"
          />
        </div>
      )}
      <div className="container w-[95%] mx-auto mb-3">
        <div className="text-3xl px-4 text-gray-700 mb-4 font-bold text-center hover:text-pink-400">
          Chúc Khanh và Thương sẽ hạnh phúc bên nhau tới trọn đời!
          <div className="inline-block">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 flex justify-center items-center">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
          </div>
        </div>
        <hr className="border-1 border-slate-400" />
      </div>
    </>
  );
}

export default Body;
