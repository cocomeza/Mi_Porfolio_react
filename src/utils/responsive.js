// Utilidades para responsive design

// Breakpoints estándar
export const breakpoints = {
  xs: '360px',
  sm: '480px',
  md: '768px',
  lg: '1024px',
  xl: '1200px',
  xxl: '1400px'
};

// Hook para detectar el tamaño de pantalla
export const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return screenSize;
};

// Función para detectar si es móvil
export const isMobile = () => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth <= 768;
};

// Función para detectar si es tablet
export const isTablet = () => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth > 768 && window.innerWidth <= 1024;
};

// Función para detectar si es desktop
export const isDesktop = () => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth > 1024;
};

// Función para obtener el tipo de dispositivo
export const getDeviceType = () => {
  if (isMobile()) return 'mobile';
  if (isTablet()) return 'tablet';
  return 'desktop';
};

// Función para detectar orientación
export const getOrientation = () => {
  if (typeof window === 'undefined') return 'portrait';
  return window.innerHeight > window.innerWidth ? 'portrait' : 'landscape';
};

// Función para detectar si es touch device
export const isTouchDevice = () => {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
};

// Función para optimizar imágenes según el dispositivo
export const getOptimizedImageSrc = (baseSrc, deviceType = getDeviceType()) => {
  const imageSizes = {
    mobile: 'w_400',
    tablet: 'w_800',
    desktop: 'w_1200'
  };
  
  // Si tienes un servicio de optimización de imágenes como Cloudinary
  // return `${baseSrc}?${imageSizes[deviceType]}`;
  
  return baseSrc;
};

// Función para ajustar el número de elementos en grid según el dispositivo
export const getGridColumns = (deviceType = getDeviceType()) => {
  const columns = {
    mobile: 1,
    tablet: 2,
    desktop: 3
  };
  
  return columns[deviceType];
};

// Función para detectar si el usuario prefiere movimiento reducido
export const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Función para detectar si el usuario prefiere esquema de color oscuro
export const prefersDarkMode = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

// Función para detectar si el usuario prefiere esquema de color claro
export const prefersLightMode = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-color-scheme: light)').matches;
};

// Función para detectar si el usuario prefiere contraste alto
export const prefersHighContrast = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-contrast: high)').matches;
};

// Función para detectar si el usuario prefiere transparencia reducida
export const prefersReducedTransparency = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-transparency: reduce)').matches;
};

// Función para detectar si el usuario prefiere datos reducidos
export const prefersReducedData = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-data: reduce)').matches;
};

// Función para obtener configuraciones de usuario
export const getUserPreferences = () => {
  return {
    deviceType: getDeviceType(),
    orientation: getOrientation(),
    isTouch: isTouchDevice(),
    reducedMotion: prefersReducedMotion(),
    darkMode: prefersDarkMode(),
    lightMode: prefersLightMode(),
    highContrast: prefersHighContrast(),
    reducedTransparency: prefersReducedTransparency(),
    reducedData: prefersReducedData()
  };
};