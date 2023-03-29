import React from 'react';
import { useGetUsersQuery } from '../../services/users-api';

function UserList() {
  const { isLoading, isError, data } = useGetUsersQuery();
  console.log(data);
  return <div>list</div>;
}

export default UserList;
