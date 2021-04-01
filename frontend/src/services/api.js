import axios from "axios";
import {saveCsrf, getCsrf, removeItem} from "../utils/utils";

const BACKEND_URL = `http://localhost:5000/api`;
const REQUEST_TIMEOUT = 1000;

const HttpCode = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401
};

export const createAPI = (onUnauthorized) => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
    withCredentials: true
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    const {response} = err;

    switch (response.status) {
      case HttpCode.UNAUTHORIZED:
        onUnauthorized();
        throw err;
      case HttpCode.BAD_REQUEST:
        throw err;
      default:
        throw err;
    }
  };

  // api.interceptors.request.use(
  //   config => {
  //       const token = getCsrf();

  //       if (token && config.url != '/getsession' && config.url != '/getcsrf') {
  //           console.log(token);
  //           config.headers['X-CSRFTOKEN'] = token;
  //       }
  //       config.headers['Content-Type'] = 'application/json';
  //       return config;
  //   },
  //   error => {
  //       Promise.reject(error)
  //   });
  // window.location.href = '/';

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};