<template>
    <div class="p-10 bg-gray-200 absolute h-[100vh] w-full flex items-center justify-center">
        []
        <div class="bg-white shadow-lg overflow-hidden rounded-xl w-[50%] h-[38em]">
            <div class="flex space-between items-center">
                <div class="image-container lg:w-[50%] xs:hidden">
                    <!-- Agregar la imagen -->

                </div>
                <div class="lg:w-[50%] xs:w-full sm:w-full p-10 ">
                    <div>
                        <b class="text-2xl text-gray-800">Sistema de Gestión y control de Leads.</b>
                        <p class="text-gray-600">
                            Introduce los datos requeridos para iniciar sesión.
                        </p>
                    </div>
                    <br>
                    <form @submit="entrar">
                        <div>
                            <div class="flex flex-col">
                                <span class="font-bold mb-1">
                                    <i class="fa fa-user-circle"></i> Correo Electronico</span>
                                <input type="email" v-model="formData.userName" name="userName"
                                    placeholder="Introduzca un usuario"
                                    class="p-4 rounded-lg border border-gray-300 w-full">
                            </div>
                        </div>
                        <br>
                        <div>
                            <div class="flex flex-col">
                                <span class="font-bold mb-1">
                                    <i class="fa fa-unlock-alt "></i> Contraseña</span>
                                <input type="password" v-model="formData.password" name="password"
                                    placeholder="Introduzca una contraseña"
                                    class="p-4 rounded-lg border border-gray-300 w-full">
                            </div>
                        </div>
                        <br>
                        <button v-on:click="validateFields()" type="submit"
                            class=" transition p-4 w-full bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
                            Entrar <i class="fa fa-paper-plane"></i>
                        </button>
                    </form>
                    <br><br>
                    <div class="text-center">
                        <a href="" class=" transition p-4 w-full text-blue-500 hover:text-blue-700">
                            <b>Olvidaste contraseña?</b>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="text-center p-8 text-[10px] font-bold absolute bottom-0 left-0 w-full">
            Copyrigth Universidad Internacional. {{ new Date().getFullYear() }}
        </div>

    </div>
</template>

<style scoped>
.image-container {
    background-image: url(/uninter2.jpg    );
    background-position: center;
    background-size: cover;
    height: 38em;
}
</style>

<script>

import axios from 'axios';

export default {
    data() {
        return {
            formData: {
                userName: null,
                password: null
            },
        }
    },
    methods: {
        validateEmail: function (userName) {
            let regExp = /^\S+@\S+\.\S+$/;

            return regExp.test(userName);

        },
        validarArroba: function (userName) {
            let regExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

            return regExp.test(userName);
        },
        validateFields: function () {
            if (!this.validateEmail(this.userName)) {
                Swal.fire({
                    title: "Error",
                    text: "Correo electronico invalido",
                    icon: "error",
                    button: "Aceptar",
                });
                return false;
            }
            else if (!this.validarArroba(this.userName)) {
                Swal.fire({
                    title: "Error",
                    text: "Doble arroba no permitido",
                    icon: "error",
                    button: "Aceptar",
                });
                return false;
            } else if (this.password == null || this.password == "") {
                Swal.fire({
                    title: "Error",
                    text: "Campos vacios",
                    icon: "error",
                    button: "Aceptar",
                });
                return false;
            }
        },
        entrar(event) {
            event.preventDefault();

            // Realiza la solicitud utilizando el valor del campo de entrada
            axios.post('http://localhost:4000/auth/login', this.formData)
                .then(response => {
                    // Maneja la respuesta exitosa aquí
                    console.log('Respuesta:', response.data);

                    Swal.fire({
                        title: "Datos correctos",
                        text: response.data.message,
                        icon: "success",
                        button: "Aceptar",
                    });

                    this.$router.push({ name: 'prueba' });
                })
                .catch(error => {
                    // Maneja el error aquí
                    console.error('Error:', error);
                    Swal.fire({
                        title: "No existen credenciales validas",
                        text: response.data.message,
                        icon: "error",
                        button: "Aceptar",
                    });
                });

        }
    },
    mounted: function () {
        console.log(this.userName, this.password)
    },
}
</script>