import {NameSpace} from "../store/reducers/root-reducer";
const LOCAL_STORAGE_NAME = 'CSRFTOKEN'

export const  extend = (a, b) => {
    return Object.assign({}, a, b);
  };

export const removeItem = (state,id) => {
  return state[NameSpace.DATA].history.filter((item) => item.idTemplate != id)
};

export const saveCsrf = (csrf) => {
  sessionStorage.setItem(LOCAL_STORAGE_NAME, csrf);
};

export const getCsrf = () => {
  return sessionStorage.getItem(LOCAL_STORAGE_NAME);
};

export const removeCsrf = () => {
  return sessionStorage.removeItem(LOCAL_STORAGE_NAME);
};