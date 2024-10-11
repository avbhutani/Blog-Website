import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from './Pages/LoginPage'
import RegisterPage from "./Pages/RegisterPage";
import ProfilePage from './Pages/ProfilePage'
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import HomePage from './Pages/HomePage'
import Woo from "./Pages/Woo";

axios.defaults.withCredentials = true;

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/woo" element={<Woo />} />

    </Routes>
  );
}

export default App;
