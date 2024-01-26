<template>
    <header>
        <div class="lg:ml-64 p-4">
            <i class="fas fa-bars-progress text-2xl" style="color: #48c9b0"></i>
            <span id="posicion" class="ml-2 text-gray-500 dark:text-gray-400 text-lg">Leads</span>

            <div v-if="leads.length" class="flex-1 p-4">
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
                                            Completo *</label>
                                        <input type="text" name="name" id="name"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            v-model="inputName" placeholder="Nombre Completo" required="">
                                    </div>
                                    <!-- Telefono -->
                                    <div class="col-span-2 sm:col-span-1">
                                        <label for="number"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Teléfono
                                            *</label>
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
                                            v-model="inputTelefono2" placeholder="Número de teléfono">
                                    </div>
                                    <!-- CorreoElectronico -->
                                    <div class="col-span-2 sm:col-span-1">
                                        <label for="price"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo
                                            Electrónico *</label>
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
                                            v-model="inputCorreo2" placeholder="Correo Electrónico">
                                    </div>
                                    <!-- FechaNacimiento -->
                                    <div class="col-span-2 sm:col-span-1">
                                        <label for="date"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fecha de
                                            Nacimiento</label>
                                        <DatePicker v-model="leads.FechaNac" :placeholder="inputFechaNacimiento"
                                            class="input-field rounded-md" :clearable="true" />
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
                                            v-model="inputEscuelaProcedencia" placeholder="Escuela de Procedencia">
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
                                    <!-- Estado -->
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
                                    <!-- Municipio -->
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
                                    <!-- Estado otro-->
                                    <div v-if="selectedCountry !== 'Mexico'">
                                        <label for="otro-estado"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Estado</label>
                                        <input type="text" id="otro-estado"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            required v-model="selectedState">
                                    </div>
                                    <!-- Municipio otro -->
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
                                    <!-- Fecha Primer Contacto-->
                                    <div class="col-span-2 sm:col-span-1">
                                        <label for="date"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fecha
                                            Primer
                                            Contacto</label>
                                        <DatePicker v-model="leads.FechaPrimerContacto"
                                            :placeholder="inputFechaPrimerContacto" class="input-field rounded-md" :clearable="true"/>
                                    </div>
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
                                            interes *</label>
                                        <select id="carrera-interes"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            v-model="inputCarreraInteres">
                                            <option v-for="carreras in CarreraInteres" :key="carreras.Nombre"
                                                :value="carreras.CarreraID" required="">{{ carreras.Nombre }}</option>
                                        </select>
                                    </div>
                                    <!-- Grado -->
                                    <div>
                                        <label for="grado"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Grado</label>
                                        <select id="grado"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            v-model="inputGrado">
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
                                            <option v-for="programa in Programas" :key="programa" :value="programa">{{
                                                programa }}</option>
                                        </select>
                                    </div>
                                    <!-- EstatusInsc -->
                                    <div>
                                        <label for="estatus-inscripcion"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Estatus de
                                            inscripción</label>
                                        <select id="estatus-inscripcion"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            v-model="inputEstatusInscripcion">
                                            <option v-for="estatus in EstatusIncripcion" :key="estatus" :value="estatus">{{
                                                estatus }}</option>
                                        </select>
                                    </div>
                                    <!-- SemestreIngreso -->
                                    <div>
                                        <label for="semestre-ingreso"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Semestre de
                                            ingreso</label>
                                        <select id="semestre-ingreso"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            v-model="inputSemestreIngreso">
                                            <option v-for="semestre in SemestreIngreso" :key="semestre" :value="semestre">{{
                                                semestre }}</option>
                                        </select>
                                    </div>
                                    <!-- Ciclo -->
                                    <div>
                                        <label for="ciclo"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Ciclo</label>
                                        <input type="text" id="ciclo"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            v-model="inputCiclo" placeholder="Ingresa el ciclo 2022-1" required="">
                                    </div>
                                    <!-- Campana -->
                                    <div>
                                        <label for="campana"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Campaña</label>
                                        <select id="semestre-ingreso"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            v-model="inputCampana">
                                            <option v-for="campanas in Campanas" :key="campanas.CampanaID"
                                                :value="campanas.CampanaID">{{
                                                    campanas.Nombre }}</option>
                                        </select>
                                    </div>
                                    <!--AsetNameForm-->
                                    <div>
                                        <label for="asetNameForm"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            AsetNameForm</label>
                                        <input type="text" id="asetNameForm"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            v-model="inputAsetNameForm" placeholder="Ingresa el nombre de la campaña">
                                    </div>
                                    <!--Organico/Pauta-->
                                    <div>
                                        <label for="pauta-organica"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pauta/Organic</label>
                                        <select id="pauta-organica"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            v-model="inputIsOrganic">
                                            <option v-for="pauta in isOrganic" :key="pauta" :value="pauta">{{ pauta }}
                                            </option>
                                        </select>
                                    </div>
                                    <!--Medio de Contacto-->
                                    <div>
                                        <label for="ps-seguimiento"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Medio de
                                            Contacto</label>
                                        <select id="ps-seguimiento"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            v-model="inputMedioContacto">
                                            <option v-for="contacto in medioContactos" :key="contacto.MedioID"
                                                :value="contacto.MedioID">{{ contacto.Nombre }}</option>
                                        </select>
                                    </div>
                                    <!--Tipo de referido-->
                                    <div>
                                        <label for="tipo-referido"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tipo de
                                            Referido</label>
                                        <select id="tipo-referido"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            v-model="inputTipoReferido">
                                            <option v-for="referido in tipoReferido" :key="referido" :value="referido">{{
                                                referido }}</option>
                                        </select>
                                    </div>
                                    <!--Nombre del Referido-->
                                    <div>
                                        <label for="referido"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Nombre del Referido</label>
                                        <input type="text" id="referido"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            v-model="inputNombreReferido" placeholder="Ingresa el nombre del referido"
                                            required="">
                                    </div>
                                    <!--DondeObtDato-->
                                    <div>
                                        <label for="donde-obtuvo-dato"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Donde
                                            obtuvo el dato</label>
                                        <select id="donde-obtuvo-dato"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            v-model="inputDondeObtuvoDato">
                                            <option v-for="dato in dondeObtuvoDato" :key="dato" :value="dato">{{ dato }}
                                            </option>
                                        </select>
                                    </div>
                                </div>

                                <!-- Datos de Inscripcion -->
                                <hr class="my-1 border-black" />
                                <h2 class="text-2xl text-white text-center font-bold mb-4 bg-emerald-500 rounded-xl">
                                    Datos de Inscripcion
                                </h2>
                                <div class="grid gap-4 mb-4 grid-cols-2">

                                    <!-- Fecha Inscripcion-->
                                    <div class="col-span-2 sm:col-span-1">
                                        <label for="date"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fecha de
                                            Inscripción</label>
                                        <DatePicker v-model="leads.FechaInscripcion" :placeholder="inputFechaInscripcion"
                                            class="input-field rounded-md" />
                                    </div>
                                    <!--Carrera Inscripción-->
                                    <div>
                                        <label for="carrera-inscripcion"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Carrera de
                                            Inscripción</label>
                                        <select id="carrera-inscripcion"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            v-model="inputCarreraInscripcion">
                                            <option v-for="carrera in CarreraInscrita" :key="carrera.CarreraID"
                                                :value="carrera.CarreraID">{{ carrera.Nombre }}</option>
                                        </select>
                                    </div>
                                    <!--Beca Ofrecida-->
                                    <div>
                                        <label for="becaOfrecida"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Beca Ofrecida</label>
                                        <input type="text" id="becaOfrecida"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            v-model="inputBecaOfrecida" placeholder="Ingresa el valor de la Beca"
                                            required="">
                                    </div>

                                </div>

                                <button @click="actualizarLead(leadParaGestionar, $event)" type="submit"
                                    data-modal-toggle="crud-modal"
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
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ciclo
                                        </label>
                                        <input v-model="updateLead.Ciclo" type="text" id="ciclo"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
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
                                        @click="selectCategory('CorreoElectronico')">
                                        CorreoElectronico
                                    </button>
                                </li>
                                <li>
                                    <button type="button"
                                        class="dropdown-item inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        @click="selectCategory('EscuelaProcedencia')">
                                        Escuela de Procedencia
                                    </button>
                                </li>
                                <li>
                                    <button type="button"
                                        class="dropdown-item inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        @click="selectCategory('Pais')">
                                        Nombre Pais
                                    </button>
                                </li>
                                <li>
                                    <button type="button"
                                        class="dropdown-item inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        @click="selectCategory('Estado')">
                                        Nombre Estado
                                    </button>
                                </li>
                                <li>
                                    <button type="button"
                                        class="dropdown-item inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        @click="selectCategory('Ciudad')">
                                        Nombre Ciudad
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
                        <input v-model="input" type="search" id="default-search" name="leadSearch"
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
                            <option v-for="filtrado in filtradoSelect" :key="filtrado" :value="filtrado">{{ filtrado }}
                            </option>
                        </select>
                    </div>

                    <div v-if="selectedFiltrado === 'PSeguimiento'">
                        <select id="ps-seguimiento" v-model="subSelectedFiltrado"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Escoge estatus</option>
                            <option v-for="ps in PSeguimientos" :key="ps" :value="ps">{{ ps }}</option>
                        </select>
                    </div>
                    <div v-if="selectedFiltrado === 'Promotor Actual'">
                        <select id="promotor-actual" v-model="subSelectedFiltrado"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Escoge un promotor</option>
                            <option v-for="promotor in Promotores" :key="promotor" :value="promotor.PromotorID">{{
                                promotor.Nombre }}</option>
                        </select>
                    </div>
                    <div v-if="selectedFiltrado === 'Medio de Contacto'">
                        <select id="medio-contacto" v-model="subSelectedFiltrado"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Escoge un medio de contacto</option>
                            <option v-for="medio in medioContactos" :key="medio" :value="medio.MedioID">{{ medio.Nombre }}
                            </option>
                        </select>
                    </div>
                    <div v-if="selectedFiltrado === 'Carrera'">
                        <select id="carrea-interes" v-model="subSelectedFiltrado"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Escoge una carrera</option>
                            <option v-for="carrera in CarreraInteres" :key="carrera" :value="carrera.CarreraID">{{
                                carrera.Nombre }}</option>
                        </select>
                    </div>
                    <div v-if="selectedFiltrado === 'Grado'">
                        <select id="grado" v-model="subSelectedFiltrado"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Escoge un programa</option>
                            <option v-for="grado in Grados" :key="grado" :value="grado">{{ grado }}</option>

                        </select>
                    </div>
                    <div v-if="selectedFiltrado === 'Programa'">
                        <select id="programa" v-model="subSelectedFiltrado"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Escoge un programa</option>
                            <option v-for="programa in Programas" :key="programa" :value="programa">{{ programa }}</option>

                        </select>
                    </div>
                    <div v-if="selectedFiltrado === 'Campaña'">
                        <select id="campaña" v-model="subSelectedFiltrado"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Escoge una campaña</option>
                            <option v-for="campana in Campanas" :key="campana" :value="campana.CampanaID">{{ campana.Nombre
                            }}</option>
                        </select>
                    </div>
                    <div v-if="selectedFiltrado === 'IsOrganic'">
                        <select id="isOrganic" v-model="subSelectedFiltrado"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Escoge una opción</option>
                            <option v-for="isO in isOrganic" :key="isO" :value="isO">{{ isO }}</option>
                        </select>
                    </div>
                    <button type="button"
                        class="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        @click="BorrarFiltros()">Borrar Filtros</button>

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
                    <thead style="background-color: #48c9b0"
                        class="text-xs uppercase dark:bg-gray-700 text-white sticky-header">
                        <tr>
                            <th scope="col" class="px-6 py-3">
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
                            <th scope="col" class="px-6 py-3">
                                Escuela Procedencia
                            </th>
                            <th scope="col" class="px-6 py-3">
                                País
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Estado
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Ciudad
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
                            <td class="px-6 py-4">
                                {{ lead.EscuelaProcedencia }}
                            </td>
                            <td class="px-6 py-4">
                                {{ lead.NombrePais }}
                            </td>
                            <td class="px-6 py-4">
                                {{ lead.NombreEstado }}
                            </td>
                            <td class="px-6 py-4">
                                {{ lead.NombreCiudad }}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="grid justify-items-center" v-if="!filterList.length" style="background-color: #F4D03F;">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-500 dark:text-grey">No hay leads asignados
                    </h5>
                </div>
            </div>
            <br>
            <button v-show="hasSelectedLeads" type="button" data-modal-target="update-many" data-modal-toggle="update-many"
                class="focus:outline-none text-black bg-yellow-400 hover:bg-yellow-300 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                style="text-align: left; float: left;" @click="enviarAsignaciones">
                <i class="fas fa-regular fa-paper-plane"></i> Actualizar varios
            </button>

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
import { es, th } from "date-fns/locale";

const picked = ref(new Date())


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
    props: ['selectContacto'],

    data() {
        return {
            isDropdownOpen: false,
            selectedCategory: 'Nombre',
            userName: getUserName(),
            VerContacto: null,
            leads: [],
            LeadIndividual: [],
            contactos: [],
            selectedLeads: [], // Arreglo para almacenar los leads seleccionados
            leadParaGestionar: null,
            input: ref(''),
            countries: [],
            estadosMunicipios: {},
            selectedLeadFechaNacimiento: '',
            selectedCountry: 'Mexico',
            selectedState: '',
            selectedMunicipio: '',
            PSeguimientos: ['AU-ALUMNO UNINTER', 'INSC-INSCRIPCIÓN', 'NI-NO INTERESA', 'P-PROSPECTO', 'PI-INSCRIPCIÓN', 'PS-SEGUIMIENTO', 'SC-SIN CONTACTO', 'PU-PERSONAL UNINTER', 'DU-DUPLICADO', 'DI-DATO NO VALIDO', 'BA-BAJA ALUMNO', 'VACIO'],
            CarreraInteres: [],
            CarreraInscrita: [],
            Grados: ['SECUNDARIA', 'BACHILLERATO', 'PREPA-A', 'LIC/ING', 'ESPECIALIDAD', 'DIPLOMADO', 'MAESTRIA', 'DOCTORADO', 'NO ESPECIFICA'],
            Programas: ['ADMINISTRACIÓN', 'ADMINISTRACION DE EMPRESAS', 'ADMINISTRACION DE NEGOCIOS INTERNACIONALES', 'ARQ', 'BACHILLERATO SEMESTRAL', 'BILINGÜE', 'BIU', 'BIUB', 'BIUM', 'CIENCIAS POLÍTICAS, RELACIONES INT.', 'CLS PRT', 'CORP', 'CURSO DE VERANO', 'Curso Intensivo', 'DAD', 'DDI', 'DDPAI', 'DEI', 'DEPU', 'DHU', 'DI', 'DIP', 'DISEÑO DE MODAS', 'DISEÑO GRÁFICO', 'DMD', 'DPU', 'EAO', 'EAPD', 'EAPD y LADD', 'EATL', 'LDI', 'LDM', 'LECE', 'LED', 'LEF', 'LEM',
                'LEMK', 'LEMP', 'LIC', 'LICENCIATURA', 'LID', 'LPS', 'LRI', 'MADE', 'MADEL', 'MARET', 'MDG', 'MEL', 'MELE', 'MERCADOTECNIA', 'MGC', 'MI', 'NIÑOS', 'OFERTA EDUCATIVA', 'PEDAGOGÍA', 'PREPA A', 'PREPA-A', 'REGLR', 'SIU', 'SIUB', 'SIUM', 'UNI LAE', 'LPE'],
            EstatusIncripcion: ['INSO', 'REZA', 'INSC', 'BAJA', 'ARCHIVAR'],
            SemestreIngreso: ['1 Semestre', '2 Semestre', '3 Semestre', '4 Semestre', '5 Semestre', '6 Semestre', '7 Semestre', '8 Semestre', 'Maestria', 'Doctorado', 'Licenciatura', 'Diplomados'],
            Campanas: [],
            Promotores: [],
            isOrganic: ['PAUTA', 'ORGÁNICO'],
            medioContactos: [],
            tipoReferido: ['ESTUDIANTE', 'FAMILIAR DE ALGÚN ESTUDIANTE', 'PERSONAL UNINTER', 'NINGUNO'],
            dondeObtuvoDato: ["B_AFC", "B_EMPRESAS", "B_ESTRATEGIA VACACIONES EQUI", "B_PERSONAL", "B_POSGRADOS", "BARRIDO BASE", "BARRIDO EGRESADOS",
                "BASE EGRESADOS", "BASE FAMILIAR", "CLIENGO", "ESTRATEGIA EQUIPO MORADO", "EXPO EDUCATIVA", "REDES SOCIALES META FACEBOOK", "REDES SOCIALES META INSTAGRAM",
                "LANDING", "LANDING CARRERAS", "LANDING FORMULARIO", "LANDING TOT", "LLAMADA UNINTER", "OPEN SCHOOL ESPECIAL POR CONVENIO CON EMPRESA",
                "VISITA UNINTER"],
            updateLead: {
                EscuelaProcedencia: null,
                NombrePais: null,
                NombreEstado: null,
                NombreCiudad: null,
                PSeguimiento: null,
                Programa: null,
                CarreraInteresID: null,
                CarreraInscripcion: null,
                Grado: null,
                EstatusInsc: null,
                SemestreIngreso: null,
                Ciclo: null,
                CampanaID: null,
                AsetNameForm: null,
                IsOrganic: null,
                MedioDeContactoID: null,
                ids: null,
                TipoReferido: null,
                DondeObtuvoDato: null,
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
            inputFechaPrimerContacto: null,
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
            inputMedioContacto: null,
            inputTipoReferido: null,
            inputNombreReferido: null,
            inputDondeObtuvoDato: null,
            inputFechaInscripcion: null,
            inputFechaPromotorOriginal: null,
            inputCarreraInscripcion: null,
            inputBecaOfrecida: null,
            inputNumeroLista: null,
            inputPromotorOriginal: null,
            inputPromotorActual: null,
            inputFechaPromotorActual: null,
            filtradoSelect: ['PSeguimiento', 'Promotor Actual', 'Medio de Contacto', 'Carrera', 'Grado', 'Programa', 'Campaña', 'IsOrganic'],
            selectedFiltrado: 'PSeguimiento',
            subSelectedFiltrado: null,
        };
    },
    computed: {
        filterList() {

            if (this.leads.length === 0) {
                return [];
            }

            console.log('Valor de lead:', this.leads);
            console.log('Valor de SubselectedFiltrado:', this.subSelectedFiltrado);

            if (this.selectedFiltrado == 'PSeguimiento' && this.subSelectedFiltrado) {
                return this.leads.filter(lead => {
                    const pSeguimiento = lead && lead.PSeguimiento ? lead.PSeguimiento : "";
                    return pSeguimiento.includes(this.subSelectedFiltrado);
                });
            }

            if (this.selectedFiltrado == 'Promotor Actual' && this.subSelectedFiltrado) {
                return this.leads.filter(lead => {
                    const promotorActualSelect = lead && lead.promotorActual ? lead.promotorActual : "";
                    return promotorActualSelect === this.subSelectedFiltrado;
                });
            }

            if (this.selectedFiltrado == 'Medio de Contacto' && this.subSelectedFiltrado) {
                return this.leads.filter(lead => {
                    const medioContactoSelect = lead && lead.MedioDeContactoID ? lead.MedioDeContactoID : "";
                    return medioContactoSelect === this.subSelectedFiltrado;
                });
            }

            if (this.selectedFiltrado == 'Carrera' && this.subSelectedFiltrado) {
                return this.leads.filter(lead => {
                    const carreraSelect = lead && lead.CarreraInteresID ? lead.CarreraInteresID : "";
                    return carreraSelect === this.subSelectedFiltrado;
                });
            }

            if (this.selectedFiltrado == 'Grado' && this.subSelectedFiltrado) {
                return this.leads.filter(lead => {
                    const gradoSelect = lead && lead.Grado ? lead.Grado : "";
                    return gradoSelect === this.subSelectedFiltrado;
                });
            }

            if (this.selectedFiltrado == 'Programa' && this.subSelectedFiltrado) {
                return this.leads.filter(lead => {
                    const programaSelect = lead && lead.Programa ? lead.Programa : "";
                    return programaSelect === this.subSelectedFiltrado;
                });
            }

            if (this.selectedFiltrado == 'Campaña' && this.subSelectedFiltrado) {
                return this.leads.filter(lead => {
                    const campanaSelect = lead && lead.CampanaID ? lead.CampanaID : "";
                    return campanaSelect === this.subSelectedFiltrado;
                });
            }

            if (this.selectedFiltrado == 'IsOrganic' && this.subSelectedFiltrado) {
                return this.leads.filter(lead => {
                    const isOrganicSelect = lead && lead.IsOrganic ? lead.IsOrganic : "";
                    return isOrganicSelect === this.subSelectedFiltrado;
                });
            }

            if (this.selectedCategory == 'Nombre') {
                return this.leads.filter(lead => {
                    const nombreCompleto = lead && lead.NombreCompleto ? lead.NombreCompleto : "";
                    return nombreCompleto.toLowerCase().includes(this.input.toLowerCase());
                });
            }

            if (this.selectedCategory == 'Telefono') {
                return this.leads.filter(lead => {
                    const telefonoSearch = lead && lead.telefono ? lead.telefono : "";
                    return telefonoSearch.toLowerCase().includes(this.input.toLowerCase());
                });
            }

            if (this.selectedCategory == 'CorreoElectronico') {
                return this.leads.filter(lead => {
                    const correoElectronicoSearch = lead && lead.CorreoElectronico ? lead.CorreoElectronico : "";
                    return correoElectronicoSearch.toLowerCase().includes(this.input.toLowerCase());
                });
            }

            if (this.selectedCategory == 'EscuelaProcedencia') {
                return this.leads.filter(lead => {
                    const escuelaProcedenciaSearch = lead && lead.EscuelaProcedencia ? lead.EscuelaProcedencia : "";
                    return escuelaProcedenciaSearch.toLowerCase().includes(this.input.toLowerCase());
                });
            }

            if (this.selectedCategory == 'Pais') {
                return this.leads.filter(lead => {
                    const paisSearch = lead && lead.NombrePais ? lead.NombrePais : "";
                    return paisSearch.toLowerCase().includes(this.input.toLowerCase());
                });
            }

            if (this.selectedCategory == 'Estado') {
                return this.leads.filter(lead => {
                    const estadoSearch = lead && lead.NombreEstado ? lead.NombreEstado : "";
                    return estadoSearch.toLowerCase().includes(this.input.toLowerCase());
                });
            }

            if (this.selectedCategory == 'Ciudad') {
                return this.leads.filter(lead => {
                    const ciudadSearch = lead && lead.NombreCiudad ? lead.NombreCiudad : "";
                    return ciudadSearch.toLowerCase().includes(this.input.toLowerCase());
                });
            }

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
        this.loadPromotor();
        this.loadMedioContacto();
        this.VerContactoModal();
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
                console.log(response.data);

                const { lead } = response.data;

                this.LeadIndividual = response.data.lead;

                console.log('Lead:', lead);

                // Verificar si el lead se encontró
                if (!lead) {
                    // Manejar el caso en el que el lead no se encuentre
                    console.error('Lead no encontrado');
                    return;
                }


                // Aquí puedes asignar la información del lead al modal o a otras variables para mostrarla en el modal
                this.inputName = lead.NombreCompleto;
                this.inputTelefono = lead.Telefono;
                this.inputTelefono2 = lead.telefono2;
                this.inputCorreo = lead.CorreoElectronico;
                this.inputCorreo2 = lead.CorreoElectronico2;
                // Obtenemos solo la parte de la fecha
                // Asignamos la parte de la fecha al modal
                this.inputFechaNacimiento = lead.FechaNac ? lead.FechaNac.split('T')[0] : '';;
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
                this.inputAsetNameForm = lead.AsetNameForm;
                this.inputFechaPrimerContacto = lead.FechaPrimerContacto ? lead.FechaPrimerContacto.split('T')[0] : '';;
                this.inputIsOrganic = lead.IsOrganic;
                this.inputMedioContacto = lead.MedioDeContactoID;
                this.inputTipoReferido = lead.TipoReferido;
                this.inputNombreReferido = lead.NombreReferido;
                this.inputDondeObtuvoDato = lead.DondeObtDato;
                this.inputFechaInscripcion = lead.FechaInscripcion ? lead.FechaInscripcion.split('T')[0] : '';;
                this.inputCarreraInscripcion = lead.CarreraInscripcion;
                this.inputBecaOfrecida = lead.BecaOfrecida;

                this.leadParaGestionar = lead.LeadID;
                // Puedes realizar otras acciones, como mostrar el modal o asignar la información a variables del modal
                this.loadContactos(LeadID);
                lead.FechaNac = null;
            } catch (error) {
                // Manejar errores de la solicitud HTTP
                console.error('Error al obtener el lead:', error);
                // Puedes mostrar un mensaje de error al usuario o realizar alguna otra acción
            }
            this.leads.FechaNac = null;
            this.leads.FechaPrimerContacto = null;
            this.leads.FechaInscripcion = null;
        },

        async actualizarLead(LeadID, event) {
            event.preventDefault();

            // Verificar si hay cambios
            const hayCambios = this.hayCambiosEnDatos();

            if (hayCambios) {
                try {

                    const response = await axios.put(`http://localhost:4000/leads/update/${LeadID}`, {
                        
                        // Datos a actualizar
                        NombreCompleto: this.inputName,
                        Telefono: this.inputTelefono,
                        Telefono2: this.inputTelefono2,
                        CorreoElectronico: this.inputCorreo,
                        CorreoElectronico2: this.inputCorreo2,
                        FechaNac: this.leads.FechaNac,
                        EscuelaProcedencia: this.inputEscuelaProcedencia,
                        NombrePais: this.selectedCountry,
                        NombreEstado: this.selectedState,
                        NombreCiudad: this.selectedMunicipio,
                        FechaPrimerContacto: this.leads.FechaPrimerContacto,
                        PSeguimiento: this.inputPSeguimiento,
                        CarreraInteresID: this.inputCarreraInteres,
                        Grado: this.inputGrado,
                        Programa: this.inputPrograma,
                        EstatusInsc: this.inputEstatusInscripcion,
                        SemestreIngreso: this.inputSemestreIngreso,
                        Ciclo: this.inputCiclo,
                        CampanaID: this.inputCampana,
                        AsetNameForm: this.inputAsetNameForm,
                        IsOrganic: this.inputIsOrganic,
                        MedioDeContactoID: this.inputMedioContacto,
                        TipoReferido: this.inputTipoReferido,
                        NombreReferido: this.inputNombreReferido,
                        DondeObtDato: this.inputDondeObtuvoDato,
                        FechaInscripcion: this.leads.FechaInscripcion,
                        CarreraInscripcion: this.inputCarreraInscripcion,
                        BecaOfrecida: this.inputBecaOfrecida,

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
            this.loadLeads();
        },

        hayCambiosEnDatos() {
            // Aquí debes comparar los datos actuales con los datos originales para determinar si hay cambios
            // Puedes utilizar condiciones como (this.inputName !== this.leads.NombreCompleto) para cada campo
            // Devuelve true si hay algún cambio, y false si no hay cambios

            return this.inputName !== this.LeadIndividual.NombreCompleto || this.inputTelefono !== this.LeadIndividual.Telefono 
            || this.inputTelefono2 !== this.LeadIndividual.telefono2 || this.inputCorreo !== this.LeadIndividual.CorreoElectronico
            || this.inputCorreo2 !== this.LeadIndividual.CorreoElectronico2 || this.leads.FechaNac !== this.LeadIndividual.FechaNac
            || this.inputEscuelaProcedencia !== this.LeadIndividual.EscuelaProcedencia || this.selectedCountry !== this.LeadIndividual.NombrePais
            || this.selectedState !== this.LeadIndividual.NombreEstado || this.selectedMunicipio !== this.LeadIndividual.NombreCiudad
            || this.leads.FechaPrimerContacto !== null || this.inputPSeguimiento !== this.LeadIndividual.PSeguimiento
            || this.inputCarreraInteres !== this.LeadIndividual.CarreraInteresID || this.inputGrado !== this.LeadIndividual.Grado
            || this.inputPrograma !== this.LeadIndividual.Programa || this.inputEstatusInscripcion !== this.LeadIndividual.EstatusInsc
            || this.inputSemestreIngreso !== this.LeadIndividual.SemestreIngreso || this.inputCiclo !== this.LeadIndividual.Ciclo
            || this.inputCampana !== this.LeadIndividual.CampanaID || this.inputAsetNameForm !== this.LeadIndividual.AsetNameForm
            || this.inputIsOrganic !== this.LeadIndividual.IsOrganic || this.inputMedioContacto !== this.LeadIndividual.MedioDeContactoID
            || this.inputTipoReferido !== this.LeadIndividual.TipoReferido || this.inputNombreReferido !== this.LeadIndividual.NombreReferido
            || this.inputDondeObtuvoDato !== this.LeadIndividual.DondeObtDato || this.leads.FechaInscripcion !== null
            || this.inputCarreraInscripcion !== this.LeadIndividual.CarreraInscripcion || this.inputBecaOfrecida !== this.LeadIndividual.BecaOfrecida;
        },

        async loadContactos(id) {
            if (!id) {
                return;
            }
            console.log('Valor de id:', id);
            axios.get(`http://localhost:4000/leads/contacto/${id}`)
                .then(response => {
                    this.contactos = response.data.contacto;
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
                    this.CarreraInscrita = response.data.carreras;
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
        toggleDropdown() {
            this.isDropdownOpen = !this.isDropdownOpen;
        },
        selectCategory(category) {
            this.selectedCategory = category;
            this.isDropdownOpen = false;
            // Aquí puedes realizar cualquier otra acción necesaria con la categoría seleccionada
        },

        BorrarFiltros() {
            this.selectedFiltrado = 'PSeguimiento';
            this.subSelectedFiltrado = null;
            this.input = '';
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
                this.loadPromotor;
                this.loadMedioContacto;
                this.VerContactoModal;
            },
        },
        inmediate: true,
    },
    components: { SideBarProm, DatePicker },
};

</script>
 
<style>.sticky-header th {
    position: sticky;
    top: 0;
    background-color: #48C9B0;
    /* Color de fondo del encabezado */
    z-index: 1;
    /* Para asegurarse de que esté encima del contenido al hacer scroll */
}</style>