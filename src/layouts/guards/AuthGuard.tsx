import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';

const AuthGuard = ({ children }: { children: React.ReactElement }) => {
  const navigate = useNavigate();
  // const { isAuthenticated } = useAuth();
  const { isAuth } = useAppSelector((state) => state.auth);
  useEffect(() => {
    if (!isAuth) {
      return navigate('/login');
    }
  }, []);
  return <>{children}</>;
};

export default AuthGuard;
