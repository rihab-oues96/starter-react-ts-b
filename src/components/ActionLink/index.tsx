import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  label?: string;
  icon?: ReactNode;
  className?: string;
  url?: string;
  onClickAction?: () => void;
};

const ActionLink = ({ label, icon, className, url, onClickAction }: Props) => {
  return (
    <Link
      to={url || '#'}
      className={`action-link${className != null ? ` ${className}` : ''}`}
      onClick={onClickAction}
    >
      <div className="user__options">
        {' '}
        {icon && <span className="material-icons">{icon}</span>}
        <span>{label}</span>
      </div>
    </Link>
  );
};

ActionLink.propTypes = {};

export default ActionLink;
