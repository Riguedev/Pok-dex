import { createInterface } from './create_interface.js';
import { audioPlayer } from './audio.js';
import { giveTypeColor } from './give_type_color.js';
import { displayMenu } from './menu_functions.js';
import { selectType } from './menu_functions.js';
import { showAllTypes } from './menu_functions.js';

const URL = 'https://pokeapi.co/api/v2/pokemon/'
const menuIcon = document.getElementById('menu_icon')
const typeOptions = document.getElementsByClassName('type')
const showType = document.getElementById('show_types')

function menuOptionListener() {

  showType.addEventListener('click', () => showAllTypes())

  for (let i = 0; i < typeOptions.length; i++) {
      typeOptions[i].addEventListener('click', () => {
        selectType(typeOptions[i].classList[2])
      })
  }
}

async function getApiData() {
    for (let i = 1; i <= 151; i++) {
       const data = await fetch(URL+i)
       const dataToJson = await data.json()
       await createInterface(dataToJson, i)
       audioPlayer(i)
       giveTypeColor(i)
    }
    menuOptionListener()
}

getApiData()
menuIcon.addEventListener('click', () => displayMenu())
