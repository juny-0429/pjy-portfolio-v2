import Image from 'next/image';
import { projectListCss } from './ProjectList.styles';
import { projectListData } from '../../data/project.data';
import Badge from '@/components/Badge/Badge';
import { skillColorMap, SkillType } from '@/features/skills/data/skillColorMap.data';
import sizes from '@/theme/sizes';
import { commonCss, darkModeCss } from '@/styles/common.styles';
import Link from 'next/link';
import { useDarkMode } from '@/hooks/useDarkMode';
import { useRouter } from 'next/router';

export default function ProjectList() {
  const { locale } = useRouter();
  const { themeMode } = useDarkMode();

  return (
    <ul css={[projectListCss.projectList, commonCss.onlyMobileVisible]}>
      {projectListData.map((project) => (
        <Link href={`/project/${project.id}`} key={project.id} style={{ width: '100%' }}>
          <li css={[projectListCss.projectWrapper, themeMode === 'dark' && projectListCss.darkModeProjectBackground]}>
            <div css={projectListCss.mainImageWrapper}>
              <Image src={project.mainImage} fill sizes="100%" alt="project main image" style={{ objectFit: 'cover' }} />
            </div>

            <div css={[projectListCss.projectTab, themeMode === 'dark' && projectListCss.darkModeProjectBackground]}>
              <span>{locale === 'ko' ? project.team_ko : project.team_en}</span>
            </div>

            <div css={projectListCss.titleWrapper}>
              {project.logo && (
                <div css={projectListCss.projectLogoWrapper}>
                  <Image src={project.logo} fill sizes="100%" alt="project logo" />
                </div>
              )}
              <p css={[projectListCss.projectTitle, themeMode === 'dark' && darkModeCss.darkModeInvertColor]}>{project.title}</p>
            </div>

            <div css={projectListCss.skillList}>
              {project.skills.map((skill, index) => (
                <Badge key={index} color={skillColorMap[skill as SkillType]} type="capsule" fillStyle="fill" cssStyle={sizes.badgeSize[14]}>
                  {skill}
                </Badge>
              ))}
            </div>
          </li>
        </Link>
      ))}
    </ul>
  );
}
