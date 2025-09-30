import { useEffect } from 'react';
import { getUserPreferences } from '../utils/responsive';

// Componente para manejar configuraciones del viewport y preferencias del usuario
const ViewportHandler = () => {
  useEffect(() => {
    // Aplicar configuraciones basadas en las preferencias del usuario
    const preferences = getUserPreferences();
    
    // Aplicar clase CSS para dispositivo touch
    if (preferences.isTouch) {
      document.body.classList.add('touch-device');
    } else {
      document.body.classList.add('no-touch');
    }
    
    // Aplicar clase CSS para movimiento reducido
    if (preferences.reducedMotion) {
      document.body.classList.add('reduced-motion');
    }
    
    // Aplicar clase CSS para contraste alto
    if (preferences.highContrast) {
      document.body.classList.add('high-contrast');
    }
    
    // Aplicar clase CSS para transparencia reducida
    if (preferences.reducedTransparency) {
      document.body.classList.add('reduced-transparency');
    }
    
    // Aplicar clase CSS para datos reducidos
    if (preferences.reducedData) {
      document.body.classList.add('reduced-data');
    }
    
    // Aplicar clase CSS para orientación
    document.body.classList.add(`orientation-${preferences.orientation}`);
    
    // Aplicar clase CSS para tipo de dispositivo
    document.body.classList.add(`device-${preferences.deviceType}`);
    
    // Manejar cambios de orientación
    const handleOrientationChange = () => {
      const newOrientation = window.innerHeight > window.innerWidth ? 'portrait' : 'landscape';
      document.body.classList.remove('orientation-portrait', 'orientation-landscape');
      document.body.classList.add(`orientation-${newOrientation}`);
    };
    
    // Manejar cambios de tamaño de pantalla
    const handleResize = () => {
      const newDeviceType = getUserPreferences().deviceType;
      document.body.classList.remove('device-mobile', 'device-tablet', 'device-desktop');
      document.body.classList.add(`device-${newDeviceType}`);
    };
    
    window.addEventListener('orientationchange', handleOrientationChange);
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return null; // Este componente no renderiza nada
};

export default ViewportHandler;