import { ChangeEvent } from 'react';

export interface SearchProps {
  id: string,
  label: string,
  searchValue: string,
  changeSearchValue: (event: ChangeEvent<HTMLInputElement>) => void,
}
