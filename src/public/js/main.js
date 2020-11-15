const btnclose = document.getElementById('btn-close')
btnclose.addEventListener('click', () => {
    document.getElementById('alert_success').style.display = "none"
})


const btnclose2 = document.getElementById('btn-close2')
btnclose2.addEventListener('click', () => {
    document.getElementById('alert_error').style.display = "none"
})