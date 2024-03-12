import { typeColor } from './type_color.js';

export function giveTypeColor(count) {
    const typeKeys = Object.keys(typeColor)
    const typeValue = Object.values(typeColor)
    const domTypes = [
        document.getElementById(`type1_${count}`),
        document.getElementById(`type2_${count}`)
    ]
    
    domTypes.forEach(element => {
        for (let i = 0; i < typeKeys.length; i++) {

            if (element !== null) {
                if (element.innerText === typeKeys[i]) {
                    element.style.backgroundColor = typeValue[i]
                }
            }
        }
    })

}