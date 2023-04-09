import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Grid, GridItem, SearchForm, EditForm, Text, Todo } from 'components';

export const Todos = () => {
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem('todos')) ?? []
  );

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = ({ value }) => {
    const newTodo = { todoText: value, id: nanoid() };
    setTodos(prevTodos => [...prevTodos, newTodo]);
  };

  const removeTodo = id => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  return (
    <>
      <SearchForm onSubmit={addTodo} />
      <Grid>
        {todos.map((todo, index) => {
          return (
            <GridItem key={todo.id}>
              <Todo
                todoText={todo.todoText}
                todoNumber={index + 1}
                todoId={todo.id}
                onRemove={removeTodo}
              />
            </GridItem>
          );
        })}
      </Grid>
    </>
  );
};
