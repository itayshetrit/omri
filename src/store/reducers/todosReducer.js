import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todos: {},
    todoNumber: 1, // id
    todosError: null,
    todosLoading: false
}

const _addTodo = (state, action) => {
    let editedTodos = { ...state.todos }
    editedTodos[state.todoNumber] = { ...action.payload, id: state.todoNumber };
    state.todoNumber = state.todoNumber + 1;
    state.todos = editedTodos;
};

const _editTodo = (state, action) => {
    let editedTodos = { ...state.todos }
    for (const [key, value] of Object.entries(action.payload.body))
        editedTodos[action.payload.id][key] = value;
    state.todos = editedTodos;
};

const _deleteTodo = (state, action) => {
    let editedTodos = { ...state.todos }
    delete editedTodos[action.payload]
    state.todos = editedTodos;
};

const _actionStart = (state,) => {
    state.todosLoading = true;
    state.todosError = null;
};

const _actionSuccess = (state) => {
    state.todosLoading = false;
    state.todosError = null;
};

const _actionFailed = (state, action) => {
    state.todosLoading = false;
    state.todosError = action.payload.error;
};

const todos = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo1: _addTodo,
        editTodo1: _editTodo,
        deleteTodo1: _deleteTodo,
        actionStart: _actionStart,
        actionFailed: _actionFailed,
        actionSuccess: _actionSuccess
    },
});

const { reducer, actions } = todos;

export const { actionStart, actionFailed, actionSuccess, addTodo1, editTodo1, deleteTodo1 } = actions;

export default reducer;

export const addTodo = (body) => {
    return async (dispatch) => {
        dispatch(actionStart())
        setTimeout(() => {
            console.log("back from server");
            dispatch(actionSuccess())
            return dispatch(addTodo1(body));
        }, 500);
    }
};


export const editTodo = (id, body) => {
    return async (dispatch) => {
        dispatch(actionStart())
        setTimeout(() => {
            console.log("back from server");
            dispatch(actionSuccess())
            return dispatch(editTodo1({ id, body }));
        }, 500);
    }
};

export const deleteTodo = (id) => {
    return async (dispatch) => {
        dispatch(actionStart())
        setTimeout(() => {
            console.log("back from server");
            dispatch(actionSuccess())
            return dispatch(deleteTodo1(id));
        }, 500);
    }
};