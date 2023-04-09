import { Text } from 'components';
import { TodoWrapper, DeleteButton, EditButton } from './Todo.styled';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';

export const Todo = ({ todoText, todoNumber, todoId, onRemove }) => {
  return (
    <TodoWrapper>
      <Text textAlign="center" marginBottom="20px">
        TODO #{todoNumber}
      </Text>
      <Text>{todoText}</Text>
      <DeleteButton type="button" onClick={() => onRemove(todoId)}>
        <RiDeleteBinLine size={24} />
      </DeleteButton>
    </TodoWrapper>
  );
};
