import React, { useEffect, useState } from 'react';

import styles from './main.module.scss';
import { Tree } from '../../components/tree/tree';
import { rootFile } from '../../services/api';
import { IFileItem } from '../../types/file';

export const Main: React.FC = () => {
  const [root, setRoot] = useState<IFileItem>();

  const fetchRoot = () => {
    //fetch placeholder data
    setRoot(rootFile);
  };

  useEffect(() => {
    fetchRoot();
  }, []);

  return root ? (
    <div className={styles.container}>
      <Tree root={root} />
    </div>
  ) : (
    <div>Loading...</div>
  );
};
