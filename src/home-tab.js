import strawberryPop from './img/str-pop.jpg'

function loadHomeTab(){
    const content = document.getElementById('tabs-content')
    while(content.firstChild){
        content.removeChild(content.firstChild)
    }
    const tastyText = document.createElement('p')
    tastyText.innerText = `The Dessert Place have been established in 2018. Our team is driven by the passion of making healthy delicious desserts and web pages.
    Our variety includes gluten-free muffins, high-fat sugar-free mousses for keto enthusiasts, yougurt ice pops with fresh seasonal berries and many more.`

    content.appendChild(tastyText)
    const image = new Image()
    image.src = strawberryPop
    content.appendChild(image)
}

export {
    loadHomeTab
}