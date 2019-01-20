/** TYPES */
export const Types = {
  GET_REQUEST: 'search/GET_REQUEST',
  GET_ARTIST: 'search/GET_ARTIST',
  GET_ALBUM: 'search/GET_ALBUM',
  GET_TRACK: 'search/GET_TRACK',
  GET_SUCCESS: 'search/GET_SUCCESS',
};

/** * REDUCER  */
const INITIAL_STATE = {
  loading: false,
  type: null,
  data: [],
};
export default function search(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
    case Types.GET_ARTIST:
    case Types.GET_ALBUM:
    case Types.GET_TRACK:
      return { ...state, loading: true };

    case Types.GET_SUCCESS: {
      const { type, data } = action.payload;
      return {
        ...state,
        loading: false,
        type,
        data: [...data[type].items],
      };
    }

    default:
      return state;
  }
}

/** * ACTIONS  */
export const Creators = {
  searchRequest: (selectedType, types, query, token) => ({
    type: Types.GET_REQUEST,
    payload: {
      selectedType,
      types,
      query,
      token,
    },
  }),
  successData: (type, data) => ({
    type: Types.GET_SUCCESS,
    payload: { type, data },
  }),
};
