import React from 'react';
import { Link } from 'react-router-dom';
import ImLogo from '../../assets/img/logo.svg';

type Props = {
  handleDrawerToggle?: () => void;
  mobileOpen?: boolean;
};
const Index = ({ handleDrawerToggle, mobileOpen }: Props) => {
  return (
    <Link to="/" className="logo">
      <img alt="logo" src={ImLogo} />
      <span>WebSchool</span>
    </Link>
  );
};

export default Index;
