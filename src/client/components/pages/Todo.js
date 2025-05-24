import React, { useState } from 'react';
import {
  Paper,
  List,
  ListItem,
  ListItemText,
  TextField,
  IconButton,
  Checkbox,
} from '@mui/material';
import { observer } from 'mobx-react'
import rootStore from "../../store";
import { Delete } from '@mui/icons-material';

const Todo = observer(() => {
    const { todoStore } = rootStore;
    // const initialData = window.__INITIAL_STATE__;
    // console.log("***initialData****", initialData);
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = (event) => {
    if (event.key === 'Enter' && input !== '') {
      todoStore.addTodo({ text: input, completed: false, id: Date.now() })
      setInput('');
    }
  };

  

  return (
    <Paper style={{ width: '400px', padding: '20px', margin: '20px auto' }}>
      <h2>To-Do List</h2>
      <TextField
        label="Add To-Do"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={addTodo}
        fullWidth
        margin="normal"
      />
      <List>
        {todoStore.todos.map((todo) => (
          <ListItem key={todo.id}>
            <Checkbox
              checked={todo.completed}
              onChange={() => todoStore.toggleComplete(todo.id)}
              style={{ marginRight: '10px' }}
            />
            <ListItemText primary={todo.text} />
            <IconButton
              onClick={() => todoStore.deleteTodo(todo.id)}
              edge="end"
              aria-label="delete"
            >
              <Delete />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
});

export default Todo;