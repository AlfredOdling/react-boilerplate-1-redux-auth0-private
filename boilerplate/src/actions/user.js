import axios from 'axios';

const OPEN_REQUEST = 'OPEN_REQUEST';
const PROTECTED_REQUEST = 'PROTECTED_REQUEST'


export function  open_request() {
  return async dispatch => {
    let { data } = await axios.get('http://localhost:4000');
    dispatch({type: OPEN_REQUEST, payload: data});

  };
}

export function  protected_request() {
  return async dispatch => {

    let instance = axios.create({
      baseURL: 'http://localhost:4000/',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${localStorage.getItem('id_token')}`
      }
    });
    let { data } = await instance.get('user');
    dispatch({type: PROTECTED_REQUEST, payload: data.data});

  };
}
