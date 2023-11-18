export enum FileTypes {
  File = 'file',
  Folder = 'folder',
}

export enum FileAccessTypes {
  Admin = 'admin',
  User = 'user',
}

export interface IFileItem {
  id: string;
  type: FileTypes;
  name: string;
  updatedAt: Date;
  children?: Array<IFileItem>;
  access: FileAccessTypes;
}
