import React from 'react';
import constants from '../../data/constants';
import Header from './components/Header';
import Container from './components/Container';
import Footer from './components/Footer';
type Props = {
  handleDrawerToggle?: () => void;
  mobileOpen?: boolean;
  window?: undefined | (() => Window);
  className?: string;
};

const Sidebar = ({ handleDrawerToggle, mobileOpen, window, className }: Props) => {
  console.log(window);
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={`sidebar ${className}`}>
      <Header />
      <Container />
      <Footer />
    </div>
  );
};

export default Sidebar;
