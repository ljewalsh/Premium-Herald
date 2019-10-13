var main = document.createElement('div')
main.classList.add('body')

var header = document.querySelector('header h1')
main.appendChild(header.cloneNode(true))

var image = document.querySelector('.header-image-wrapper img')
main.appendChild(image.cloneNode(true))

const article = document.getElementById('article-content')
if (article.classList.contains('premium-content')){

    var paragraphs = document.querySelectorAll('#article-content p')

    var i;
    for (i = 0; i < paragraphs.length; i++) {
        var paragraph = paragraphs[i]

        var healthyElement = paragraph.cloneNode(true)
        var spans = healthyElement.children

        healthyElement.style.color = '#000'
        healthyElement.style.color.opacity = 1
        healthyElement.style.display = 'block'

        var e
        for (e = 0; e < spans.length; e++) {
            spans[e].style.color = '#000'
            spans[e].style.opacity = 1
            spans[e].style.display = 'inline'
        }

        main.appendChild(healthyElement)
    }

    var x=window.open();
    x.document.open();
    x.document.write(main.outerHTML);
    x.document.close();
}
