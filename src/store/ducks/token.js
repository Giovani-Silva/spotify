/** TYPES */
export const Types = {
  SAVE_TOKEN: 'token/SAVE_TOKEN',
  CLEAR_TOKEN: 'token/CLEAR_TOKEN',
};

/** * REDUCER  */
const INITIAL_STATE = {
  accessToken: '',
};
export default function token(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SAVE_TOKEN:
      return {
        ...state,
        accessToken: action.payload.accessToken,
      };

    case Types.CLEAR_TOKEN:
      return {
        ...state,
        accessToken: null,
      };

    default:
      return state;
  }
}

/** * ACTIONS  */
export const Creators = {
  saveToken: accessToken => ({
    type: Types.SAVE_TOKEN,
    payload: { accessToken },
  }),
  clearToken: () => ({ type: Types.CLEAR_TOKEN }),
};
