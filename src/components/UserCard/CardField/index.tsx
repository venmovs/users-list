import React, { FC } from 'react';
import style from './cardField.module.scss';
import { CardFieldProps } from './types';

const CardField: FC<CardFieldProps> = ({ name, value }) => (
  <p className={style.listItemText}>
    <strong className={style.listItemText__attribute}>
      {name}
      :&nbsp;
    </strong>
    <span>{value}</span>
  </p>
);

export default CardField;
