
const copyBtn = document.querySelector("button");

const textArea = document.querySelector("textarea");


copyBtn.addEventListener('click', () => {
    textArea.select();
    let textValue = textArea.value;
    navigator.clipboard.writeText(textValue);
    copyBtn.innerText = "کپی شد سید "
    copyBtn.style.backgroundColor = "#27ae60";

    setTimeout(() => {
    copyBtn.style.backgroundColor = "#2ecc71";
        copyBtn.innerText = "میتونی بازم کپی کنی ";
    }, 1500)
    textArea.value = "";
})
