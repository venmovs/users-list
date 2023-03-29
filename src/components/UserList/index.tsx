import React from 'react';
import { Link } from 'react-router-dom';
import { useGetUsersQuery } from '../../services/users-api';
import Loading from '../UI/Loading';

function UserList() {
  const { isLoading, isError, data: users } = useGetUsersQuery();
  console.log(users);
  if (isLoading) {
    return <Loading />;
  }
  const renderList = users?.map(({
    name, email, company, id,
  }) => (
    <div key={id}>
      {name}
      <span>{email}</span>
      <span>{company.name}</span>
      <Link to={`/${id}`}>more...</Link>
    </div>
  ));
  return (
    <main>
      {renderList}
    </main>
  );
}

export default UserList;
