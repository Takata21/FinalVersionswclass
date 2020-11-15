const inputsl = document.querySelectorAll(".input");


function addcl() {
    let parent = this.parentNode.parentNode;
    parent.classList.add("focus");
}

function remcl() {
    let parent = this.parentNode.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}





inputsl.forEach(input => {

    input.addEventListener("focus", addcl);
    input.addEventListener("blur", remcl);



});


const btnclose = document.getElementById('btn-close')
btnclose.addEventListener('click', () => {
    document.getElementById('alert_success').style.display = "none"
})