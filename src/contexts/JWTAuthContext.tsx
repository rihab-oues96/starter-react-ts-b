import React from 'react';

const JWTAuthContext = () => {
  return (
    <div>
      <p>seif eddine saad</p>
    </div>
  );
};

export default JWTAuthContext;

// import jwtDecode from 'jwt-decode';
// import { PayloadAction } from '@reduxjs/toolkit';

// import { JWTState, User, DecodedToken, LoginPromise } from '../types/contexts';
// import axios from '../utils/axios';
// import Loading from '../components/Loading';

// const initialAuthState: JWTState = {
//   isAuthenticated: false,
//   isInitialised: false,
//   user: null,
// };

// const isValidToken = (token: string): boolean => {
//   if (!token) {
//     return false;
//   }
//   const decoded: DecodedToken = jwtDecode(token);
//   const currentTime = Date.now() / 1000;
//   return decoded.exp > currentTime;
// };

// const setSession = (token: string | null) => {
//   if (token) {
//     localStorage.setItem('token', token);
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   } else {
//     localStorage.removeItem('token');
//     delete axios.defaults.headers.common.Authorization;
//   }
// };

// const reducer = (state: JWTState, action: PayloadAction<JWTState>) => {
//   switch (action.type) {
//     case 'INITIALISE': {
//       const { isAuthenticated, user } = action.payload;
//       console.log(isAuthenticated);
//       return {
//         ...state,
//         isAuthenticated,
//         isInitialised: true,
//         user,
//       };
//     }
//     case 'LOGIN': {
//       const { user } = action.payload;
//       console.log(user);
//       // console.log(state, 'state');
//       return {
//         ...state,
//         isAuthenticated: true,
//       };
//     }
//     case 'LOGOUT': {
//       return {
//         ...state,
//         isAuthenticated: false,
//         user: null,
//       };
//     }
//     default: {
//       return { ...state };
//     }
//   }
// };

// const AuthContext = createContext({
//   ...initialAuthState,
//   method: 'JWT',
//   login: (email: string, password: string) => Promise.resolve(),
//   logout: () => {},
// });

// export const AuthProvider = ({ children }: { children: ReactNode }) => {
//   const [state, dispatch] = useReducer(reducer, initialAuthState);

//   const login = async (email: string, password: string) => {
//     const response = await axios.post('https://apitest.khouaja.live/v1/user/login', {
//       email,
//       password,
//     });
//     console.log(response);
//     const user = response.data.data.user;
//     console.log(user);
//     // const { email1, password1 } = user;
//     // const userformat = {
//     //   email: user.email,
//     //   password: user.password,
//     // };
//     // console.log(userformat);
//     const token = response.data.data.token;
//     setSession(token);
//     dispatch({
//       type: 'LOGIN',
//       payload: {
//         user,
//       },
//     });
//   };

//   const logout = () => {
//     setSession(null);
//     // TODO: useReducer with typescript !!!
//     dispatch({ type: 'LOGOUT', payload: {} });
//   };

//   useEffect(() => {
//     const initialise = async () => {
//       try {
//         const token = window.localStorage.getItem('token');
//         if (token && isValidToken(token)) {
//           setSession(token);
//           const response = await axios.get('/profile/my');
//           const user = response.data.data;

//           dispatch({
//             type: 'INITIALISE',
//             payload: {
//               isAuthenticated: true,
//               user,
//             },
//           });
//         } else {
//           dispatch({
//             type: 'INITIALISE',
//             payload: {
//               isAuthenticated: false,
//               user: null,
//             },
//           });
//         }
//       } catch (err) {
//         console.error(err);
//         dispatch({
//           type: 'INITIALISE',
//           payload: {
//             isAuthenticated: false,
//             user: null,
//           },
//         });
//       }
//     // };

//     initialise();
//   }, []);

//   if (!state.isInitialised) {
//     return <Loading />;
//   }

//   return (
//     <AuthContext.Provider
//       value={{
//         ...state,
//         method: 'JWT',
//         logout,
//         login,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContext;
