import './styles.css'
import { loadLogo, createHeadline, createTabs, createFooter } from './page-load'
import { loadHomeTab } from './home-tab'
import { loadMenuTab } from './menu-tab'
import { loadContactTab } from './contact-tab'

function handleSelection(e) {
    const links = document.getElementById('links')
    const children = links.children
    console.log(children)

    for(let i = 0; i < children.length; i += 1) {
        children[i].classList.remove('selected')
    }
    const target = e.target
    target.classList.add('selected')
}

loadLogo() 
createHeadline()
createTabs()
createFooter()

loadHomeTab()

const home = document.getElementById('home')
home.addEventListener('click', (e) => {
    handleSelection(e)
    loadHomeTab()
})
const menu = document.getElementById('menu')
menu.addEventListener('click', (e) => {
    handleSelection(e)
    loadMenuTab()
})
const contact = document.getElementById('contact')
contact.addEventListener('click', (e) => {
    handleSelection(e)
    loadContactTab()
})