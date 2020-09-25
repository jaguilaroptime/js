<template>
<div>
    <form>
        <label for="nombre">Nombre</label>
        <input type="text" required id="nombre" v-model="form.nombre" :class="{ invalido: !form.nombre }">
        <label for="apellidos">Apellidos</label>
        <input type="text" required id="apellidos" v-model="form.apellidos" :class="{ invalido: !form.apellidos }">

        <label for="mensaje">Mensaje</label>
        <textarea id="mensaje" required v-model="form.mensaje" :class="{ invalido: !form.mensaje }"></textarea>

        <label for="">Hora de contacto</label>
        <span>Mañanas</span>
        <input type="radio" value="mañanas" v-model="form.contacto">
        <span>Tardes</span>
        <input type="radio" value="tardes" v-model="form.contacto">
        <span>Noches</span>
        <input type="radio" value="noches" v-model="form.contacto">

        <label for="productos">Producto/s</label>
        <select id="productos" v-model="form.productos" multiple>
            <option value="producto1">Producto 1</option>
            <option value="producto2">Producto 2</option>
            <option value="producto3">Producto 3</option>
        </select>

        <label for="acepta">Aceptación de condiciones</label>
        <span>Acepto el bla blah bla</span>
        <input id="acepta" type="checkbox" v-model="form.acepta">

        <input type="submit" value="Enviar" v-if="form.acepta">
    </form>

    <hr>
    <pre>{{ $data }}</pre>
</div>
</template>

<script>
export default {
  name: 'Form',
  data: function () {
    return {
      form: {
        nombre: '',
        apellidos: '',
        mensaje: '',
        contacto: '',
        productos: ['producto1'],
        acepta: false
      }
    }
  },
  mounted () {
    if (window.localStorage.getItem('form')) {
      this.form = JSON.parse(window.localStorage.getItem('form'))
    }
  },
  watch: {
    form: {
      handler: function (nuevo, antiguo) {
        console.log(JSON.stringify(nuevo))
        window.localStorage.setItem('form', JSON.stringify(nuevo))
      },
      deep: true
    }
  }
}
</script>

<style lang="css">
form {
    font-family: sans-serif;
}

input:not([type="radio"]),
textarea,
label,
select {
    display: block;
}

label,
input[type="submit"] {
    margin-top: 20px;
    font-style: italic;
}

input,
textarea,
select {
    min-width: 200px;
}

.invalido {
    border: 1px solid red;
}
</style>
