export enum FileTypes {
  File = 'file',
  Folder = 'folder',
}

export interface IFileItem {
  id: string;
  type: FileTypes;
  name: string;
  updatedAt: Date;
  children?: Array<IFileItem>;
}
