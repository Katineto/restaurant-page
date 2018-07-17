import icePop from './img/ice-pops.jpg'
import almondMuffin from './img/almond-muffin.jpg'
import carrotRoll from './img/carrot-roll.jpg'

function createItem(tabs, img) {
    const parent = document.createElement('div')
    parent.classList.add('menu-content')
    const image = new Image()
    image.src = img
    parent.appendChild(image)
    
    const description = document.createElement('p')
    parent.appendChild(description)

    tabs.appendChild(parent)
    return description
}

function loadMenuTab() {
    const content = document.getElementById('tabs-content')
    while(content.firstChild){
        content.removeChild(content.firstChild)
    }
    // const menu = document.createElement('div')
    // content.appendChild(menu)
    // menu.classList.add('menu-content') 
    
    const description1 = createItem(content, icePop)
    description1.innerText = 'This is an Ice Pop made with fresh berries and Greek Yogurt.'
    
    const description2 = createItem(content, almondMuffin)
    description2.innerText = `Who doesn't like a muffin?!`
    
    const description3 = createItem(content,carrotRoll)
    description3.innerText = `For cinnamon lovers!`
}

export {
    loadMenuTab
}