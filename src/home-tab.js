
function loadHomeTab(){
    const content = document.getElementById('tabs-content')
    while(content.firstChild){
        content.removeChild(content.firstChild)
    }
    const tastyText = document.createElement('p')
    tastyText.innerText = `The Dessert Place have been established in 2018.
    Our team is driven by the passion of making healthy delicious sweets.
    Check our menu for a variety of gluten-free muffins and vegan cakes, yougurt ice pops with fresh seasonal berries perfect for a hot day and many more delicious desserts.`

    content.appendChild(tastyText)
}

export {
    loadHomeTab
}