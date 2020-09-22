<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- <form v-on:submit.prevent="guardarTarea"> -->
    <form>
        <input type="text" v-model="nuevaTarea" @keyup="guardarTarea" placeholder="Add Task">
        <input type="submit" value="Guardar tarea">
        <label for="direccion">Dirección de envío</label>
        <select id="direccion" v-model="direccion">
          <option value="misma">Misma dirección que facturación</option>
          <option value="nueva">Introducir nueva dirección</option>
        </select>

        <template v-if="direccion === 'nueva'">
          <label for="nueva-direccion">Nueva dirección</label>
          <textarea id="nueva-direccion"></textarea>
        </template>

        <div>
          <input v-model="check" type="checkbox"><span>He leído y acepto la política de privacidad.</span>
        </div>

        <input v-if="check === true" type="submit" value="Enviar">
    </form>
    <br>
    <input type="range" v-model="tiempo">{{ tiempo }}
    <br>
    <input type="search" v-model="busqueda" placeholder="Buscar tarea">
    <hr>
    <p v-for="(valor, propiedad) in usuario" :key="valor">
      {{ valor }} : {{ propiedad }}
    </p>
    <hr>
    <ul>
      <li v-for="tarea in filtroTareas" :key="tarea.nombre">
        {{ tarea.nombre }} - {{ tarea.tiempo }}
      </li>
    </ul>
  </div>
</template>

<script>
//Tradicional
// window.onload = () => {
//   const form = document.querySelector("form");
//   const input = document.querySelector("input[type=text]");
//   form.onsubmit = (evento) => {
//     evento.preventDefault();
//     this.tareas.unshift({
//         nombre: input.value,
//         tiempo: 10,
//     });
//     input.value = null;
//   }
// };

export default {
  name: 'HelloWorld',
  data: function () {
    return {
      direccion: "misma",
      check: false,
      nuevaTarea: '',
      tiempo: 0,
      busqueda: '',
      usuario: {
        username: 'Jeenson Aguilar',
        role: 'admin'
      },
      tareas: [
          {nombre: 'Aprender JavaScript moderno', tiempo: 3},
          {nombre: 'Aprender Vue.js', tiempo: 7},
          {nombre: 'Reparar el coche', tiempo: 22},
          {nombre: 'Viajar más', tiempo: 16},
          {nombre: 'Comprar la cena', tiempo: 12},
          {nombre: 'Mejorar como desarrollador', tiempo: 9},
          {nombre: 'Dar un curso', tiempo: 14},
      ]
    }
  },
  methods: {
      guardarTarea() {
        this.tareas.unshift({
          nombre: this.nuevaTarea,
          tiempo: Math.floor(Math.random() * 100),
        });
        // this.nuevaTarea = null;
      }
  },
  computed: {
    filtroTareas() {
        return this.tareas.filter(tarea => {
            return tarea.tiempo <= this.tiempo && tarea.nombre.includes(this.busqueda);
        })
    }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
