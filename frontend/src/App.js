import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';
import User from './pages/User';
import Veileder from './pages/Veileder';

function App() {
    const { user } = useAuthContext();
    return (
        <div className='App'>
            <BrowserRouter>
                <Navbar />
                <div className='pages'>
                    <Routes>
                        <Route
                            path="/"
                            element={<Home />}
                        />
                        <Route
                            path="/login"
                            element={!user ? <Login /> : <Navigate to="/" replace />}
                        />
                        <Route
                            path="/signup"
                            element={!user ? <Signup /> : <Navigate to="/" replace />}
                        />
                        <Route 
                            path='/:user'
                            element={user ? <User /> : <Navigate to="/login" replace />}
                        />
                        <Route 
                            path='/veileder'
                            element={user ? <Veileder /> : <Navigate to="/" replace />}
                        />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App;