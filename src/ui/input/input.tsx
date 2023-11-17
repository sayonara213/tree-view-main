import React from 'react';

import styles from './input.module.scss';
import { Icon } from '../icon/icon';

interface IInputProps extends React.HTMLProps<HTMLInputElement> {
  onValueChange: (value: string) => void;
  onSubmit?: () => void;
}

export const Input: React.FC<IInputProps> = ({ onValueChange, onSubmit, ...props }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onValueChange(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit?.();
  };

  return onSubmit ? (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input onChange={handleChange} {...props} className={styles.input} />
      <button type='submit'>
        <Icon name='search' width={18} height={18}></Icon>
      </button>
    </form>
  ) : (
    <input onChange={handleChange} {...props} className={styles.input} />
  );
};
