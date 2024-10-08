import { commonCss } from '@/styles/common.styles';
import theme from '@/theme';
import sizes from '@/theme/sizes';
import { css } from '@emotion/react';

export const projectDetailCss = {
  wrapper: css`
    width: 100%;
    height: 100%;

    ${theme.media.pc} {
      height: 1193px;
    }
  `,

  contentWrapper: css`
    position: relative;
    display: flex;
    align-items: flex-start;
    gap: 30px;
    padding: 15px 34px;

    ${theme.media.pc} {
      gap: 100px;
      padding: 50px 160px;
    }
  `,

  content: css`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
    width: 100%;

    ${theme.media.pc} {
      gap: 50px;
    }
  `,

  projectImageWrapper: css`
    position: relative;
    width: 100%;
    height: 161px;
    overflow: hidden;

    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.7);

    ${theme.media.pc} {
      height: 450px;
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
    }
  `,

  titleWrapper: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 14px;
  `,

  title: css`
    font-size: 24px;
    font-weight: 800;
  `,

  infoWrapper: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;

    ${theme.media.pc} {
      gap: 16px;
    }
  `,

  infoTitle: css`
    color: ${theme.colors.mainGray};
    font-size: 16px;
    font-weight: 800;

    ${theme.media.pc} {
      font-size: 26px;
    }
  `,

  skillList: css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 5px;
    flex-wrap: wrap;

    ${theme.media.pc} {
      gap: 10px;

      & > div {
        ${sizes.badgeSize[30]};
      }
    }
  `,

  memberWrapper: css`
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    gap: 8px;

    ${theme.media.pc} {
      svg {
        width: 35px;
        height: 35px;
      }
    }
  `,

  member: css`
    font-size: 16px;
    font-weight: 500;

    ${theme.media.pc} {
      font-size: 35px;
    }
  `,

  projectLinkList: css`
    display: flex;
    align-items: center;
    gap: 25px;

    svg {
      ${commonCss.hoverBounce}
    }
  `,

  description: css`
    font-size: 14px;
    font-weight: 400;
    line-height: 140%;

    ${theme.media.pc} {
      font-size: 20px;
      line-height: 100%;
      line-height: 140%;
    }
  `,

  divider: css`
    width: 100%;
    height: 2px;

    background: ${theme.colors.mainLightGray};

    ${theme.media.pc} {
      width: 300px;
      height: 2px;
      margin: 50px auto;
    }
  `,

  detail: css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 150px;
    padding: 0 0 300px;

    ${theme.media.pc} {
      gap: 150px;
      padding: 0 0 500px;
    }
  `,

  section: css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    ${theme.media.pc} {
      gap: 20px;
    }
  `,

  sectionWrapper: css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;

    color: ${theme.colors.mainBlue};
  `,

  sectionIcon: css`
    width: 16px;
    height: 16px;
    transform: rotate(180deg);
    stroke-width: 3px;
    stroke: ${theme.colors.mainBlue};

    ${theme.media.pc} {
      width: 24px;
      height: 24px;
    }
  `,

  detailSectionTitle: css`
    font-size: 16px;
    font-weight: 800;

    ${theme.media.pc} {
      font-size: 25px;
      font-weight: 800;
    }
  `,

  detailSectionContentList: css`
    list-style: disc;
    padding-left: 20px;

    li {
      margin-bottom: 10px;
      font-size: 14px;
      font-weight: 400;
      line-height: 140%;
    }

    ${theme.media.pc} {
      li {
        font-size: 20px;
        font-weight: 400;
      }
    }
  `,

  detailSectionContent: css`
    font-size: 14px;
    font-weight: 400;
    line-height: 140%;

    ${theme.media.pc} {
      font-size: 20px;
    }
  `,
};
