<template>
  <div>
    <div class="lg:ml-64 p-4">
      <i class="fas fa-bars-progress text-2xl" style="color: #48c9b0"></i>
      <span id="posicion" class="ml-2 text-gray-500 dark:text-gray-400 text-lg"
        >Registrar Lead</span
      >
    </div>
    <div>
      <SideBarProm />
    </div>

    <div class="relative p-4 w-full max-w-2xl mx-auto max-h-full">
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <form @submit.prevent="crearLead" class="bg-white shadow-md rounded">
          <!-- Datos Personales -->
          <div class="mb-8">
            <h2
              class="text-2xl text-white text-center font-bold mb-4 bg-emerald-500 rounded-xl"
            >
              Datos Personales
            </h2>
            <div class="grid grid-cols-2 md:grid-cols-2 gap-4">
              <!-- Primer Columna -->
              <div class="mb-4 col-span-full md:col-span-1 text-center">
                <label
                  class="block mb-2 text-gray-700 text-sm font-medium"
                  for="nombre"
                  >Nombre Completo:</label
                >
                <input
                  v-model="lead.NombreCompleto"
                  type="text"
                  id="nombre"
                  placeholder="Nombre completo"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <p
                  v-if="lead.NombreCompleto && !validateNombre"
                  class="error-message text-red-600"
                >
                  Por favor, ingresa un nombre válido.
                </p>
              </div>

              <div class="mb-4 col-span-full md:col-span-1 text-center">
                <label
                  class="block mb-2 text-gray-700 text-sm font-medium"
                  for="telefono"
                  >Teléfono:</label
                >
                <input
                  v-model="lead.Telefono"
                  @input="validateTelefono"
                  type="tel"
                  id="telefono"
                  placeholder="Número de teléfono"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <p
                  v-if="lead.Telefono && !isTelefonoValido"
                  class="error-message text-red-600"
                >
                  Por favor, ingresa un número de teléfono válido.
                </p>
              </div>

              <div class="mb-4 col-span-full md:col-span-1 text-center">
                <label
                  class="block mb-2 text-gray-700 text-sm font-medium"
                  for="telefono2"
                  >Teléfono Adicional:</label
                >
                <input
                  v-model="lead.Telefono2"
                  type="number"
                  id="telefono2"
                  placeholder="Número de teléfono"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <p
                  v-if="lead.Telefono2 && !validateTelefono"
                  class="error-message text-red-600"
                >
                  Por favor, ingresa un número de teléfono válido.
                </p>
              </div>

              <!-- Segunda Columna -->
              <div class="mb-4 col-span-full md:col-span-1 text-center">
                <label
                  class="block mb-2 text-gray-700 text-sm font-medium"
                  for="correoElectronico"
                  >Correo Electrónico:</label
                >
                <input
                  v-model="lead.CorreoElectronico"
                  type="text"
                  id="correoElectronico"
                  placeholder="Correo Electrónico"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <p
                  v-if="lead.CorreoElectronico && !validateCorreoElectronico"
                  class="error-message text-red-600"
                >
                  Por favor, ingresa un correo electrónico válido.
                </p>
              </div>

              <div class="mb-4 col-span-full md:col-span-1 text-center">
                <label
                  class="block mb-2 text-gray-700 text-sm font-medium"
                  for="correoElectronico2"
                  >Correo Electrónico Adicional:</label
                >
                <input
                  v-model="lead.CorreoElectronico2"
                  type="text"
                  id="correoElectronico2"
                  placeholder="Correo Electrónico"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <p
                  v-if="lead.CorreoElectronico2 && !validateCorreoElectronico"
                  class="error-message text-red-600"
                >
                  Por favor, ingresa un correo electrónico válido.
                </p>
              </div>

              <!-- Fecha de Nacimiento... -->
              <div class="mb-4 col-span-full md:col-span-1 text-center">
                <label
                  class="block mb-2 text-gray-700 text-sm font-medium"
                  for="fechanacimiento"
                >
                  Fecha de Nacimiento:
                </label>
                <!-- checar -->
                <DatePicker
                  v-model="lead.FechaNacimiento"
                  placeholder="Fecha de Nacimiento"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          <!-- Datos de procedencia Académica -->
          <hr class="my-1 border-black" />
          <div class="mb-8">
            <h2
              class="text-2xl text-white text-center font-bold mb-4 bg-emerald-500 rounded-xl"
            >
              Datos de Procedencia Académica
            </h2>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
              <!-- Primera Columna -->
              <div class="mb-4 col-span-full md:col-span-1 text-center">
                <label
                  class="block mb-2 text-gray-700 text-sm font-bold"
                  for="escuela"
                  >Escuela de Procedencia:</label
                >
                <input
                  v-model="lead.EscuelaProcedencia"
                  type="text"
                  id="escuela"
                  placeholder="Nombre de Escuela"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <p
                  v-if="lead.EscuelaProcedencia && !validateEscuela"
                  class="error-message text-red-600"
                >
                  Por favor, ingresa un Nombre válido.
                </p>
              </div>

              <!-- Segunda Columna -->
              <div>
                <label
                  for="country"
                  class="block mb-2 text-sm font-bold text-gray-900 dark:text-white text-center"
                  >País</label
                >
                <select
                  v-model="lead.Pais"
                  id="country"
                  @change="cargarOpcionesUbicacion"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option
                    v-for="country in countries"
                    :key="country.name.common"
                    :value="country.name.common"
                  >
                    {{ country.name.common }}
                  </option>
                </select>
              </div>

              <div v-if="lead.Pais === 'Mexico'">
                <div>
                  <label
                    for="state"
                    class="block mb-2 text-sm font-bold text-gray-900 dark:text-white text-center"
                    >Selecciona un estado</label
                  >
                  <select
                    v-model="lead.Estado"
                    id="state"
                    @change="cargarMunicipios"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option v-for="state in estados" :key="state">
                      {{ state }}
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    for="city"
                    class="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
                    >Selecciona una ciudad</label
                  >
                  <select
                    v-model="lead.Municipio"
                    id="city"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option v-for="city in municipios" :key="city">
                      {{ city }}
                    </option>
                  </select>
                </div>
              </div>

              <div v-else>
                <div>
                  <label
                    for="otherState"
                    class="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
                    >Estado</label
                  >
                  <input
                    v-model="lead.Estado"
                    type="text"
                    id="otherState"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>

                <div>
                  <label
                    for="otherCity"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Ciudad</label
                  >
                  <input
                    v-model="lead.Municipio"
                    type="text"
                    id="otherCity"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
              </div>

              <div class="mb-4 col-span-full md:col-span-1 text-center">
                <label
                  class="block text-sm font-bold mb-2"
                  for="fechaPrimerContacto"
                  >Fecha Primer Contacto:</label
                >
                <DatePicker
                  v-model="lead.FechaPrimerContacto"
                  placeholder="Fecha Primer Contacto"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>

              <div class="mb-4 col-span-full md:col-span-1 text-center">
                <label class="block text-sm font-bold mb-2"
                  >Carrera de Interés:</label
                >
                <select
                  v-model="lead.CarreraInteresID"
                  id="carreraInteres"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option
                    v-for="carrera in carreras"
                    :key="carrera.CarreraID"
                    :value="carrera.CarreraID"
                  >
                    {{ carrera.Nombre }}
                  </option>
                </select>
              </div>

              <!-- Segunda Columna -->
              <div class="mb-4 col-span-full md:col-span-1 text-center">
                <label class="block text-sm font-bold mb-2" for="grado"
                  >Grado:</label
                >
                <select
                  v-model="lead.Grado"
                  id="grado"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option
                    v-for="opcion in opcionesGrado"
                    :key="opcion"
                    :value="opcion"
                  >
                    {{ opcion }}
                  </option>
                </select>
              </div>

              <div class="mb-4 col-span-full md:col-span-1 text-center">
                <label
                  class="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
                  for="programa"
                  >Programa:</label
                >
                <select
                  v-model="lead.Programa"
                  id="programa"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option
                    v-for="opcion in opcionesPrograma"
                    :key="opcion"
                    :value="opcion"
                  >
                    {{ opcion }}
                  </option>
                </select>
              </div>

              <div class="mb-4 col-span-full md:col-span-1 text-center">
                <label
                  class="block text-sm font-bold mb-2"
                  for="estatusInscripcion"
                  >Estatus de Inscripción:</label
                >
                <select
                  v-model="lead.EstatusInscripcion"
                  id="estatusInscripcion"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option
                    v-for="opcion in opcionesEstatusInscripcion"
                    :key="opcion"
                    :value="opcion"
                  >
                    {{ opcion }}
                  </option>
                </select>
              </div>

              <!-- Tercera Columna -->
              <div class="mb-4 col-span-full md:col-span-1 text-center">
                <label
                  class="block text-sm font-bold mb-2"
                  for="semestreIngreso"
                  >Semestre de Ingreso:</label
                >
                <select
                  v-model="lead.SemestreIngreso"
                  id="semestreIngreso"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option
                    v-for="opcion in opcionesSemestreIngreso"
                    :key="opcion"
                    :value="opcion"
                  >
                    {{ opcion }}
                  </option>
                </select>
              </div>

              <div class="mb-4 col-span-full md:col-span-1 text-center">
                <label class="block text-sm font-bold mb-2" for="ciclo"
                  >Ciclo:</label
                >
                <input
                  v-model="lead.Ciclo"
                  type="text"
                  id="ciclo"
                  placeholder="2024-1"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>

              <div class="mb-4 col-span-full md:col-span-1 text-center">
                <label class="block text-sm font-bold mb-2" for="campana"
                  >Campaña:</label
                >
                <select
                  v-model="lead.CampanaID"
                  id="campana"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option
                    v-for="campana in opcionesCampanas"
                    :key="campana.CampanaID"
                    :value="campana.CampanaID"
                  >
                    {{ campana.Nombre }}
                  </option>
                </select>
              </div>

              <!-- Cuarta Columna -->
              <div class="mb-4 col-span-full md:col-span-1 text-center">
                <label class="block text-sm font-bold mb-2" for="asetNameForm"
                  >AsetNameForm:</label
                >
                <input
                  v-model="lead.AsetNameForm"
                  type="text"
                  id="asetNameForm"
                  placeholder="AsetNameForm"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>

              <div class="mb-4 col-span-full md:col-span-1 text-center">
                <label class="block text-sm font-bold mb-2" for="isOrganic"
                  >Orgánico / Pauta:</label
                >
                <select
                  v-model="lead.IsOrganic"
                  id="isOrganic"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="PAUTA">PAUTA</option>
                  <option value="ORGÁNICO">ORGÁNICO</option>
                </select>
              </div>

              <!-- Quinta Columna -->
              <div class="mb-4 col-span-full md:col-span-1 text-center">
                <label
                  class="block text-sm font-bold mb-2"
                  for="mediosDeContacto"
                  >Medio de Contacto:</label
                >
                <select
                  v-model="selectedMedioDeContacto"
                  id="mediosDeContacto"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option
                    v-for="medio in mediosDeContacto"
                    :key="medio.MedioDeContactoID"
                    :value="medio.MedioDeContactoID"
                  >
                    {{ medio.Nombre }}
                  </option>
                </select>
              </div>

              <div class="mb-4 col-span-full md:col-span-1 text-center">
                <label class="block text-sm font-bold mb-2" for="tipoReferido"
                  >Tipo de Referido:</label
                >
                <select
                  v-model="lead.TipoReferido"
                  id="tipoReferido"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="ESTUDIANTE">ESTUDIANTE</option>
                  <option value="FAMILIAR DE ALGÚN ESTUDIANTE">
                    FAMILIAR DE ALGÚN ESTUDIANTE
                  </option>
                  <option value="PERSONAL UNINTER">PERSONAL UNINTER</option>
                  <option value="NINGUNO">NINGUNO</option>
                </select>
              </div>

              <!-- Sexta Columna -->
              <div class="mb-4 col-span-full md:col-span-1 text-center">
                <label class="block text-sm font-bold mb-2" for="nombreReferido"
                  >Nombre del Referido:</label
                >
                <input
                  v-model="lead.NombreReferido"
                  type="text"
                  id="nombreReferido"
                  placeholder="Nombre del Referido"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>

              <div class="mb-4 col-span-full md:col-span-1 text-center">
                <label class="block text-sm font-bold mb-2" for="dondeObtDato"
                  >Dónde obtuvo el dato:</label
                >
                <select
                  v-model="lead.DondeObtDato"
                  id="dondeObtDato"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option
                    v-for="opcion in opcionesDondeObtDato"
                    :key="opcion"
                    :value="opcion"
                  >
                    {{ opcion }}
                  </option>
                </select>
              </div>
            </div>
          </div>

          <hr class="my-1 border-black" />

          <div class="mb-8">
            <h2
              class="text-2xl text-white text-center font-bold mb-4 bg-emerald-500 rounded-xl p-2"
            >
              Datos de Inscripción
            </h2>
            <div class="grid grid-cols-2 gap-4 mx-auto">
              <!-- FechaInscripcion -->
              <div class="mb-4 mx-auto">
                <label
                  class="block text-sm font-bold mb-2 text-center"
                  for="fechaInscripcion"
                  >Fecha de Inscripción:</label
                >
                <DatePicker
                  v-model="lead.FechaInscripcion"
                  placeholder="Fecha de Inscripción"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                </DatePicker>
              </div>

              <!-- CarreraInscripcion -->
              <div class="mb-4 mx-auto">
                <label
                  class="block text-sm font-bold mb-2 text-center"
                  for="carreraInscripcion"
                  >Carrera de Inscripción:</label
                >
                <select
                  v-model="lead.CarreraInscripcion"
                  id="carreraInscripcion"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option
                    v-for="carrera in carreras"
                    :key="carrera.CarreraID"
                    :value="carrera.CarreraID"
                  >
                    {{ carrera.Nombre }}
                  </option>
                </select>
              </div>

              <!-- BecaOfrecida -->
              <div class="mb-4 mx-auto">
                <label
                  class="block text-sm font-bold mb-2 text-center"
                  for="becaOfrecida"
                  >Beca Ofrecida:</label
                >
                <input
                  v-model="lead.BecaOfrecida"
                  id="becaOfrecida"
                  type="text"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="50%"
                />
              </div>

              <!-- NumeroLista -->
              <div class="mb-4 mx-auto">
                <label
                  class="block text-sm font-bold mb-2 text-center"
                  for="numeroLista"
                  >Número de Lista:</label
                >
                <input
                  v-model="lead.NumeroLista"
                  id="numeroLista"
                  type="text"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="117"
                />
              </div>

              <!-- PromotorOriginal -->
              <div class="mb-4 mx-auto">
                <label
                  class="block text-sm font-bold mb-2 text-center"
                  for="promotorOriginal"
                  >Promotor Original:</label
                >
                <select
                  v-model="lead.promotorOriginal"
                  id="promotorOriginal"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option
                    v-for="promotor in listaPromotores"
                    :key="promotor.PromotorID"
                    :value="promotor.PromotorID"
                  >
                    {{ promotor.Nombre }}
                  </option>
                </select>
              </div>

              <!-- FechaPromotorOriginal -->
              <div class="mb-4 mx-auto">
                <label
                  class="block text-sm font-bold mb-2 text-center"
                  for="fechaPromotorOriginal"
                  >Fecha Promotor Original:</label
                >
                <DatePicker
                  v-model="lead.FechaPromotorOriginal"
                  placeholder="Fecha Promotor Original"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                </DatePicker>
              </div>

              <!-- PromotorActual -->
              <div class="mb-4 mx-auto">
                <label
                  class="block text-sm font-bold mb-2 text-center"
                  for="promotorActual"
                  >Promotor Actual:</label
                >
                <select
                  v-model="lead.promotorActual"
                  id="promotorActual"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option
                    v-for="promotor in listaPromotores"
                    :key="promotor.PromotorID"
                    :value="promotor.PromotorID"
                  >
                    {{ promotor.Nombre }}
                  </option>
                </select>
              </div>

              <!-- FechaPromotorActual -->
              <div class="mb-4 mx-auto">
                <label
                  class="block text-sm font-bold mb-2 text-center"
                  for="fechaPromotorActual"
                  >Fecha Promotor Actual:</label
                >
                <DatePicker
                  v-model="lead.FechaPromotorActual"
                  placeholder="Fecha Promotor Actual"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                </DatePicker>
              </div>

              <!-- Comentarios -->
              <div class="mb-4 col-span-full md:col-span-1 text-center">
                <label class="block text-sm font-bold mb-2" for="comentarios"
                  >Comentarios:</label
                >
                <input
                  v-model="lead.Comentarios"
                  id="comentarios"
                  type="text"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Comentario"
                />
              </div>

              <!-- Otros campos... -->
            </div>
          </div>

          <!-- Otras secciones... -->

          <div class="flex items-center justify-center mt-8 mb-8 rounded-lg">
            <button
              @click="registerLead"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
            >
              Registrar Lead
            </button>

            <button
              @click="cancelarRegistro"
              class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            >
              Cancelar
            </button>
          </div>
          <br />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { initFlowbite } from "flowbite";
import SideBarProm from "../../components/SideBarProm.vue";
import DatePicker from "vue3-datepicker";
import axios from "axios";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
// import { municipiosEstados } from '../../utils/municipiosEstados';
import municipiosEstados from "../../data/municipiosEstados.json";

export default {
  setup() {
    const isTelefonoValido = ref(true); // Asegúrate de que tus variables reactivas estén declaradas correctamente
    const isCorreoElectronicoValido = ref(true);

    onMounted(() => {
      initFlowbite();
    });

    const validateTelefono = () => {
      const regexTelefono = /^[0-9]+$/;
      isTelefonoValido.value = regexTelefono.test(this.lead.Telefono);
    };

    const validateCorreoElectronico = () => {
      const regexCorreoElectronico = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      isCorreoElectronicoValido.value = regexCorreoElectronico.test(
        this.lead.CorreoElectronico
      );
    };

    const notifySuccess = () => {
      toast("Se ha registrado al Promotor!", {
        autoClose: 3000,
        type: "success",
      });
    };

    const notifyError = () => {
      toast("Error al registrar el lead. Por favor, verifica los campos.", {
        autoClose: 3000,
        type: "error",
      });
    };



    return {
      isTelefonoValido,
      isCorreoElectronicoValido,
      validateTelefono,
      validateCorreoElectronico,
      notifySuccess,
      notifyError,
    };
  },

  data() {
    return {
      lead: {
        NombreCompleto: "",
        Telefono: "",
        Telefono2: "",
        CorreoElectronico: "",
        CorreoElectronico2: "",
        FechaNacimiento: null,
        EscuelaProcedencia: "",
        Pais: "",
        Estado: "",
        Municipio: "",
        FechaPrimerContacto: null,
        CarreraInteresID: null,
        Grado: "",
        Programa: "",
        EstatusInscripcion: "",
        SemestreIngreso: "",
        Ciclo: "",
        CampanaID: null,
        AsetNameForm: "",
        IsOrganic: "",
        selectedMedioDeContacto: null,
        TipoReferido: "",
        NombreReferido: "",
        DondeObtDato: "",
        // Otros campos...
        FechaInscripcion: null,
        CarreraInscripcion: null,
        BecaOfrecida: "",
        NumeroLista: "",
        promotorOriginal: null,
        FechaPromotorOriginal: null,
        promotorActual: null,
        FechaPromotorActual: null,
        Comentarios: "",

        // Otros campos...
      },

      //types of toast

      countries: [],
      estados: Object.keys(municipiosEstados), // Lista de estados
      municipios: [], // Lista de municipios
      opcionesSeguimiento: [
        "AU-ALUMNO UNINTER",
        "INSC-INSCRIPCIÓN",
        "NC-NO CONTESTA",
        "NI-NO INTERESA",
        "P-PROSPECTO",
        "PI-INSCRIPCIÓN",
        "PS-SEGUIMIENTO",
        "SC-SIN CONTACTO",
        "PU-PERSONAL UNINTER",
        "DU-DUPLICADO",
        "DI-DATO NO VALIDO",
        "BA-BAJA ALUMNO",
        "VACIO",
      ],
      opcionesGrado: [
        "SECUNDARIA",
        "BACHILLERATO",
        "PREPA-A",
        "LIC/ING",
        "ESPECIALIDAD",
        "DIPLOMADO",
        "MAESTRIA",
        "DOCTORADO",
        "NO ESPECIFICA",
      ],
      opcionesPrograma: [
        "ADMINISTRACIÓN",
        "ADMINISTRACION DE EMPRESAS",
        "ARQ",
        "BACHILLERATO SEMESTRAL",
        "BILINGÜE",
        "BIU",
        "BIUB",
        "BIUM",
        "CIENCIAS POLÍTICAS",
        "CLS PRT",
        "CORP",
        "CURSO DE VERANO",
        "Curso Intensivo",
        "DAD",
        "DDI",
        "DDPAI",
        "DEI",
        "DEPU",
        "DHU",
        "DI",
        "DIP",
        "DISEÑO DE MODAS",
        "DISEÑO GRÁFICO",
        "DMD",
        "DPU",
        "EAO",
        "EAPD",
        "EAPD y LADD",
        "EATL",
        "LDI",
        "LDM",
        "LECE",
        "LED",
        "LEF",
        "LEM",
        "LEMK",
        "LEMP",
        "LIC",
        "LICENCIATURA",
        "LID",
        "LPS",
        "LRI",
        "MADE",
        "MADEL",
        "MARET",
        "MDG",
        "MEL",
        "MELE",
        "MERCADOTECNIA",
        "MGC",
        "MI",
        "NIÑOS",
        "OFERTA EDUCATIVA",
        "PEDAGOGÍA",
        "PREPA A",
        "PREPA-A",
        "REGLR",
        "SIU",
        "SIUB",
        "SIUM",
        "UNI LAE",
        "LPE",
      ],
      opcionesEstatusInscripcion: ["INSO", "REZA", "INSC", "BAJA", "ARCHIVAR"],

      opcionesSemestreIngreso: [
        "1 Semestre",
        "2 Semestre",
        "3 Semestre",
        "4 Semestre",
        "5 Semestre",
        "6 Semestre",
        "7 Semestre",
        "8 Semestre",
        "Maestria",
        "Doctorado",
        "Licenciatura",
        "Diplomados",
      ],
      opcionesCampanas: [],
      selectedMedioDeContacto: null,
      mediosDeContacto: [],

      opcionesDondeObtDato: [
        "B_AFC",
        "B_EMPRESAS",
        "B_ESTRATEGIA VACACIONES EQUI",
        "B_PERSONAL",
        "B_POSGRADOS",
        "BARRIDO BASE",
        "BARRIDO EGRESADOS",
        "BASE EGRESADOS",
        "BASE FAMILIAR",
        "CLIENGO",
        "ESTRATEGIA EQUIPO MORADO",
        "EXPO EDUCATIVA",
        "REDES SOCIALES META FACEBOOK",
        "REDES SOCIALES META INSTAGRAM",
        "LANDING",
        "LANDING CARRERAS",
        "LANDING FORMULARIO",
        "LANDING TOT",
        "LLAMADA UNINTER",
        "OPEN SCHOOL ESPECIAL POR CONVENIO CON EMPRESA",
        "VISITA UNINTER",
      ],
      carreras: [],
      listaPromotores: [],
    };
  },
  computed: {
    validateNombre() {
      return /^[A-Za-z\s]+$/.test(this.lead.NombreCompleto);
    },
    validateCorreoElectronico() {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.lead.CorreoElectronico);
    },
  },
  methods: {
    validateNombre() {
      // Validar el nombre
      const regexNombre = /^[A-Za-z\s]+$/;
      this.isNombreValido = regexNombre.test(this.lead.NombreCompleto);
    },
    validateTelefono() {
      // Validar el número de teléfono
      const regexTelefono = /^[0-9]+$/;
      this.isTelefonoValido = regexTelefono.test(this.lead.Telefono);
    },
    validateCorreoElectronico() {
      // Validar el correo electrónico
      const regexCorreoElectronico = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      this.isCorreoElectronicoValido = regexCorreoElectronico.test(
        this.lead.CorreoElectronico
      );
    },
    validateEscuela() {
      // Validar el nombre de la escuela
      const regexEscuela = /^[A-Za-z\s]+$/;
      this.isEscuelaValida = regexEscuela.test(this.lead.EscuelaProcedencia);
    },

    async loadCountries() {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        this.countries = response.data;
      } catch (error) {
        console.error("Error al obtener los países:", error);
        // Manejar el error de alguna manera, por ejemplo, mostrar un mensaje al usuario
      }
    },

    async cargarOpcionesUbicacion() {
      const paisSeleccionado = this.lead.Pais;
      if (paisSeleccionado === "Mexico") {
        // Cargar opciones de estado
        this.estados = Object.keys(municipiosEstados);
        // Limpiar municipios y ciudades
        this.municipios = [];
        this.ciudades = [];
      } else if (paisSeleccionado === "Otro") {
        // Limpiar opciones de estado, municipio y ciudad
        this.estados = [];
        this.municipios = [];
        this.ciudades = [];
        return;
      }

      // Si llegamos a este punto, es porque el país es México
      // Cargar municipios
      this.cargarMunicipios();
    },

    cargarMunicipios() {
      const estadoSeleccionado = this.lead.Estado;
      console.log("Estado seleccionado:", estadoSeleccionado);

      // Asegúrate de que municipiosEstados tenga la propiedad correspondiente al estado seleccionado
      if (municipiosEstados.hasOwnProperty(estadoSeleccionado)) {
        this.municipios = municipiosEstados[estadoSeleccionado];
      } else {
        this.municipios = [];
      }

      console.log("Municipios cargados:", this.municipios);
    },

    cargarCiudades() {
      const estadoSeleccionado = this.lead.Estado;
      const municipioSeleccionado = this.lead.Municipio;
      this.ciudades =
        municipiosEstados[estadoSeleccionado][municipioSeleccionado] || [];
    },

    async loadCampanas() {
      try {
        const response = await axios.get("http://localhost:4000/campanas"); // Ajusta la ruta según tu configuración
        this.opcionesCampanas = response.data.campanas;
      } catch (error) {
        console.error("Error al obtener las opciones de campaña:", error);
        // Manejar el error de alguna manera, por ejemplo, mostrar un mensaje al usuario
      }
    },

    async loadMediosDeContacto() {
      try {
        const response = await axios.get(
          "http://localhost:4000/medio-contacto"
        );
        this.mediosDeContacto = response.data.listMediosDeContacto;
      } catch (error) {
        console.error("Error al obtener los medios de contacto:", error);
        // Manejar el error de alguna manera, por ejemplo, mostrar un mensaje al usuario
      }
    },
    async loadCarreras() {
      try {
        const response = await axios.get("http://localhost:4000/carrera"); // Reemplaza con tu URL correcta
        this.carreras = response.data.carreras;
      } catch (error) {
        console.error("Error al obtener las carreras:", error);
        // Manejar el error de alguna manera, por ejemplo, mostrar un mensaje al usuario
      }
    },

    async loadPromotores() {
      try {
        const response = await axios.get("http://localhost:4000/promotores");
        this.listaPromotores = response.data.listPromotores;
      } catch (error) {
        console.error("Error al cargar la lista de promotores:", error);
        // Manejar el error de alguna manera, por ejemplo, mostrar un mensaje al usuario
      }
    },

    async registerLead() {
    try {
      const {
        NombreCompleto, Telefono, Telefono2, CorreoElectronico, CorreoElectronico2,
        FechaPrimerContacto, FechaNac, EscuelaProcedencia, NombrePais, NombreEstado,
        NombreCiudad, PSeguimiento, CarreraInteresID, Grado, Programa, EstatusInsc,
        SemestreIngreso, Ciclo, CampanaID, AsetNameForm, IsOrganic, MedioDeContactoID,
        TipoReferido, NombreReferido, DondeObtDato, FechaInscripcion, CarreraInscripcion,
        BecaOfrecida, NumeroLista, promotorOriginal, FechaPromotorOriginal, promotorActual,
        FechaPromotorActual, Comentarios
      } = this.lead;

      // Agrega validaciones según tus requerimientos
      if (!NombreCompleto || !Telefono || !CorreoElectronico || !promotorOriginal || !promotorActual) {
        throw new Error('Por favor, completa todos los campos obligatorios correctamente.');
      }

      const leadData = {
        NombreCompleto,
        Telefono,
        Telefono2,
        CorreoElectronico,
        CorreoElectronico2,
        FechaPrimerContacto,
        FechaNac,
        EscuelaProcedencia,
        NombrePais,
        NombreEstado,
        NombreCiudad,
        PSeguimiento,
        CarreraInteresID,
        Grado,
        Programa,
        EstatusInsc,
        SemestreIngreso,
        Ciclo,
        CampanaID,
        AsetNameForm,
        IsOrganic,
        MedioDeContactoID,
        TipoReferido,
        NombreReferido,
        DondeObtDato,
        FechaInscripcion,
        CarreraInscripcion,
        BecaOfrecida,
        NumeroLista,
        promotorOriginal,
        FechaPromotorOriginal,
        promotorActual,
        FechaPromotorActual,
        Comentarios,
      };

      await axios.post('http://localhost:4000/leads/create', leadData);

      // Redirige a la vista deseada después del registro
      // Puedes ajustar esto según la estructura de tu aplicación
      this.$router.push('/leads-promotor');
      notifySuccess();
    } catch (error) {
      console.error('Error al registrar el lead:', error.message);

      console.log(this.lead)
    }
  },

    

    

    cancelarRegistro() {
      // Limpia el formulario u otras acciones al cancelar el registro
      this.limpiarFormulario();
    },

    limpiarFormulario() {
      // Limpia el objeto "lead" para reiniciar el formulario
      this.lead = {
        NombreCompleto: "",
        Telefono: "",
        Telefono2: "",
        CorreoElectronico: "",
        CorreoElectronico2: "",
        FechaNacimiento: null,
        EscuelaProcedencia: "",
        Pais: "",
        Estado: "",
        Municipio: "",
        FechaPrimerContacto: null,
        CarreraInteresID: null,
        Grado: "",
        Programa: "",
        EstatusInscripcion: "",
        SemestreIngreso: "",
        Ciclo: "",
        CampanaID: null,
        AsetNameForm: "",
        IsOrganic: "",
        selectedMedioDeContacto: null,
        TipoReferido: "",
        NombreReferido: "",
        DondeObtDato: "",
        Comentarios: "",

        // ... otros campos del lead
      };
    },

    validarFormulario() {
      const camposObligatorios = [
        "NombreCompleto",
        "Telefono",
        "CorreoElectronico",
        "EscuelaProcedencia",
        // Agrega otros campos obligatorios según tus necesidades
      ];

      // Verifica que todos los campos obligatorios estén completos
      for (const campo of camposObligatorios) {
        if (!this.lead[campo]) {
          // Muestra un mensaje de error, puedes personalizar esto según tus necesidades
          alert(`Por favor, completa el campo ${campo}.`);
          return false;
        }
      }

      // Puedes agregar lógica de validación adicional aquí si es necesario

      return true; // Si todos los campos obligatorios están completos, el formulario es válido
    },
  },

  async mounted() {
    await this.loadCountries();
    await this.loadCampanas();
    await this.loadMediosDeContacto();
    await this.loadCarreras();
    await this.loadPromotores();

    // ... Tu código existente ...
  },

  components: {
    SideBarProm,
    DatePicker,
  },
};
</script>

<style scoped>
/* Estilos específicos para esta vista si es necesario */
</style>
