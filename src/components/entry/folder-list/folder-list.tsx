import React from 'react';

import styles from './folder-list.module.scss';
import { IFileItem } from '../../../types/file';
import { Entry } from '../entry';

interface IFolderListProps {
  entry: IFileItem;
  onEntryClick: (path: string) => void;
  depth: number;
  fullPath: string;
  shouldExpand?: (path: string) => boolean;
}

export const FolderList: React.FC<IFolderListProps> = ({
  entry,
  onEntryClick,
  depth,
  fullPath,
  shouldExpand,
}) => {
  return (
    <div className={styles.leaf}>
      <div className={styles.list}>
        {entry.children?.map((entry) => (
          <Entry
            entry={entry}
            depth={depth + 1}
            key={entry.name}
            onEntryClick={onEntryClick}
            currentPath={fullPath}
            shouldExpand={shouldExpand}
          />
        ))}
      </div>
    </div>
  );
};
