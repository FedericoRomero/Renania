function limpiar() {
document.getElementById("calcu").reset();

}

function multiplicar() {

let x = parseFloat(document.getElementById("hora").value);
let y = parseInt(document.getElementById("valor").value);
let z = parseFloat(x * y);
let q = parseFloat(z * 9);
let r = parseFloat(q / 100);
let s = parseFloat(z + r);
document.getElementById("resultado").innerHTML = parseInt(s);
}






