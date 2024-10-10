import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CheckAccess from '../utils/CheckAccess';
import Header from '../components/Header';
function ProfilePage() {
  const username = CheckAccess('/login')
  
  return (<>
  <Header />
  
  <h1>Welcome to the Profile Page {username} </h1>
  </>)
}

export default ProfilePage;
