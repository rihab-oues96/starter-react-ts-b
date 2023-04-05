import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isValidToken, loginUser, refresh, setSession } from '../../data/slices/authSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import axios from 'axios';
const GuestGuard = ({ children }: { children: React.ReactElement }) => {
  const navigate = useNavigate();
  // const { isAuthenticated } = useAuth();
  const dispatch = useAppDispatch();
  const { isAuth } = useAppSelector((state) => state.auth);
  console.log(isAuth);
  useEffect(() => {
    if (isAuth) {
      return navigate('/');
    }
  }, [isAuth]);
  useEffect(() => {
    const initialise = async () => {
      try {
        const token = window.localStorage.getItem('token');
        if (token && isValidToken(token)) {
          setSession(token);
          // const response = await axios.get('https://apitest.khouaja.live/v1/user/me'k);
          // const user = response.data.data;

          dispatch(refresh());
        } else {
          // dispatch(isAuth=);
          console.log('novalidtoken');
        }
      } catch (err) {
        console.error(err);
        // dispatch();
        console.log('err');
      }
    };

    initialise();
  }, []);
  return <>{children}</>;
};

export default GuestGuard;
