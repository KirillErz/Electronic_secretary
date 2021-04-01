import {NameSpace} from "./reducers/root-reducer";
import {createSelector} from "reselect";

export const getAuthorizationStatus = (state) => state[NameSpace.USER].authorizationStatus;
export const getUserStatus = (state) => state[NameSpace.USER].userStatus;
export const getRegistrationStatus = (state) => state[NameSpace.USER].registrationStatus;
export const getUserData = (state) => state[NameSpace.USER].userData;
export const getCsrf = (state) => state[NameSpace.USER].csrfToken;
export const getHistory = (state) => state[NameSpace.DATA].history;