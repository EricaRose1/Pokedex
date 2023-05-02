import React from 'react';
import "./Pokecard.css";

const Pokecard = ({id, name, type}) => {
    return (
        <>
            <div className="PokeCard">
                <div className="pokeCard-title">{name}</div>
                <img className="pokeCard-img" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
                <div className="pokeCard-data">Type: {type}</div>  
            </div>
        </>
    )
}

export default Pokecard;
