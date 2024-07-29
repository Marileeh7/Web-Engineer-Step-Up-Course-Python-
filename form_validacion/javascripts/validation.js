 function addClassName(emailConfirm){
    emailConfirm.classList.toggle("not_matches");
}

function Validation () {
    const conteinerTable = document.getElementsByTagName("tbody")[0];
    const referenceElement = document.getElementById("insert_before");
    const emailUploaded = document.getElementById("email");
    const emailConfirm = document.getElementById("email_confirm");

    emailConfirm.addEventListener("keyup", function(){

        const alertElementP = conteinerTable.getElementsByClassName("alert")[0];

        if (emailUploaded.value != emailConfirm.value) {
            if (!(alertElementP)) {

                const newElement = document.createElement("p");
                newElement.classList.toggle("alert");
                const message = document.createTextNode("El correo electrónico no coincide");
                newElement.appendChild(message);
                
                conteinerTable.insertBefore(newElement, referenceElement);
                addClassName(emailConfirm);
            }
            return;
        }

        if (alertElementP) {
            addClassName(emailConfirm);
            conteinerTable.removeChild(alertElementP);
        }
    });
};

window.onload = Validation;