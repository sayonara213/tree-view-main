import { IFileItem, FileTypes } from '../types/file';

export const rootFile: IFileItem = {
  name: 'root',
  type: FileTypes.Folder,
  updatedAt: new Date(),
  children: [
    {
      name: 'file1_0',
      type: FileTypes.File,
      updatedAt: new Date(),
    },
    {
      name: 'file1_1',
      type: FileTypes.File,
      updatedAt: new Date(),
    },
    {
      name: 'file1_2',
      type: FileTypes.File,
      updatedAt: new Date(),
    },
    {
      name: 'folder1_3',
      type: FileTypes.Folder,
      updatedAt: new Date(),
      children: [
        {
          name: 'file2_0',
          type: FileTypes.File,
          updatedAt: new Date(),
        },
        {
          name: 'file2_1',
          type: FileTypes.File,
          updatedAt: new Date(),
        },
        {
          name: 'file2_2',
          type: FileTypes.File,
          updatedAt: new Date(),
        },
      ],
    },
    {
      name: 'folder1_4',
      type: FileTypes.Folder,
      updatedAt: new Date(),
      children: [
        {
          name: 'file2_0',
          type: FileTypes.File,
          updatedAt: new Date(),
        },
        {
          name: 'folder1_4',
          type: FileTypes.Folder,
          updatedAt: new Date(),
          children: [
            {
              name: 'file2_0',
              type: FileTypes.File,
              updatedAt: new Date(),
            },
            {
              name: 'folder1_4',
              type: FileTypes.Folder,
              updatedAt: new Date(),
              children: [
                {
                  name: 'file2_0',
                  type: FileTypes.File,
                  updatedAt: new Date(),
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'folder1_5',
      type: FileTypes.Folder,
      updatedAt: new Date(),
      children: [
        {
          name: 'folder1_4',
          type: FileTypes.Folder,
          updatedAt: new Date(),
          children: [
            {
              name: 'file2_0',
              type: FileTypes.File,
              updatedAt: new Date(),
            },
            {
              name: 'folder1_4',
              type: FileTypes.Folder,
              updatedAt: new Date(),
              children: [
                {
                  name: 'file2_0',
                  type: FileTypes.File,
                  updatedAt: new Date(),
                },
              ],
            },
          ],
        },
        {
          name: 'folder1_4',
          type: FileTypes.Folder,
          updatedAt: new Date(),
          children: [
            {
              name: 'file2_0',
              type: FileTypes.File,
              updatedAt: new Date(),
            },
            {
              name: 'folder1_4',
              type: FileTypes.Folder,
              updatedAt: new Date(),
              children: [
                {
                  name: 'file2_0',
                  type: FileTypes.File,
                  updatedAt: new Date(),
                },
              ],
            },
          ],
        },
        {
          name: 'folder1_4',
          type: FileTypes.Folder,
          updatedAt: new Date(),
          children: [
            {
              name: 'file2_0',
              type: FileTypes.File,
              updatedAt: new Date(),
            },
            {
              name: 'folder1_4',
              type: FileTypes.Folder,
              updatedAt: new Date(),
              children: [
                {
                  name: 'file2_0',
                  type: FileTypes.File,
                  updatedAt: new Date(),
                },
              ],
            },
          ],
        },
        {
          name: 'folder1_4',
          type: FileTypes.Folder,
          updatedAt: new Date(),
          children: [
            {
              name: 'file2_0',
              type: FileTypes.File,
              updatedAt: new Date(),
            },
            {
              name: 'folder1_4',
              type: FileTypes.Folder,
              updatedAt: new Date(),
              children: [
                {
                  name: 'file2_0',
                  type: FileTypes.File,
                  updatedAt: new Date(),
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
