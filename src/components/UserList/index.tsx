import React, { ChangeEvent, useEffect, useState } from 'react';
import { useGetUsersQuery } from '../../services/users-api';
import Loading from '../UI/Loading';
import Error from '../UI/Error';
import ListItem from '../ListItem';
import style from './UserList.module.scss';
import { User } from '../../services/types';
import filterObjectsList from '../../utility/filterObjectsList';
import Search from '../Search';

function UserList() {
  const { isLoading, isError, data } = useGetUsersQuery();
  const [searchValue, setSearchValue] = useState<string>('');
  const [users, setUsers] = useState<User[] | undefined>([]);

  useEffect(() => {
    if (data) {
      setUsers(data);
    }
  }, [data]);

  const changeSearchValue = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setSearchValue(inputValue);
    if (!data) {
      return;
    }
    const filteredUser = filterObjectsList<User>(data, inputValue, ['name', 'email']);
    setUsers(filteredUser);
    if (!inputValue.length) {
      setUsers(data);
    }
  };

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
      <Search id="search" label="Find user" changeSearchValue={changeSearchValue} searchValue={searchValue} />
      <section className={style.userList__listWrapper}>
        {renderUsers}
      </section>
    </main>
  );
}

export default UserList;
