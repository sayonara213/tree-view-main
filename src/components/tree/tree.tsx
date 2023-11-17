import React from 'react';

import styles from './tree.module.scss';
import { IFileItem } from '../../types/file';
import { Entry } from '../entry/entry';

interface ITreeProps {
  root: IFileItem;
}

export const Tree: React.FC<ITreeProps> = ({ root }) => {
  return (
    <div className={styles.wrapper}>
      <Entry entry={root} />
    </div>
  );
};
