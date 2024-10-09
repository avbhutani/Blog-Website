import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from './Pages/LoginPage'
import RegisterPage from "./Pages/RegisterPage";

import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'

axios.defaults.withCredentials = true;

function App() {
  return (
    <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
