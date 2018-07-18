function loadContactTab() {
    const content = document.getElementById('tabs-content')
    while(content.firstChild){
        content.removeChild(content.firstChild)
    }
    const contactWrapper = document.createElement('div')
    contactWrapper.id = 'contact-wrapper'
    content.appendChild(contactWrapper)

    const location = document.createElement('div')
    location.innerHTML = `
        <h2>Location</h2>
        <p>123 Strawberry St., Sugar City</p>
        <p>Opening Hours: 8:00 AM - 20:00 PM</p>
    `
    const cont = document.createElement('div')
    cont.innerHTML = `
        <h2>Contact</h2>
        <p>Email: yourfavoritemuffin@email.com</p>
        <p id="last">Call us: 123-567-890</p>
    `
    contactWrapper.appendChild(location)
    contactWrapper.appendChild(cont)
}
export {
    loadContactTab
}