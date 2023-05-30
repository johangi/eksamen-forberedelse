import { useEffect } from "react";
import { useTodosContext } from "../hooks/useTodosContext";

import AddTodo from "../components/AddTodo";
import TodoDetails from "../components/TodoDetails";

const User = () => {
    const { todos, dispatch } = useTodosContext();
    const userItem = localStorage.getItem('user');
    const user = JSON.parse(userItem);

    useEffect(() => {
        const fetchTodos = async () => {
            const response = await fetch(process.env.REACT_APP_HOST + '/api/todo/' + user.email, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                }
            });
            const json = await response.json();

            if (response.ok) {
                dispatch({ type: 'SET_TODOS', payload: json.todos })
            }
        }

        if (user) {
            fetchTodos();
        }
    }, []);

    return (
        <div className="center">
            <AddTodo />
            <div className="white center">
                <h1>{user && user.email}'s to-do list</h1>
            </div>
            <div className="pokomons center">
                {todos && todos.length > 0 ? ( todos.map((todo) => {
                    return (
                        <TodoDetails key={todo._id} todo={todo} />
                    )
                })) : (
                    <p>no to-do's found</p>
                )}
            </div>
        </div>
    );
}

export default User;