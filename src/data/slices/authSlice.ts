import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../utils/axios';
import jwtDecode from 'jwt-decode';
import { DecodedToken } from '../../types/contexts';
type User = {
  name: string;
  phone: number;
  email: string;
  password: string;
};
interface AuthentificationState {
  loading: boolean;
  error: string | null;
  success: boolean;
  isAuth: boolean;
  user: null | User;
}

const initialState: AuthentificationState = {
  loading: false,
  error: null,
  success: false,
  isAuth: false,
  user: null,
};

export const setSession = (token: string | null) => {
  if (token) {
    localStorage.setItem('token', token);
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    localStorage.removeItem('token');
    delete axiosInstance.defaults.headers.common.Authorization;
  }
};

//login
export const loginUser = createAsyncThunk(
  'auth/login',
  async ({ email, password }: { email: string; password: string }) => {
    let data;
    try {
      console.log(password, email, 'suiii');
      const response = await axiosInstance.post(`https://apitest.khouaja.live/v1/user/login`, {
        email,
        password,
      });
      data = await response.data;
      if ((response.status = 200)) {
        return data;
      }
      throw new Error(response.statusText);
    } catch (err: any) {
      const error = err;
      return Promise.reject(error.message ? error.message : data?.message);
    }
  }
);
export const isValidToken = (token: string): boolean => {
  if (!token) {
    return false;
  }
  const decoded: DecodedToken = jwtDecode(token);
  const currentTime = Date.now() / 1000;
  return decoded.exp > currentTime;
};
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    refresh: (state) => {
      //   const { isAuth, user } = action.payload;
      state.isAuth = true;
      //   state.user = user;
    },
    logout: (state) => {
      setSession(null);
      state.isAuth = false;
      state.user = null;
      window.location.href = '/login';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        const { token, data } = action.payload;
        console.log(data);
        state.loading = false;
        state.error = null;
        state.success = true;
        state.isAuth = true;
        state.user = data.user;
        setSession(token);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'An error occurred';
        state.success = false;
      });
  },
});

export const { logout, refresh } = authSlice.actions;
export default authSlice.reducer;
