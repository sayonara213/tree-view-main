import React from 'react';

import styles from './file.module.scss';
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
  return (
    <button onClick={onEntryClick} className={classes(styles.entry, isSelected && styles.selected)}>
      <div className={styles.file}>
        <Icon
          name={entry.children ? 'arrow' : 'file'}
          width={18}
          height={18}
          className={isExpanded ? styles.expanded : ''}
        />
        <span className='name'>{entry.name}</span>
      </div>
      <span className={styles.date}>{entry.updatedAt.toLocaleDateString()}</span>
    </button>
  );
};
