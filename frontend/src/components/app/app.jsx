import React from 'react';
import '../../style/App.scss';
import {AppRoute} from "../../utils/const";
import {Switch, Route, Router as BrowserRouter} from "react-router-dom";
import PrivateRoute from "../private-route/private-route";
import browserHistory from "../../browser-history";
import UserPage from '../user-page/user-page';
import MainPage from '../main-page/main-page';
import ReduxToastr from 'react-redux-toastr'


const App = () => {
    return (
        <div>
        <BrowserRouter history={browserHistory}>
            <Switch>
                <Route
                    exact
                    path={AppRoute.LOGIN}
                    render={({history}) => (
                        <UserPage
                            history={history}
                        />
                    )}
                />
                 <PrivateRoute
                    exact
                    path={AppRoute.RULE}
                    render={({history}) => (
                        <MainPage
                            history={history}
                        />
                    )}
                />
            </Switch>
        </BrowserRouter>
        <ReduxToastr
        timeOut={4000}
        newestOnTop={false}
        preventDuplicates
        position="top-right"
        //getState={(state) => state.toastr} // This is the default
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        progressBar
        closeOnToastrClick/>
        </div>
    );
};

export default App;