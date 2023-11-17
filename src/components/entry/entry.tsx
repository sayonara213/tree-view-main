import React, { useState } from 'react';

import styles from './entry.module.scss';
import { FileTypes, IFileItem } from '../../types/file';
import { Icon } from '../../ui/icon/icon';

type EntryProps = {
  entry: IFileItem;
  depth?: number;
  currentPath?: string;
  onEntryClick: (path: string) => void;
};

export const Entry: React.FC<EntryProps> = ({ entry, depth = 0, onEntryClick, currentPath }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const fullPath = `${currentPath}/${entry.name}`.replace(/^\//, ''); // Remove leading slash

  const switchExpanded = () => {
    entry.type === FileTypes.Folder && setIsExpanded((prev) => !prev);
  };

  const handleEntryClick = () => {
    onEntryClick(fullPath);
    switchExpanded();
  };

  return (
    <>
      <button onClick={handleEntryClick} className={styles.entry}>
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
      <div className={styles.leaf}>
        {isExpanded && (
          <div className={styles.list}>
            {entry.children?.map((entry) => (
              <Entry
                entry={entry}
                depth={depth + 1}
                key={entry.name}
                onEntryClick={onEntryClick}
                currentPath={fullPath}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};
