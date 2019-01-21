/** TYPES */
export const Types = {
  GET_REQUEST: 'me/GET_REQUEST',
  GET_SUCCESS: 'me/GET_SUCCESS',
};

/** * REDUCER  */
const INITIAL_STATE = {
  loading: false,
  data: {},
};
export default function me(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };

    case Types.GET_SUCCESS:
      return {
        ...state,
        loading: false,
        data: { ...action.payload.data },
      };

    default:
      return state;
  }
}

/** * ACTIONS  */
export const Creators = {
  meRequest: token => ({ type: Types.GET_REQUEST, payload: { token } }),
  successData: data => ({ type: Types.GET_SUCCESS, payload: { data } }),
};
