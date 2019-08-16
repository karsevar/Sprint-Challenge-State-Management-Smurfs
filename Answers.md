1. What problem does the context API help solve?

Context API helps solve the legacy react problem of having to prop drill handler functions and state values multiple layers deep as a means to give access to this data to some distant child in the component tree. Hence this inherent problem of React forced developers to create overly complicated root components (filled with functions and state variables that will be used in lower presentational components) and component tree structures (where the data will have to pass through intermediary components to get to their destination component). 

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

To begin, an action can be described as an object that has a type key and in some cases a payload key. The type key defines to the reducer function how the state should be modified and the payload key gives the reducer the data in which the state should be modified with. 

Reducers are pure functions that modify the state through immutable operations (namely spread operators and the like). Usually reducers are organized as:
``` 
function reducer(state=initialState, action) {
    switch(action.type) {
        case SUCCESS:
            return {
                ...state,
                state: action.payload
            }
        case FAILURE:
            return {
                ...state
                error: action.payload
            }
        default:
            return state
    }
}
``` 
The following representation shows that reducers are simply switch statements wrapped in a function that takes in the type from an action creator and modifies the store according to that same type.

Lastly, the store is simply the central location where all of the application's data is kept. 


1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

To begin, application state can be described as global state (the state in which the entire application can have access to) while component state is simply the local state of a component. 

Global state should be used for api get requests and user comments and reviews since from a redux standpoint such data will be better used in a centralized store, since other lower components can have access to it. While local state should be used for smaller user event handlers (as in the onChange event and the state object or string that the event is modifying).

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

redux-thunk is a middleware package that allows you to override the inherent trappings of redux (namely redux's default of synchonous computation) with added functionality of being able to run asynchronous code (api calls and other promises) in a redux data framework. Through redux-thunk you are able to modify, send more, reject, or allow through action creators before they reach the reducer function. 

The following is an example of how action creators can be modified with redux thunk:
``` 
export const FETCH_CHARACTERS_START = 'FETCH_CHARACTER_START';
export const FETCH_CHARACTERS_SUCCESS = 'FETCH_CHARACTER_SUCCESS';
export const FETCH_CHARACTERS_FAILURE = 'FETCH_CHARACTER_FAILURE';

export const getCharacters = () => dispatch => {
    dispatch({type: FETCH_CHARACTERS_START});
    axios
        .get('https://rickandmortyapi.com/api/character/?page=1')
        .then(res => {
            // console.log(res);
            dispatch({type: FETCH_CHARACTERS_SUCCESS, payload: res.data.results})
        })
        .catch(err => {
            console.log(err);
            dispatch({type: FETCH_CHARACTERS_FAILURE, payload:`${err.response.data.error} ${err.response.status}`}) 
        })
    
}
```
As you can see the action.type FETCH_CHARACTERS_START has two different outcomes that it can be modified into FETCH_CHARACTERS_SUCCESS or FETCH_CHARACTERS_FAILURE

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Despite all of the problems inherent in Redux I have to say that I prefer it compared to context api since it reminds me of python programming.
