import React, { useState, useEffect } from "react";
import { handleClick } from "../config/Anclas";

const Carta = ({ isTablet, isMobile }) => {

  const [imgSrc1, setImgSrc1] = useState('/imagenes/mano1.webp');
  const [imgSrc2, setImgSrc2] = useState('/imagenes/mano2.webp');
  const [imgSrc3, setImgSrc3] = useState('/imagenes/mano3.webp');
  const [imgSrc4, setImgSrc4] = useState('/imagenes/mano4.webp');
  const [imgSrc5, setImgSrc5] = useState('/imagenes/mano5.webp');
  const [imgSrc6, setImgSrc6] = useState('/imagenes/mano6.webp');
  const [imgSrc7, setImgSrc7] = useState('/imagenes/mano7.webp');
  const [imgSrc8, setImgSrc8] = useState('/imagenes/mano8.webp');
  const [imgSrc9, setImgSrc9] = useState('/imagenes/mano9.webp');

  const logScrollPercentage = () => {
    // Obtener la altura total de la página
    const totalHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    // Obtener la posición actual del scroll
    const scrollPosition = window.scrollY;

    // Calcular el porcentaje de avance
    const scrollPercentage = (scrollPosition / totalHeight) * 100;

    return scrollPercentage.toFixed(2);
  };
  useEffect(() => {

    if (isMobile) {
      setImgSrc1('/imagenes-manosmovil/mano1mobile.webp');
      setImgSrc2('/imagenes-manosmovil/mano2mobile.webp');
      setImgSrc3('/imagenes-manosmovil/mano3mobile.webp');
      setImgSrc4('/imagenes-manosmovil/mano3mobile.webp');
      setImgSrc5('/imagenes-manosmovil/mano4mobile.webp');
      setImgSrc6('/imagenes-manosmovil/mano5mobile.webp');
      setImgSrc7('/imagenes-manosmovil/mano6mobile.webp');
      setImgSrc8('/imagenes-manosmovil/mano7mobile.webp');
      setImgSrc9('/imagenes-manosmovil/mano8mobile.webp');
  } else {
      // Usar las rutas originales para otros dispositivos
      setImgSrc1('/imagenes/mano1.webp');
      setImgSrc2('/imagenes/mano2.webp');
      setImgSrc3('/imagenes/mano3.webp');
      setImgSrc4('/imagenes/mano4.webp');
      setImgSrc5('/imagenes/mano5.webp');
      setImgSrc6('/imagenes/mano6.webp');
      setImgSrc7('/imagenes/mano7.webp');
      setImgSrc8('/imagenes/mano8.webp');
      setImgSrc9('/imagenes/mano9.webp');
  }

    const handleScroll = () => {
      // Obtener el porcentaje de avance
      const percentage = logScrollPercentage();
      console.log(percentage);

      // Imprimir el porcentaje en la consola

      const img1 = document.querySelector(".imagen_1");
      const img2 = document.querySelector(".imagen_2");
      const img3 = document.querySelector(".imagen_3");
      const img4 = document.querySelector(".imagen_4");
      const img5 = document.querySelector(".imagen_5");
      const img6 = document.querySelector(".imagen_6");
      const img7 = document.querySelector(".imagen_7");
      const img8 = document.querySelector(".imagen_8");
      // const img9 = document.querySelector('.imagen_9');

      if (parseFloat(percentage) >= 50) {
        img1.classList.add("opacity");
      } else {
        img1.classList.remove("opacity");
      }
      if (parseFloat(percentage) >= 54) {
        img2.classList.add("opacity");
      } else {
        img2.classList.remove("opacity");
      }
      if (parseFloat(percentage) >= 58) {
        img3.classList.add("opacity");
      } else {
        img3.classList.remove("opacity");
      }
      if (parseFloat(percentage) >= 62) {
        img4.classList.add("opacity");
      } else {
        img4.classList.remove("opacity");
      }
      if (parseFloat(percentage) >= 64) {
        img5.classList.add("opacity");
      } else {
        img5.classList.remove("opacity");
      }
      if (parseFloat(percentage) >= 68) {
        img6.classList.add("opacity");
      } else {
        img6.classList.remove("opacity");
      }
      if (parseFloat(percentage) >= 72) {
        img7.classList.add("opacity");
      } else {
        img7.classList.remove("opacity");
      }
      if (parseFloat(percentage) >= 76) {
        img8.classList.add("opacity");
      } else {
        img8.classList.remove("opacity");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);

  return (
    <div id="carta" className="largo relative">
      <div className="cajaimagenes">
        <div className="absolute xl:top-28 xs:top-9 z-10 left-1/2 translate-x-[-50%] text-center">
          <h3 className=" xl:text-5xl xs:text-[25px] xl:mb-6 xs:mb-96 Tusker text-[--mainColorText]">
            LA CARTA QUE CAMBIÓ NUESTRA FORMA DE VER LA NAVIDAD
          </h3>
          <p>
            Un niño, un deseo de entregar, un mundo transformado. La carta de
            David nos enseña el verdadero significado de la Navidad.
          </p>
        </div>
        <img className="imagen_1" src={imgSrc1} alt="" />
                <img className="imagen_2" src={imgSrc2} alt="" />
                <img className="imagen_3" src={imgSrc3} alt="" />
                <img className="imagen_4" src={imgSrc4} alt="" />
                <img className="imagen_5" src={imgSrc5} alt="" />
                <img className="imagen_6" src={imgSrc6} alt="" />
                <img className="imagen_7" src={imgSrc7} alt="" />
                <img className="imagen_8" src={imgSrc8} alt="" />
                <img className="imagen_9" src={imgSrc9} alt="" />
      </div>
      <div className="w-full h-[50px] gradienteTransparente absolute bottom-0"></div>
    </div>
  );
};

export default Carta;
