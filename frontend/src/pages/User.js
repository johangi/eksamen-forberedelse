import { useEffect, useState } from "react";
import { useTodosContext } from "../hooks/useTodosContext";

import AddTodo from "../components/AddTodo";
import TodoDetails from "../components/TodoDetails";

const User = () => {
    const { todos, dispatch } = useTodosContext();
    const userItem = localStorage.getItem('user');
    const user = JSON.parse(userItem);

    const [id, setId] = useState('');
    const [todo, setTodo] = useState('');
    const [error, setError] = useState(null);
    const [empty, setEmpty] = useState(false);
    const [noId, setNoId] = useState(false);
    
    const form = document.querySelector('.form');

    const handleEditSubmit = async e => {
        e.preventDefault();

        const id = form.id.value;
        const todo = form.todo.value;

        const response = await fetch(process.env.REACT_APP_HOST + '/api/todo/edit/' + id, {
            method: 'POST',
            body: JSON.stringify({todo}),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        });
        const json = await response.json();

        if (!response.ok) {
            setError(json.error);
            setEmpty(true);
            setNoId(true);
        }

        if (response.ok) {
            setError(null);
            setId('');
            setTodo('');
            setEmpty(false);
            setNoId(false);
            dispatch({ type: 'UPDATE_TODO', payload: json.todo });
        }
    }

    const handleEdit = async e => {
        const id = e.target.dataset.id;

        form.id.value = id;
        setId(id);
    }

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
            <form className="create form" onSubmit={handleEditSubmit}>
            <input type="text" name="id" placeholder="todo id..." onChange={e => setId(e.target.value)} value={id} className={noId ? 'error' : ''} />
            <input type="text" name="todo" placeholder="new text..." onChange={e => setTodo(e.target.value)} value={todo} className={empty ? 'error' : ''} />
            <button>Update to-do</button>
            {error && <div className="error">{error}</div>}
        </form>
            <div className="white center">
                <h1>{user && user.email}'s to-do list</h1>
            </div>
            <div className="pokomons center">
                {todos && todos.length > 0 ? ( todos.map((todo) => {
                    return (
                        <TodoDetails key={todo._id} todo={todo} handleEdit={handleEdit} />
                    )
                })) : (
                    <p>no to-do's found</p>
                )}
            </div>
        </div>
    );
}

export default User;