export const GET_DATA_FETCH = 'GET_DATA_FETCH';
export const ADD_COPY_TEXT = 'ADD_COPY_TEXT';
export const SELECT_IMAGE = 'SELECT_IMAGE';

export const getDataFetch = (dataFetch) => ({
    type: GET_DATA_FETCH,
    payload: dataFetch,
});

export const addCopiedText = (text) => ({
    type: ADD_COPY_TEXT,
    payload: text,
});

export const selectImage = (src) => ({
    type: SELECT_IMAGE,
    payload: src,
});