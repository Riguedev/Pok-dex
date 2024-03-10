export function createInterface(resource, count) {
    const pokemonContainer = document.getElementById('pokemon_container')

    const pokemonCard = document.createElement('div')
    pokemonCard.setAttribute('class', 'pokemon_card')

    const pokemonName = document.createElement('h2')
    pokemonName.setAttribute('class', 'pokemon_name')
    const name = document.createElement('span')
    name.innerText = resource.name
    const number = document.createElement('span')
    number.innerText = resource.id
    pokemonName.appendChild(name)
    if (number.innerText.length === 1) {
        number.innerText = `00${resource.id}`
    } else if (number.innerText.length === 2) {
        number.innerText = `0${resource.id}`
    }
    pokemonName.appendChild(number)
    pokemonCard.appendChild(pokemonName)

    const imageContainer = document.createElement('picture')
    imageContainer.setAttribute('class', 'pokemon_image_container')
    const image = document.createElement('img')
    image.setAttribute('class', 'pokemon_image')
    image.setAttribute('alt', `${resource.name} image`)
    image.setAttribute('loading', 'lazy')
    image.src = resource.sprites.other['official-artwork'].front_default
    imageContainer.appendChild(image)
    pokemonCard.appendChild(imageContainer)

    const types = document.createElement('div')
    types.setAttribute('class', 'types')
    if (resource.types.length === 2) {
        const type1 = document.createElement('span')
        const type2 = document.createElement('span')
        type1.setAttribute('id', `type1_${count}`)
        type2.setAttribute('id', `type2_${count}`)
        type1.innerText = resource.types[0].type.name
        type2.innerText = resource.types[1].type.name
        types.appendChild(type1)
        types.appendChild(type2)
    } else {
        const type1 = document.createElement('span')
        type1.setAttribute('id', `type1_${count}`)
        type1.innerText = resource.types[0].type.name
        types.appendChild(type1)
    }
    pokemonCard.appendChild(types)

    const audioContainer = document.createElement('div')
    const audio = document.createElement('audio')
    audio.setAttribute('id', `sound_${count}`)
    const audioButton = document.createElement('button')
    audioButton.setAttribute('class', 'audio_button')
    audioButton.setAttribute('id', `button_${count}`)
    audio.src = resource.cries.latest
    audioButton.innerText = 'Sound'
    audioContainer.appendChild(audio)
    audioContainer.appendChild(audioButton)
    pokemonCard.appendChild(audioContainer)

    pokemonContainer.appendChild(pokemonCard)
}