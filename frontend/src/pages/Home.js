import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const Home = () => {
    const { user } = useAuthContext();
    return (
        <div className="white center">
            <h1>The ultimate to-do-list app</h1>
            <h2>Get shit done today!</h2>
            {!user && <h3><Link to="/login" className="white">Login</Link> to start using the app</h3>}
            {user && <h3>Go to your <Link to={"/" + user.email} className="white">home</Link> page</h3>}
        </div>
    );
}

export default Home;