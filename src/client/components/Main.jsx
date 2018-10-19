import 'modules/bootstrap/dist/css/bootstrap.min.css';
import 'modules/font-awesome/css/font-awesome.min.css';
import '../styles/TodoList.css';

import React from 'react';
import Menu from '../views/Menu'
import Routes from '../helpers/routes';

export default props => (
  <div>
    <header>
      <Menu />
    </header>
      <Routes />
  </div>
)
