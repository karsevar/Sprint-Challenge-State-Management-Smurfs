import React, {useState} from 'react';
import {addCharacter} from '../actions';
import {connect} from 'react-redux';

function CharacterForm(props) {
    
    const [smurf, setSmurf] = useState({name: '', height: '', age: ''});

    const handleChange = event => {
        console.log('handleChange', smurf);
        setSmurf({...smurf, [event.target.name]: event.target.value})
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log('handleSubmit', smurf);
        props.addCharacter(smurf);
        setSmurf({name: '', height: '', age: ''})
    }

    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <input 
                    placeholder='name'
                    value={smurf.name} 
                    name='name'
                    onChange={handleChange}
                    required
                />
                <input 
                    placeholder='height'
                    type='text'
                    value={smurf.height}
                    name='height'
                    onChange={handleChange}
                    required
                />
                <input 
                    placeholder='age'
                    type='number'
                    value={smurf.age}
                    onChange={handleChange}
                    name='age'
                    required
                />
                <button>Submit!</button>
            </form>
        </div>
    )
}

export default connect(null, {addCharacter})(CharacterForm);