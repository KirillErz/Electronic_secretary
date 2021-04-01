
import {ActionType} from "../../actions/action";
import {extend} from "../../../utils/utils";

const initialState = {
    history:[]
  };

  const data = (state = initialState, action) => {
    switch (action.type) {
      case ActionType.LOAD_HISTORY:
        return extend(state, {history: action.payload});
    }

    return state;
  };

  export {data};