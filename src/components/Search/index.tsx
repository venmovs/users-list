import React, { FC } from 'react';
import {
  Box, FormControl, InputLabel, OutlinedInput,
} from '@mui/material';
import { SearchProps } from './types';

const Search: FC<SearchProps> = ({
  id, label, searchValue, changeSearchValue,
}) => (
  <Box p={1}>
    <FormControl fullWidth>
      <InputLabel htmlFor={id}>
        {label}
      </InputLabel>
      <OutlinedInput
        value={searchValue}
        onChange={changeSearchValue}
        id={id}
        label={label}
      />
    </FormControl>
  </Box>
);

export default Search;
