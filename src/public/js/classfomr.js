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
    takeCourse('#r-c-p', '#r-c-m', '#r-c-e')


})
datetime.addEventListener('change', () => {
    console.log(typeof datetime.value)
})


async function getCourse(course, user) {
    data = {
        'course': course,
        'user': user
    }

    console.log(data)

    const URI = `/course/newcourse`
    const response = await fetch(URI, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
    const dataresponse = await response.json()
    console.log(await dataresponse)

    return dataresponse

}

function takeCourse(rcp, rcm, rce) {
    d.addEventListener('click', (e) => {
        if (e.target.matches(rcp)) {
            console.log(e)
            let course = e.target.dataset.course
            let user = 'TKT'
            const data = getCourse(course, user)
            console.log(data)
            console.log('Hey')

        }
        if (e.target.matches(rcm)) {
            console.log(e)
            let course = e.target.dataset.course
            let user = 'TKT'
            const data = getCourse(course, user)


        }
        if (e.target.matches(rce)) {
            console.log(e)
            let course = e.target.dataset.course
            let user = 'TKT'
            const data = getCourse(course, user)


        }

    })

}
// date.addEventListener('change', () => {})