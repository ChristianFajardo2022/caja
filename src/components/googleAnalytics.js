export const initGA = () => {
    // Crear dataLayer si no existe
    window.dataLayer = window.dataLayer || [];
    
    // Función gtag
    function gtag() {
      dataLayer.push(arguments);
    }
  
    // Inicializar GA con la fecha actual y la configuración
    gtag('js', new Date());
    gtag('config', 'G-B828VMBTJF');
  };