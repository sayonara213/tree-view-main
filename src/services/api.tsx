import { IFileItem, FileTypes, FileAccessTypes } from '../types/file';

function getRandomDate(start: Date, end: Date): Date {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

export const rootFile: IFileItem = {
  id: '1',
  type: FileTypes.Folder,
  name: 'RootFolder',
  updatedAt: getRandomDate(new Date(2020, 0, 1), new Date()),
  access: FileAccessTypes.User,
  children: [
    {
      id: '2',
      type: FileTypes.Folder,
      name: 'Documents',
      updatedAt: getRandomDate(new Date(2020, 0, 1), new Date()),
      access: FileAccessTypes.User,
      children: [
        {
          id: '3',
          type: FileTypes.File,
          name: 'Resume.pdf',
          updatedAt: getRandomDate(new Date(2020, 0, 1), new Date()),
          access: FileAccessTypes.User,
        },
        {
          id: '4',
          type: FileTypes.File,
          name: 'CoverLetter.docx',
          updatedAt: getRandomDate(new Date(2020, 0, 1), new Date()),
          access: FileAccessTypes.User,
        },
        {
          id: '5',
          type: FileTypes.File,
          name: 'Report.xlsx',
          updatedAt: getRandomDate(new Date(2020, 0, 1), new Date()),
          access: FileAccessTypes.User,
        },
        {
          id: '6',
          type: FileTypes.File,
          name: 'Presentation.pptx',
          updatedAt: getRandomDate(new Date(2020, 0, 1), new Date()),
          access: FileAccessTypes.User,
        },
      ],
    },
    {
      id: '7',
      type: FileTypes.Folder,
      name: 'Photos',
      updatedAt: getRandomDate(new Date(2020, 0, 1), new Date()),
      access: FileAccessTypes.User,
      children: [
        {
          id: '8',
          type: FileTypes.File,
          name: 'Vacation.jpg',
          updatedAt: getRandomDate(new Date(2020, 0, 1), new Date()),
          access: FileAccessTypes.User,
        },
        {
          id: '9',
          type: FileTypes.File,
          name: 'Birthday.png',
          updatedAt: getRandomDate(new Date(2020, 0, 1), new Date()),
          access: FileAccessTypes.User,
        },
        {
          id: '10',
          type: FileTypes.File,
          name: 'Wedding.jpg',
          updatedAt: getRandomDate(new Date(2020, 0, 1), new Date()),
          access: FileAccessTypes.User,
        },
        {
          id: '11',
          type: FileTypes.File,
          name: 'Concert.jpg',
          updatedAt: getRandomDate(new Date(2020, 0, 1), new Date()),
          access: FileAccessTypes.User,
        },
      ],
    },
    {
      id: '12',
      type: FileTypes.Folder,
      name: 'Music',
      updatedAt: getRandomDate(new Date(2020, 0, 1), new Date()),
      access: FileAccessTypes.User,
      children: [
        {
          id: '13',
          type: FileTypes.File,
          name: 'FavoriteSong.mp3',
          updatedAt: getRandomDate(new Date(2020, 0, 1), new Date()),
          access: FileAccessTypes.User,
        },
        {
          id: '14',
          type: FileTypes.File,
          name: 'RockPlaylist.mp3',
          updatedAt: getRandomDate(new Date(2020, 0, 1), new Date()),
          access: FileAccessTypes.User,
        },
        {
          id: '15',
          type: FileTypes.File,
          name: 'ClassicalSymphony.mp3',
          updatedAt: getRandomDate(new Date(2020, 0, 1), new Date()),
          access: FileAccessTypes.User,
        },
      ],
    },
    {
      id: '16',
      type: FileTypes.Folder,
      name: 'Projects',
      updatedAt: getRandomDate(new Date(2020, 0, 1), new Date()),
      access: FileAccessTypes.User,
      children: [
        {
          id: '17',
          type: FileTypes.Folder,
          name: 'WebApp',
          updatedAt: getRandomDate(new Date(2020, 0, 1), new Date()),
          access: FileAccessTypes.User,
          children: [
            {
              id: '18',
              type: FileTypes.File,
              name: 'index.html',
              updatedAt: getRandomDate(new Date(2020, 0, 1), new Date()),
              access: FileAccessTypes.User,
            },
            {
              id: '19',
              type: FileTypes.File,
              name: 'app.js',
              updatedAt: getRandomDate(new Date(2020, 0, 1), new Date()),
              access: FileAccessTypes.User,
            },
          ],
        },
        {
          id: '20',
          type: FileTypes.Folder,
          name: 'MobileApp',
          updatedAt: getRandomDate(new Date(2020, 0, 1), new Date()),
          access: FileAccessTypes.Admin,
          children: [
            {
              id: '21',
              type: FileTypes.File,
              name: 'MainActivity.java',
              updatedAt: getRandomDate(new Date(2020, 0, 1), new Date()),
              access: FileAccessTypes.Admin,
            },
          ],
        },
      ],
    },
  ],
};
