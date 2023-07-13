import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { global } from "../../_config/global";
import { useNavigate } from "react-router-dom";
import { CardActionArea } from "@mui/material";


export default function PokemonCard({ pokemon }) {
   // hooks
   const navigate = useNavigate();

   // handle
   const handleClick = () => {
      navigate(`/detail/${pokemon.name}`);
    //   navigate(`/detail`);
   };

   return (
      <Card sx={{ maxWidth: 345 }} onClick={handleClick}>
         <CardActionArea>
            {/* <CardMedia
               component="img"
               image={`${global.BASE_IMAGES_URL}${pokemon}`}
               alt="green iguana"
            /> */}
            <CardContent sx={ {position: "relative", pt: 4}}>
               <Typography
                  gutterBottom
                  variant="h5"
                  fontSize={18}
                  fontWeight={600}
                  component="div"
               >
                  {pokemon.name}
               </Typography>
            </CardContent>
         </CardActionArea>
      </Card>
   );
}