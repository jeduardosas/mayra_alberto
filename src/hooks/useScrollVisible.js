import { useState, useEffect } from 'react';

const useScrollVisible = (elementId) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const element = document.getElementById(elementId);
      
      if (element) {
        const elementPosition = element.offsetTop;
        const elementHeight = element.offsetHeight;

        // Calcula el 30% del elemento
        const triggerPosition = elementPosition + elementHeight * 0.8;

        if (scrollPosition > triggerPosition) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [elementId]);

  return isVisible;
};

export default useScrollVisible;
