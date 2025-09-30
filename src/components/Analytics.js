import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Reemplaza con tu ID de Google Analytics
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';

const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Cargar Google Analytics script
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script1);

    // Configurar Google Analytics
    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}', {
        page_path: window.location.pathname,
      });
    `;
    document.head.appendChild(script2);
  }, []);

  useEffect(() => {
    // Trackear cambios de página
    if (window.gtag) {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
};

export default Analytics;

// Funciones de utilidad para tracking de eventos
export const trackEvent = (action, category, label, value) => {
  if (window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

export const trackButtonClick = (buttonName) => {
  trackEvent('click', 'Button', buttonName);
};

export const trackFormSubmit = (formName) => {
  trackEvent('submit', 'Form', formName);
};

export const trackDownload = (fileName) => {
  trackEvent('download', 'File', fileName);
};

export const trackExternalLink = (url) => {
  trackEvent('click', 'External Link', url);
};