import icePop from './img/ice-pops.jpg'
import almondMuffin from './img/almond-muffin.jpg'
import carrotRoll from './img/carrot-roll.jpg'
import chocoCake from './img/choc-cake.jpg'

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
    const menuWrapper = document.createElement('div')
    menuWrapper.id = 'menu-wrapper'
    content.appendChild(menuWrapper)
    
    const description1 = createItem(menuWrapper, icePop)
    description1.innerText = `Fresh berries Ice Pop with yogurt.`
    
    const description2 = createItem(menuWrapper, almondMuffin)
    description2.innerText = `Almond Joy Cupcake`
    
    const description3 = createItem(menuWrapper,carrotRoll)
    description3.innerText = `
        Carrot roll.
        For cinnamon lovers!`
    const description4 = createItem(menuWrapper, chocoCake)
    description4.innerText = `
    Flourless cake.
    Less flour - more chocolate!`
    
}

export {
    loadMenuTab
}