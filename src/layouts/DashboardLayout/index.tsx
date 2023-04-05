import React, { useEffect, useState } from 'react';
import { useDarkMode } from '../../hooks/useDarkMode';
import WindowDimensions from '../../utils/windowDimenssions';
import Header from '../Header';
import Sidebar from '../Sidebar';
import Main from '../Main';
type Props = {
  children?: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  const width = WindowDimensions();

  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    setMobileOpen(false);
  }, [width, window.location.pathname]);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    console.log(mobileOpen);
  };
  const [theme, toggleTheme] = useDarkMode();
  const constraint = width < 900 && mobileOpen;
  return (
    <div className="main__layout">
      {constraint && (
        <div
          className="overlay"
          onClick={() => setMobileOpen(false)}
          onKeyUp={() => console.log('first')}
        ></div>
      )}
      <Sidebar
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
        className={width < 900 && mobileOpen ? 'show__sidebar' : ''}
      />

      <div className="main_layout__container">
        <Header handleDrawerToggle={handleDrawerToggle} />
        <Main>{children}</Main>
      </div>
    </div>
  );
};

DashboardLayout.propTypes = {};

export default DashboardLayout;
