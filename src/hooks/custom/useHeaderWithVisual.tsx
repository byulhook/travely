import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const useHeaderWithVisual = () => {
  const pathName = useLocation().pathname;
  const [isHeaderWithVisual, setIsHeaderWithVisual] = useState(false);

  useEffect(() => {
    if (pathName.startsWith('/travel-list/') && pathName !== '/travel-list/') {
      setIsHeaderWithVisual(true);
    } else {
      setIsHeaderWithVisual(false);
    }
  }, [pathName]);

  return isHeaderWithVisual;
};

export default useHeaderWithVisual;
