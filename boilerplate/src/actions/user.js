import axios from 'axios';

const INCREMENT_COUNTER = 'INCREMENT_USER';
const DECREMENT_USER = 'DECREMENT_USER'


export function  increment() {
  return async dispatch => {
    let { data } = await axios.get('http://localhost:4000');
    dispatch({type: INCREMENT_COUNTER, payload: data});

  };
}
export function decrement() {
  return {
    type: DECREMENT_USER
  };
}
