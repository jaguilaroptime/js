<template>
<div>
    <ul>
        <li v-for="usuario in usuarios" :key="usuario.id">
            {{ usuario.name }}
        </li>
    </ul>
</div>
</template>

<script>
export default {
    name: 'Fecth',
    data: function () {
        return {
            usuarios: [],
        }
    },
    created() {
        var url ="https://jsonplaceholder.typicode.com/users";
        fetch(url)
            .then(respuesta => respuesta.json())
                .then(respuesta => this.usuarios = respuesta);
    },
}
</script>

<style>

</style>