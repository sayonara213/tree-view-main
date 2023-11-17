import React, { useState } from 'react';

import styles from './tree.module.scss';
import { IFileItem } from '../../types/file';
import { Entry } from '../entry/entry';

interface ITreeProps {
  root: IFileItem;
}

export const Tree: React.FC<ITreeProps> = ({ root }) => {
  const [selectedPath, setSelectedPath] = useState<string>('');

  const handleEntryClick = (path: string) => {
    setSelectedPath(path);
  };

  return (
    <div className={styles.wrapper}>
      <span className={styles.path}>{selectedPath || 'Choose file'}</span>
      <div className={styles.list}>
        <div className={styles.body}>
          <Entry entry={root} onEntryClick={handleEntryClick} currentPath='' />
        </div>
      </div>
    </div>
  );
};
