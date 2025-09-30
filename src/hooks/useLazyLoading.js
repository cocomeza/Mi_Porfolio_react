import { useEffect, useRef, useState } from 'react';

// Hook para lazy loading de imágenes
export const useLazyLoading = (src, placeholder = '/placeholder.jpg') => {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [imageRef, setImageRef] = useState(null);

  useEffect(() => {
    let observer;
    
    if (imageRef && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setImageSrc(src);
              observer.unobserve(imageRef);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '50px'
        }
      );
      
      observer.observe(imageRef);
    } else {
      // Fallback para navegadores sin IntersectionObserver
      setImageSrc(src);
    }

    return () => {
      if (observer && observer.unobserve) {
        observer.unobserve(imageRef);
      }
    };
  }, [imageRef, src]);

  return [imageSrc, setImageRef];
};

// Hook para detectar si un elemento está en el viewport
export const useInViewport = (threshold = 0.1) => {
  const [isInViewport, setIsInViewport] = useState(false);
  const [ref, setRef] = useState(null);

  useEffect(() => {
    let observer;
    
    if (ref && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            setIsInViewport(entry.isIntersecting);
          });
        },
        { threshold }
      );
      
      observer.observe(ref);
    }

    return () => {
      if (observer && observer.unobserve) {
        observer.unobserve(ref);
      }
    };
  }, [ref, threshold]);

  return [isInViewport, setRef];
};