import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useTodosContext } from "../hooks/useTodosContext";

const AddTodo = () => {
    const { dispatch } = useTodosContext();
    const { user } = useAuthContext();

    const [text, setText] = useState('');
    const [error, setError] = useState(null);
    const [empty, setEmpty] = useState(false);

    const handleSubmit = async e => {
        e.preventDefault();

        const todo = { owner: user.email, text }

        const response = await fetch(process.env.REACT_APP_HOST + '/api/todo/create', {
            method: 'POST',
            body: JSON.stringify(todo),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        });
        const json = await response.json();
        
        if(!response.ok) {
            setError(json.error);
            setEmpty(true);
        }
        if(response.ok) {
            setText('');
            setError(null);
            setEmpty(false);
            console.log('new todo added', json);
            dispatch({ type: 'CREATE_TODO', payload: json });
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <input type="text" onChange={e => setText(e.target.value)} value={text} placeholder="mow the lawn..." className={empty ? 'error' : ''} />
            <button>Add to-do</button>
            {error && <div className="error">{error}</div>}
        </form>
    );
}

export default AddTodo;