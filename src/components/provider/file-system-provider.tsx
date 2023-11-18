import React, { PropsWithChildren, createContext, useCallback, useContext, useState } from 'react';

import { FileAccessTypes, FileTypes, IFileItem } from '../../types/file';

interface IFileSystemContext {
  tree: IFileItem;
  setTree: (tree: IFileItem) => void;
  moveEntry: (source: IFileItem, destination: IFileItem) => void;
  selectedPath: string;
  setSelectedPath: (path: string) => void;
  userAccess: FileAccessTypes;
  setUserAccess: (access: FileAccessTypes) => void;
}

const initialFileSystemContext: IFileSystemContext = {
  tree: {} as IFileItem,
  setTree: (tree: IFileItem) => {},
  moveEntry: (file: IFileItem, newParent: IFileItem) => {},
  selectedPath: '',
  setSelectedPath: (path: string) => {},
  userAccess: FileAccessTypes.User,
  setUserAccess: (access: FileAccessTypes) => {},
};

const FileSystemContext = createContext<IFileSystemContext>(initialFileSystemContext);

export const FileSystemProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [tree, setTree] = useState<IFileItem>({} as IFileItem);
  const [selectedPath, setSelectedPath] = useState<string>('');
  const [userAccess, setUserAccess] = useState<FileAccessTypes>(FileAccessTypes.User);

  const handleMoveEntry = (file: IFileItem, newParent: IFileItem) => {
    setTree((prevFileSystem) => {
      const removeFile = (folder: IFileItem): IFileItem => {
        const updatedChildren = folder.children?.filter((child) => child.id !== file.id) || [];
        return {
          ...folder,
          children: updatedChildren.map((child) =>
            child.type === FileTypes.Folder ? removeFile(child) : child,
          ),
        };
      };

      const addFile = (folder: IFileItem): IFileItem => {
        if (folder.id === newParent.id) {
          const updatedChildren = [...(folder.children || []), file];
          return { ...folder, children: updatedChildren };
        }
        return {
          ...folder,
          children: folder.children?.map((child) =>
            child.type === FileTypes.Folder ? addFile(child) : child,
          ),
        };
      };

      const fileSystemWithoutFile = removeFile(prevFileSystem);
      return addFile(fileSystemWithoutFile);
    });
  };

  const moveEntry = useCallback(handleMoveEntry, []);

  return (
    <FileSystemContext.Provider
      value={{ tree, setTree, moveEntry, selectedPath, setSelectedPath, userAccess, setUserAccess }}
    >
      {children}
    </FileSystemContext.Provider>
  );
};

export const useFileSystem = () => {
  const context = useContext(FileSystemContext);
  if (!context) {
    throw new Error('useFileSystem must be used within a FileSystemProvider');
  }
  return context;
};
