function showPremiumSpans(spans){
    for (span of spans) {
        span.style.color = '#000'
        span.style.opacity = 1
        span.style.display = 'inline'
    }
}

function addPremiumParagraphs(main, paragraphs){
    for (paragraph of paragraphs) {
        var healthyElement = paragraph.cloneNode(true)
        var spans = healthyElement.children

        healthyElement.style.color = '#000'
        healthyElement.style.color.opacity = 1
        healthyElement.style.display = 'block'

        showPremiumSpans(spans)

        main.appendChild(healthyElement)
    }
    return main
}

function getPremiumContent(){
    const article = document.getElementById('article-content')
    if (article.classList.contains('premium-content')){
        var main = document.createElement('div')
        main.classList.add('body')

        var header = document.querySelector('header h1')
        main.appendChild(header)

        var image = document.querySelector('.header-image-wrapper img')
        if (image){
            main.appendChild(image.cloneNode(true))
        }

        var paragraphs = document.querySelectorAll('#article-content p')

        const mainWithPremiumContent = addPremiumParagraphs(main, paragraphs)

        var x=window.open();
        x.document.open();
        x.document.write(mainWithPremiumContent.outerHTML);
        x.document.close();
    }
}

window.onload = getPremiumContent()
