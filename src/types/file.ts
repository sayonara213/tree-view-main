export enum FileTypes {
  File = 'file',
  Folder = 'folder',
}

export interface IFileItem {
  type: FileTypes;
  name: string;
  updatedAt: Date;
  children?: Array<IFileItem>;
}
