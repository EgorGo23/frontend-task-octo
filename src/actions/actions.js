export const SET_DATA_FETCH = 'SET_DATA_FETCH';
export const SET_WINDOW_SIZE = 'SET_WINDOW_SIZE';
export const SELECT_IMAGE = 'SELECT_IMAGE';

export const setDataFetch = (dataFetch) => ({
    type: SET_DATA_FETCH,
    payload: dataFetch,
});

export const setWindowSize = (size) => ({
    type: SET_WINDOW_SIZE,
    payload: size,
})

export const selectImage = (src) => ({
    type: SELECT_IMAGE,
    payload: src,
});