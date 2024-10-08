import { commonCss } from '@/styles/common.styles';
import theme from '@/theme';
import { css } from '@emotion/react';

export const mainCareerCss = {
  wrapper: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 100px;
    padding: 200px 0 0;

    ${commonCss.sectionMinHeight}

    ${theme.media.pc} {
      gap: 150px;
      padding: 300px 0 0;
    }
  `,

  title: css`
    color: ${theme.colors.mainOrange};
    font-size: 40px;
    font-weight: 800;
  `,

  careerList: css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 100px;
    height: 100%;

    ${theme.media.pc} {
      position: relative;

      width: 100%;
      height: 2100px;
      min-height: calc(100dvh - 100px);
    }
  `,

  careers: css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(15, 1fr);
    grid-gap: 140px;
    row-gap: 80px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  `,
};

export const progressBarCss = {
  backgroundBar: css`
    position: absolute;
    top: 0;
    left: 50%;
    width: 1px;
    height: 100%;
    border-radius: 99px;
    background: ${theme.colors.mainLightGray};
    z-index: 1;
  `,

  activeBar: css`
    position: absolute;
    top: 0;
    left: 50%;
    width: 2px;
    height: 100%;
    border-radius: 99px;
    background: ${theme.colors.mainGreen};
    z-index: 2;
  `,

  dot: css`
    position: absolute;
    top: 0;
    left: calc(50% + 1px);
    width: 13px;
    height: 13px;
    border-radius: 99px;
    background: ${theme.colors.mainGreen};
    z-index: 3;
  `,
};
