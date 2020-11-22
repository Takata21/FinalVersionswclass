const d = document
const $overlay = d.getElementById('overlay')
const $popup = d.getElementById('popup')
const $container = d.getElementById('container')
const $form = d.getElementById('formulario')
const $subject = d.getElementById('subject')

function showPopForm(rp, rm, re, bc) {
    d.addEventListener("click", (e) => {
        console.log(e)
        if (e.target.matches(rp) || e.target.matches(rm) || e.target.matches(re)) {
            $overlay.classList.add('active')
            $popup.classList.add('active')
            $subject.value = e.target.dataset.class
            console.log(e.target.dataset.class)

        }
        if (e.target.matches(`${bc} *`)) {
            $overlay.classList.remove('active')
            $popup.classList.remove('active')
        }

    })
}

d.addEventListener('DOMContentLoaded', () => {
    showPopForm("#r-p", '#r-m', '#r-e', '#btn-cerrar-popup')


})
datetime.addEventListener('change', () => {
    console.log(typeof datetime.value)
})


// date.addEventListener('change', () => {})