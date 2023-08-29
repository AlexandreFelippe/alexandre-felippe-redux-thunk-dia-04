import { REQUEST_STARTED, REQUEST_SUCCESSFUL, REQUEST_FAILED } from '../actions';

const initialState = {
  isFetching: false,
  data: {
    url: '',
    name: '',
    titles: [],
    aliases: [],
  },
  errorMessage: '',
};

type ActionType = {
  payload: {
    url: string;
    name: string;
    titles: string[];
    aliases: string[];
  },
  type: string,
};

function GOTReducer(state = initialState, action: ActionType) {
  switch (action.type) {
    case REQUEST_STARTED:
      return {
        ...state,
        isFetching: true,
        errorMessage: '',
      };

    case REQUEST_SUCCESSFUL:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
      };

    case REQUEST_FAILED:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
}

export default GOTReducer;