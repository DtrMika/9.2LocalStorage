const btn = document.getElementById("buttonText");
const inputText = document.getElementById('inputText');

btn.addEventListener("click", () => {
    let inputValue = inputText.value;
    localStorage.setItem('inputText', inputValue);
    console.log(localStorage.getItem("inputText"));

});