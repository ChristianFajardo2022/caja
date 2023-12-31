const Novena = () => {
  const handleDownload = () => {
    // Puedes cambiar 'ruta/al/archivo.pdf' con la ruta correcta de tu archivo PDF.
    const pdfFilePath = "/imagenes/NOVENA-NAVIDAD.pdf";

    // Crea un elemento 'a' (enlace) y configúralo para descargar el archivo.
    const link = document.createElement("a");
    link.href = pdfFilePath;
    link.download = "NOVENA-NAVIDAD.pdf";
    link.rel = "noopener noreferrer"; // Añadir atributo rel

    // Simula el clic en el enlace para iniciar la descarga.
    document.body.appendChild(link);
    link.dispatchEvent(new MouseEvent('click'));

    // Limpia el enlace después de la descarga.
    document.body.removeChild(link);
  };

  return (
    <div id="novena" className=" bnovena">
        <div className="w-full h-[50px] gradienteTransparente"></div>
      <div className="flex flex-col h-full justify-between text-center xs:px-3.5">
        <p className=" pt-10 mb-6">
          Extiende la magia de entregar: Descarga nuestra novena especial y un
          cuento navideño para compartir el espíritu de entregar en familia.
        </p>
        <div className=" flex flex-col">
          <div className="w-full h-[50px] gradienteTransparente"></div>
          <div className="flex-col justify-center text-center text-[#e2d599] bg-black">
            <p className=" my-4">
              Prepara tu hogar para una navidad inolvidable
            </p>
            {/* Agrega el evento onClick para manejar la descarga */}
            <button
              onClick={handleDownload}
              className="custonBtn tracking-[7px] text-sm Amentti"
            >
              DESCARGA AQUÍ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Novena;
