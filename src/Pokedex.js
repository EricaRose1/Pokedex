import React from 'react';
import Pokecard from "./Pokecard";
import "./Pokedex.css";

const Pokedex = ({cards}) => {
    return (
        <>
            <div className='Pokedex'>
                <h2 className='Pokedex-title'>Pokedex</h2>
                <div className='Pokedex-cards'>
                    {cards.map(c => (
                        <Pokecard id={c.id} name={c.name} type={c.type} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Pokedex;