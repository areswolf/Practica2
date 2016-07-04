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

if (!Modernizr.inputtypes.number) {
    $.getScript('js/number-polyfill.js');
}

