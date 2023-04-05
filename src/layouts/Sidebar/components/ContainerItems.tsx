import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { openModal } from '../../../data/slices/modalSlice';

type ITEM = {
  icon: string;
  id: number;
  name: string;
  permission: boolean;
  type: string;
  url: string;
};

type Props = {
  handleDrawerToggle?: () => void;
  mobileOpen?: boolean;
  item: ITEM;
};

const ContainerItems = ({ item, handleDrawerToggle, mobileOpen }: Props) => {
  const dispatch = useDispatch();
  function renderContent() {
    return (
      <>
        <div className="title">
          <img alt={item.name} src={item.icon} />
          <span>{item.name}</span>
        </div>
      </>
    );
  }

  return (
    <li>
      {item.type === 'route' && (
        <NavLink
          to={item.url}
          onClick={() => {
            if (mobileOpen === true) {
              if (handleDrawerToggle) {
                handleDrawerToggle();
              }
            } else {
              return;
            }
          }}
        >
          {renderContent()}
        </NavLink>
      )}
      {item.type === 'link' && (
        <a href={item.url} target="_blank" rel="noreferrer">
          {renderContent()}
        </a>
      )}
      {item.type === 'modal' && (
        <div
          onClick={() => dispatch(openModal({ id: item.url, data: null }))}
          onKeyDown={(e) => e.key === 'Enter' && dispatch(openModal({ id: item.url, data: null }))}
        >
          {renderContent()}
        </div>
      )}
    </li>
  );
};

export default ContainerItems;
