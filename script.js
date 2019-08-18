var b = document.querySelector('#scrollTop');
b.addEventListener('click', function(){
    goUp(); 
})
window.scrollTop = function(){
    var scrollElem = document.querySelector('#scrollTop');
    if(document.body.scrollTop >= document.documentElement.clientHeight){
        scrollElem.style.opacity = '0';
    } else {
        scrollElem.style.opacity = '1';
    }
}
var timeOut;
function goUp(){
    var top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
    if(top > 0){
        window.scrollBy(0, -100);
        timeOut = setTimeout('goUp()', 20);
    }else{
        clearTimeout(timeOut);
    }
}