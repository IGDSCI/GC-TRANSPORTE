function openMenu(){
    var menu = document.getElementById('menu-icon');
    var close = document.getElementById('close-icon');
    var itens = document.getElementById('div-sections');
    if(menu.classList.contains('off')){
        menu.classList.remove('off');
        menu.style.display = 'block';
        itens.classList.remove('activate')
        close.classList.add('off');
    } else {
        menu.classList.add('off');
        menu.style.display = 'none';
        itens.classList.add('activate')
        close.classList.remove('off');
    }
}

function clickSection(){
    var itens = document.getElementById('div-sections');
    var menu = document.getElementById('menu-icon');
    var close = document.getElementById('close-icon');
    if(menu.classList.contains('off')){
        menu.classList.remove('off');
        menu.style.display = 'block';
        close.classList.add('off');
        itens.classList.remove('activate')
    } else {

    }
}