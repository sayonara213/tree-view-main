import { IFileItem } from '../types/file';

export const searchFileSystem = (root: IFileItem, query: string) => {
  const paths: string[] = [];

  const search = (entry: IFileItem, currentPath: string) => {
    if (entry.name.toLowerCase().includes(query.toLowerCase())) {
      paths.push(currentPath);
    }
    entry.children?.forEach((child) => {
      search(child, `${currentPath}/${child.name}`);
    });
  };

  search(root, '');
  console.log(paths);

  return paths;
};
