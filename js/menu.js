/**
 * Created by Javier on 02/07/2016.
 */
var navbarItems = document.getElementsByClassName('navbar-item');

for (var i = 0; i < navbarItems.length; i++){
    navbarItems[i].addEventListener('click', function(evt){

        deleteActiveClass();

        if (Modernizr.classList) {
            this.classList.add('active');
        } else {
            this.classList += ' active';
        }

        var sectionToGo = this.getElementsByTagName('a')[0].href.split('#');
        //debugger;

        if(sectionToGo.length > 1) {
            evt.preventDefault();
            var goTo = sectionToGo[sectionToGo.length - 1];
            getElementByIdAndScroll(goTo);
        }
    });
}


function getElementByIdAndScroll(name) {
    var elem;
    if (name == '') {
        elem = document.getElementsByClassName('header')[0];
    } else {
        elem = document.getElementById(name);
    }

    scrollToElement(elem);
}

function scrollToElement(element) {
    var jump = (parseInt(element.getBoundingClientRect().top * .3)-20);
    document.body.scrollTop = document.body.scrollTop + jump;
    document.documentElement.scrollTop = document.documentElement.scrollTop + jump;
    //document.body.scrollTop += jump-15;
    //document.documentElement.scrollTop += jump-15;
    if (!element.lastJump || element.lastJump > Math.abs(jump)) {
        element.lastJump = Math.abs(jump);
        setTimeout(function() {
            scrollToElement(element);
        }, "60");

    } else {
        element.lastJump = null;
    }
}

function deleteActiveClass() {
    for(var i = 0; i < navbarItems.length; i++){
        if (Modernizr.classList) {
            navbarItems[i].classList.remove('active');
            navbarItems[i].classList.remove('active-reverse');
        } else {
            navbarItems[i].className = 'navbar-item';
        }
    }
}
