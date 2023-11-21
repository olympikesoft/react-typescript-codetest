// In your SearchInput.tsx

import React from 'react';
import { useDispatch } from 'react-redux';
import { TextField } from '@mui/material';
import { setSearchTerm } from '../../../store/actions/Search/search';

export const SearchInput: React.FC = () => {
  const dispatch = useDispatch();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(event.target.value));
  };

  return (
    <TextField
      label="Search Posts"
      variant="outlined"
      onChange={handleSearchChange}
      fullWidth
    />
  );
};
