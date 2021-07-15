import React from 'react';
import { Menu } from 'antd';
import { NavLink, useRouteMatch } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import propTypes from 'prop-types';

const MenuItems = ({ darkMode, toggleCollapsed, topMenu, events }) => {
  const { path } = useRouteMatch();

  const pathName = window.location.pathname;
  const pathArray = pathName.split(path);
  const mainPath = pathArray[1];
  const mainPathSplit = mainPath.split('/');

  const [openKeys, setOpenKeys] = React.useState(
    !topMenu ? [`${mainPathSplit.length > 2 ? mainPathSplit[1] : 'dashboard'}`] : [],
  );

  const onOpenChange = keys => {
    setOpenKeys(keys[keys.length - 1] !== 'recharts' ? [keys.length && keys[keys.length - 1]] : keys);
  };

  const onClick = item => {
    if (item.keyPath.length === 1) setOpenKeys([]);
  };

  return (
    <Menu
      onOpenChange={onOpenChange}
      onClick={onClick}
      mode={!topMenu || window.innerWidth <= 991 ? 'inline' : 'horizontal'}
      theme={darkMode && 'dark'}
      // // eslint-disable-next-line no-nested-ternary
      defaultSelectedKeys={
        !topMenu
          ? [
            `${mainPathSplit.length === 1 ? 'home' : mainPathSplit.length === 2 ? mainPathSplit[1] : mainPathSplit[2]
            }`,
          ]
          : []
      }
      defaultOpenKeys={!topMenu ? [`${mainPathSplit.length > 2 ? mainPathSplit[1] : 'dashboard'}`] : []}
      overflowedIndicator={<FeatherIcon icon="more-vertical" />}
      openKeys={openKeys}
    >

      {JSON.parse(localStorage.getItem('user'))?.groups[0]?.name === "user" &&
        <Menu.Item key="home" icon={!topMenu && <FeatherIcon icon="home" />} >
          <NavLink onClick={toggleCollapsed} to={`${path}/users/artwork`}>
            Art work
          </NavLink>
        </Menu.Item>}

      {JSON.parse(localStorage.getItem('user'))?.groups[0]?.name === "user" &&
        <Menu.Item key="dashboard" icon={!topMenu && <FeatherIcon icon="bar-chart-2" />} >
          <NavLink onClick={toggleCollapsed} to={`${path}/users/upload`}>
            Capture Image
          </NavLink>
        </Menu.Item>}
      {JSON.parse(localStorage.getItem('user'))?.groups[0]?.name === "expert" &&
        <Menu.Item key="dashboard" icon={!topMenu && <FeatherIcon icon="bar-chart-2" />} >
          <NavLink onClick={toggleCollapsed} to={`${path}`}>
            Dashboard
          </NavLink>
        </Menu.Item>}
      {JSON.parse(localStorage.getItem('user'))?.groups[0]?.name === "expert" &&
        <Menu.Item key="dashboard" icon={!topMenu && <FeatherIcon icon="pushpin" />} >
          <NavLink onClick={toggleCollapsed} to={`${path}`}>
            Identification
          </NavLink>
        </Menu.Item>}
      {JSON.parse(localStorage.getItem('user'))?.groups[0]?.name === "expert" &&
        <Menu.Item key="dashboard" icon={!topMenu && <FeatherIcon icon="book" />} >
          <NavLink onClick={toggleCollapsed} to={`${path}`}>
            Catalogue / Valuation
          </NavLink>
        </Menu.Item>}
      {JSON.parse(localStorage.getItem('user'))?.groups[0]?.name === "expert" &&
        <Menu.Item key="dashboard" icon={!topMenu && <FeatherIcon icon="image" />} >
          <NavLink onClick={toggleCollapsed} to={`${path}`}>
            Build Buyer View
          </NavLink>
        </Menu.Item>}
    </Menu>
  );
};

MenuItems.propTypes = {
  darkMode: propTypes.bool,
  topMenu: propTypes.bool,
  toggleCollapsed: propTypes.func,
  events: propTypes.object,
};

export default MenuItems;
