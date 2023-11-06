<template>
    <div class="p-10 bg-gray-200 absolute h-full w-full top-0 left-0 flex items-center justify-center">

        <div class="bg-white shadow-lg overflow-hidden rounded-lg w-[50%]">
            <div class="flex space-between items-center">
                <div class="image-container w-[50%]">
                    <!-- Agregar la imagen -->

                </div>
                <div class="w-[50%] p-10">
                    <div>
                        <b class="text-2xl text-gray-800">Sistema de Gestión y control de Leads.</b>
                        <p class="text-gray-600">
                            Introduce los datos requeridos para iniciar sesión.
                        </p>
                    </div>
                    <br>
                    <div>
                        <div class="flex flex-col">
                            <span class="font-bold mb-1"> 
                                <i class="fa fa-user-circle"></i> Usuario</span>
                            <input type="text" name="userName" placeholder="Introduzca un usuario" class="p-4 rounded-lg border border-gray-300 w-full"> 
                        </div>
                    </div>
                    <br>
                    <div>
                        <div class="flex flex-col">
                            <span class="font-bold mb-1"> 
                                <i class="fa-unlock-alt "></i> Contraseña</span>
                            <input type="password" name="password" placeholder="Introduzca una contraseña" class="p-4 rounded-lg border border-gray-300 w-full"> 
                        </div>
                    </div>  
                    <br>
                    <br>
                    <button class=" transition p-4 w-full bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
                        Entrar <i class="fa fa-paper-plane"></i>
                    </button>
                    <br><br>
                    <div class="text-center">
                        <a href="" class="text-gray-400 hover:text-gray-700">
                            <b>Registrar usuario</b>
                        </a>
                    </div>
                    <br>
                    <div class="text-center">
                        <a href="" class=" transition p-4 w-full text-blue-500 hover:text-blue-700">
                            <b>Olvidaste contraseña?</b>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="text-center p-8 text-[10px] font-bold absolute bottom-0 left-0 w-full">
            Copyrigth Universidad Internacional. {{ new Date().getFullYear()}}
        </div>

    </div>
</template>

<style scoped>
    .image-container{
        background-image:  url(/uninter2.jpg    );
        background-position: center;
        background-size: cover;
        height: 38em;
    }
</style>