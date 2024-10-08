import { mainMenu } from '@/data/menu.data';
import { headerMenuCss } from './HeaderMenu.styles';
import { Link } from 'react-scroll';
import { MainMenu } from '@/types/menu.types';
import { useRecoilState } from 'recoil';
import { activeSectionState } from '@/atoms/sectionScroll';
import { Interpolation, Theme } from '@emotion/react';
import { useDarkMode } from '@/hooks/useDarkMode';
import { darkModeCss } from '@/styles/common.styles';

interface Props {
  cssStyle?: Interpolation<Theme>;
}

export default function HeaderMenu({ cssStyle }: Props) {
  const [activeSection, setActiveSection] = useRecoilState<MainMenu>(activeSectionState);
  const { themeMode } = useDarkMode();

  return (
    <nav>
      <ul css={[headerMenuCss.menuList, cssStyle]}>
        {mainMenu.map((menu) => (
          <Link
            key={menu}
            to={menu}
            spy={true}
            smooth={true}
            duration={500}
            css={[headerMenuCss.menuItem, themeMode === 'dark' && darkModeCss.darkModeColor, activeSection === menu && headerMenuCss.activeItem]}
            onSetActive={() => setActiveSection(menu)}
          >
            <li>{menu}</li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}
