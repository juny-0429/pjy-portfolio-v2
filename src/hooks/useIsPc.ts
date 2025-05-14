import { useEffect, useState } from 'react';

export const useIsPc = () => {
  const [isPc, setIsPc] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsPc(window.innerWidth >= 1280);
    };

    handleResize(); // 초기 렌더링 시 한 번 실행
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isPc;
};
