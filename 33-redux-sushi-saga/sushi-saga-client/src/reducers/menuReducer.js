const initialState = {
  sushi: [],
  page: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_SUSHI': {
      return { ...state, sushi: action.data }
    }
    case 'NEXT_PAGE': {
      // const newPage = state.page === 24 ? 0 : state.page + 1;
      const newPage = state.page + 1 % 24;
      return { ...state, page: newPage }
    }
    default: {
      return state;
    }
  }
};
