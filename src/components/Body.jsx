import { useState, useEffect } from "react";
import imagelist from "../data/imagelist";
function Body() {
  const [modalBiggestPhoto, setModalBiggestPhoto] = useState(false);
  const [modalSmallerPhotos, setModalSmallerPhotos] = useState(null);
  const photosList = imagelist;
  
  const handleKeyDownESC1 = (event) => {
    if(event.key === "Escape"){
      setModalBiggestPhoto(false);
    }
  }
  const handleKeyDownESC2 = (event) => {
    if(event.key === "Escape"){
      setModalSmallerPhotos(null);
    }
  }

  const handleClickSmallerPhotos = (event) => {
    setModalSmallerPhotos(event.target.id);
  };

  const handleClickModalSmallerPhotos = (event) => {
    setModalSmallerPhotos(modalSmallerPhotos === event.target.id ? null : event.target.id);
  };

  
  useEffect(() => {
    if(modalBiggestPhoto){
      document.addEventListener("keydown", handleKeyDownESC1);
    }else{
      document.removeEventListener("keydown", handleKeyDownESC1);
    }

    if(modalSmallerPhotos){
      document.addEventListener("keydown", handleKeyDownESC2);
    }else{
      document.removeEventListener("keydown", handleKeyDownESC2);
    }
  }, [modalBiggestPhoto, modalSmallerPhotos]);

  return (
    <>
      <div className="content-wrapper-section w-[95%] mx-auto">
        <section className="impressive-photo-section text-center mb-16">
          <div onClick={() => setModalBiggestPhoto(true)} id="biggest-image" className="single-photo-biggest hover:scale-105 hover:ease-in-out hover:duration-300 bg-[url('./images/2U3A8579.JPG')]">
          </div>
          <div id="modal-biggest" style={{ display: modalBiggestPhoto ? "flex" : "none" }} onClick={() => setModalBiggestPhoto(!modalBiggestPhoto)} className="modal fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center">
            <img id="modal-image-biggest" src="./images/2U3A8579.JPG" alt="Image" className="max-w-full max-h-full shadow shadow-red-50" />
          </div>
        </section>{/* End of single biggest photo section */}
        <section className="wrapped-photo-section">
          <div className="flex flex-wrap justify-center items-center gap-4">
            {photosList.map((photo) => (
              <div className="" key={photo.id}>
                <img id={photo.id} src={`./images/${photo.name}`} onClick={(event) => handleClickSmallerPhotos(event)} alt="Image" className="max-w-screen-sm border-white hover:border-none border-8 cursor-pointer bg-cover bg-center bg-no-repeat hover:scale-105 hover:ease-in-out hover:duration-300"/>
                <div id={`modal-smaller-${photo.id}`} style={{ display: modalSmallerPhotos === photo.id ? "flex" : "none" }} onClick={(event) => handleClickModalSmallerPhotos(event)} className="modal fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center">
                  <img id={`modal-image-smaller-${photo.id}`} src={`./images/${photo.name}`} alt="Image-modal" className="max-w-full max-h-full shadow shadow-red-50" />
                </div>
              </div>
            ))}
          </div>
        </section>{/* End of smaller photos section */}
      </div>
    </>
  )
}

export default Body
