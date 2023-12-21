<template>
    <header>
        <div class="lg:ml-64 p-4">
            <i class="fas fa-bars-progress text-2xl" style="color: #48c9b0"></i>
            <span id="posicion" class="ml-2 text-gray-500 dark:text-gray-400 text-lg">Leads</span>

            <div class="flex-1 p-4">
                <div id="verContacto" tabindex="-1" aria-hidden="true"
                    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div class="relative p-4 w-full max-w-2xl max-h-full">
                        <!-- Modal content -->
                        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <!-- Modal header -->
                            <div
                                class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                    Historial de contacto
                                </h3>
                                <button type="button"
                                    class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    data-modal-hide="verContacto">
                                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 14 14">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span @click="closeEditModal" class="sr-only">Close modal</span>
                                </button>
                            </div>
                            <!-- Modal body -->
                            <div class="p-4 md:p-5 space-y-4">

                                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
                                            <tr>
                                                <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                                                    Fecha de contacto
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Comentario
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Promotor
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="contacto in  contactos" :key="contacto.id"
                                                class="border-b border-gray-200 dark:border-gray-700">
                                                <th scope="row"
                                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                                    {{ formatDate(contacto.FechaContacto) }}
                                                </th>
                                                <td
                                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                                    {{ contacto.Comentario }}
                                                </td>
                                                <td
                                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                                    {{ contacto.nombrePromotor }}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>

                            <div class="item-error" v-if="!contactos.length">
                                <p class="p-4">No hay historial de contactos</p>
                            </div>
                            <!-- Modal footer -->
                            <div
                                class="flex justify-between items-start p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                                <button data-modal-hide="verContacto" type="button"
                                    class="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                                    Cerrar
                                </button>
                                <button data-modal-hide="verContacto" type="button" @click="navigateToRegisterContacto()"
                                    class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                    Añadir Contacto
                                </button>
                            </div>


                        </div>
                    </div>
                </div>


                <!-- Main modal -->
                <!-- Modal de gestion -->
                <div id="crud-modal" tabindex="-1" aria-hidden="true"
                    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div class="relative p-4 w-full max-w-2xl mx-auto max-h-full">
                        <!-- Modal content -->
                        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <!-- Modal header -->
                            <div
                                class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                                    Actualizar Lead
                                </h3>
                                <button type="button"
                                    class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    data-modal-toggle="crud-modal">
                                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 14 14">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span class="sr-only">Close modal</span>
                                </button>
                            </div>
                            <!-- Modal body -->
                            <form class="p-4 md:p-5">
                                <h2 class="text-2xl text-white text-center font-bold mb-4 bg-emerald-500 rounded-xl">
                                    Datos Personales
                                </h2>
                                <!-- Datos Personales -->
                                <div class="grid gap-4 mb-4 grid-cols-2">
                                    <!-- NombreCompleto -->
                                    <div class="col-span-2 sm:col-span-1">
                                        <label for="name"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre
                                            Completo</label>
                                        <input type="text" name="name" id="name"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            v-model="inputName" placeholder="Nombre Completo" required="">
                                    </div>
                                    <!-- Telefono -->
                                    <div class="col-span-2 sm:col-span-1">
                                        <label for="number"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Teléfono</label>
                                        <input type="text" name="number" id="number"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            v-model="inputTelefono" placeholder="Número de teléfono" required="">
                                    </div>
                                    <!-- Telefono 2 -->
                                    <div class="col-span-2 sm:col-span-1">
                                        <label for="number"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Teléfono
                                            Adicional</label>
                                        <input type="text" name="number" id="number"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            v-model="inputTelefono2" placeholder="Número de teléfono" required="">
                                    </div>
                                    <!-- CorreoElectronico -->
                                    <div class="col-span-2 sm:col-span-1">
                                        <label for="price"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo
                                            Electrónico</label>
                                        <input type="text" name="price" id="number"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            v-model="inputCorreo" placeholder="Correo Electrónico" required="">
                                    </div>
                                    <!-- CorreoElectronico2 -->
                                    <div class="col-span-2 sm:col-span-1">
                                        <label for="price"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo
                                            Electrónico Adicional</label>
                                        <input type="text" name="price" id="price"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            v-model="inputCorreo2" placeholder="Correo Electrónico" required="">
                                    </div>
                                    <!-- FechaNacimiento -->
                                    <div class="col-span-2 sm:col-span-1">
                                        <label for="date"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fecha de
                                            Nacimiento</label>
                                        <DatePicker :placeholder="inputFechaNacimiento" class="input-field rounded-md" />
                                    </div>
                                </div>

                                <hr class="my-1 border-black" />
                                <h2 class="text-2xl text-white text-center font-bold mb-4 bg-emerald-500 rounded-xl">
                                    Datos de Procedencia Académica
                                </h2>
                                <!-- Datos de Procedencia Académica -->
                                <div class="grid gap-4 mb-4 grid-cols-2">
                                    <!-- EscuelaProcedencia -->
                                    <div class="col-span-2 sm:col-span-1">
                                        <label for="price"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Escuela de
                                            Procedencia</label>
                                        <input type="text" name="price" id="price"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            v-model="inputEscuelaProcedencia" placeholder="Escuela de Procedencia"
                                            required="">
                                    </div>
                                    <!-- Pais -->
                                    <div>
                                        <label for="countries"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Selecciona
                                            una país</label>
                                        <select v-model="selectedCountry" id="countries"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option v-for="country in countries" :key="country.name.common"
                                                :value="country.name.common" :placeholder="selectedCountry">
                                                {{ country.name.common }}
                                            </option>
                                        </select>
                                    </div>

                                    <div v-if="selectedCountry === 'Mexico'">
                                        <label for="states"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Selecciona
                                            una estado</label>
                                        <select v-model="selectedState" id="states"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option v-for="state in Object.keys(estadosMunicipios)" :key="state"
                                                :value="state" :placeholder="selectedMunicipio">
                                                {{ state }}
                                            </option>
                                        </select>
                                    </div>

                                    <div v-if="selectedCountry === 'Mexico' && selectedState">
                                        <label for="municipios"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Selecciona
                                            una municipio</label>
                                        <select v-model="selectedMunicipio" id="municipios"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option v-for="municipio in estadosMunicipios[selectedState]" :key="municipio"
                                                :value="municipio" :placeholder="selectedMunicipio">
                                                {{ municipio }}
                                            </option>
                                        </select>
                                    </div>

                                    <div v-if="selectedCountry !== 'Mexico'">
                                        <label for="otro-estado"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Estado</label>
                                        <input type="text" id="otro-estado"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            required v-model="selectedState">
                                    </div>

                                    <div v-if="selectedCountry !== 'Mexico'">
                                        <label for="otro-ciudad"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ciudad</label>
                                        <input type="text" id="otro-ciudad"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            required v-model="selectedMunicipio">
                                    </div>
                                </div>

                                <!-- Datos de Seguimiento -->
                                <hr class="my-1 border-black" />
                                <h2 class="text-2xl text-white text-center font-bold mb-4 bg-emerald-500 rounded-xl">
                                    Datos de Seguimiento
                                </h2>
                                <div class="grid gap-4 mb-4 grid-cols-2">

                                    <!-- PS-Seguimiento -->
                                    <div>
                                        <label for="ps-seguimiento"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">PS-Seguimiento</label>
                                        <select id="ps-seguimiento"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            v-model="inputPSeguimiento">
                                            <option v-for="ps in PSeguimientos" :key="ps" :value="ps">{{ ps }}</option>
                                        </select>
                                    </div>
                                    <!-- CarreraInteres -->
                                    <div>
                                        <label for="carrera-interes"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Carrera de
                                            interes</label>
                                        <select id="carrera-interes"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            v-model="inputCarreraInteres">
                                            <option selected>Escoge un carrera</option>
                                            <option v-for="carreras in CarreraInteres" :key="carreras.Nombre"
                                                :value="carreras.CarreraID">{{ carreras.Nombre }}</option>
                                        </select>
                                    </div>
                                    <!-- Grado -->
                                    <div>
                                        <label for="grado"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Grado</label>
                                        <select id="grado"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            v-model="inputGrado">
                                            <option selected>Escoge un Grado</option>
                                            <option v-for="grado in Grados" :key="grado" :value="grado">{{ grado }}</option>
                                        </select>
                                    </div>
                                    <!-- Programa -->
                                    <div>
                                        <label for="programa"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Programa</label>
                                        <select id="programa"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            v-model="inputPrograma">
                                            <option selected>Escoge un Grado</option>
                                            <option v-for="programa in Programas" :key="programa" :value="programa">{{
                                                programa }}</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label for="estatus-inscripcion"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Estatus de
                                            inscripción</label>
                                        <select id="estatus-inscripcion"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            v-model="inputEstatusInscripcion">
                                            <option selected>Escoge el Estatus de inscripcion</option>
                                            <option v-for="estatus in EstatusIncripcion" :key="estatus" :value="estatus">{{
                                                estatus }}</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label for="semestre-ingreso"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Semestre de
                                            ingreso</label>
                                        <select id="semestre-ingreso"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            v-model="inputSemestreIngreso">
                                            <option selected>Escoge el semestre</option>
                                            <option v-for="semestre in SemestreIngreso" :key="semestre" :value="semestre">{{
                                                semestre }}</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label for="ciclo"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Escuela
                                            Ciclo</label>
                                        <input type="text" id="ciclo"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            v-model="inputCiclo" placeholder="2022-1" required="">
                                    </div>

                                    <div>
                                        <label for="campana"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Campaña</label>
                                        <select id="semestre-ingreso"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            v-model="inputCampana">
                                            <option selected>Escoge la campaña</option>
                                            <option v-for="campanas in Campanas" :key="campanas.CampanaID"
                                                :value="campanas.CampanaID">{{
                                                    campanas.Nombre }}</option>
                                        </select>
                                    </div>

                                </div>

                                <button type="submit"
                                    class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    <svg class="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    Actualizar datos
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <!-- Modal de Actualizar varios -->
                <div id="update-many" tabindex="-1" aria-hidden="true"
                    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)]">
                    <div class="relative p-4 w-full max-w-4xl max-h-full">
                        <!-- Modal content -->
                        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <!-- Modal header -->
                            <div
                                class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                                    Actualizar varios registros
                                </h3>
                                <button type="button"
                                    class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    data-modal-hide="update-many">
                                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 14 14">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span @click="cerrarModal" class="sr-only">Close modal</span>
                                </button>

                            </div>
                            <!-- Modal body -->

                            <form @submit.prevent="guardarDatos">

                                <div hidden>{{ selectedLeads }}</div>
                                <div class="grid gap-6 mb-6 md:grid-cols-2 p-4">
                                    <div>
                                        <label for="escuela-procedencia"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Escuela
                                            Procedencia</label>
                                        <input v-model="updateLead.EscuelaProcedencia" type="text" id="escuela-procedencia"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Bachilleres">
                                    </div>
                                    <div>
                                        <label for="countries"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Selecciona
                                            una país</label>
                                        <select v-model="updateLead.NombrePais" id="countries"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option v-for="country in countries" :key="country.name.common"
                                                :value="country.name.common">
                                                {{ country.name.common }}
                                            </option>
                                        </select>

                                    </div>
                                    <div v-if="updateLead.NombrePais === 'Mexico'">
                                        <label for="states"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Selecciona
                                            una estado</label>
                                        <select v-model="updateLead.NombreEstado" id="states"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option v-for="state in Object.keys(estadosMunicipios)" :key="state"
                                                :value="state">
                                                {{ state }}
                                            </option>
                                        </select>

                                    </div>

                                    <div v-if="updateLead.NombrePais === 'Mexico' && updateLead.NombreEstado">
                                        <label for="municipios"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Selecciona
                                            una municipio</label>
                                        <select v-model="updateLead.NombreCiudad" id="municipios"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option v-for="municipio in estadosMunicipios[updateLead.NombreEstado]"
                                                :key="municipio" :value="municipio">
                                                {{ municipio }}
                                            </option>
                                        </select>

                                    </div>

                                    <div v-if="updateLead.NombrePais !== 'Mexico'">
                                        <label for="otro-estado"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Estado</label>
                                        <input v-model="updateLead.NombreEstado" type="text" id="otro-estado"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    </div>

                                    <div v-if="updateLead.NombrePais !== 'Mexico'">
                                        <label for="otro-ciudad"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ciudad</label>
                                        <input v-model="updateLead.NombreCiudad" type="text" id="otro-ciudad"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    </div>

                                    <div>
                                        <label for="ps-seguimiento"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">PS-Seguimiento</label>
                                        <select v-model="updateLead.PSeguimiento" id="ps-seguimiento"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option selected>Escoge un status</option>
                                            <option v-for="ps in PSeguimientos" :key="ps" :value="ps">{{ ps }}</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label for="carrera-interes"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Carrera de
                                            interes</label>
                                        <select v-model="updateLead.CarreraInteresID" id="carrera-interes"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option selected>Escoge un carrera</option>
                                            <option v-for="carreras in CarreraInteres" :key="carreras.Nombre"
                                                :value="carreras.CarreraID">{{ carreras.Nombre }}</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label for="grado"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Grado</label>
                                        <select v-model="updateLead.Grado" id="grado"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option selected>Escoge un Grado</option>
                                            <option v-for="grado in Grados" :key="grado" :value="grado">{{ grado }}</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label for="programa"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Programa</label>
                                        <select v-model="updateLead.Programa" id="programa"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option selected>Escoge un Grado</option>
                                            <option v-for="programa in Programas" :key="programa" :value="programa">{{
                                                programa }}</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label for="estatus-inscripcion"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Estatus de
                                            inscripción</label>
                                        <select v-model="updateLead.EstatusInsc" id="estatus-inscripcion"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option selected>Escoge el Estatus de inscripcion</option>
                                            <option v-for="estatus in EstatusIncripcion" :key="estatus" :value="estatus">{{
                                                estatus }}</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label for="semestre-ingreso"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Semestre de
                                            ingreso</label>
                                        <select v-model="updateLead.SemestreIngreso" id="semestre-ingreso"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option selected>Escoge el semestre</option>
                                            <option v-for="semestre in SemestreIngreso" :key="semestre" :value="semestre">{{
                                                semestre }}</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label for="ciclo"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Escuela
                                            Ciclo</label>
                                        <input v-model="updateLead.Ciclo" type="text" id="ciclo"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="2022-1">
                                    </div>

                                    <div>
                                        <label for="campana"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Campaña</label>
                                        <select v-model="updateLead.CampanaID" id="semestre-ingreso"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option selected>Escoge la campaña</option>
                                            <option v-for="camapana in Campanas" :key="camapana"
                                                :value="camapana.CampanaID">{{
                                                    camapana.Nombre }}</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label for="asetform"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">AsetNameForm</label>
                                        <input v-model="updateLead.AsetNameForm" type="text" id="asetform"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    </div>

                                    <div>
                                        <label for="isOrg"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Is
                                            Organic</label>
                                        <select v-model="updateLead.IsOrganic" id="isOrg"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option v-for="isOrga in isOrganic" :key="isOrga" :value="isOrga">{{
                                                isOrga }}</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label for="medio-contacto"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Medio de
                                            contacto</label>
                                        <select v-model="updateLead.MedioDeContactoID" id="medio-contacto" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                                            focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700
                                            dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                                            dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option v-for="medio in medioContactos" :key="medio" :value="medio.MedioID">{{
                                                medio.Nombre }}</option>
                                        </select>
                                    </div>

                                </div>

                                <div class="grid gap-5 mb-6 md:grid-cols-5 p-4">
                                    <button type="submit" data-modal-hide="update-many"
                                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                        Guardar
                                    </button>
                                </div>

                            </form>

                        </div>
                    </div>
                </div>

                <form>
                    <label for="default-search"
                        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input v-model="input" type="search" id="default-search" name="leadSearch"
                            class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Buscar registros" required />
                        <!-- <div class="items" v-for="lead in filterList()" :key=lead.id
                                <p>{{ lead.NombreCompleto }}</p>
                            </div>
                            <div class="item-error" v-if="input&&!filterList().length">
                                <p>No se encontraron registros</p>
                            </div> -->
                    </div>
                </form>
                <div class="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-500 dark:text-grey">Leads</h5>
                </div>
            </div>

        </div>
        <SideBarProm class="lg:w-64 md:w-48 sm:w-32" /> <!-- Importa y utiliza el componente SidebarADM -->

    </header>

    <section>
        <div class="flex-1 lg:ml-64">
            <div class="relative overflow-x-auto max-h-[520px] shadow-md sm:rounded-lg">
                <table v-if="filterList.length > 0"
                    class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col">
                                Seleccionar
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Id
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Nombre Completo
                            </th>
                            <th scope="col" class="place-items-center px-4 py-3">
                                Teléfono
                            </th>
                            <th scope="col" class="px-6 py-3 text-center">
                                Teléfono Secundario
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Correo Electrónico
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Correo Electrónico 2
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Gestionar
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Contacto
                            </th>
                        </tr>
                    </thead>
                    <tbody class="item leads">
                        <tr v-for="lead in filterList" :key="lead.id"
                            class="item leads px-6 py-4 font-medium text-gray-700 whitespace-nowrap dark:text-white">
                            <td class="w-4 p-4">
                                <div class="flex items-center">
                                    <input id="'checkbox-table-search-1' + lead.LeadID" type="checkbox"
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        :value="lead.LeadID" v-model="selectedLeads">
                                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th class="px-6 py-4">
                                {{ lead.LeadID }}
                            </th>
                            <th class="px-6 py-4">
                                {{ lead.NombreCompleto }}
                            </th>
                            <td class="px-6 py-4">
                                {{ lead.telefono }}
                            </td>
                            <td class="px-6 py-4">
                                {{ lead.telefono2 }}
                            </td>
                            <td class="px-6 py-4">
                                {{ lead.CorreoElectronico }}
                            </td>
                            <td class="px-6 py-4">
                                {{ lead.CorreoElectronico2 }}
                            </td>
                            <td class="px-6 py-4">
                                <button @click="GestionarLead(lead.LeadID)" data-modal-target="crud-modal"
                                    data-modal-toggle="crud-modal" type="button"
                                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                    Gestionar</button>
                            </td>
                            <td class="px-6 py-4">
                                <button @click="VerContactoModal(lead.LeadID)" data-modal-target="verContacto"
                                    data-modal-toggle="verContacto" type="button"
                                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                    Ver</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="grid justify-items-center" v-if="!filterList.length" style="background-color: #F4D03F;">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-500 dark:text-grey">No hay leads asignados</h5>
                </div>
            </div>
            <br>
            <button v-show="hasSelectedLeads" type="button" data-modal-target="update-many" data-modal-toggle="update-many"
                class="focus:outline-none text-black bg-yellow-400 hover:bg-yellow-300 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                style="text-align: left; float: left;" @click="enviarAsignaciones">
                <i class="fas fa-regular fa-paper-plane"></i> Actualizar varios
            </button>
            <div class="item-error" v-if="input && !filterList.length">
                <p class="grid justify-items-center p-4">No hay coicidencia de registros</p>
            </div>
        </div>
    </section>
</template>
 
<script>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";
import { getUserName } from "../../sessions";
import SideBarProm from "../../components/SideBarProm.vue";
import axios from "axios";
import { ref } from "vue";
import { format } from "date-fns";
import { FlowbiteThemable, FwbButton, FwbModal } from 'flowbite-vue';
import DatePicker from "vue3-datepicker";

import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { es } from "date-fns/locale";

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

        const errAsignacion = (LeadID) => {
            toast(`El lead ${LeadID} no tiene un promotor asignado`, {
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

        const infoNotify = () => {
            toast("Se ha actualizado la Información... ", {
                autoClose: 2000,
                type: 'error'
            }); // ToastOptions
        }

        return { notify, errAsignacion, infoNotify, errLeads, errPromotores };
    },
    props: ['selectContacto'],

    data() {
        return {
            userName: getUserName(),
            VerContacto: null,
            leads: [],
            leadIndividual: [],
            contactos: [],  
            selectedLeads: [], // Arreglo para almacenar los leads seleccionados
            leadParaGestionar: null,
            input: ref(''),
            countries: [],
            estadosMunicipios: {},
            selectedCountry: 'Mexico',
            selectedState: '',
            selectedMunicipio: '',
            PSeguimientos: ['AU-ALUMNO UNINTER', 'INSC-INSCRIPCIÓN', 'NI-NO INTERESA', 'P-PROSPECTO', 'PI-INSCRIPCIÓN', 'PS-SEGUIMIENTO', 'SC-SIN CONTACTO', 'PU-PERSONAL UNINTER', 'DU-DUPLICADO', 'DI-DATO NO VALIDO', 'BA-BAJA ALUMNO', 'VACIO'],
            CarreraInteres: [],
            Grados: ['SECUNDARIA', 'BACHILLERATO', 'PREPA-A', 'LIC/ING', 'ESPECIALIDAD', 'DIPLOMADO', 'MAESTRIA', 'DOCTORADO', 'NO ESPECIFICA'],
            Programas: ['ADMINISTRACIÓN', 'ADMINISTRACION DE EMPRESAS', 'ADMINISTRACION DE NEGOCIOS INTERNACIONALES', 'ARQ', 'BACHILLERATO SEMESTRAL', 'BILINGÜE', 'BIU', 'BIUB', 'BIUM', 'CIENCIAS POLÍTICAS, RELACIONES INT.', 'CLS PRT', 'CORP', 'CURSO DE VERANO', 'Curso Intensivo', 'DAD', 'DDI', 'DDPAI', 'DEI', 'DEPU', 'DHU', 'DI', 'DIP', 'DISEÑO DE MODAS', 'DISEÑO GRÁFICO', 'DMD', 'DPU', 'EAO', 'EAPD', 'EAPD y LADD', 'EATL', 'LDI', 'LDM', 'LECE', 'LED', 'LEF', 'LEM',
                'LEMK', 'LEMP', 'LIC', 'LICENCIATURA', 'LID', 'LPS', 'LRI', 'MADE', 'MADEL', 'MARET', 'MDG', 'MEL', 'MELE', 'MERCADOTECNIA', 'MGC', 'MI', 'NIÑOS', 'OFERTA EDUCATIVA', 'PEDAGOGÍA', 'PREPA A', 'PREPA-A', 'REGLR', 'SIU', 'SIUB', 'SIUM', 'UNI LAE', 'LPE'],
            EstatusIncripcion: ['INSO', 'REZA', 'INSC', 'BAJA', 'ARCHIVAR'],
            SemestreIngreso: ['1 Semestre', '2 Semestre', '3 Semestre', '4 Semestre', '5 Semestre', '6 Semestre', '7 Semestre', '8 Semestre', 'Maestria', 'Doctorado', 'Licenciatura', 'Diplomados'],
            Campanas: [],
            isOrganic: ['PAUTA', 'ORGÁNICO'],
            medioContactos: [],
            updateLead: {
                EscuelaProcedencia: null,
                NombrePais: null,
                NombreEstado: null,
                NombreCiudad: null,
                PSeguimiento: null,
                Programa: null,
                CarreraInteresID: null,
                Grado: null,
                EstatusInsc: null,
                SemestreIngreso: null,
                Ciclo: null,
                CampanaID: null,
                AsetNameForm: null,
                IsOrganic: null,
                MedioDeContactoID: null,
                ids: null,
            },
            updateManyModalVisible: false,
            selectContacto: null,
            inputName: null,
            inputTelefono: null,
            inputTelefono2: null,
            inputCorreo: null,
            inputCorreo2: null,
            inputFechaNacimiento: null,
            inputEscuelaProcedencia: null,
            inputPSeguimiento: null,
            inputCarreraInteres: null,
            inputGrado: null,
            inputPrograma: null,
            inputEstatusInscripcion: null,
            inputSemestreIngreso: null,
            inputCiclo: null,
            inputCampana: null,
            inputAsetNameForm: null,
            inputIsOrganic: null,
            inputMedioDeContactoID: null,

        };
    },
    computed: {
        filterList() {

            if (this.leads.length === 0) {
                return [];
            }
            return this.leads.filter(lead => {
                const nombreCompleto = lead && lead.NombreCompleto ? lead.NombreCompleto : "";
                return nombreCompleto.toLowerCase().includes(this.input.toLowerCase());
            });
        },
        hasSelectedLeads() {
            return this.selectedLeads.length > 0;
        },

    },
    mounted() {
        this.loadLeads();
        this.loadContactos();
        this.loadCountries();
        this.loadEstadoMunicipio();
        this.loadCarreras();
        this.loadCampana();
        this.loadMedioContacto();

        // Agrega un nuevo estado al historial cuando el componente se monta
        window.history.pushState({ noBackExitsApp: true }, null, null);

        window.addEventListener('popstate', this.preventBack);

    },
    beforeDestroy() {
        // Elimina el event listener cuando el componente se destruye
        window.removeEventListener('popstate', this.preventBack);
    },
    methods: {
        navigateToRegisterContacto() {

            this.$router.push({
                name: 'register-contacto',
                params: { selectContacto: this.selectContacto },
            });
        },

        async guardarDatos() {

            this.updateLead.ids = this.selectedLeads;

            // Imprime datosConID en la consola
            console.log('Datos con ID:', this.updateLead);

            const endpoint = 'http://localhost:4000/funciones/update';

            try {
                const response = await axios.post(endpoint, this.updateLead);
                console.log(response);

                this.loadLeads();
                this.notify();
                this.updateLead = [];

                setTimeout(() => {
                    // Recargar la página después del tiempo de espera
                    window.location.reload();
                }, 1500);


            } catch (errorUpdate) {
                console.log(errorUpdate);
            }

        },


        async loadLeads() {
            console.log('Valor de userName:', this.userName)
            try {
                // Reemplaza 'tu-endpoint' con la URL real de tu endpoint
                const response = await axios.get('http://localhost:4000/promotores/leads', {
                    params: {
                        userName: this.userName
                    }
                });
                if (response.data && response.data) {
                    this.leads = response.data.leads;
                    // Almacena los leads en el array
                }
            } catch (error) {
                this.errLeads();
            }
            this.loadContactos();
        },

        VerContactoModal(id) {
            this.loadContactos(id);
            this.selectContacto = id;
            console.log('Valor de id:', id);
        },
        async GestionarLead(LeadID) {
            try {
                const response = await axios.get(`http://localhost:4000/leads/${LeadID}`);

                const { lead } = response.data;

                console.log('Lead:', lead);

                // Verificar si el lead se encontró
                if (!lead) {
                    // Manejar el caso en el que el lead no se encuentre
                    console.error('Lead no encontrado');
                    return;
                }
                const fechaNacimiento = lead.FechaNac.split('T')[0]; // Suponiendo que el formato es ISO (yyyy-mm-dd)

                // Aquí puedes asignar la información del lead al modal o a otras variables para mostrarla en el modal
                this.inputName = lead.NombreCompleto;
                this.inputTelefono = lead.telefono;
                this.inputTelefono2 = lead.telefono2;
                this.inputCorreo = lead.CorreoElectronico;
                this.inputCorreo2 = lead.CorreoElectronico2;
                // Obtenemos solo la parte de la fecha
                // Asignamos la parte de la fecha al modal
                this.inputFechaNacimiento = fechaNacimiento;
                this.inputEscuelaProcedencia = lead.EscuelaProcedencia;
                this.selectedCountry = lead.NombrePais;
                this.selectedState = lead.NombreEstado;
                this.selectedMunicipio = lead.NombreCiudad;
                this.inputPSeguimiento = lead.PSeguimiento;
                this.inputCarreraInteres = lead.CarreraInteresID;
                this.inputGrado = lead.Grado;
                this.inputPrograma = lead.Programa;
                this.inputEstatusInscripcion = lead.EstatusInsc;
                this.inputSemestreIngreso = lead.SemestreIngreso;
                this.inputCiclo = lead.Ciclo;
                this.inputCampana = lead.CampanaID;
                // Puedes realizar otras acciones, como mostrar el modal o asignar la información a variables del mo
            } catch (error) {
                // Manejar errores de la solicitud HTTP
                console.error('Error al obtener el lead:', error);
                // Puedes mostrar un mensaje de error al usuario o realizar alguna otra acción
            }
        },

        async loadContactos(id) {
            console.log('Valor de id:', id);
            axios.get(`http://localhost:4000/leads/contacto/${id}`)
                .then(response => {
                    this.contactos = response.data.contacto;
                    if (this.contactos) {
                        this.$modal.show('verContacto');
                    } else {
                        console.error('El objeto de comentarios es nulo o indefinido');

                    }
                })
                .catch(error => {
                    console.error('Error al obtener los comentarios del lead:', error);
                    console.log('Contactos:', this.contactos);
                    // Manejar el error de alguna manera, por ejemplo, mostrar un mensaje al usuario
                });
        },
        async loadCountries() {
            axios.get('https://restcountries.com/v3.1/all')
                .then(response => {
                    this.countries = response.data;
                })
                .catch(error => {
                    console.error('Error al obtener los paises:', error);
                    // Manejar el error de alguna manera, por ejemplo, mostrar un mensaje al usuario
                });
        },
        async loadEstadoMunicipio() {
            axios.get('/estados-municipios.json')
                .then(response => {
                    this.estadosMunicipios = response.data;
                })
                .catch(error => console.error('Error al obtener los estados y municipios:', error));
        },

        async loadCarreras() {
            try {
                const response = await axios.get('http://localhost:4000/carrera');
                if (response.data && response.data.carreras) {
                    this.CarreraInteres = response.data.carreras;
                }
            } catch (error) {
                console.log('Error al obtener las carreras:', error);
            }
        },
        async loadCampana() {
            try {
                const response = await axios.get('http://localhost:4000/campanas');
                if (response.data && response.data.campanas) {
                    this.Campanas = response.data.campanas;
                }
            } catch (error) {
                console.log('Error al obtener las carreras:', error);
            }
        },
        async loadMedioContacto() {
            try {
                const response = await axios.get('http://localhost:4000/medio-contacto');
                if (response.data && response.data.listMediosDeContacto) {
                    this.medioContactos = response.data.listMediosDeContacto;
                }
            } catch (error) {
                console.log('Error al obtener las carreras:', error);
            }
        },
        preventBack(event) {
            // Verifica si hay un estado personalizado en el historial
            if (event.state && event.state.noBackExitsApp) {
                // Vuelve a agregar el estado y evita retroceder
                window.history.pushState({ noBackExitsApp: true }, null, null);
            } else {
                window.history.pushState({ noBackExitsApp: true }, null, null);
            }
        },

        formatDate(date) {
            if (date) {
                const formattedDate = format(new Date(date), "dd/MM/yyyy");
                return formattedDate;
            } else {
                return '';
            }
            // Formatea la fecha utilizando date-fns

        },

        enviarAsignaciones() {
            // Aquí puedes acceder a los leads seleccionados en this.selectedLeads
            console.log('Leads seleccionados:', this.updateLead);

            this.abrirModal();
            console.log("Modal visible:", this.updateManyModalVisible);
            // Puedes hacer lo que necesites con estos datos, como enviarlos al servidor, etc.
        },

        async updateSelectedLeads() {
            try {
                // Filtrar los leads seleccionados
                const selectedLeadsData = this.leads.filter((lead) => this.selectedLeads.includes(lead.LeadID));

                // Realizar la solicitud al backend
                const response = await axios.put('/update-multiple', selectedLeadsData);
                console.log(response.data); // Manejar la respuesta del backend
            } catch (error) {
                console.error('Error al actualizar los leads:', error);
            }
        },

        abrirModal() {
        },

        cerrarModal() {
            this.window.location.reload();
        },

    },
    watch: {
        leads: {
            handler() {
                // Este método se ejecutará cada vez que 'leads' cambie
                // Puedes realizar cualquier lógica adicional aquí
                this.filterList; // Llamar a filterList cuando leads cambie
                this.formatDate;
                this.loadContactos;
                this.loadCountries;
                this.loadEstadoMunicipio;
                this.loadCarreras;
                this.loadCampana;
                this.loadMedioContacto;
                this.VerContactoModal;
            },
        },
        inmediate: true,
    },
    components: { SideBarProm, DatePicker },
};

</script>
 
<style></style>