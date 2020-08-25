const initialState = {
  breads: [],
  muffins: [],
  cakes: [],
  products: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'GET_BREADS_DATA':
      return { ...state, breads: payload };
    case 'GET_CAKES_DATA':
      return { ...state, cakes: payload };
    case 'GET_MUFFINS_DATA':
      return { ...state, muffins: payload };
    case 'CHANGE_CATEGORY':
      switch (payload) {
        case 'Breads':
          return {
            ...state,
            products: [...state.breads],
          };
        case 'Cakes':
          return {
            ...state,
            products: [...state.cakes],
          };
        case 'Muffins':
          return {
            ...state,
            products: [...state.muffins],
          };
        default:
          return {
            ...state,
            products: [...state.breads, ...state.cakes, ...state.muffins],
          };
      }
    default:
      return state;
  }
};
