import React from 'react';
import createHistory from 'history/createBrowserHistory';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import NotFoundPage from '../components/NotFoundPage';
import { Router, Route, Switch } from 'react-router-dom';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRouter';
import PublicRoute from './PublicRouter';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/create" component={AddExpensePage} />
                <PrivateRoute path="/edit/:id" component={EditExpensePage} />
                <PrivateRoute
                    path="/dashboard"
                    component={ExpenseDashboardPage}
                />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);
export default AppRouter;
