import { useEffect, useState } from 'react';
/**
 * useSticky custom react hook
 * @returns {boolean}
 */
const useSticky = () => {
  const [scrollingUp, setScrollingUp] = useState(false);
  const handleScroll = () => {
    const currScroll = window.pageYOffset;
    const isScrolled = currScroll > 900;
    setScrollingUp(isScrolled);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return scrollingUp;
};

export default useSticky;
