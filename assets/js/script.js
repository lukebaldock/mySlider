function moveNext(){
    // console.log('hellowwwww')
    var oCurrent = document.querySelector('.current');
    oCurrent.classList.remove('current');
    if(oCurrent.nextElementSibling != null){
        oCurrent.nextElementSibling.classList.add('current');
    }else{
        oCurrent.parentNode.firstElementChild.classList.add('current');
    }

    var oCurrentDot = document.querySelector('.current-dot');
    oCurrentDot.classList.remove('current-dot');
    if (oCurrentDot.nextElementSibling != null) {
        oCurrentDot.nextElementSibling.classList.add('current-dot');
    }else{
        oCurrentDot.parentNode.firstElementChild.classList.add('current-dot');
    }
}
function movePrevious(){
    // console.log('hellowwwww')
    var oCurrent = document.querySelector('.current');
    oCurrent.classList.remove('current');
    if(oCurrent.previousElementSibling != null){
        oCurrent.previousElementSibling.classList.add('current');
    }else{
        oCurrent.parentNode.lastElementChild.classList.add('current');
    }

    var oCurrentDot = document.querySelector('.current-dot');
    oCurrentDot.classList.remove('current-dot');
    if (oCurrentDot.previousElementSibling != null) {
        oCurrentDot.previousElementSibling.classList.add('current-dot');
    }else{
        oCurrentDot.parentNode.lastElementChild.classList.add('current-dot')
    }
}


var oRight = document.querySelector('.fa-caret-right');
oRight.addEventListener('click',moveNext);

var oLeft = document.querySelector('.fa-caret-left');
oLeft.addEventListener('click',movePrevious);