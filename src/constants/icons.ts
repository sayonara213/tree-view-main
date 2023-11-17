import arrow from '../assets/icons/arrow.svg';
import file from '../assets/icons/file.svg';
import search from '../assets/icons/search.svg';

const ICONS_MAP = {
  arrow,
  file,
  search,
};

export type IconName = keyof typeof ICONS_MAP;

export const ICONS: Record<IconName, string> = ICONS_MAP;
