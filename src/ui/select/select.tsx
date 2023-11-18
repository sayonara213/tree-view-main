import React from 'react';

import styles from './select.module.scss';
import { FileAccessTypes } from '../../types/file';

interface ISelectProps {
  options: FileAccessTypes[];
  value: FileAccessTypes;
  onChange: (value: FileAccessTypes) => void;
}

export const Select: React.FC<ISelectProps> = ({ options, value, onChange }) => {
  return (
    <div className={styles.wrapper}>
      {options.map((option) => (
        <button
          key={option}
          className={value === option ? styles.active : ''}
          onClick={() => {
            onChange(option);
          }}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
