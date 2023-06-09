function encrypt() {
    let texto = document.getElementById("text-edit").value;
    if(texto.length != 0){ 
        if (/[A-ZÁÉÍÓÚÜáéíóúü]/.test(texto)) {
            document.getElementById("img-show").style.display="none";
            document.getElementById("img-show-2").style.display="flex";
            document.getElementById("text-show").style.display = "none";
            document.querySelector(".div-message").style.display="flex";
            document.querySelector(".bt_copy").style.display="none";
            document.getElementById("message-text").style.color = "red";
            document.getElementById("message-text-2").style.color = "red";
            document.getElementById("message-text").textContent = "Mayúsculas y/o tildes detectadas";
            document.getElementById("message-text-2").textContent = "Por favor elimina las mayúsculas y/o tildes para continuar";
        } else{
            let translate = texto.
                replace(/e/g,"enter").
                replace(/i/g,"imes").
                replace(/a/g,"ai").
                replace(/o/g,"ober").
                replace(/u/g,"ufat");
            document.getElementById("message-text").style.color = "black";
            document.getElementById("message-text-2").style.color = "black";
            document.getElementById("text-show").value = translate;
            document.getElementById("text-show").style.display = "flex";
            document.querySelector(".bt_copy").style.display="flex";
            document.getElementById("img-show").style.display="none";
            document.getElementById("img-show-2").style.display="none";
            document.querySelector(".div-message").style.display="none";
        }
    }
}

function decrypt() {
    let texto = document.getElementById("text-edit").value;
    if(texto.length != 0){ 
        if (/[A-ZÁÉÍÓÚÜáéíóúü]/.test(texto)) {
            document.getElementById("img-show").style.display="none";
            document.getElementById("img-show-2").style.display="flex";
            document.getElementById("text-show").style.display = "none";
            document.querySelector(".div-message").style.display="flex";
            document.querySelector(".bt_copy").style.display="none";
            document.getElementById("message-text").style.color = "red";
            document.getElementById("message-text-2").style.color = "red";
            document.getElementById("message-text").textContent = "Mayúsculas y/o tildes detectadas";
            document.getElementById("message-text-2").textContent = "Por favor elimina las mayúsculas y/o tildes para continuar";
        } else{
            let translate = texto.
                replace(/enter/g,"e").
                replace(/imes/g,"i").
                replace(/ai/g,"a").
                replace(/ober/g,"o").
                replace(/ufat/g,"u");
            document.getElementById("message-text").style.color = "black";
            document.getElementById("message-text-2").style.color = "black";
            document.getElementById("text-show").value = translate;
            document.getElementById("text-show").style.display = "flex";
            document.querySelector(".bt_copy").style.display="flex";
            document.getElementById("img-show").style.display="none";
            document.getElementById("img-show-2").style.display="none";
            document.querySelector(".div-message").style.display="none";
        }
    }
}

function copy() {

    const textarea = document.getElementById("text-show");
    textarea.select();
    textarea.setSelectionRange(0, textarea.value.length);
    document.execCommand('copy');
    textarea.blur();
    alert("Texto copiado con éxito")
  }
  