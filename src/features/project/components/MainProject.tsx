import { mainProjectCss } from './MainProject.styles';
import { commonCss } from '@/styles/common.styles';
import ProjectList from './ProjectList/ProjectList';
import PcProjectList from './PcProjectList/PcProjectList';
import { useTranslation } from 'next-i18next';
import { useIsPc } from '@/hooks/useIsPc';

export default function MainProject() {
  const isPc = useIsPc();
  const { t } = useTranslation('project');

  return (
    <section css={mainProjectCss.wrapper}>
      <h2 css={[mainProjectCss.title, commonCss.onlyPcVisibleBlock]}>PROJECT</h2>
      <p css={[mainProjectCss.description, commonCss.onlyPcVisibleBlock]}>{t('description')}</p>

      {/* mobile */}
      <ProjectList />

      {/* pc */}
      {isPc && <PcProjectList />}
    </section>
  );
}
