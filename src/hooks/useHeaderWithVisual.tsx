import { useHeaderStore } from '@/stores/headerStore';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useHeaderWithVisual = () => {
  const { pathname } = useLocation();
  const isHeaderWithVisual = useHeaderStore((state) => state.isHeaderWithVisual);
  const setIsHeaderWithVisual = useHeaderStore((state) => state.setIsHeaderWithVisual);
  useEffect(() => {
    if (pathname.startsWith('/travel-list/') && pathname !== '/travel-list/') {
      setIsHeaderWithVisual(true);
    } else {
      setIsHeaderWithVisual(false);
    }
  }, [pathname]);

  return isHeaderWithVisual;
};

export default useHeaderWithVisual;
