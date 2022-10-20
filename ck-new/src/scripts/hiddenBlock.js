window.addEventListener('mouseover', e => {
    const rel = e.target.getAttribute('rel')
    const hiddenBlock = document.querySelectorAll('.block__hiddenScript')
    for (let index = 0; index < hiddenBlock.length; index++) {
        const elementHiddent = hiddenBlock[index].getAttribute('rel-hidden');
        const elementHiddentAction = hiddenBlock[index];
        if (rel == elementHiddent) {
            elementHiddentAction.style.display = 'grid'
        }
    }
})

window.addEventListener('mouseout', e => {
    const hiddenBlock = document.querySelectorAll('.block__hiddenScript')
    for (let index = 0; index < hiddenBlock.length; index++) {
        const elementHiddentAction = hiddenBlock[index];
        elementHiddentAction.style.display = 'none'

    }
})

