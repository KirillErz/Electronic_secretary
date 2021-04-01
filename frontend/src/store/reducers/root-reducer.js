import {combineReducers} from "redux";
import {data} from "./data/data";
import {process} from "./process/process";
import {user} from "./user/user";
import {reducer as toastrReducer} from 'react-redux-toastr'

export const NameSpace = {
  DATA: `DATA`,
  PROCESS: `PROCESS`,
  USER: `USER`
};

export default combineReducers({
  toastr: toastrReducer,
  [NameSpace.DATA]: data,
  [NameSpace.PROCESS]: process,
  [NameSpace.USER]: user
});