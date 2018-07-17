import Logo from './muffins.svg'
import './styles.css'

const content = document.getElementById('content')

function loadLogo() {
    const headerImage = new Image()
    headerImage.src = Logo
    
    content.appendChild(headerImage)
}
function createHeadline() {
    const headLine = document.createElement('h1')
    headLine.innerText = 'The Dessert Place'
    content.appendChild(headLine)   
}
function createTabs() {
    const tabsContainer = document.createElement('div')
    tabsContainer.id = 'tabs-wrapper'
    const links = document.createElement('div')
    links.id = 'links'
    const tabsContent = document.createElement('div')
    tabsContent.id = 'tabs-content'

    const home = document.createElement('div')
    home.id = 'home'
    home.innerText = 'Home'
    const menu = document.createElement('div')
    menu.id = 'menu'
    menu.innerText = 'Menu'
    const contact = document.createElement('div')
    contact.id = 'contact'
    contact.innerText = 'Contact Us'

    links.appendChild(home)
    links.appendChild(menu)
    links.appendChild(contact)

    tabsContainer.appendChild(links)
    tabsContainer.appendChild(tabsContent)
    content.appendChild(tabsContainer)
}

export {
    loadLogo,
    createHeadline,
    createTabs
}