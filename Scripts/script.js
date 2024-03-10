import { createInterface } from './create_interface.js';
import { audioPlayer } from './audio.js';
import { giveTypeColor } from './give_type_color.js';

const URL = 'https://pokeapi.co/api/v2/pokemon/'

async function getApiData() {
    for (let i = 1; i <= 151; i++) {
       const data = await fetch(URL+i)
       const dataToJson = await data.json()
      await createInterface(dataToJson, i)
      audioPlayer(i)
      giveTypeColor(i)
    }
}

getApiData()