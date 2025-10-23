document.getElementById("verificar").addEventListener("click", function() {
const s1 = Number(document.getElementById("sticker1").value);
const s2 = Number(document.getElementById("sticker2").value);
const s3 = Number(document.getElementById("sticker3").value);

const total = s1 + s2 + s3;
const resultado = document.getElementById("resultado");

if (total <= 10) {
resultado.textContent = `Llevas ${total} stickers`;
} else {
resultado.textContent = "Llevas demasiados stickers";
}
});