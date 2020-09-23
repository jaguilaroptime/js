<template>
    <div>
        <span>Log-in/out</span>
        <input type="checkbox" v-model="logged">

        <article class="user-info" :class="estilos">
            {{ mensaje }}
        </article>
    </div>
</template>

<script>
    export default {
        name: 'Binding',
        data: function () {
            return {
                logged: true,
                mensajes: {
                    in: "Logeado como @jaguilar.",
                    out: "Te has desconectado."
                },
                claseBase: 'user-info'
            }
        },
        computed: {
            mensaje() {
                return this.logged ? this.mensajes.in : this.mensajes.out;
            },
            estilos() {
                // return {
                //     'logged-in': this.logged,
                //     'logged-out': !this.logged,
                // }

                return this.logged ? 'logged-in' : 'logged-out';

                //return `logged-${this.logged ? 'in' : 'out'}`;
            }
        }
    }
</script>

<style lang="css" scoped>
    user-info {
        text-align: center;
        padding: 2rem;
        border: 1px solid;
        border-radius: 25px;
        font-family: sans-serif;
    }

    .logged-in {
        background-color: lightgreen;
    }

    .logged-out {
        background-color: tomato;
    }
</style>