import {ActionType} from "../../actions/action";
import {AuthorizationStatus} from "../../../utils/const";
import {extend} from "../../../utils/utils";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  userData: {},
  userStatus: null,
  csrfToken: null,
  registrationStatus: null
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRE_AUTHORIZATION:
      return extend(state, {authorizationStatus: action.payload});
    case ActionType.LOAD_USER:
      return extend(state, {userData: action.payload});
    case ActionType.GET_USER_STATUS:
      return extend(state, {userStatus: action.payload});
    case ActionType.SET_CSRF:
      return extend(state, {csrfToken: action.payload});
    case ActionType.GET_REGISTRATION_STATUS:
      return extend(state, {registrationStatus: action.payload});
  }

  return state;
};

export {user};