import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { User } from '../../services/types';
import style from './userCard.module.scss';
import CardField from './CardField';

const UserCard: FC<User> = ({
  name, email, company, id,
}) => {
  const navigate = useNavigate();
  const goToDetail = () => navigate(`/${id}`);

  return (
    <div className={style.listItem}>
      <div className={style.listItem__content}>
        <CardField name="name" value={name} />
        <CardField name="email" value={email} />
        <CardField name="company" value={company.name} />
      </div>
      <Button
        className={style.listItem__button}
        variant="contained"
        onClick={goToDetail}
      >
        More Details
      </Button>
    </div>
  );
};

export default UserCard;
