import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";

const Navbar = () => {
    const { user } = useAuthContext();
    const { logout } = useLogout();
    const handleClick = () => {
        logout();
    }

    return (
        <header>
            <div className="container">
                <Link to="/">
                    <h1 className="kicksHub">Fiks Ferdig</h1>
                </Link>
                <nav>
                    {user && (
                        <div>
                        <Link to="/veileder" className="white">Veileder</Link>
                            <Link to={"/" + user.email} className="white">{user.email}</Link>
                            <button onClick={handleClick}>Log out</button>
                        </div>)}
                    {!user && (
                        <div>
                            <Link to="/login" id="login">Login</Link>
                            <Link to="/signup">Signup</Link>
                        </div>)}
                </nav>
            </div>
        </header>
    );
}

export default Navbar;