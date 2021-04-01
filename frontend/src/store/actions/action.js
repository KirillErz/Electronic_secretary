export const ActionType = {
    REQUIRE_AUTHORIZATION: `REQUIRE_AUTHORIZATION`,
    LOAD_USER: `LOAD_USER`,
    GET_USER_STATUS: `GET_USER_STATUS`,
    GET_REGISTRATION_STATUS: `GET_REGISTRATION_STATUS`,
    REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
    SET_CSRF: `SET_CSRF`,
    LOAD_HISTORY: `LOAD_HISTORY`,
  };

  export const loadHistory = (data) => ({
    type: ActionType.LOAD_HISTORY,
    payload: data
  })

  export const setCsrfToken = (token) => ({
    type: ActionType.SET_CSRF,
    payload: token
  });

  export const requireAuthorization = (status) => ({
    type: ActionType.REQUIRE_AUTHORIZATION,
    payload: status
  });

  export const loadUser = (status) => ({
    type: ActionType.LOAD_USER,
    payload: status
  });

  export const getUserStatus = (status) => ({
    type: ActionType.GET_USER_STATUS,
    payload: status
  });

  export const redirectToRoute = (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  });

  export const getRegistrationStatus = (status) => ({
    type: ActionType.GET_REGISTRATION_STATUS,
    payload: status
  })