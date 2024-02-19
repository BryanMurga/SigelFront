<template>
    <header>
        <div class="lg:ml-64 p-4">
            <i class="fa-solid fa-users text-2xl" style="color: #48c9b0"></i>
            <span id="posicion" class="ml-2 text-gray-500 dark:text-gray-400 text-lg">Alumnos</span>
            <br><br>

            <form class="flex items-center relative">
                <div class="relative flex-shrink-0">
                    <button id="dropdown-button" data-dropdown-toggle="dropdown" @click="toggleDropdown"
                        class="flex-shrink-0 inline-flex items-center py-3.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                        type="button">
                        {{ selectedCategory }} <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 1 4 4 4-4" />
                        </svg>
                    </button>
                    <div v-if="isDropdownOpen" id="dropdown"
                        class="absolute top-full left-0 mt-1 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                        style="z-index: 999;">
                        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                            <li>
                                <button type="button"
                                    class="dropdown-item inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    @click="selectCategory('Nombre')">
                                    Nombre
                                </button>
                            </li>
                            <li>
                                <button type="button"
                                    class="dropdown-item inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    @click="selectCategory('Telefono')">
                                    Teléfono
                                </button>
                            </li>
                            <li>
                                <button type="button"
                                    class="dropdown-item inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    @click="selectCategory('Escuela')">
                                    Escuela de Procedencia
                                </button>
                            </li>
                            <li>
                                <button type="button"
                                    class="dropdown-item inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    @click="selectCategory('NumeroRecibo')">
                                    No. Recibo
                                </button>
                            </li>
                            <li>
                                <button type="button"
                                    class="dropdown-item inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    @click="selectCategory('Matricula')">
                                    Matricula
                                </button>
                            </li>
                            <li>
                                <button type="button"
                                    class="dropdown-item inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    @click="selectCategory('CorreoInstitucional')">
                                    Correo Institucional
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="relative w-full">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input v-model="searchQuery" type="search" id="default-search" name="leadSearch"
                        class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Buscar registros" required />
                </div>
            </form>

            <div class="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
                <div>
                </div>

                <div>
                    <label for="select1" class="block mb-2 text-xs font-medium text-gray-900 dark:text-white">
                        Filtrado de categoria</label>
                    <select id="select1" v-model="selectedFiltrado"
                        class="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Escoge un filtro</option>
                        <option v-for="filtrado in filtradoSelect" :key="filtrado" :value="filtrado">{{ filtrado }}</option>
                    </select>
                </div>

                <div v-if="selectedFiltrado === 'Carrera'">
                    <select id="carrera" v-model="subSelectedFiltrado"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Escoge estatus</option>
                        <option v-for="carrera in Carreras" :key="carrera" :value="carrera.Nombre">{{ carrera.Nombre }}
                        </option>
                    </select>
                </div>
                <div v-if="selectedFiltrado === 'Procedencia'">
                    <select id="carrera" v-model="subSelectedFiltrado"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Escoge estatus</option>
                        <option v-for="pro in Procedencia" :key="pro" :value="pro">{{ pro }}</option>
                    </select>
                </div>
                <div v-if="selectedFiltrado === 'Estatus'">
                    <select id="estatus" v-model="subSelectedFiltrado"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Escoge un promotor</option>
                        <option v-for="est in Estatus" :key="est" :value="est">{{ est }}</option>
                    </select>
                </div>
                <button type="button"
                    class="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    @click="BorrarFiltros()">Borrar Filtros</button>

            </div>

        </div>

        <SideBarCE class="lg:w-64 md:w-48 sm:w-32" /> <!-- Importa y utiliza el componente SidebarADM -->

        <div id="gestion-modal" tabindex="-1" aria-hidden="true"
            class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div class="relative p-4 w-full max-w-2xl mx-auto max-h-full">
                <!-- Modal content -->
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <!-- Modal header -->
                    <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                            Gestión Alumno
                        </h3>
                        <button type="button"
                            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            data-modal-toggle="gestion-modal">
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                    </div>
                    <!-- Modal body -->
                    <form class="p-4 md:p-5">
                        <h2 class="text-2xl text-white text-center font-bold mb-4 bg-emerald-500 rounded-xl">
                            Datos Académicos
                        </h2>
                        <!-- Datos Personales -->
                        <div class="grid gap-4 mb-4 grid-cols-2">
                            <!-- NombreCompleto -->
                            <div class="col-span-2 sm:col-span-1">
                                <label for="name"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre
                                    Alumno</label>
                                <input type="text" name="name" id="name"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    v-model="updateAlumno.inputNombre" placeholder="Nombre Completo" required="">
                            </div>
                            <!-- CorreoElectronico -->
                            <div class="col-span-2 sm:col-span-1">
                                <label for="price"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo
                                    Institucional</label>
                                <input type="text" name="price" id="number"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    v-model="updateAlumno.inputCorreoInstitucional" placeholder="Correo Electrónico" required="">
                            </div>
                            <!-- No. Recibo-->
                            <div class="col-span-2 sm:col-span-1">
                                <label for="number"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">No. Recibo</label>
                                <input type="text" name="number" id="number"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    v-model="updateAlumno.inputNoRecibo" placeholder="Número de teléfono" required="">
                            </div>
                            <!--Matricula-->
                            <div class="col-span-2 sm:col-span-1">
                                <label for="matricula"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Matricula</label>
                                <input type="text" name="matricula" id="matricula"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    v-model="updateAlumno.inputMatricula" placeholder="Matricula" required="">
                            </div>
                            <!-- EscuelaProcedencia -->
                            <div class="col-span-2 sm:col-span-1">
                                <label for="price"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Escuela de
                                    Procedencia</label>
                                <input type="text" name="price" id="price"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    v-model="updateAlumno.inputEscuelaProcedencia" placeholder="Escuela de Procedencia">
                            </div>
                        </div>
                        <!-- Datos de Redes -->
                        <hr class="my-1 border-black" />
                        <h2 class="text-2xl text-white text-center font-bold mb-4 bg-emerald-500 rounded-xl">
                            Datos de Redes
                        </h2>
                        <div class="grid gap-4 mb-4 grid-cols-2">
                            <!-- Telefono -->
                            <div class="col-span-2 sm:col-span-1">
                                <label for="number"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Telefono Familiar</label>
                                <input type="text" name="number" id="number"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    v-model="updateAlumno.inputTelefonoFamiliar" placeholder="Número de teléfono" required="">
                            </div>
                            <!-- Facebook -->
                            <div>
                                <label for="rsFacebook"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Facebook <span class="fa-brands fa-facebook"></span></label>
                                <input type="text" id="rsFacebook"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    v-model="updateAlumno.inputFacebook" required="">
                            </div>
                            <div>
                                <label for="rsInsta" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Instagram <span class="fa-brands fa-instagram"></span></label>
                                <input type="text" id="rsInsta"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    v-model="updateAlumno.inputInsta" required="">
                            </div>
                            <div>
                                <label for="rsTK" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    TikTok <span class="fa-brands fa-tiktok"></span></label>
                                <input type="text" id="rsTK"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    v-model="updateAlumno.inputTikTok" required="">
                            </div>
                            <div>
                                <label for="rsLink" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Linkedln <span class="fa-brands fa-linkedin"></span></label>
                                <input type="text" id="rsLink"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    v-model="updateAlumno.inputLink" required="">
                            </div>
                            <div>
                                <label for="rsTwiter" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    X(Twiter) <span class="fa-brands fa-x-twitter"></span></label>
                                <input type="text" id="rsTwiter"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    v-model="updateAlumno.inputTwiter" required="">
                            </div>
                            <div>
                                <label for="rsWhatsapp"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Whatsapp <span class="fa-brands fa-whatsapp"></span></label>
                                <input type="text" id="rsWhatsapp"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    v-model="updateAlumno.inputWhatsapp" required="">
                            </div>
                            <div>
                                <label for="rsOtro" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Otro <span class="fa-regular fa-comment"></span></label>
                                <input type="text" id="rsOtro"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    v-model="updateAlumno.inputOtro" required="">
                            </div>
                        </div>

                        <!-- Datos de Inscripcion -->
                        <hr class="my-1 border-black" />
                        <h2 class="text-2xl text-white text-center font-bold mb-4 bg-emerald-500 rounded-xl">
                            Datos de Programa
                        </h2>
                        <div class="grid gap-4 mb-4 grid-cols-2">
                            <!--Carrera Inscripción-->
                            <div>
                                <label for="carrera-inscripcion"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Carrera de
                                    Inscripción</label>
                                <select id="carrera-inscripcion"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    v-model="updateAlumno.inputCarreraInscripcion">
                                    <option v-for="carrera in carreraInscrita" :key="carrera.CarreraID"
                                        :value="carrera.CarreraID">{{ carrera.Nombre }}</option>
                                </select>
                            </div>
                            <!--Porcedencia-->
                            <div>
                                <label for="procedencia"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Procedencia</label>
                                <select id="procedencia"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    v-model="updateAlumno.inputProcedencia">
                                    <option v-for="procedencia in Procedencia" :key="procedencia"
                                        :value="procedencia">{{ procedencia }}</option>
                                </select>
                            </div>
                            <!--Promotor ID-->
                            <div>
                                <label for="promotor"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Promotor</label>
                                <select id="promotor"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    v-model="updateAlumno.inputPromotor">
                                    <option v-for="promotor in Promotores" :key="promotor.PromotorID"
                                        :value="promotor.PromotorID">{{ promotor.Nombre }}</option>
                                </select>
                            </div>
                        </div>

                        <button @click="actualizarAlumno(alumnoParaGestionar, $event)" type="submit"
                            data-modal-toggle="gestion-modal"
                            class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <svg class="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z">
                                </path>
                            </svg>
                            Actualizar datos
                        </button>
                    </form>
                </div>
            </div>
        </div>

        <!-- Modal de Baja -->
        <div id="delete-modal" tabindex="-1" aria-hidden="true"
            class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div class="relative p-4 w-full max-w-2xl mx-auto max-h-full">
                <!-- Modal content -->
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <!-- Modal header -->
                    <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                            Baja Alumno
                        </h3>
                        <button type="button"
                            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            data-modal-toggle="delete-modal">
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                    </div>
                    <!-- Modal body -->
                    <form class="p-4 md:p-5">
                        <!-- Tipo de Baja -->
                        <div class="grid gap-4 mb-4">
                            <div class="col-span-2 sm:col-span-1">
                                <label for="name"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ingresa el Tipo de Baja</label>
                                    <select id="estatus" v-model="updateAlumno.inputTipoBaja"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option v-for="est in tipoBaja" :key="est" :value="est">{{ est }}</option>
                                    </select>
                            </div>
                            <div class="col-span-2 sm:col-span-1">
                                <label for="comentario"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Comentario</label>
                                <textarea id="comentario" rows="4"
                                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Agrega el motivo de la baja"></textarea>
                            </div>
                        </div>
                        
                        <button @click="bajaTipoAlumno(alumnoParaGestionar, $event)" type="submit"
                            data-modal-toggle="delete-modal"
                            class="text-white inline-flex items-center bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <svg class="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z">
                                </path>
                            </svg>
                            Dar de Baja
                        </button>
                    </form>
                </div>
            </div>
        </div>

    </header>

    <br>

    <section>
        <div class="flex-1 lg:ml-64">
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">

                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead style="background-color: #48c9b0" class="text-xs uppercase dark:bg-gray-700 text-white">
                        <tr>
                            <th scope="col" class="px-6 py-3">ID</th>
                            <th scope="col" class="px-6 py-3">Nombre</th>
                            <th scope="col" class="px-6 py-3">Telefono</th>
                            <th scope="col" class="px-6 py-3">Escuela de Procedencia</th>
                            <th scope="col" class="px-6 py-3">Numero de recibo</th>
                            <th scope="col" class="px-6 py-3">Matricula</th>
                            <th scope="col" class="px-6 py-3">Carrera de Inscripción</th>
                            <th scope="col" class="px-6 py-3">Procedencia</th>
                            <th scope="col" class="px-6 py-3">Estatus</th>
                            <th scope="col" class="px-6 py-3">Correo Institucional</th>
                            <th scope="col" class="px-6 py-3">Gestionar</th>
                            <th scope="col" class="px-6 py-3">Dar de Baja</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="alumno in filteredAlumnos" :key="alumno.AlumnoID"
                            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ alumno.AlumnoID }}
                            </th>
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ alumno.NombreAlumno }}
                            </th>
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ alumno.Telefono }}
                            </th>
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ alumno.EscuelaProcedencia }}
                            </th>
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ alumno.NoRecibo }}
                            </th>
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ alumno.Matricula }}
                            </th>
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ alumno.CarreraInsc }}
                            </th>
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ alumno.Procedencia }}
                            </th>
                            <th scope="row" :style="{ color: alumno.Estatus === 'INSC' ? 'green' : 'red' }"
                                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ alumno.Estatus }}
                            </th>
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ alumno.CorreoInstitucional }}
                            </th>
                            <td class="px-6 py-4">
                                <button @click="asignarAlumno(alumno.AlumnoID)" data-modal-target="gestion-modal"
                                    data-modal-toggle="gestion-modal" type="button"
                                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                    Gestionar</button>
                            </td>
                            <td class="px-6 py-4">
                                <button @click="asignarAlumno(alumno.AlumnoID)" data-modal-target="delete-modal" data-modal-toggle="delete-modal" 
                                type="button"
                                    class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-8 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800">
                                    Baja</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="grid justify-items-center" v-if="!filteredAlumnos.length" style="background-color: #F4D03F;">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-500 dark:text-grey">No hay alumnos
                        registrados
                    </h5>
                </div>

            </div>
        </div>
    </section>
</template>
 
<script>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";
import { getUserName } from "../../sessions";
import SideBarCE from "../../components/SideBarCE.vue";
import axios from "axios";
import { ref } from "vue";
import { id } from "date-fns/locale";
import DatePicker from "vue3-datepicker";

import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

// initialize components based on data attribute selectors

onMounted(() => {
    initFlowbite();
});

export default {

    //types of toast
    setup() {

        const notify = () => {
            toast("Se ha actualizado los leads Seleccionados!", {
                autoClose: 3000,
                type: 'success'
            }); // ToastOptions
        }

        const errUpdate = () => {
            toast(`"No hay cambios para actualizar.`, {
                autoClose: 2000,
                type: 'warning'
            }); // ToastOptions
        }

        const errLeads = () => {
            toast("Tienes que seleccionar leads antes de actualizarlos", {
                autoClose: 2000,
                type: 'error'
            }); // ToastOptions
        }

        const errPromotores = () => {
            toast("Error al obtener los Promotores Activos", {
                autoClose: 2000,
                type: 'error'
            }); // ToastOptions
        }

        const errActualizarPromotores = () => {
            toast("Error al actualizar los leads", {
                autoClose: 2000,
                type: 'error'
            }); // ToastOptionsnopm
        }

        const actualizarLeadNotify = () => {
            toast("Lead actualizado con éxito", {
                autoClose: 3000,
                type: 'success'
            }); // ToastOptions

        }

        const errorActualizarLeadNotify = () => {
            toast("Error al actualizar el lead", {
                autoClose: 3000,
                type: 'error'
            }); // ToastOptions
        }

        const infoNotify = () => {
            toast("Se ha actualizado la Información... ", {
                autoClose: 2000,
                type: 'error'
            }); // ToastOptions
        }

        return { notify, errUpdate, infoNotify, errLeads, errPromotores, actualizarLeadNotify, errorActualizarLeadNotify };
        },

    data() {
        return {
            userName: getUserName(),
            alumnos: [],
            leadIndividual: [],
            comparacionAlumno: [],
            searchQuery: "",
            redes: null,
            isDropdownOpen: false,
            selectedCategory: 'Nombre',
            filtradoSelect: ['Carrera', 'Procedencia', 'Estatus'],
            selectedFiltrado: 'Carrera',
            subSelectedFiltrado: null,
            carreraInscrita: [],
            Promotores: [],
            Procedencia: ['Local', 'Foraneo'],
            tipoBaja: ['Temporal', 'Definitiva'],
            Estatus: ['INSC', 'BAJA'],
            alumnoParaGestionar: null,
            input: '',
            updateAlumno: {
                inputNombre: null,
                inputCorreoInstitucional: null,
                inputNoRecibo: null,
                inputMatricula: null,
                inputEscuelaProcedencia: null,
                inputTelefonoFamiliar: null,
                inputCarreraInscripcion: null,
                inputProcedencia: null,
                inputPromotor: null,
                inputEstatus: null,
                inputTipoBaja: null,
                inputCorreo2: null,
                inputFechaNacimiento: null,
                inputFechaPrimerContacto: null,
                inputPSeguimiento: null,
                inputCarreraInteres: null,
                inputGrado: null,
                inputPrograma: '',
                inputEstatusInscripcion: null,
                inputSemestreIngreso: null,
                inputFacebook: null,
                inputInsta: null,
                inputTikTok: null,
                inputLink: null,
                inputTwiter: null,
                inputWhatsapp: null,
                inputOtro:null,
                inputTipoReferido: null,
                inputNombreReferido: null,
                inputDondeObtuvoDato: null,
                inputFechaInscripcion: null,
            },

        };

    },
    mounted() {
        this.loadAlumnos();
        this.loadRedes();
        this.loadCarreras();
        this.loadDatosAlumnos();
        this.loadPromotor();
    },
    computed: {
        filteredAlumnos() {
            if (this.alumnos.length === 0) {
                return [];
            }
            console.log(this.subSelectedFiltrado);

            if (this.selectedFiltrado == 'Carrera' && this.subSelectedFiltrado) {
                return this.alumnos.filter(alumno => {
                    const carreraSelect = alumno && alumno.CarreraInsc ? alumno.CarreraInsc : "";
                    return carreraSelect.includes(this.subSelectedFiltrado);
                });
            }

            if (this.selectedFiltrado == 'Procedencia' && this.subSelectedFiltrado) {
                return this.alumnos.filter(alumno => {
                    const procedenciaSelect = alumno && alumno.Procedencia ? alumno.Procedencia : "";
                    return procedenciaSelect.includes(this.subSelectedFiltrado);
                });
            }

            if (this.selectedFiltrado == 'Estatus' && this.subSelectedFiltrado) {
                return this.alumnos.filter(alumno => {
                    const estatusSelect = alumno && alumno.Estatus ? alumno.Estatus : "";
                    return estatusSelect.includes(this.subSelectedFiltrado);
                });
            }

            if (this.selectedCategory == 'Nombre') {
                return this.alumnos.filter(alumno => {
                    const nombreCompleto = alumno && alumno.NombreAlumno ? alumno.NombreAlumno : "";
                    return nombreCompleto.toLowerCase().includes(this.searchQuery.toLowerCase());
                });
            }

            if (this.selectedCategory == 'Telefono') {
                return this.alumnos.filter(alumno => {
                    const telefonoSearch = alumno && alumno.Telefono ? alumno.Telefono : "";
                    return telefonoSearch.toLowerCase().includes(this.searchQuery.toLowerCase());
                });
            }

            if (this.selectedCategory == 'Escuela') {
                return this.alumnos.filter(alumno => {
                    const escuelaProcedenciaSearch = alumno && alumno.EscuelaProcedencia ? alumno.EscuelaProcedencia : "";
                    return escuelaProcedenciaSearch.toLowerCase().includes(this.searchQuery.toLowerCase());
                });
            }

            if (this.selectedCategory == 'NumeroRecibo') {
                return this.alumnos.filter(alumno => {
                    const alumnoSearch = alumno && alumno.NoRecibo ? alumno.NoRecibo : "";
                    return alumnoSearch.toLowerCase().includes(this.searchQuery.toLowerCase());
                });
            }

            if (this.selectedCategory == 'Matricula') {
                return this.alumnos.filter(alumno => {
                    const matriculaSearch = alumno && alumno.Matricula ? alumno.Matricula : "";
                    return matriculaSearch.toLowerCase().includes(this.searchQuery.toLowerCase());
                });
            }

            if (this.selectedCategory == 'CorreoInstitucional') {
                return this.alumnos.filter(alumno => {
                    const correoSearch = alumno && alumno.CorreoInstitucional ? alumno.CorreoInstitucional : "";
                    return correoSearch.toLowerCase().includes(this.searchQuery.toLowerCase());
                });
            }
        },
    },
    methods: {
        async loadAlumnos() {
            try {
                // Reemplaza 'tu-endpoint' con la URL real de tu endpoint
                const response = await axios.get('http://localhost:4000/alumno/coordinador');
                if (response.data && response.data) {
                    this.alumnos = response.data.alumnos;
                    // Almacena los leads en el array
                }
                console.log(this.alumnos);
            } catch (error) {
            }
        },

        async asignarAlumno(alumnoID) {
            await this.loadRedes(alumnoID);
            await this.loadDatosAlumnos(alumnoID);
            await this.bajaTipoAlumno(alumnoID);
        },

        async bajaTipoAlumno(alumnoID, event) {
            event.preventDefault();
            try {
                const response = await axios.put(`http://localhost:4000/Alumno/baja/${alumnoID}`, {
                    TipoBaja: this.updateAlumno.inputTipoBaja,
                });
                this.actualizarLeadNotify();
                console.log(response.data); // Manejar la respuesta del servidor
                // Puedes mostrar un mensaje de éxito o realizar alguna acción adicional
            } catch (error) {
                this.errorActualizarLeadNotify();
                // Puedes mostrar un mensaje de error al usuario o realizar alguna otra acción
            }
            this.loadAlumnos();
        },

        async loadRedes(alumnoID) {
            console.log(alumnoID);

            try {
                if (!alumnoID) return this.redes = [];
                const response = await axios.get(`http://localhost:4000/alumno/redes/${alumnoID}`);
                this.redes = response.data.redes || [];
                this.updateAlumno.inputFacebook = this.redes.RSFacebook;
                this.updateAlumno.inputInsta = this.redes.RSInstagram;
                this.updateAlumno.inputTikTok = this.redes.RSTiktok;
                this.updateAlumno.inputLink = this.redes.RsLinkedln;
                this.updateAlumno.inputTwiter = this.redes.RsTwiter;
                this.updateAlumno.inputWhatsapp = this.redes.RSWhatsapp;
                this.updateAlumno.inputOtro = this.redes.RSOtro;

                console.log(this.redes);
            } catch (error) {

                console.error('Error al cargar las redes', error);
            }
        },

        async loadDatosAlumnos(alumnoID) {
            if (!alumnoID) return this.leadIndividual = [];

            try {
                const response = await axios.get(`http://localhost:4000/alumno/${alumnoID}`);
                if (response.data && response.data.alumno) {

                    this.comparacionAlumno = response.data.alumno;

                    this.leadIndividual = response.data.alumno;
                    this.updateAlumno.inputNombre = this.leadIndividual.nombreAlumno;
                    this.updateAlumno.inputCorreoInstitucional = this.leadIndividual.CorreoInstitucional;
                    this.updateAlumno.inputNoRecibo = this.leadIndividual.NoRecibo;
                    this.updateAlumno.inputMatricula = this.leadIndividual.Matricula;
                    this.updateAlumno.inputEscuelaProcedencia = this.leadIndividual.EscuelaProcedencia;
                    this.updateAlumno.inputTelefonoFamiliar = this.leadIndividual.Telefono;
                    this.updateAlumno.inputFacebook = this.leadIndividual.RSFacebook;
                    this.updateAlumno.inputInsta = this.leadIndividual.RSInstagram;
                    this.updateAlumno.inputTikTok = this.leadIndividual.RSTiktok;
                    this.updateAlumno.inputLink = this.leadIndividual.RSLinkedln;
                    this.updateAlumno.inputTwiter = this.leadIndividual.RSTwiter;
                    this.updateAlumno.inputWhatsapp = this.leadIndividual.RSWhatsapp;
                    this.updateAlumno.inputOtro = this.leadIndividual.RSOtro;
                    this.updateAlumno.inputCarreraInscripcion = this.leadIndividual.CarreraInscripcion;
                    this.updateAlumno.inputProcedencia = this.leadIndividual.Procedencia;
                    this.updateAlumno.inputPromotor = this.leadIndividual.PromotorID;
                    this.alumnoParaGestionar = this.leadIndividual.AlumnoID;
                    this.updateAlumno.inputTipoBaja = this.leadIndividual.TipoBaja;
                    
                }
            } catch (error) {
                console.log('Error al obtener los datos del alumno:', error);
            }
        },
        
        async actualizarAlumno(alumnoID, event) {
            event.preventDefault();

            // Verificar si hay cambios
            const hayCambios = this.hayCambiosEnDatos();

            if (hayCambios) {
                try {

                    const response = await axios.put(`http://localhost:4000/Alumno/update/${alumnoID}`, {

                        // Datos a actualizar
                        Nombre: this.updateAlumno.inputNombre,
                        CorreoInstitucional: this.updateAlumno.inputCorreoInstitucional,
                        NoRecibo: this.updateAlumno.inputNoRecibo,
                        Matricula: this.updateAlumno.inputMatricula,
                        EscuelaProcedencia: this.updateAlumno.inputEscuelaProcedencia,
                        Telefono: this.updateAlumno.inputTelefonoFamiliar,
                        RSFacebook: this.updateAlumno.inputFacebook,
                        RSInstagram: this.updateAlumno.inputInsta,
                        RSTiktok: this.updateAlumno.inputTikTok,
                        RSLinkedln: this.updateAlumno.inputLink,
                        RSTwiter: this.updateAlumno.inputTwiter,
                        RSWhatsapp: this.updateAlumno.inputWhatsapp,
                        RSOtro: this.updateAlumno.inputOtro,
                        CarreraInscripcion: this.updateAlumno.inputCarreraInscripcion,
                        Procedencia: this.updateAlumno.inputProcedencia,
                        PromotorID: this.updateAlumno.inputPromotor,
                        // ... otros campos que deseas actualizar
                    });
                    this.actualizarLeadNotify();
                    console.log(response.data); // Manejar la respuesta del servidor
                    
                    // Puedes mostrar un mensaje de éxito o realizar alguna acción adicional
                } catch (error) {
                    this.errorActualizarLeadNotify();
                    // Puedes mostrar un mensaje de error al usuario o realizar alguna otra acción
                }
            } else {
                console.log("No hay cambios para actualizar.");
                this.errUpdate();
            }
            this.loadAlumnos();
        },

        hayCambiosEnDatos() {
            // Aquí debes comparar los datos actuales con los datos originales para determinar si hay cambios
            // Puedes utilizar condiciones como (this.inputName !== this.leads.NombreCompleto) para cada campo
            // Devuelve true si hay algún cambio, y false si no hay cambios
            
            return this.updateAlumno.inputNombre !== this.comparacionAlumno.nombreAlumno
                || this.updateAlumno.inputCorreoInstitucional !== this.comparacionAlumno.CorreoInstitucional
                || this.updateAlumno.inputNoRecibo !== this.comparacionAlumno.NoRecibo
                || this.updateAlumno.inputMatricula !== this.comparacionAlumno.Matricula
                || this.updateAlumno.inputEscuelaProcedencia !== this.comparacionAlumno.EscuelaProcedencia
                || this.updateAlumno.inputTelefonoFamiliar !== this.comparacionAlumno.Telefono
                || this.updateAlumno.inputFacebook !== this.comparacionAlumno.RSFacebook
                || this.updateAlumno.inputInsta !== this.comparacionAlumno.RSInstagram
                || this.updateAlumno.inputTikTok !== this.comparacionAlumno.RSTiktok
                || this.updateAlumno.inputLink !== this.comparacionAlumno.RSLinkedln
                || this.updateAlumno.inputTwiter !== this.comparacionAlumno.RSTwiter
                || this.updateAlumno.inputWhatsapp !== this.comparacionAlumno.RSWhatsapp
                || this.updateAlumno.inputOtro !== this.comparacionAlumno.RSOtro
                || this.updateAlumno.inputCarreraInscripcion !== this.comparacionAlumno.CarreraInscripcion
                || this.updateAlumno.inputProcedencia !== this.comparacionAlumno.Procedencia
                || this.updateAlumno.inputPromotor !== this.comparacionAlumno.PromotorID;
                // ... otras comparaciones
        },

        
        async loadCarreras() {
            try {
                const response = await axios.get('http://localhost:4000/carrera');
                if (response.data && response.data.carreras) {
                    this.carreraInscrita = response.data.carreras;
                }
            } catch (error) {
                console.log('Error al obtener las carreras:', error);
            }
        },

        async loadPromotor() {
            try {
                const response = await axios.get('http://localhost:4000/promotores');
                if (response.data && response.data.listPromotores) {
                    this.Promotores = response.data.listPromotores;
                }
            } catch (error) {
                console.log('Error al obtener las carreras:', error);
            }
        },

        toggleDropdown() {
            this.isDropdownOpen = !this.isDropdownOpen;
        },
        selectCategory(category) {
            this.selectedCategory = category;
            this.isDropdownOpen = false;
            // Aquí puedes realizar cualquier otra acción necesaria con la categoría seleccionada
        },
        BorrarFiltros() {
            this.selectedFiltrado = 'Carrera';
            this.subSelectedFiltrado = null;
            this.input = '';
        },
    },
    watch: {
        alumnos: {
            handler() {
                this.loadRedes;
                this.filteredAlumnos;
                this.loadAlumnos;
                this.loadCarreras;
                this.loadDatosAlumnos;
                this.loadPromotor;
            },

        },
        inmediate: true
    },
    components: { SideBarCE, DatePicker }
};

</script>
 
<style></style>