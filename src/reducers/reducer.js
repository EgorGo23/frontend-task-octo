import {
    ADD_COPY_TEXT
} from '../actions/actions';

const defaultState = {
    copyText: '',
};

export const reducer = (state = defaultState, { type, payload }) => {
    switch (type) {
        case ADD_COPY_TEXT: {
            
            return {
                copyText: payload.text,
            };
        }
        
        default: {
            return state;
        }
    }
};




