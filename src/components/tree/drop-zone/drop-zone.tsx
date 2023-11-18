import React from 'react';
import { useDrop } from 'react-dnd';

import styles from './drop-zone.module.scss';
import { classes } from '../../../helpers/styles';
import { IFileItem } from '../../../types/file';
import { Icon } from '../../../ui/icon/icon';
import { useFileSystem } from '../../provider/file-system-provider';

export const DropZone: React.FC = () => {
  const { moveEntry, tree } = useFileSystem();

  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: 'file',
      collect: (monitor) => ({
        isOver: monitor.isOver({ shallow: true }),
        canDrop: monitor.canDrop(),
      }),
      drop: (item: IFileItem) => {
        moveEntry(item, tree);
      },
    }),
    [tree],
  );

  return (
    <div className={classes(styles.wrapper, isOver ? styles.hover : '')} ref={drop}>
      {isOver && <Icon name='drop' width={24} height={24} />}
    </div>
  );
};
