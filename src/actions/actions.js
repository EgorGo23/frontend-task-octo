export const ADD_COPY_TEXT = 'ADD_COPY_TEXT';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';

export const addCopiedText = (text) => ({
    type: ADD_COPY_TEXT,
    payload: text,
});

export const toggleModal = () => ({
    type: TOGGLE_MODAL,
})