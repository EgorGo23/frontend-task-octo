import {
    SET_DATA_FETCH,
    ADD_COPY_TEXT,
    SELECT_IMAGE
} from '../actions/actions';

const defaultState = {
    copyText: '',
    imgInModalSrc: null,
    dataFetch: {},
};

export const reducer = (state = defaultState, { type, payload }) => {
    switch (type) {
        case ADD_COPY_TEXT: {
            return {
                ...state,
                copyText: payload.text,
            }
        }
        case SELECT_IMAGE: {
            return {
                ...state,
                imgInModalSrc: payload,
            }
        }
        case SET_DATA_FETCH: {
            return {
                ...state,
                dataFetch: payload,
            }
        }
        default: {
            return state;
        }
    }
};




