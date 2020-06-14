export const ADD_COPY_TEXT = 'ADD_COPY_TEXT';

export const addCopiedText = (text) => ({
    type: ADD_COPY_TEXT,
    payload: text,
});