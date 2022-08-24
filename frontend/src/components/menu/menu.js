import {Link} from "react-router-dom"
import { Menu } from 'antd';
import React, { useState } from 'react';
const items = [
  {
    label: (
        <Link to="/">Home</Link>
    ),
    key: 'Home',
  },
  {
    label: (
        <Link to="/casetest">Casos de Teste</Link>
    ),
    key: 'app',
  },
];

const MenuComponent = () => {
  const [current, setCurrent] = useState();

  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} theme={'dark'}/>;
};

export default MenuComponent;