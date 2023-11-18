import React from 'react';

import styles from './topper.module.scss';
import { Icon } from '../../../ui/icon/icon';

interface ITopperProps {
  selectedPath: string;
  handleCollapse: () => void;
}

export const Topper: React.FC<ITopperProps> = ({ selectedPath, handleCollapse }) => {
  return (
    <div className={styles.topper}>
      <span className={styles.path}>{selectedPath || 'Choose file'}</span>
      <Icon name='shrink' width={18} height={18} pointer onClick={handleCollapse} />
    </div>
  );
};
