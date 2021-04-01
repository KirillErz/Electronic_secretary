import React from "react";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AuthorizationStatus, AppRoute} from "../../utils/const";
import {getAuthorizationStatus} from "../../store/selectors";
import {validString, validFunc} from "../../utils/props";

const PrivateRoute = (props) => {
  const {render, path, authorizationStatus} = props;

  return (
    <Route
      exact
      path={path}
      render={(routeProps) => {
        return (
          authorizationStatus === AuthorizationStatus.AUTH
            ? render(routeProps)
            : <Redirect to={AppRoute.LOGIN} />
        );
      }}
    />
  );
};



const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
