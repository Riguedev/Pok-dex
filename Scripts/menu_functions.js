export async function displayMenu(menu) {
    if (menu.classList.length <= 1) {
         menu.style.display = 'block'
         setTimeout(() => menu.classList.add('menu_visible'), 10)
    } else {
        menu.classList.remove('menu_visible')
        setTimeout(() => menu.style.display = 'none', 290)
    }
}