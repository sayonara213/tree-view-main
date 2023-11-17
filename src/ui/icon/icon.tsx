import React from 'react';

import styles from './icon.module.scss';
import { ICONS, IconName } from '../../constants/icons';
import { classes } from '../../helpers/styles';

interface IIconProps extends React.HTMLProps<HTMLImageElement> {
  name: IconName;
  width?: number;
  height?: number;
  pointer?: boolean;
}

export const Icon: React.FC<IIconProps> = ({
  name,
  className,
  width,
  height,
  pointer,
  ...rest
}) => {
  return (
    <img
      src={ICONS[name]}
      alt={name}
      className={classes(styles.image, pointer && styles.pointer, className)}
      style={{ width, height }}
      {...rest}
    />
  );
};
