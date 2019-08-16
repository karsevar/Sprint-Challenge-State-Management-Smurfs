import axios from 'axios';

export const FETCH_CHARACTERS_START = 'FETCH_CHARACTER_START';
export const FETCH_CHARACTERS_SUCCESS = 'FETCH_CHARACTER_SUCCESS';
export const FETCH_CHARACTERS_FAILURE = 'FETCH_CHARACTER_FAILURE';

export const getCharacters = () => dispatch => {
    dispatch({type: FETCH_CHARACTERS_START});
    axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            console.log(res);
            // dispatch({type: FETCH_CHARACTERS_SUCCESS, payload: res.data.results})
        })
        .catch(err => {
            console.log(err);
            // dispatch({type: FETCH_CHARACTERS_FAILURE, payload:`${err.response.data.error} ${err.response.status}`}) 
        })
    
}