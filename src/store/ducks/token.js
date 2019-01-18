/** TYPES */

export const Types = {
  SAVE_TOKEN: 'token/SAVE_TOKEN',
};

/** * REDUCERS  */
const INITIAL_STATE = {};
export default function saveToken(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SAVE_TOKEN:
      return {
        ...state,
        token: action.payload.token,
      };

    default:
      return state;
  }
}

/** * ACTIONS  */
export const Creators = {
  saveToken: token => ({
    type: Types.SAVE_TOKEN,
    payload: { token },
  }),
};
