const dataElement = document.getElementById('data');
const data = localStorage.getItem("inputText");

if (data) {
    dataElement.textContent = data;
} else {
    dataElement.textContent = "No se encontró ningún texto en el localStorage.";
}



