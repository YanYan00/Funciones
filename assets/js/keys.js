function pintar(color){
    ele.style.backgroundColor = color;
}
function crearDiv(color) {
    const nuevoDiv = document.createElement('div');
    nuevoDiv.style.width = '200px';
    nuevoDiv.style.height = '200px';
    nuevoDiv.style.backgroundColor = color;
    nuevoDiv.style.border = '2px solid black';
    document.body.appendChild(nuevoDiv);
}
let ele = document.getElementById("key");

document.addEventListener('keydown', function (event) {
    if (event.key === 'a'){
        pintar('pink');
    } 
    else if (event.key === 's'){
        pintar('orange');
    }
    else if (event.key === 'd'){
        pintar('cyan');
    }
    else if (event.key === 'q'){
        crearDiv('purple');
    }
    else if (event.key === 'w'){
        crearDiv('gray');
    }
    else if (event.key === 'e'){
        crearDiv('brown');
    }
});