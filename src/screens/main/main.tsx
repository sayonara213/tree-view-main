import React, { useEffect } from 'react';

import styles from './main.module.scss';
import { useFileSystem } from '../../components/provider/file-system-provider';
import { Tree } from '../../components/tree/tree';
import { rootFile } from '../../services/api';

export const Main: React.FC = () => {
  const { setTree, tree } = useFileSystem();

  const fetchRoot = () => {
    //fetch placeholder data
    setTree(rootFile);
  };

  useEffect(() => {
    fetchRoot();
  }, []);

  return tree ? (
    <div className={styles.container}>
      <Tree root={tree} />
    </div>
  ) : (
    <div>Loading...</div>
  );
};
