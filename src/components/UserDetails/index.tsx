import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { useGetUserByIdQuery } from '../../services/users-api';
import Loading from '../UI/Loading';

const UserDetails: FC = () => {
  const location = useLocation();
  const { isLoading, data } = useGetUserByIdQuery(location.pathname);
  if (isLoading) {
    return <Loading />;
  }
  return <div>{data?.name}</div>;
};

export default UserDetails;
