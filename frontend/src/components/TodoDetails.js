import { useTodosContext } from "../hooks/useTodosContext";

const TodoDetails = ({ todo }) => {
    const { dispatch } = useTodosContext();
    const userItem = localStorage.getItem('user');
    const user = JSON.parse(userItem);

    const handleDelete = async () => {
        if (!user) {
            return;
        }

        const response = await fetch(process.env.REACT_APP_HOST + '/api/todo/' + todo._id, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        });
        const json = await response.json();

        if (response.ok) {
            dispatch({ type: 'DELETE_TODO', payload: json});
        }
    }

    const handleDone = async () => {
        if (!user) {
            return;
        }

        const response = await fetch(process.env.REACT_APP_HOST + '/api/todo/complete/' + todo._id, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer $${user.token}`
            }
        });
        const json = await response.json();

        if(response.ok) {
            dispatch({ type: 'UPDATE_TODO', payload: json});
        }
    }

    const handleUndo = async () => {
        if (!user) {
            return;
        }

        const response = await fetch(process.env.REACT_APP_HOST + '/api/todo/undo/' + todo._id, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer $${user.token}`
            }
        });
        const json = await response.json();

        if(response.ok) {
            dispatch({ type: 'UPDATE_TODO', payload: json});
        }
    }

    const todoClassName = todo.complete == true ? 'complete' : '';

    return ( 
        <div className={`shoe-details ${todoClassName}`} id={todo._id}>
            <h3>{todo.text}</h3>
            {!todo.complete && <span className="material-symbols-outlined" onClick={handleDone}>done</span>}
            {todo.complete && <span class="material-symbols-outlined" onClick={handleUndo}>close</span>}
            <span className="material-symbols-outlined" onClick={handleDelete}>delete</span>
        </div>
     );
}
 
export default TodoDetails;