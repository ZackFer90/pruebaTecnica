import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import pokemonService from '../../_services/pokemonService';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function PokemonDetail() {

    const { nombre } = useParams();
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        getCardPokemon();
    }, []);

    const getCardPokemon = async () => {
        try {
            // const data = await pokemonService.getAllPokemon(1);
            const data = await pokemonService.getPokemon(nombre);
            setPokemon(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={pokemon.sprites.front_shiny}
                title={nombre}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {nombre}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
  );
        // <div>PokemonDetail {nombre}</div>
}
