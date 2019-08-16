import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

import {getCharacters} from '../actions';

const ErrorParagraph = styled.p`
    padding: 16px;
    background-color: #ffb7b7;
    color: red;
    border: solid 1px #f39595;
    border-radius: 4px;
    max-width: 700px;
    margin: 16px auto;
`;

function CharacterCard (props) {

    useEffect(() => {
        props.getCharacters()
    }, [])

    return (
        <div>
            <h3>Displaying Smurfs</h3>
            {props.smurfs && props.smurfs.map((smurf, index) => {
                return (
                    <div className='smurf-card' key={index}>
                        <h3>{smurf.name}</h3>
                        <p>{smurf.age}</p>
                        <p>{smurf.height}</p>
                    </div>
                )
            })}
            <div className='error-container'>
                {props.error && <ErrorParagraph>{props.error}</ErrorParagraph>}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    smurfs: state.smurfs,
    error: state.error
})

export default connect(mapStateToProps, {getCharacters})(CharacterCard);