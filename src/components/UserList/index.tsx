import React, { ChangeEvent, useEffect, useState } from 'react';
import {
  Box, FormControl, InputLabel, OutlinedInput,
} from '@mui/material';
import { useGetUsersQuery } from '../../services/users-api';
import Loading from '../UI/Loading';
import Error from '../UI/Error';
import ListItem from '../ListItem';
import style from './UserList.module.scss';
import { User } from '../../services/types';
import { StringKeys } from './types';

function UserList() {
  const { isLoading, isError, data } = useGetUsersQuery();
  const [searchValue, setSearchValue] = useState<string>('');
  const [users, setUsers] = useState<User[] | undefined>([]);

  useEffect(() => {
    if (data) {
      setUsers(data);
    }
  }, [data]);

  const filterUsers = (targetUser: string, targetParameter: StringKeys<User>) => {
    if (!data) {
      return [];
    }
    const usersCopy = [...data];
    const regex = new RegExp(targetUser, 'gi');
    return usersCopy.filter((user) => user[targetParameter].match(regex));
  };

  const changeSearchValue = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setSearchValue(inputValue);
    const foundByNames = filterUsers(inputValue, 'name');
    const foundByEmail = filterUsers(inputValue, 'email');
    const uniqElements = new Set([...foundByNames, ...foundByEmail]);
    setUsers(Array.from(uniqElements));
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
      <Box p={1}>
        <FormControl fullWidth>
          <InputLabel htmlFor="search">
            Find user
          </InputLabel>
          <OutlinedInput
            value={searchValue}
            onChange={changeSearchValue}
            id="search"
            label="Find user"
          />
        </FormControl>
      </Box>
      <section className={style.userList__listWrapper}>
        {renderUsers}
      </section>
    </main>
  );
}

export default UserList;
