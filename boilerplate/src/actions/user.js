import axios from 'axios';

const INCREMENT_COUNTER = 'INCREMENT_USER';
const DECREMENT_USER = 'DECREMENT_USER'


export function  increment() {
  return async dispatch => {
    let { data } = await axios.get('http://localhost:4000');
    dispatch({type: INCREMENT_COUNTER, payload: data});

  };
}

export function  decrement() {
  return async dispatch => {

    let instance = axios.create({
      baseURL: 'http://localhost:4000/',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${localStorage.getItem('id_token')}`
      }
    });
    let { data } = await instance.get('user');
    dispatch({type: DECREMENT_USER, payload: data});

  };
}
