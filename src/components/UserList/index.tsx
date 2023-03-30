import React, { ChangeEvent, useEffect, useState } from 'react';
import { useGetUsersQuery } from '../../services/users-api';
import Loading from '../UI/Loading';
import Error from '../UI/Error';
import UserCard from '../UserCard';
import style from './userList.module.scss';
import { User } from '../../services/types';
import filterObjectsList from '../../utility/filterObjectsList';
import Search from '../Search';

function UserList() {
  const {
    isLoading, isError, data, refetch,
  } = useGetUsersQuery();
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

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return (
      <Error onClick={refetch} actionLabel="Try again">
        Failed to load users
      </Error>
    );
  }

  const renderUsers = users?.map((user) => <UserCard key={user.id} {...user} />);
  const renderNotFound = <h3 className={style.userList__notFound}>Users not found</h3>;

  return (
    <main className={style.userList}>
      <Search id="search" label="Find user" changeSearchValue={changeSearchValue} searchValue={searchValue} />
      <section className={style.userList__listWrapper}>
        {users?.length ? renderUsers : renderNotFound}
      </section>
    </main>
  );
}

export default UserList;
