<template>
<div>
    <h2>Listado de usuarios</h2>
    <ul>
        <li v-for="usuario in usuarios" :key="usuario.id">
            {{ usuario.name }}
        </li>
    </ul>
    <h2>Uso del wather</h2>
    <input type="text" v-model="password">
    <p>{{ mensaje }}</p>
</div>
</template>

<script>
export default {
    name: 'Fecth',
    data: function () {
        return {
            usuarios: [],
            mensaje: 'Introduce un password',
            password: null,
            novalidos: [
                "admin",
                "12345",
                "password"
            ],
        }
    },
    created() {
        var url ="https://jsonplaceholder.typicode.com/users";
        fetch(url)
            .then(respuesta => respuesta.json())
                .then(respuesta => this.usuarios = respuesta);
    },
    watch: {
        password(nuevo) {
            if (this.novalidos.indexOf(nuevo) > -1) {
                this.mensaje = "Contaseña no válida";
                return false;
            }

            if (nuevo.length < 5) {
                this.mensaje = "La contraseña debe tener al menos 5 caractertes";
                return false;
            }

            this.mensaje = "Contaseña correcta";
        }
    },
}
</script>

<style>

</style>