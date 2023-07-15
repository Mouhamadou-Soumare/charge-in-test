import React from 'react';
import Login from './pages/LoginPage/loginPage';
import DashboardHomepage from './pages/DashboardHomepage/dashboardHomepage';
import notFound from './pages/404/notFound';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/dashboard" component={DashboardHomepage} />
        <Route component={notFound} /> 
      </Switch>
    </Router>
  );
};

export default App;
