// main-menu
window.onload = function(){
    var header = document.querySelector('.menu-area'),
    nav = document.querySelector('.menu-area .gnb-menu >ul');

    nav.addEventListener('mouseover', function(){
        header.style.height = '324px';
    });
    nav.addEventListener('mouseout', function(){
        header.style.height = '50px';
    });
}
