const initialState = {
  items: [],
  isLoaded: false,
};

const sawarmas = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SHAWARMAS':
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      };

    case 'SET_LOADED':
      return {
        ...state,
        isLoaded: action.payload,
      };
    case 'SET_SIZE':
      return {
        ...state,
        
      }

    default:
      return state;
  }
};

export default sawarmas;
