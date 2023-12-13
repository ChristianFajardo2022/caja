import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const dataGaleria = [
  {
    img: "/imagenes-galeria/Cajaexterior1800x1200.jpg",
  },
  {
    img: "/imagenes-galeria/Dulcenavidad1800x1200.jpg",
  },
  {
    img: "/imagenes-galeria/Fachadacaja1800x1200.jpg",
  },
  {
    img: "/imagenes-galeria/host1800x1200px.webp",
  },
  {
    img: "/imagenes-galeria/interior-renos.jpg",
  },
  {
    img: "/imagenes-galeria/Piscinadepelotas1800x1200px.webp",
  },
  {
    img: "/imagenes-galeria/Primerpisogeneral1800x1200px.webp",
  },
];

const Gallery = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
  };
  const settings2 = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const [isMobil, setIsMobil] = useState(window.innerWidth < 768); // Ejemplo: considera móvil si el ancho es menor a 768px

  useEffect(() => {
    const handleResize = () => {
      setIsMobil(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    // Limpiar el evento al desmontar el componente
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  

  return (
    <div className="w-full pt-28 bg-black" id="momentos">
      <div className="flex-col text-center xs:px-3.5">
        <h3 className="font-extrabold font-[tusker] text-5xl my-6 text-[#e2d599] tracking-[1.5px]">
          MOMENTOS DE ENTREGA
        </h3>
        <p className="my-12">
          Vive las historias de quienes han compartido su espíritu navideño en
          nuestra caja mágica
        </p>
      </div>

      <div className="pb-[50px]">
      <Slider {...(isMobil ? settings2 : settings)}>
          {dataGaleria.map((d, index) => (
            <div
              key={index}
              className=""
              onClick={() => handleImageClick(d.img)}
            >
              <div className=" px-2 flex justify-center items-center">
                <img className="" src={d.img} alt="" />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {modalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
          onClick={handleCloseModal}
        >
          <img
            src={selectedImage}
            alt=""
            style={isMobil ? { width: "auto", maxHeight: "40%", borderRadius: "8px" } : { width: "auto", maxHeight: "80%", borderRadius: "8px" } }
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
