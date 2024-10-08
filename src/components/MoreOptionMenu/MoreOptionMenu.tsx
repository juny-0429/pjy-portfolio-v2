import { useState } from 'react';
import FeatherIcons from '@/theme/featherIcons';
import { moreOptionMenuCss } from './MoreOptionMenu.styles';
import { animateScroll as scroll } from 'react-scroll';
import { useDarkMode } from '@/hooks/useDarkMode';
import MultiLanguageMenu from './MultiLanguageMenu/MultiLanguageMenu';

export default function MoreOptionMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDisplayed, setIsDisplayed] = useState(false);

  const { themeMode, toggleThemeMode } = useDarkMode();

  const onMoreToggle = () => {
    if (!isOpen) {
      setIsDisplayed(true);
      setTimeout(() => setIsOpen(true), 0);
    } else {
      setIsOpen(false);
      setTimeout(() => setIsDisplayed(false), 300);
    }
  };

  return (
    <nav css={moreOptionMenuCss.wrapper}>
      {/* More 버튼 */}
      <button type="button" css={moreOptionMenuCss.moreOptionMenu} onClick={onMoreToggle}>
        <FeatherIcons.MoreVertical />
      </button>

      {/* 옵션 메뉴들 */}
      <div css={[moreOptionMenuCss.optionsContainer, isOpen ? moreOptionMenuCss.showOptions : moreOptionMenuCss.hideOptions]} style={{ display: isDisplayed ? 'flex' : 'none' }}>
        {/* 메일 바로 보내기 */}
        <button type="button" css={moreOptionMenuCss.moreOptionMenu} onClick={() => (window.location.href = 'mailto:example@example.com')}>
          <FeatherIcons.Mail />
        </button>

        {/* 다국어 */}
        <MultiLanguageMenu />

        {/* 다크 모드 */}
        <button type="button" css={moreOptionMenuCss.moreOptionMenu} onClick={toggleThemeMode}>
          {themeMode === 'dark' ? <FeatherIcons.Moon /> : <FeatherIcons.Sun />}
        </button>

        {/* 최상단으로 이동하기 */}
        <button type="button" css={moreOptionMenuCss.moreOptionMenu} onClick={() => scroll.scrollToTop()}>
          <FeatherIcons.ChevronsUp />
        </button>
      </div>
    </nav>
  );
}
