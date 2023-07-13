import React, { useEffect, useState } from 'react'
import pokemonService from '../../_services/pokemonService';
import { useParams } from 'react-router-dom';
import { Box, Container, Grid, Typography } from '@mui/material';

export default function Carta() {

    const { nombre } = useParams();
    const [pokemon, setPokemon] = useState({});

    // useEffect(() => {
    //     getCardPokemon();
    // }, []);

    // // functions
    // const getCardPokemon = async () => {
    //     try {
    //         const data = await pokemonService.getPokemon(nombre, 1);
    //         setPokemon(data);
    //         console.log(data);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

  return (
    <Container sx={{pt:5, pb:5}}>
        <Grid item sm={8}>
            <Box>
                {/* {pokemon} */}
            </Box>

        </Grid>
    </Container>
  )
}