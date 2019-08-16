import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import {getCharacters} from '../actions';

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
        </div>
    )
}

const mapStateToProps = state => ({
    smurfs: state.smurfs
})

export default connect(mapStateToProps, {getCharacters})(CharacterCard);