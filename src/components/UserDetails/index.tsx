import React, { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@mui/material';
import { useGetUserByIdQuery } from '../../services/users-api';
import Loading from '../UI/Loading';
import Error from '../UI/Error';
import CardField from '../UserCard/CardField';
import style from './userDetails.module.scss';
import flattenObject from '../../utility/flattenObject';
import formatUnderscoreString from '../../utility/formatUnderscoreString';

const UserDetails: FC = () => {
  const location = useLocation();
  const {
    isLoading, isError, data: user, refetch,
  } = useGetUserByIdQuery(location.pathname);
  if (isLoading) {
    return <Loading />;
  }

  if (isError || !user) {
    return (
      <Error onClick={refetch} actionLabel="Try again">
        Failed to load user
      </Error>
    );
  }

  const { id, ...additionalInformation } = user;

  const flattenUserInformation = flattenObject(additionalInformation);

  const renderUserInformation = Object.entries(flattenUserInformation).map(
    ([key, value]) => (
      <CardField
        key={key + value}
        name={formatUnderscoreString(key)}
        value={value}
      />
    ),
  );

  return (
    <section className={style.userDetail}>
      <Button variant="contained" component={Link} to="/">
        Go back
      </Button>
      <h1>
        {user.username}
        &nbsp;
        profile
      </h1>
      <div className={style.userDetail__list}>
        {renderUserInformation}
      </div>
    </section>
  );
};

export default UserDetails;
