import React, { useState } from 'react';

import styles from './entry.module.scss';
import { IFileItem } from '../../types/file';

type EntryProps = {
  entry: IFileItem;
  depth?: number;
};

export const Entry: React.FC<EntryProps> = ({ entry, depth = 0 }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const switchExpanded = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <>
      <button onClick={switchExpanded} className={styles.entry}>
        {entry.children && <div>{isExpanded ? '-' : '+'}</div>}
        <span className='name'>{entry.name}</span>
      </button>
      <div style={{ borderLeft: '1px solid black', margin: '5px 5px' }}>
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
