import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { User } from '../../services/types';
import style from './ListItem.module.scss';
import ListItemText from './ListItemText';

const ListItem: FC<User> = ({
  name, email, company, id,
}) => {
  const navigate = useNavigate();
  const goToDetail = () => navigate(`/${id}`);
  return (
    <div className={style.listItem}>
      <div className={style.listItem__content}>
        <ListItemText userInfo={{ name }} />
        <ListItemText userInfo={{ email }} />
        <ListItemText userInfo={{ company: company.name }} />
      </div>
      <Button className={style.listItem__button} variant="contained" onClick={goToDetail}>
        More Details
      </Button>
    </div>
  );
};

export default ListItem;
