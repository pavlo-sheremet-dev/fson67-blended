import { useState } from 'react';

import { FiSearch } from 'react-icons/fi';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';

export const SearchForm = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const normalizedValue = value.trim();
    if (!normalizedValue) return;
    onSubmit({ value: normalizedValue });
    setValue('');
  };

  const handleChange = e => {
    setValue(e.target.value);
  };

  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <FormBtn type="submit">
        <FiSearch size="16px" />
      </FormBtn>
      <InputSearch
        placeholder="What do you want to write?"
        name="inputName"
        required
        autoFocus
        value={value}
        onChange={handleChange}
      />
    </SearchFormStyled>
  );
};
