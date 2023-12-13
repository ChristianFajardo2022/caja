import React from "react";
import Figure from "./Figure";

const Division = ({ isTablet, isMobile }) => {
  return (
    <div className="division xs:px-3.5">
      <div className="gradienteTransparente xl:h-[4rem] xs:h-[1rem] xl:translate-y-[-4rem] xs:translate-y-[-1rem]"></div>
      <div className="bg-black">
        <div className="clase">
          <p className="text-center">
            Desde el 6 hasta el 26 de diciembre,
            <br /> estaremos recibiendo donaciones de juguetes y regalos <br />{" "}
            en nuestra mágica caja navideña.
          </p>

          <div className="flex flex-wrap">
            <div className="xl:w-1/2 max-xl:w-full flexCenterC">
              <Figure
                customclas={"w-[12rem] h-[12rem]"}
                imgSrc={"/iconos/icono1.svg"}
              />
              <p className="text-center">
                abrirá <br />
                desde las 10 a.m. <br />
                y cerrará sus puertas <br />a las 10 p.m.
              </p>
            </div>
            <div className="xl:w-1/2 max-xl:w-full flexCenterC">
              <Figure
                customclas={"w-[12rem] h-[12rem]"}
                imgSrc={"/iconos/icono2.svg"}
              />

              <p className="text-center">
                todos estos <br />
                días caerá nieve que hemos <br />
                traído desde finlandia <br />a las 6, 7 y 8 p.m.
              </p>
            </div>
            <div className="w-full flexCenterC">
              <Figure
                customclas={"w-[12rem] h-[12rem]"}
                imgSrc={"/iconos/icono3.svg"}
              />
              <p className="text-center">
                Nuestro coro Navideño será <br />
                el encargado de transportarnos <br />a la mágica Villa de Santa,{" "}
                <br />
                ¡prográmate!.
              </p>
            </div>
            <div className="flexCenterC w-full ">
              {isTablet || isMobile ? (
                <Figure customclas={"mt-6"} imgSrc={"/imagenes/horarios.jpg"} />
              ) : (
                <>
                  <div className="grid grid-cols-5 grid-rows-2 mx-auto mt-12 mb-6">
                    <div className="tableHead col-span-1 row-span-1">
                      Miércoles 6
                    </div>
                    <div className="tableHead col-span-1 row-span-1">
                      Miércoles 13
                    </div>
                    <div className="tableHead col-span-1 row-span-1">
                      Jueves 14
                    </div>
                    <div className="tableHead col-span-1 row-span-1">
                      Viernes 15
                    </div>
                    <div className="tableHead col-span-1 row-span-1">
                      Domingo 17
                    </div>
                    <div className="tbField col-span-1 row-span-1">
                      6P.M. y 8P.M.
                    </div>
                    <div className="tbField col-span-1 row-span-1">
                      6 P.M.
                    </div>
                    <div className="tbField col-span-1 row-span-1">
                      8P.M. y 9P.M.
                    </div>
                    <div className="tbField col-span-1 row-span-1">
                      6P.M. y 8P.M.
                    </div>
                    <div className="tbField col-span-1 row-span-1">6P.M Y 8P.M.</div>
                  </div>

                  <div className="grid grid-cols-6 grid-rows-2 mx-auto mt-12 mb-6">
                    <div className="tableHead col-span-1 row-span-1">
                      Lunes 18
                    </div>
                    <div className="tableHead col-span-1 row-span-1">
                      Martes 19
                    </div>
                    <div className="tableHead col-span-1 row-span-1">
                      Miércoles 20
                    </div>
                    <div className="tableHead col-span-1 row-span-1">
                      Jueves 21
                    </div>
                    <div className="tableHead col-span-1 row-span-1">
                      Viernes 22
                    </div>
                    <div className="tableHead col-span-1 row-span-1">
                      Sábado 23
                    </div>
                    <div className="tbField col-span-1 row-span-1">2P.M.</div>
                    <div className="tbField col-span-1 row-span-1">8P.M.</div>
                    <div className="tbField col-span-1 row-span-1">
                      6P.M. y 8P.M.
                    </div>
                    <div className="tbField col-span-1 row-span-1">
                      6P.M. y 8P.M.
                    </div>
                    <div className="tbField col-span-1 row-span-1">
                      2P.M.
                    </div>
                    <div className="tbField col-span-1 row-span-1">2P.M</div>
                  </div>
                </>
              )}
              <div className="legal">
                    <p className=" xl:text-[10px] xs:text-[8px] ">*programación sujeta a cambios según disponibilidad.</p>
                  </div>
            </div>
          </div>
        </div>
      </div>
      <div className="gradienteTransparente rotate-180 h-[4rem] translate-y-[4rem]"></div>
    </div>
  );
};

export default Division;
