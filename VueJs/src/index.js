const formulario = document.querySelector("form");
const ul = document.querySelector("ul");
const input = document.querySelector("input[type='text']");
const tareas = [];

formulario.onsubmit = evento => {
    evento.preventDefault();
    tareas.push(input.value);

    let li = document.createElement("li");
    li.textContent = input.value;
    ul.appendChild(li);
    input.value = null;

    console.log(tareas);
}

