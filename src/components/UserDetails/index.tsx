import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { useGetUserByIdQuery } from '../../services/users-api';
import Loading from '../UI/Loading';
import Error from '../UI/Error';
import CardField from '../UserCard/CardField';

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

  const {
    id, address, company, ...additionalInfo
  } = user;

  const renderUserInfo = Object.entries(additionalInfo).map(
    ([key, value]) => <CardField key={key + value} name={key} value={value} />,
  );

  return (
    <section>
      {renderUserInfo}
    </section>
  );
};

export default UserDetails;
