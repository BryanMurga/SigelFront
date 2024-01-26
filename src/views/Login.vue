<template>
    <div class="p-10 bg-gray-200 absolute h-[100%] w-full flex items-center justify-center">
        <div class="bg-white shadow-lg overflow-hidden rounded-xl  lg:w-[50%] xs:w-full sm:w-full h-[38em]">
            <div class="flex space-between items-center">
                <div class="image-container lg:w-[50%] xs:hidden">
                    <!-- Agregar la imagen -->
                </div>
                <div class="lg:w-[50%] xs:w-full sm:w-full p-10 ">
                    <div>
                        <b class="text-2xl text-gray-800">Sistema de Gestión y control de Leads.</b>
                    </div>
                    <br><br>
                    <form @submit="entrar">
                        <div>
                            <div class="flex flex-col">
                                <span class="font-bold mb-1">
                                    <i class="fa fa-user-circle"></i> Correo Electronico</span>
                                <input type="email" v-model="formData.email" name="email"
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
                            <b>Olvidaste contraseña</b>
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
    background-image: url(/uninterlogo.png    );
    background-position: center;
    background-size: cover;
    height: 38em;
}
</style>

<script>

import axios from 'axios';
import { setRole } from '../sessions';
import { setUserName } from '../sessions';

export default {
    data() {
        return {
            formData: {
                email: null,
                password: null
            },
        }
    },
    methods: {
        validateEmail: function (email) {
            let regExp = /^\S+@\S+\.\S+$/;

            return regExp.test(email);

        },
        validarArroba: function (email) {
            let regExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

            return regExp.test(email);
        },
        validateFields: function () {
            if (!this.validateEmail(this.email)) {
                Swal.fire({
                    title: "Error",
                    text: "Correo electronico invalido",
                    icon: "error",
                    button: "Aceptar",
                });
                return false;
            }
            else if (!this.validarArroba(this.email)) {
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
                    console.log(response.data);

                    Swal.fire({
                        title: "Datos correctos",
                        text: response.data.message,
                        icon: "success",
                        button: "Aceptar",
                    });

                    const userRole = response.data.role;
                    const userName = response.data.userName;

                    if(userRole == 'admin'){
                        this.$router.push({ name: 'home-adm' });
                    }else if(userRole == 'coordinador'){
                        this.$router.push({ name: 'register' });
                    }else if(userRole == 'promotor'){
                        this.$router.push({ name: 'dash-promotor' });
                    }

                    setRole(userRole)
                    setUserName(userName)
                    
                    
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
    },
}


</script>