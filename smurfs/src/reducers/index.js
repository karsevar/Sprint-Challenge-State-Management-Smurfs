import {
    FETCH_CHARACTERS_START,
    FETCH_CHARACTERS_SUCCESS,
    FETCH_CHARACTERS_FAILURE,
    POST_CHARACTERS_START,
    POST_CHARACTERS_SUCCESS,
    POST_CHARACTERS_FAILURE
} from '../actions';

const initialState = {
    smurfs: [],
    error: '',
    success: ''
}

function reducer(state=initialState, action) {
    switch (action.type) {
        case FETCH_CHARACTERS_START:
            return {
                ...state,
                error: '',
                success: ''
            }

        case FETCH_CHARACTERS_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                error: '',
                success: ''
            }

        case FETCH_CHARACTERS_FAILURE:
            return {
                ...state
            }

        case POST_CHARACTERS_START:
            return {
                ...state,
                error: '',
                success: ''
            }

        case POST_CHARACTERS_SUCCESS:
            return {
                ...state,
                error: '',
                success: action.payload
            }

        case POST_CHARACTERS_FAILURE:
            return {
                ...state,
                success: '',
                error: action.payload
            }

        default:
            return state
    }
}

export default reducer;
