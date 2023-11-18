import { FileTypes, IFileItem } from '../types/file';

export const iconSelect = (entry: IFileItem) => {
  if (entry.type === FileTypes.Folder) {
    return entry.children?.length ? 'arrow' : 'folderEmpty';
  }
  return 'file';
};
