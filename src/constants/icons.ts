import arrow from '../assets/icons/arrow.svg';
import file from '../assets/icons/file.svg';

const ICONS_MAP = {
  arrow,
  file,
};

export type IconName = keyof typeof ICONS_MAP;

export const ICONS: Record<IconName, string> = ICONS_MAP;
