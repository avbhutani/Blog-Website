import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from './Pages/loginPage/LoginPage'
import RegisterPage from "./Pages/registerPage/RegisterPage";
import ProfilePage from './Pages/profile/ProfilePage'
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import HomePage from './Pages/home/HomePage'
import CreatePostPage from "./Pages/createPost/CreatePostPage";
import ExpandedPost from "./Pages/expandedPost/ExpandedPost";

axios.defaults.withCredentials = true;

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/createPost" element={<CreatePostPage />} />
        <Route path="/post/:id" element={<ExpandedPost />} />
    </Routes>
  );
}

export default App;
