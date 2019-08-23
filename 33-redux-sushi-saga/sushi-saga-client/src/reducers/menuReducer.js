const initialState = {
  sushi: [],
  page: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_SUSHI': {
      return { ...state, sushi: action.data }
    }
  }
  return state;
};
