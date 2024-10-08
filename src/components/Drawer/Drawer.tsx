import FeatherIcons from '@/theme/featherIcons';
import { drawerCss, drawerDirectionCss } from './Drawer.styles';
import { PropsWithChildren } from 'react';

interface Props {
  title: string;
  direction?: 'top' | 'bottom' | 'left' | 'right';
  isOpen: boolean;
  onToggle: () => void;
}

export default function Drawer({ title, isOpen, onToggle, direction = 'left', children }: PropsWithChildren<Props>) {
  return (
    <>
      <div css={[drawerCss.drawer, drawerDirectionCss[direction], isOpen && drawerCss.open]}>
        <div css={drawerCss.titleWrapper}>
          <span css={drawerCss.title}>{title}</span>
          <button onClick={onToggle} css={drawerCss.closeButton}>
            <FeatherIcons.X width={24} height={24} />
          </button>
        </div>
        <div css={drawerCss.drawerContent}>{children}</div>
      </div>

      {isOpen && <div css={drawerCss.drawerOverlay} onClick={onToggle}></div>}
    </>
  );
}
