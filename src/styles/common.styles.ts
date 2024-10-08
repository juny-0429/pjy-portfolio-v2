import theme from '@/theme';
import { css } from '@emotion/react';

export const scrollbarCss = {
  noScroll: css`
    ::-webkit-scrollbar {
      display: none;
    }
  `,

  scrollbar: css`
    &::-webkit-scrollbar {
      display: block;
      width: 10px;
      height: 10px;

      background: transparent;
    }
    &::-webkit-scrollbar-thumb {
      background: ${theme.colors.mainLightGreen};
      border-radius: 99px;
      background-clip: padding-box;
      border: 2px solid transparent;
    }
  `,
};

export const darkModeCss = {
  darkModeStyle: css`
    background: ${theme.colors.mainLightBlack};
    color: ${theme.colors.white};
  `,

  darkModeColor: css`
    color: ${theme.colors.white};
  `,

  darkModeInvertColor: css`
    color: ${theme.colors.mainLightBlack};
  `,

  darkModeBackground: css`
    background: ${theme.colors.mainLightBlack};
  `,
};

export const commonCss = {
  fullPage: css`
    min-height: calc(100dvh - 54px - 105px);
    padding: 0 44px;
    overflow-x: hidden;
    overflow-y: auto;

    ${theme.media.pc} {
      min-height: calc(100dvh - 82px - 105px);
      padding: 0 100px;
    }
  `,

  bold: css`
    font-weight: 700;
  `,

  horizontalBar: css`
    background: ${theme.colors.mainLightBlack};
    color: ${theme.colors.mainLightBlack};
    width: 100%;
    height: 1px;
    border: none;
  `,

  pointer: css`
    cursor: pointer;
  `,

  sectionMinHeight: css`
    min-height: calc(100dvh - 54px);

    ${theme.media.pc} {
      min-height: calc(100dvh - 81px);
    }
  `,

  onlyMobileVisible: css`
    ${theme.media.pc} {
      display: none;
    }
  `,

  onlyPcVisibleBlock: css`
    display: none;

    ${theme.media.pc} {
      display: block;
    }
  `,

  onlyPcVisibleFlex: css`
    display: none;

    ${theme.media.pc} {
      display: flex;
    }
  `,

  hoverBounce: css`
    &:hover {
      color: ${theme.colors.mainGreen};
      stroke: ${theme.colors.mainGreen};

      transition:
        color 0.3s ease,
        transform 0.3s ease;
      transform: scale(1.2);
    }
  `,
};
