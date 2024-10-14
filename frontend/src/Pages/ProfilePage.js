import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CheckAccess from '../utils/CheckAccess';
import Header from '../components/Header';
import UserPosts from '../components/UserPosts';
function ProfilePage() {
  const user = CheckAccess('/login')
  return (<>
  <Header />
  
  <h1>Your Posts, {user.username} </h1>
  <UserPosts />
  </>)
}

export default ProfilePage;
