/** TYPES */

export const Types = {
  SAVE_TOKEN: 'token/SAVE_TOKEN',
};

/** * REDUCERS  */
const INITIAL_STATE = {};
export default function token(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SAVE_TOKEN:
      return {
        ...state,
        token: action.payload.accessToken,
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
};
