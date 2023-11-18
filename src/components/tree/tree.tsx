import React, { useCallback, useState } from 'react';

import { DropZone } from './drop-zone/drop-zone';
import { Topper } from './topper/topper';
import styles from './tree.module.scss';
import { searchFileSystem } from '../../helpers/search';
import { IFileItem } from '../../types/file';
import { Input } from '../../ui/input/input';
import { Entry } from '../entry/entry';
import { useFileSystem } from '../provider/file-system-provider';

interface ITreeProps {
  root: IFileItem;
}

export const Tree: React.FC<ITreeProps> = ({ root }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedPaths, setExpandedPaths] = useState<string[]>([]);

  const { selectedPath, setSelectedPath } = useFileSystem();

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
      <Topper selectedPath={selectedPath} handleCollapse={handleCollapse} />
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
          <DropZone />
        </div>
      </div>
    </div>
  );
};
