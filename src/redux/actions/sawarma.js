import axios from 'axios';

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});

export const fetchSawarmas = (sortBy, category) => (dispatch) => {
  dispatch({
    type: 'SET_LOADED',
    payload: false,
  });

  axios
    .get(
      `/sawarmas?${category !== null ? `category_like=${category}` : ''}&_sort=${sortBy.type}&_order=${
        sortBy.order
      }`,
    )
    .then(({ data }) => {
      dispatch(setSawarmas(data));
    });
};

export const setSawarmas = (items) => ({
  type: 'SET_SHAWARMAS',
  payload: items,
});

export const setSize = (items) => ({
  type: 'SET_SIZE',
  payload: items,
});
