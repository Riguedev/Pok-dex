export function displayMenu() {

    const menu = document.getElementById('toggle_menu')

    if (menu.classList.length <= 1) {
         menu.style.display = 'block'
         setTimeout(() => menu.classList.add('menu_visible'), 10)
    } else {
        menu.classList.remove('menu_visible')
        setTimeout(() => menu.style.display = 'none', 290)
    }
}

export function showAllTypes(){
    const pokemonCard = document.querySelectorAll('.pokemon_card')
    pokemonCard.forEach(card => card.style.display = 'block')
}

export function selectType(element) {
    const pokemonCard = document.querySelectorAll('.pokemon_card')
    pokemonCard.forEach(card => {
            if(element === card.classList[1] || element === card.classList[2]) {
                card.style.display = 'block'
            } else {
                card.style.display = 'none'
            }      
    })
}
