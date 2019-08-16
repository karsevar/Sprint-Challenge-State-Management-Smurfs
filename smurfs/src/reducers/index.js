import {
    FETCH_CHARACTERS_START,
    FETCH_CHARACTERS_SUCCESS,
    FETCH_CHARACTERS_FAILURE,
} from '../actions';

const initialState = {
    smurfs: []
}

function reducer(state=initialState, action) {
    switch (action.type) {
        case FETCH_CHARACTERS_START:
            return {
                ...state
            }

        case FETCH_CHARACTERS_SUCCESS:
            return {
                ...state,
                smurfs: action.payload
            }

        case FETCH_CHARACTERS_FAILURE:
            return {
                ...state
            }

        default:
            return state
    }
}

export default reducer;
