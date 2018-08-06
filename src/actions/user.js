const INCREMENT_COUNTER = 'INCREMENT_USER';
const DECREMENT_USER = 'DECREMENT_USER'

export function increment() {
  return {
    type: INCREMENT_COUNTER
  };
}

export function decrement() {
  return {
    type: DECREMENT_USER
  };
}
