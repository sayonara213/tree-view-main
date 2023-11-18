import arrow from '../assets/icons/arrow.svg';
import drop from '../assets/icons/drop.svg';
import file from '../assets/icons/file.svg';
import folderEmpty from '../assets/icons/folder-empty.svg';
import search from '../assets/icons/search.svg';
import shrink from '../assets/icons/shrink.svg';

const ICONS_MAP = {
  arrow,
  file,
  search,
  shrink,
  drop,
  folderEmpty,
};

export type IconName = keyof typeof ICONS_MAP;

export const ICONS: Record<IconName, string> = ICONS_MAP;
