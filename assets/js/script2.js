let valor1 = "";
let valor2 = "";
let valor3 = "";


function asignarValor(botonId, valor) {
document.getElementById(botonId).textContent = valor;
if (botonId === "btn1") valor1 = valor;
if (botonId === "btn2") valor2 = valor;
if (botonId === "btn3") valor3 = valor;
    }


document.querySelectorAll('.boton1 .dropdown-item').forEach(item => {
item.addEventListener('click', e => asignarValor('btn1', e.target.textContent));
});
document.querySelectorAll('.boton2 .dropdown-item').forEach(item => {
item.addEventListener('click', e => asignarValor('btn2', e.target.textContent));
});
document.querySelectorAll('.boton3 .dropdown-item').forEach(item => {
item.addEventListener('click', e => asignarValor('btn3', e.target.textContent));
});

document.getElementById('btnIngresar').addEventListener('click', () => {
const password = valor1 + valor2 + valor3;
const resultado = document.getElementById('resultado');

if (password === "911") {
resultado.textContent = "Contraseña Correcta";
} else if (password === "714") {
resultado.textContent = "Contraseña Correcta";
} else {
resultado.textContent = "Contraseña incorrecta";
}
});