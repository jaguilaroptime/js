<template>
    <div>
        <form @submit.prevent="guardarTarea">
            <input v-model="nuevaTarea" type="text" placeholder="Tarea" required>
            <input type="submit" value="Enviar">
        </form>
        <ul>
            <li v-for="tarea in tareas" :key="tarea.id">
                {{ tarea.title }}
            </li>
        </ul>
    </div>
</template>

<script>
    const axios = require('axios');
    export default {
        name: 'Axios',
        data: function () {
            return {
                nuevaTarea: '',
                url: 'https://jsonplaceholder.typicode.com/todos',
                tareas: [],
            }
        },
        mounted() {
            axios.get(this.url)
                .then(respuesta => this.tareas = respuesta.data)
                .catch(error => console.error(error));
        },
        methods: {
            guardarTarea() {
                axios.post(this.url, {
                    title: this.nuevaTarea,
                    userId: Math.floor(Math.random() * 10) + 1,
                })
                .then(respuesta => {
                    console.log(respuesta);
                    this.tareas.unshift({
                        title: this.nuevaTarea,
                    });
                    this.nuevaTarea = '';
                })
                .catch(error => console.error(error));
            }
        }
    }
</script>
