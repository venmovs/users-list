import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { useGetUserByIdQuery } from '../../services/users-api';
import Loading from '../UI/Loading';
import Error from '../UI/Error';
import reload from '../../utility/reload';
import CardField from '../UserCard/CardField';

const UserDetails: FC = () => {
  const location = useLocation();
  const { isLoading, isError, data: userInfo } = useGetUserByIdQuery(location.pathname);
  if (isLoading) {
    return <Loading />;
  }

  if (isError || !userInfo) {
    return <Error onClick={reload} actionLabel="Try again" />;
  }

  const {
    id, address, company, ...additionalInfo
  } = userInfo;

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
