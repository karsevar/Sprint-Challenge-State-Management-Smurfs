import React, {useState} from 'react';

function CharacterForm(props) {
    
    const [smurf, setSmurf] = useState({name: '', height: '', age: ''});

    const handleChage = event => {
        console.log(smurf);
        setSmurf({...smurf, [event.target.name]: event.target.value})
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log(smurf);
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
                    name='age'
                    required
                />
                <button>Submit!</button>
            </form>
        </div>
    )
}

export default CharacterForm;