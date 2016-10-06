/**
 * Created by Javier on 01/07/2016.
 */
var form = document.getElementById("form-contact");

var otrosInput = document.getElementsByName("consulta");

var inputOtros = document.createElement("input");
inputOtros.setAttribute("id", "otros");
inputOtros.setAttribute("type", "text");
inputOtros.setAttribute("name", "otros");
inputOtros.setAttribute("placeholder", "Como me has conocido");
inputOtros.setAttribute("required", "");
inputOtros.setAttribute("size", "80");
inputOtros.setAttribute("class", "email-area");


for (var i = 0; i < otrosInput.length; i++) {
    otrosInput[i].addEventListener('click', function(){
        if (this.id == 'otro') {
            this.parentNode.appendChild(inputOtros);
        } else {
            if(document.getElementById("otros")) {
                this.parentNode.removeChild(inputOtros);
            }
        }
    });
}

var comentario = document.getElementsByName("Comentarios");

comentario[0].addEventListener('keyup', function () {
    var cad = comentario[0].value;
    var labelStr = document.getElementById("100palabras");

    //  Pre-proceso de cad para eliminar espacios al principio, al final y seguidos
    firstBlank = /^ /;
    lastBlank = / $/;
    someBlanks = /[ ]+/g;

    cad = cad.replace(someBlanks," ");
    cad = cad.replace(firstBlank,"");
    cad = cad.replace(lastBlank,"");

    var aux = "";
    var entrada = cad.split(' ');
    labelStr.innerHTML = "Comentarios: <span id='num-palabras'> " + String(150-entrada.length) + "</span> palabras";

    if (cad) {
        if (entrada.length>150) {
            alert("Máximo 150 palabras");
            for (var i=0; i<150; i++) {
                aux = aux + entrada[i] + " " ;
            }
            comentario[0].value = aux;
        }
    }

});
//debugger;

cad = comentario[0].text;


if (!Modernizr.inputtypes.number) {
    $.getScript('js/number-polyfill.js');
}

