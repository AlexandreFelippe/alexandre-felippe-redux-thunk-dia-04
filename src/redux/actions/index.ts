import { Dispatch } from '../../types';
export const REQUEST_STARTED = 'REQUEST_STARTED';
export const REQUEST_SUCCESSFUL = 'REQUEST_SUCCESSFUL';
export const REQUEST_FAILED = 'REQUEST_FAILED';

function requestStarted() {
  return { type: REQUEST_STARTED };
}

function requestSuccessful(data: string) {
  return {
    type: REQUEST_SUCCESSFUL,
    payload: data,
  };
}

function requestFailed(error: string) {
  return {
    type: REQUEST_FAILED,
    error,
  };
}

export function dataGameOfThrones(name: string) {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(requestStarted());
      const response = await fetch(`https://anapioficeandfire.com/api/characters?name=${name}`);
      const data = await response.json();
      console.log(data);
      dispatch(requestSuccessful(data[0]));
    } catch (error) {
      if (error instanceof Error)
      dispatch(requestFailed(error.message));
    }
  };
}