import { mainProjectCss } from './MainProject.styles';
import { commonCss } from '@/styles/common.styles';
import ProjectList from './ProjectList/ProjectList';
import PcProjectList from './PcProjectList/PcProjectList';
import { useEffect, useState } from 'react';

export default function MainProject() {
  const [isPc, setIsPc] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsPc(window.innerWidth >= 1280);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section css={mainProjectCss.wrapper}>
      <h2 css={[mainProjectCss.title, commonCss.onlyPcVisibleBlock]}>PROJECT</h2>
      <p css={[mainProjectCss.description, commonCss.onlyPcVisibleBlock]}>각 프로젝트 별 상태 내용이 궁금하시다면 클릭 해주세요.</p>

      {/* mobile */}
      <ProjectList />

      {/* pc */}
      {isPc && <PcProjectList />}
    </section>
  );
}
