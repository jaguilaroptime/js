<template>
    <div>
        <ul>
            <li v-for="usuario in nombreCompleto" :key="usuario.id"> 
                {{ usuario | mayusculas | acortado(20) }}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Filters',
        data: function () {
            return {
                url: 'https://randomuser.me/api/?results=10',
                usuarios: [],
            }
        },
        created() {
            fetch(this.url)
                .then(respuesta => respuesta.json())
                    .then(respuesta => this.usuarios = respuesta.results.map(usuario => usuario.name));
        },
        computed: {
            nombreCompleto() {
                return this.usuarios.map(usuario => `Nombre: ${usuario.title}: ${usuario.first} ${usuario.last}`)
            }
        },
        filters: {
            mayusculas(datos) {
                return datos.toUpperCase();
            },
            acortado(datos, cantidad) {
                return datos.substring(0, cantidad) + '...';
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>