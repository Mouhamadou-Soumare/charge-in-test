import React from 'react';
import Login from './pages/LoginPage/loginPage';
import DashboardHomepage from './pages/DashboardHomepage/dashboardHomepage';
import notFound from './pages/404/notFound';
import ResponsiveDrawer from './components/templates/drawer/drawer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import B2cList from './pages/B2cList/B2cList';
import B2cProfil from './pages/B2cProfil/B2cProfil';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route>
          <ResponsiveDrawer/>
          <Switch>
          </Switch>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
