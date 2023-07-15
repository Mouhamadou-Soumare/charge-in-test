import React from 'react';
import Login from './pages/LoginPage/loginPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Login} />
      </Switch>
    </Router>
  );
};

export default App;
