import React from 'react';
import { useGetUsersQuery } from '../../services/users-api';
import Loading from '../UI/Loading';
import Error from '../UI/Error';
import ListItem from '../ListItem';
import style from './UserList.module.scss';

function UserList() {
  const { isLoading, isError, data: users } = useGetUsersQuery();

  const reload = () => {
    window.location.reload();
  };

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error onClick={reload} actionLabel="Try again" />;
  }

  const renderUsers = users?.map((user) => <ListItem key={user.id} {...user} />);

  return (
    <main className={style.userList}>
      {renderUsers}
    </main>
  );
}

export default UserList;
