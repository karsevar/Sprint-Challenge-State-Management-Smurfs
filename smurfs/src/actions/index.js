import axios from 'axios';

export const FETCH_CHARACTERS_START = 'FETCH_CHARACTER_START';
export const FETCH_CHARACTERS_SUCCESS = 'FETCH_CHARACTER_SUCCESS';
export const FETCH_CHARACTERS_FAILURE = 'FETCH_CHARACTER_FAILURE';

export const getCharacters = () => dispatch => {
    dispatch({type: FETCH_CHARACTERS_START});
    axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            console.log(res.data);
            dispatch({type: FETCH_CHARACTERS_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log(err);
            // dispatch({type: FETCH_CHARACTERS_FAILURE, payload:`${err.response.data.error} ${err.response.status}`}) 
        })
    
};

export const POST_CHARACTERS_START = 'POST_CHARACTER_START';
export const POST_CHARACTERS_SUCCESS = 'POST_CHARACTER_SUCCESS';
export const POST_CHARACTERS_FAILURE = 'POST_CHARACTER_FAILURE';

export const addCharacter = (value) => dispatch => {
    dispatch({type: POST_CHARACTERS_START});
    console.log('in the addCharacter function', value) 
    axios 
        .post('http://localhost:3333/smurfs', value)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
}