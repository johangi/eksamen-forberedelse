import { createContext, useReducer } from "react";

export const TodosContext = createContext();

export const todosReducer = (state, action) => {
    switch (action.type) {
        case 'SET_TODOS':
            return {
                todos: action.payload
            }
        case 'CREATE_TODO':
            return {
                todos: [action.payload, ...state.todos]
            }
        case 'DELETE_TODO':
            return {
                todos: state.todos.filter(t => t._id !== action.payload._id)
            }
        case 'UPDATE_TODO':
            const updatedTodoIndex = state.todos.findIndex(t => t._id === action.payload._id);
            const updatedTodos = [...state.todos];
            updatedTodos[updatedTodoIndex] = action.payload;

            return {
                todos: updatedTodos,
            }
        case 'LOGOUT':
            return {
                todos: []
            }
        default:
            return state
    }
}

export const TodosContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(todosReducer, { todos: null });

    return (
        <TodosContext.Provider value={{ ...state, dispatch }}>
            {children}
        </TodosContext.Provider>
    )
}