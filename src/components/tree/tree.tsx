import React, { useCallback, useState } from 'react';

import styles from './tree.module.scss';
import { searchFileSystem } from '../../helpers/search';
import { IFileItem } from '../../types/file';
import { Icon } from '../../ui/icon/icon';
import { Input } from '../../ui/input/input';
import { Entry } from '../entry/entry';

interface ITreeProps {
  root: IFileItem;
}

export const Tree: React.FC<ITreeProps> = ({ root }) => {
  const [selectedPath, setSelectedPath] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedPaths, setExpandedPaths] = useState<string[]>([]);

  const handleEntryClick = (path: string) => {
    setSelectedPath(path);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const paths = searchFileSystem(root, query); // Implement this function
    setExpandedPaths(paths);
  };

  const handleClick = () => {
    if (searchQuery.length > 0) {
      handleSearch(searchQuery);
    } else {
      setSelectedPath('');
      setExpandedPaths([]);
    }
  };

  const handleCollapse = () => {
    setExpandedPaths([]);
    setSelectedPath('');
  };

  const handleShouldExpand = useCallback(
    (path: string) => {
      return expandedPaths.some((p: string) => p.includes(path));
    },
    [expandedPaths],
  );

  return (
    <div className={styles.wrapper}>
      <Input
        type='text'
        value={searchQuery}
        onValueChange={setSearchQuery}
        placeholder='Search for file...'
        onSubmit={handleClick}
      />
      <div className={styles.topper}>
        <span className={styles.path}>{selectedPath || 'Choose file'}</span>
        <Icon name='shrink' width={18} height={18} pointer onClick={handleCollapse} />
      </div>

      <div className={styles.list}>
        <div className={styles.body}>
          {root.children?.map((entry) => (
            <Entry
              entry={entry}
              key={entry.name}
              onEntryClick={handleEntryClick}
              currentPath=''
              shouldExpand={handleShouldExpand}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
