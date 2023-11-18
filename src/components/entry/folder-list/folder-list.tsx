import React from 'react';
import { useDrop } from 'react-dnd';

import styles from './folder-list.module.scss';
import { classes } from '../../../helpers/styles';
import { IFileItem } from '../../../types/file';
import { Icon } from '../../../ui/icon/icon';
import { useFileSystem } from '../../provider/file-system-provider';
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
  const { moveEntry } = useFileSystem();

  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: 'file',
    collect: (monitor) => ({
      isOver: monitor.isOver({ shallow: true }),
      canDrop: monitor.canDrop(),
      getDropResult: monitor.getDropResult(),
      didDrop: monitor.didDrop(),
    }),
    drop: (item, monitor) => {
      if (monitor.isOver({ shallow: true })) {
        moveEntry(item as IFileItem, entry);
      }

      return {};
    },
  }));

  const isOverCurrent = isOver && canDrop;

  return (
    <div className={styles.leaf} ref={drop}>
      {isOverCurrent && <Icon name='drop' width={24} height={24} className={styles.drop} />}
      <div className={classes(styles.list, isOverCurrent ? styles.hover : '')}>
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
