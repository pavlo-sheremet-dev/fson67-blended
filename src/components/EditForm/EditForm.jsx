import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';

import { SearchFormStyled, FormBtn, InputSearch } from 'components';
import { BtnEdit } from './EditForm.styled';
import { useDispatch } from 'react-redux';
import { editTodo, toggleEditForm } from 'redux/todos/todoSlice';

export const EditForm = ({ todo }) => {
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    const value = event.target.search.value;
    dispatch(editTodo({ id: todo.id, value }));
    dispatch(toggleEditForm());
  };
  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <FormBtn type="submit">
        <RiSaveLine size="16px" />
      </FormBtn>
      <BtnEdit type="button" onClick={() => dispatch(toggleEditForm())}>
        <MdOutlineCancel size="16px" />
      </BtnEdit>
      <InputSearch
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
        defaultValue={todo.description}
      />
    </SearchFormStyled>
  );
};
