import axios from "axios";

import { global } from "../_config/global";

const pokemonService = {};

pokemonService.getAllPokemon = async (page) => {
   const options = {
      method: "GET",
      url: `${global.BASE_API_URL}/pokemon/`,
      params: { page: page },
      headers: {
         accept: "application/json",
      },
   };
   await sleep(0); // TODO
   const response = await axios.request(options);

   return response.data;
};

pokemonService.getPokemon = async (nombre) => {
   const options = {
      method: "GET",
      url: `${global.BASE_API_URL}/pokemon/${nombre}`,
      // params: { page: page },
      headers: {
         accept: "application/json",
      },
   };
   await sleep(0); // TODO
   const response = await axios.request(options);

   return response.data;
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export default pokemonService;