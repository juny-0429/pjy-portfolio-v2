import { atom, atomFamily } from 'recoil';
import { MainMenu, ProjectDetailMenu } from '@/types/menu.types';

export const activeSectionState = atom<MainMenu>({
  key: 'activeSectionState',
  default: 'JUNY', // 초기 값 설정
});

export const activeProjectDetailSectionState = atom<ProjectDetailMenu>({
  key: 'activeProjectDetailSectionState',
  default: '프로젝트정보',
});

export const scrollPositionState = atomFamily<number | undefined, string>({
  key: 'scrollPositionState',
  default: undefined,
});
