import { useAuthContext } from './useAuthContext';
import { useTodosContext } from './useTodosContext';

export const useLogout = () => {
    const { dispatch } = useAuthContext();
    const { dispatch: dispatch2} = useTodosContext();

    const logout = () => {
        // remove user from storage
        localStorage.removeItem('user');

        // dispatch logout action
        dispatch({type: 'LOGOUT'});
        dispatch2({type: 'LOGOUT'});
    }

    return { logout }
}