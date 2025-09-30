// Utilidades de optimización de rendimiento

// Lazy loading para imágenes
export const lazyLoadImages = () => {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
  }
};

// Debounce para optimizar eventos
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Throttle para optimizar eventos frecuentes
export const throttle = (func, limit) => {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Preload de recursos críticos
export const preloadCriticalResources = () => {
  const criticalImages = [
    '/foto-hero.jpeg',
    '/vector-fondo-tecnologia.jpg'
  ];

  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
};

// Optimización de scroll
export const optimizeScroll = () => {
  let ticking = false;

  const updateScrollPosition = () => {
    // Aquí puedes agregar lógica para actualizar la posición de scroll
    ticking = false;
  };

  const requestTick = () => {
    if (!ticking) {
      requestAnimationFrame(updateScrollPosition);
      ticking = true;
    }
  };

  window.addEventListener('scroll', requestTick, { passive: true });
};

// Inicializar optimizaciones
export const initPerformanceOptimizations = () => {
  // Solo ejecutar en el cliente
  if (typeof window !== 'undefined') {
    preloadCriticalResources();
    lazyLoadImages();
    optimizeScroll();
  }
};