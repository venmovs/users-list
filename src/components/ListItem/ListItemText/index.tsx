import React, { FC } from 'react';
import style from './ListItemText.module.scss';
import { ListItemTextProps } from './types';

const ListItemText: FC<ListItemTextProps> = ({ userInfo }) => {
  const attribute = Object.keys(userInfo)[0];
  const property = Object.values(userInfo)[0];
  return (
    <p className={style.listItemText}>
      <strong className={style.listItemText__attribute}>
        {attribute}
        :&nbsp;
      </strong>
      <span>{property}</span>
    </p>
  );
};

export default ListItemText;
