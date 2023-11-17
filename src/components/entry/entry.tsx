import React, { useEffect, useState } from 'react';

import { FileItem } from './file/file';
import { FolderList } from './folder-list/folder-list';
import { FileTypes, IFileItem } from '../../types/file';

type EntryProps = {
  entry: IFileItem;
  depth?: number;
  currentPath?: string;
  shouldExpand?: (path: string) => boolean;
  onEntryClick: (path: string) => void;
};

export const Entry: React.FC<EntryProps> = ({
  entry,
  depth = 0,
  onEntryClick,
  currentPath,
  shouldExpand,
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const fullPath = `${currentPath}/${entry.name}`.replace(/^\//, ''); // Remove leading slash

  const switchExpanded = () => {
    entry.type === FileTypes.Folder && setIsExpanded((prev) => !prev);
  };

  const handleEntryClick = () => {
    onEntryClick(fullPath);
    switchExpanded();
  };

  useEffect(() => {
    if (shouldExpand && shouldExpand(fullPath)) {
      entry.type === FileTypes.Folder && setIsExpanded(true);
      setIsSelected(true);
    } else {
      setIsExpanded(false);
      setIsSelected(false);
    }
  }, [shouldExpand]);

  return (
    <>
      <FileItem
        entry={entry}
        onEntryClick={handleEntryClick}
        isExpanded={isExpanded}
        isSelected={isSelected}
      />
      {isExpanded && (
        <FolderList
          entry={entry}
          onEntryClick={onEntryClick}
          depth={depth}
          fullPath={fullPath}
          shouldExpand={shouldExpand}
        />
      )}
    </>
  );
};
