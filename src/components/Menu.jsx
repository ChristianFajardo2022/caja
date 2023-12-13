import React from "react";
import { handleClick } from "../config/Anclas";
const Menu = ({ linesRef, onCloseMenu, isMobile}) => {

  const handleMenuClick = (anchor) => {
    handleClick(anchor);
    onCloseMenu(); // Cerrar menú después de la selección
  };

  return (
    <ul className="nav h-full flex max-xl:flex-col items-center justify-center">
      <li
        ref={(el) => (linesRef.current[0] = el)}
        onClick={() => handleMenuClick("inicio")}
        className="line active"
      >
        La entrega <br /> de David
      </li>
      <li
        ref={(el) => (linesRef.current[1] = el)}
        onClick={() => handleMenuClick("caja")}
        className="line"
      >
        La caja <br />
        magica
      </li>
      <li
        ref={(el) => (linesRef.current[2] = el)}
        onClick={() => handleMenuClick("carta")}
        className="line"
      >
        {" "}
        La Carta
      </li>
      <li
        ref={(el) => (linesRef.current[3] = el)}
        onClick={() => handleMenuClick("novena")}
        className="line"
      >
        Novena <br />y cuento
      </li>
      <li
        ref={(el) => (linesRef.current[4] = el)}
        onClick={() => handleMenuClick("momentos")}
        className="xl:ml-12 cursor-pointer"
      >
        Momentos de <br />
        entrega
      </li>
      {/* <li ref={(el) => (linesRef.current[5] = el)} className="xl:ml-12">
        Apoya a <br />
        la fundación
      </li> */}
    </ul>
  );
};

export default Menu;
