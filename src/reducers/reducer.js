import {
    ADD_COPY_TEXT,
    TOGGLE_MODAL
} from '../actions/actions';

const defaultState = {
    copyText: '',
    isModal: false,
};

export const reducer = (state = defaultState, { type, payload }) => {
    switch (type) {
        case ADD_COPY_TEXT: {
            return {
                ...state,
                copyText: payload.text,
            }
        }
        case TOGGLE_MODAL: {
            return {
                ...state,
                isModal: !state.isModal,
            }
        }
        default: {
            return state;
        }
    }
};




