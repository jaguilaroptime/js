const url = "https://jsonplaceholder.typicode.com/posts";

fetch(url)
  .then(response => {
    for (const [key, val] of response.headers) {
      console.log(key, val);
    }
    return response.json();
  })
  .then(json => console.log(json))
  .catch(error => console.error(error.message));

// POST request
// Cuerpo a enviar
const payload = {
  id: 323123123,
  name: "Juan Andrés",
  color: "red"
};

// Opciones del request
const options = {
  method: "POST",
  headers: {
    // Enviamos JSON en el cuerpo
    "Content-type": "application/json; charset=UTF-8"
  },
  body: JSON.stringify(payload)
};

// Request en sí
fetch(url, options)
  .then(response => console.log(response))
  .catch(error => console.error(error));
  