/**
 * Created by Javier on 05/07/2016.
 */
var elementos = document.getElementsByClassName('enlace');

for (var i=0;i<elementos.length;i++) {
    elementos.addEventListener('mouseover', function (evt) {
        elementos[i].style.fontSize='20px';
    });
}


