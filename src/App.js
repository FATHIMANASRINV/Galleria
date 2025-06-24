import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Signup from './pages/signup';
import Logout from './pages/logout';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { UserProvider } from './context'; 
import AdminDashboard from './pages/admin/dashboard';

function App() {
  return (
<>
      <UserProvider>
      <ToastContainer position="top-right" autoClose={3000} />   
       <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
            <Route path="/adminDashboard" element={<AdminDashboard />} />
            <Route path="/logout" element={<Logout />} />

      </Routes>
    </Router>
      </UserProvider>
    </>
  );
}
export default App;
