import React, {useState} from 'react';
import {addCharacter} from '../actions';
import {connect} from 'react-redux';
import styled from 'styled-components';

const ErrorParagraph = styled.p`
    padding: 16px;
    background-color: #ffb7b7;
    color: red;
    border: solid 1px #f39595;
    border-radius: 4px;
    max-width: 700px;
    margin: 16px auto;
`;

const SuccessParagraph = styled.p`
    padding: 16px;
    background-color: #90EE90;
    color: green;
    border: solid 1px #f39595;
    border-radius: 4px;
    max-width: 700px;
    margin: 16px auto;
`;

function CharacterForm(props) {
    
    const [smurf, setSmurf] = useState({name: '', height: '', age: ''});

    const handleChange = event => {
        // console.log('handleChange', smurf);
        setSmurf({...smurf, [event.target.name]: event.target.value})
    }

    const handleSubmit = event => {
        event.preventDefault();
        // console.log('handleSubmit', smurf);
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
            <div className='success-or-error'>
                {props.error && <ErrorParagraph>{props.error}</ErrorParagraph>}
                {props.success && <SuccessParagraph>{props.success}</SuccessParagraph>}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    error: state.error,
    success: state.success
})

export default connect(mapStateToProps, {addCharacter})(CharacterForm);