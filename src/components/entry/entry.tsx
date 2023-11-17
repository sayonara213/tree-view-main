import React, { useState } from 'react';

import styles from './entry.module.scss';
import { FileTypes, IFileItem } from '../../types/file';
import { Icon } from '../../ui/icon/icon';

type EntryProps = {
  entry: IFileItem;
  depth?: number;
};

export const Entry: React.FC<EntryProps> = ({ entry, depth = 0 }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const switchExpanded = () => {
    entry.type === FileTypes.Folder && setIsExpanded((prev) => !prev);
  };

  return (
    <>
      <button onClick={switchExpanded} className={styles.entry}>
        <Icon
          name={entry.children ? 'arrow' : 'file'}
          width={18}
          height={18}
          className={isExpanded ? styles.expanded : ''}
        />
        <span className='name'>{entry.name}</span>
      </button>
      <div className={styles.leaf}>
        {isExpanded && (
          <div style={{ paddingLeft: `5px` }}>
            {entry.children?.map((entry) => (
              <Entry entry={entry} depth={depth + 1} key={entry.name} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};
