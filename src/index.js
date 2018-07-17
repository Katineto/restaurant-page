import './styles.css'
import { loadLogo, createHeadline, createTabs } from './page-load'
import { loadHomeTab } from './home-tab'
import { loadMenuTab } from './menu-tab'


loadLogo() 
createHeadline()
createTabs()

loadHomeTab()

const home = document.getElementById('home')
home.addEventListener('click', loadHomeTab)
const menu = document.getElementById('menu')
menu.addEventListener('click', loadMenuTab)
