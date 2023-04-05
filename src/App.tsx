import React from 'react';
import routes, { renderRoutes } from './routes';
import Main from './layouts/Main';
// import { AuthProvider } from './contexts/JWTAuthContext';
import { BrowserRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDarkMode } from './hooks/useDarkMode';
import { Provider } from 'react-redux';
import store from './data/store';

function App() {
  const { i18n } = useTranslation();
  const [theme, componentMounted] = useDarkMode();
  if (!componentMounted) {
    return <div />;
  }
  const wrapperClass = ` wrapper${theme === 'dark' ? ' dark' : ''}${
    i18n.language === 'ar' ? ' rtl' : ''
  }`;

  return (
    <div className={wrapperClass}>
      <BrowserRouter>
        {/* <AuthProvider> */}
        <Provider store={store}>
          <Main>{renderRoutes(routes)}</Main>
        </Provider>

        {/* </AuthProvider> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
