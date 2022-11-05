import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TodoType = {
  id: number;
  title: string | undefined;
  content: string | undefined;
  isDone: boolean;
};

type StateType = {
  todos: TodoType[];
};

const initialState: StateType = {
  todos: [
    {
      id: 1,
      title: '리엑트 공부하기',
      content: '리엑트 기초를 공부해봅시다',
      isDone: false,
    },
    {
      id: 2,
      title: '재신재신',
      content: '나는 재신재신입니다',
      isDone: false,
    },
    {
      id: 3,
      title: '아이유',
      content: '나는 아이유입니다',
      isDone: true,
    },
  ],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    handleReduxSubmit: (state, action: PayloadAction<TodoType>) => {
      state.todos.push(action.payload);
    },
    setReduxTodos: (state, action: PayloadAction<TodoType[]>) => {
      state.todos = action.payload;
    },
  },
});

export const todosReducer = todosSlice.reducer;

export const todosActions = todosSlice.actions;
