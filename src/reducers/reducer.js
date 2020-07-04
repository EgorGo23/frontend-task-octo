import {
    SET_DATA_FETCH,
    SELECT_IMAGE,
    SET_WINDOW_SIZE
} from '../actions/actions';

const defaultState = {
    imgInModalSrc: null,
    dataFetch: {},
    windowSize: {
        width: window.innerWidth,
        height: window.innerHeight,
    },
};

export const reducer = (state = defaultState, { type, payload }) => {
    switch (type) {
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
        case SET_WINDOW_SIZE: {
            return {
                ...state,
                windowSize: payload,
            }
        }
        default: {
            return state;
        }
    }
};




