export function audioPlayer(count) {
    const audio = document.getElementById(`sound_${count}`)
    const button = document.getElementById(`button_${count}`)
    button.addEventListener('click', () => {
        audio.play()
    })
}