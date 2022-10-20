const _efficiency = document.getElementById('efficiency')
const switch_content = document.querySelectorAll('.switch-js')
const block_switch = document.querySelectorAll('.block-switch')
_efficiency.addEventListener('click', e => {
    const btnAttr = e.target.getAttribute('switch')
    switch_content.forEach(element => {
        const contentAttr = element.getAttribute('switchy')
        element.classList.remove('switch-js-block')
        if (contentAttr == btnAttr) {
            element.classList.toggle('switch-js-block')
            blockID = e.target.getAttribute("href").slice(1)
            document.getElementById(blockID).scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    });
    block_switch.forEach(el => {
        const contentAttr = el.getAttribute('switchy')
        el.classList.remove('block-disable')
        if (contentAttr == btnAttr) {
            e.target.setAttribute('disabled', 'disabled')
            el.classList.add('block-disable')
            e.target.disabled = true
        }
    });
})