const initialState = {
  eaten: [],
  budget: 100
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'EAT_SUSHI': {
      const alreadyEaten = state.eaten.includes(action.id)
      const tooPricey = action.price > state.budget
      if (alreadyEaten || tooPricey) {
        return state;
      } else {
        const eaten = state.eaten.concat(action.id)
        const budget = state.budget - action.price
        return { ...state, eaten, budget }
      }
    }
    case 'GIT_RICH': {
      return { ...state, budget: state.budget + action.amount }
    }
    default: {
      return state;
    }
  }
};