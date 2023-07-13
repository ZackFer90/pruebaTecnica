import {React, useEffect, useState} from 'react'
import pokemonService from '../../_services/pokemonService';
import { useParams } from 'react-router-dom';
import { Box, Container, Grid, Typography } from '@mui/material';
import PokemonCard from '../pokemonCard/PokemonCard';

export default function Home() {

    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        getCardPokemon();
    }, []);

    // functions
    const getCardPokemon = async () => {
        try {
            const data = await pokemonService.getAllPokemon(1);
            // const data = await pokemonService.getPokemon();
            setPokemon(data.results);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

  return (
    <Container sx={{pt:5, pb:5}}>
            <Box>
                {/* {pokemon.map((poke) => (
                    <Box key={poke.name}>
                        {poke.name}
                    </Box>
                ))} */}
                {pokemon.map((poke) => (
                  <PokemonCard key={poke.name} pokemon={poke} />
               ))}
            </Box>
    </Container>
  )
}
