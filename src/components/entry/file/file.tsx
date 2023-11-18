/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { useDrag } from 'react-dnd';

import styles from './file.module.scss';
import { iconSelect } from '../../../helpers/icons-select';
import { classes } from '../../../helpers/styles';
import { IFileItem } from '../../../types/file';
import { Icon } from '../../../ui/icon/icon';

interface IFileProps {
  entry: IFileItem;
  onEntryClick: () => void;
  isExpanded?: boolean;
  isSelected?: boolean;
}

export const FileItem: React.FC<IFileProps> = ({ entry, onEntryClick, isExpanded, isSelected }) => {
  const [, drag] = useDrag(() => ({
    type: 'file',
    item: entry,
    collect: (monitor) => ({
      getDropResult: monitor.getDropResult(),
    }),
  }));

  const isFullFolder = iconSelect(entry);

  return (
    <button
      onClick={onEntryClick}
      className={classes(styles.entry, isSelected && styles.selected)}
      ref={drag}
    >
      <div className={styles.file}>
        <Icon
          name={isFullFolder}
          width={18}
          height={18}
          className={isExpanded && isFullFolder !== 'folderEmpty' ? styles.expanded : ''}
        />
        <span className='name'>{entry.name}</span>
      </div>
      <span className={styles.date}>{entry.updatedAt.toLocaleDateString()}</span>
    </button>
  );
};
