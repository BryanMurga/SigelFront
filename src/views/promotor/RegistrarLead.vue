<template>
  <div>
    <div class="lg:ml-64 p-4">
      <i class="fas fa-bars-progress text-2xl" style="color: #48c9b0"></i>
      <span id="posicion" class="ml-2 text-gray-500 dark:text-gray-400 text-lg">Registrar Lead</span>
    </div>
    <div>
      <SideBarProm />
    </div>

    <div class="relative p-4 w-full max-w-2xl mx-auto max-h-full">
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <form @submit.prevent="crearLead" class="bg-white shadow-md rounded">
          <!-- Datos Personales -->
          <div class="mb-8">
            <h2 class="text-2xl text-white text-center font-bold mb-4 bg-emerald-500 rounded-xl">
              Datos Personales
            </h2>
            <div class="grid grid-cols-2 md:grid-cols-2 gap-4">
              <!-- Primer Columna -->
              <div class="mb-4 col-span-full md:col-span-1 text-center">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="nombre">Nombre Completo:</label>
                <input v-model="lead.NombreCompleto" type="text" id="nombre" placeholder="Nombre completo"
                  class="input-field rounded-md" />
                <p v-if="lead.NombreCompleto && !validateNombre" class="error-message text-red-600">
                  Por favor, ingresa un nombre válido.
                </p>
              </div>

              <div class="mb-4 col-span-full md:col-span-1 text-center">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="telefono">Teléfono:</label>
                <input v-model="lead.Telefono" @input="validateTelefono" type="tel" id="telefono"
                  placeholder="Número de teléfono" class="input-field rounded-md" />
                <p v-if="lead.Telefono && !isTelefonoValido" class="error-message text-red-600">
                  Por favor, ingresa un número de teléfono válido.
                </p>
              </div>

              <div class="mb-4 col-span-full md:col-span-1 text-center">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="telefono2">Teléfono Adicional:</label>
                <input v-model="lead.Telefono2" type="number" id="telefono2" placeholder="Número de teléfono"
                  class="input-field rounded-md" />
                <p v-if="lead.Telefono2 && !validateTelefono" class="error-message text-red-600">
                  Por favor, ingresa un número de teléfono válido.
                </p>
              </div>

              <!-- Segunda Columna -->
              <div class="mb-4 col-span-full md:col-span-1 text-center">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="correoElectronico">Correo
                  Electrónico:</label>
                <input v-model="lead.CorreoElectronico" type="text" id="correoElectronico"
                  placeholder="Correo Electrónico" class="input-field rounded-md" />
                <p v-if="lead.CorreoElectronico && !validateCorreoElectronico" class="error-message text-red-600">
                  Por favor, ingresa un correo electrónico válido.
                </p>
              </div>

              <div class="mb-4 col-span-full md:col-span-1 text-center">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="correoElectronico2">Correo Electrónico
                  Adicional:</label>
                <input v-model="lead.CorreoElectronico2" type="text" id="correoElectronico2"
                  placeholder="Correo Electrónico" class="input-field rounded-md" />
                <p v-if="lead.CorreoElectronico2 && !validateCorreoElectronico" class="error-message text-red-600">
                  Por favor, ingresa un correo electrónico válido.
                </p>
              </div>
              <!-- Fecha de Nacimiento... -->
              <div class="mb-4 col-span-full md:col-span-1 text-center">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="fechanacimiento">
                  Fecha de Nacimiento:
                </label>
                <!-- chechar -->
                <DatePicker v-model="lead.FechaNacimiento" placeholder="Fecha de Nacimiento"
                  class="input-field rounded-md" />
              </div>
            </div>
          </div>


          <!-- Datos de procedencia Académica -->
          <hr class="my-1 border-black" />
          <div class="mb-8">
            <h2 class="text-2xl text-white text-center font-bold mb-4 bg-emerald-500 rounded-xl">
              Datos de Procedencia Académica
            </h2>
            <div class="grid grid-cols-2 md:grid-cols-2 gap-4">
              <!-- EscuelaProcedencia	 -->
              <div class="mb-4 col-span-full md:col-span-1 text-center">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="escuela">Escuela de Procedencia:
                </label>
                <input v-model="lead.EscuelaProcedencia" type="text" id="escuela" placeholder="Nombre de Escuela"
                  class="input-field rounded-md" />
                <p v-if="lead.EscuelaProcedencia && !validateEscuela" class="error-message text-red-600">
                  Por favor, ingresa un Nombre válido.
                </p>
              </div>

              <!-- Campo para seleccionar el país -->
              <div>
                <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Selecciona
                  una país</label>
                <select v-model="selectedCountry" id="countries"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option v-for="country in countries" :key="country.name.common" :value="country.name.common"
                    :placeholder="selectedCountry">
                    {{ country.name.common }}
                  </option>
                </select>
              </div>


              <div class="mb-4 col-span-full md:col-span-1 text-center">
                <!-- FechaPrimerContacto -->
                <label class="block text-sm font-bold mb-2" for="fechaPrimerContacto">Fecha Primer Contacto:</label>
                <DatePicker v-model="lead.FechaPrimerContacto" placeholder="Fecha Primer Contacto"
                  class="input-field rounded-md" />
              </div>

              <div class="mb-4 col-span-full md:col-span-1 text-center">
                <!-- CarreraInteresID -->
                <label class="block text-sm font-bold mb-2">Carrera de Interés:</label>
                <select v-model="lead.CarreraInteresID" id="carreraInteres" class="input-field rounded-md">
                  <option v-for="carrera in carreras" :key="carrera.CarreraID" :value="carrera.CarreraID">
                    {{ carrera.Nombre }}
                  </option>
                </select>
              </div>

              <!-- Segunda Columna -->
              <div class="mb-4 col-span-full md:col-span-1 text-center">
                <!-- Grado -->
                <label class="block text-sm font-bold mb-2" for="grado">Grado:</label>
                <select v-model="lead.Grado" id="grado" class="input-field rounded-md">
                  <option v-for="opcion in opcionesGrado" :key="opcion" :value="opcion">
                    {{ opcion }}
                  </option>
                </select>
              </div>
              <!-- Programa -->
              <div>
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="programa">Programa:</label>
                <select v-model="lead.Programa" id="programa" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option v-for="opcion in opcionesPrograma" :key="opcion" :value="opcion">
                    {{ opcion }}
                  </option>
                </select>
              </div>

              <div class="mb-4 col-span-full md:col-span-1 text-center">
                <!-- Estatus Inscripción -->
                <label class="block text-sm font-bold mb-2" for="estatusInscripcion">Estatus de Inscripción:</label>
                <select v-model="lead.EstatusInscripcion" id="estatusInscripcion" class="input-field rounded-md">
                  <option v-for="opcion in opcionesEstatusInscripcion" :key="opcion" :value="opcion">
                    {{ opcion }}
                  </option>
                </select>
              </div>

              <!-- Tercera Columna -->
              <div class="mb-4 col-span-full md:col-span-1 text-center">
                <!-- Semestre de Ingreso -->
                <label class="block text-sm font-bold mb-2" for="semestreIngreso">Semestre de Ingreso:</label>
                <select v-model="lead.SemestreIngreso" id="semestreIngreso" class="input-field rounded-md">
                  <option v-for="opcion in opcionesSemestreIngreso" :key="opcion" :value="opcion">
                    {{ opcion }}
                  </option>
                </select>
              </div>

              <div class="mb-4 col-span-full md:col-span-1 text-center">
                <!-- Ciclo -->
                <label class="block text-sm font-bold mb-2" for="ciclo">Ciclo:</label>
                <input v-model="lead.Ciclo" type="text" id="ciclo" placeholder="2024-1" class="input-field rounded-md" />
              </div>

              <div class="mb-4 col-span-full md:col-span-1 text-center">
                <!-- Campaña -->
                <label class="block text-sm font-bold mb-2" for="campana">Campaña:</label>
                <select v-model="lead.CampanaID" id="campana" class="input-field rounded-md">
                  <option v-for="campana in opcionesCampanas" :key="campana.CampanaID" :value="campana.CampanaID">
                    {{ campana.Nombre }}
                  </option>
                </select>
              </div>

              <!-- Cuarta Columna -->
              <div class="mb-4 col-span-full md:col-span-1 text-center">
                <!-- AsetNameForm -->
                <label class="block text-sm font-bold mb-2" for="campana">AsetNameForm:</label>
                <input v-model="lead.AsetNameForm" type="text" id="asetNameForm" placeholder="AsetNameForm"
                  class="input-field rounded-md" />
              </div>

              <div class="mb-4 col-span-full md:col-span-1 text-center">
                <!-- IsOrganic -->
                <label class="block text-sm font-bold mb-2" for="isOrganic">Orgánico / Pauta:</label>
                <select v-model="lead.IsOrganic" id="isOrganic" class="input-field rounded-md">
                  <option value="PAUTA">PAUTA</option>
                  <option value="ORGÁNICO">ORGÁNICO</option>
                </select>
              </div>

              <!-- Quinta Columna -->
              <div class="mb-4 col-span-full md:col-span-1 text-center">
                <!-- Medio Contacto -->
                <label class="block text-sm font-bold mb-2" for="mediosDeContacto">Medio de Contacto:</label>
                <select v-model="selectedMedioDeContacto" id="mediosDeContacto" class="input-field rounded-md">
                  <option v-for="medio in mediosDeContacto" :key="medio.MedioDeContactoID"
                    :value="medio.MedioDeContactoID">
                    {{ medio.Nombre }}
                  </option>
                </select>
              </div>

              <div class="mb-4 col-span-full md:col-span-1 text-center">
                <!-- Tipo de Referido -->
                <label class="block text-sm font-bold mb-2" for="tipoReferido">Tipo de Referido:</label>
                <select v-model="lead.TipoReferido" id="tipoReferido" class="input-field rounded-md">
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
                <!-- NombreReferido -->
                <label class="block text-sm font-bold mb-2" for="nombreReferido">Nombre del Referido:</label>
                <input v-model="lead.NombreReferido" type="text" id="nombreReferido" placeholder="Nombre del Referido"
                  class="input-field rounded-md" />
              </div>

              <div>
                <!-- DondeObtDato -->
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="dondeObtDato">Donde obtuvo el dato:</label>
                <select v-model="lead.DondeObtDato" id="dondeObtDato" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option v-for="opcion in opcionesDondeObtDato" :key="opcion" :value="opcion">
                    {{ opcion }}
                  </option>
                </select>
              </div>
            </div>
          </div>

          <!-- Datos de Inscripcion-->
          <hr class="my-1 border-black" />

          <div class="mb-8">
            <h2 class="text-2xl text-white text-center font-bold mb-4 bg-emerald-500 rounded-xl p-2">
              Datos de Inscripción
            </h2>
            <div class="grid grid-cols-2 gap-4 mx-auto">
              <!-- FechaInscripcion -->
              <div class="mb-4 mx-auto">
                <label class="block text-sm font-bold mb-2" for="fechaInscripcion">Fecha de Inscripción:</label>
                <DatePicker v-model="lead.FechaInscripcion" placeholder="Fecha de Inscripción"
                  class="input-field rounded-md" />
              </div>

              <!-- CarreraInscripcion -->
              <div class="mb-4 mx-auto">
                <label class="block text-sm font-bold mb-2" for="carreraInscripcion">Carrera de Inscripción:</label>
                <select v-model="lead.CarreraInscripcion" id="carreraInscripcion" class="input-field rounded-md">
                  <option v-for="carrera in carreras" :key="carrera.CarreraID" :value="carrera.CarreraID">
                    {{ carrera.Nombre }}
                  </option>
                </select>
              </div>

              <!-- BecaOfrecida -->
              <div class="mb-4 mx-auto">
                <label class="block text-sm font-bold mb-2" for="becaOfrecida">Beca Ofrecida:</label>
                <input v-model="lead.BecaOfrecida" id="becaOfrecida" type="text" class="input-field rounded-md"
                  placeholder="50%" />
              </div>

              <!--NumeroLista-->
              <div class="mb-4 mx-auto">
                <label class="block text-sm font-bold mb-2" for="numeroLista">Número de Lista:</label>
                <input v-model="lead.NumeroLista" id="numeroLista" type="text" class="input-field rounded-md"
                  placeholder="117" />
              </div>

              <!--PromotorOriginal-->
              <div class="mb-4 mx-auto">
                <label class="block text-sm font-bold mb-2" for="promotorOriginal">Promotor Original:</label>
                <select v-model="lead.PromotorOriginal" id="promotorOriginal" class="input-field rounded-md">
                  <option v-for="promotor in listaPromotores" :key="promotor.PromotorID" :value="promotor.PromotorID">
                    {{ promotor.Nombre }}
                  </option>
                </select>
              </div>

              <!--FechaPromotorOriginal-->
              <div class="mb-4 mx-auto">
                <label class="block text-sm font-bold mb-2" for="fechaPromotorOriginal">Fecha Promotor Original:</label>
                <DatePicker v-model="lead.FechaPromotorOriginal" placeholder="Fecha Promotor Original"
                  class="input-field rounded-md" />
              </div>

              <!--PromotorActual-->
              <div class="mb-4 mx-auto">
                <label class="block text-sm font-bold mb-2" for="promotorActual">Promotor Actual:</label>
                <select v-model="lead.PromotorActual" id="promotorActual" class="input-field rounded-md">
                  <option v-for="promotor in listaPromotores" :key="promotor.PromotorID" :value="promotor.PromotorID">
                    {{ promotor.Nombre }}
                  </option>
                </select>
              </div>

              <!--FechaPromotorActual-->
              <div class="mb-4 mx-auto">
                <label class="block text-sm font-bold mb-2" for="fechaPromotorActual">Fecha Promotor Actual:</label>
                <DatePicker v-model="lead.FechaPromotorActual" placeholder="Fecha Promotor Actual"
                  class="input-field rounded-md" />
              </div>

              <!--Comentarios-->
              <div class="mb-4 mx-auto">
                <label class="block text-sm font-bold mb-2" for="comentarios">Comentarios:</label>
                <input v-model="lead.Comentarios" id="comentarios" type="text" class="input-field rounded-md"
                  placeholder="50%" />
              </div>

              <!-- Otros campos... -->
            </div>
          </div>

          <!-- Otras secciones... -->

          <div class="flex items-center justify-center mt-8 bg-blue-600 rounded-lg">
            <button type="submit" class="button-primary text-white mt-2 mb-2">
              Guardar
            </button>
          </div>
          <div class="flex items-center justify-center mt-4 bg-red-600 rounded-lg">
            <button type="submit" class="button-secondary text-white mt-2 mb-2">
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";

import SideBarProm from "../../components/SideBarProm.vue";
import DatePicker from "vue3-datepicker";
import municipiosEstados from "../../data/municipiosEstados.json";

export default {
  data() {
    return {
      lead: {
        NombreCompleto: "",
        CorreoElectronico: "",
        Telefono: "",
        CorreoElectronico2: "",
        Telefono2: "",
        Pais: "",
        Estado: "",
        Municipio: "",
        OtroEstado: "", // Nuevo campo para "Otro" estado
        OtroMunicipio: "", // Nuevo campo para "Otro" municipio
        CampanaID: "",
        EscuelaProcedencia: "",
        PSeguimiento: "",
        FechaPrimerContacto: "",
        Grado: "",
        Programa: "",
        EstatusInscripcion: "",
        SemestreIngreso: "",
        Ciclo: "",
        AsetNameForm: "",
        IsOrganic: "",
        MedioDeContactoID: "",
        TipoReferido: "",
        NombreReferido: "",
        DondeObtDato: "",
        CarreraInscripcion: new Date(),
        FechaNacimiento: "",
        FechaInscripcion: "",
        BecaOfrecida: "",
        NumeroLista: "",
        PromotorOriginal: null,
        FechaPromotorOriginal: null,
        PromotorActual: null,
        FechaPromotorActual: null,
        Comentarios: "",

        // Otros campos...
      },
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
        "ADMINISTRACION DE NEGOCIOS INTERNACIONALES",
        "ARQ",
        "BACHILLERATO SEMESTRAL",
        "BILINGÜE",
        "BIU",
        "BIUB",
        "BIUM",
        "CIENCIAS POLÍTICAS, RELACIONES INT.",
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
    crearLead() {
      // Lógica para enviar los datos al servidor...
    },
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

    cargarOpcionesUbicacion() {
      const paisSeleccionado = this.lead.Pais;
      if (paisSeleccionado === "Mexico") {
        // Cargar opciones de estado y municipio
        this.estados = Object.keys(municipiosEstados);
        this.cargarMunicipios(); // Asegúrate de cargar los municipios correspondientes
      } else if (paisSeleccionado === "Otro") {
        // Limpiar opciones de estado y municipio
        this.estados = [];
        this.municipios = [];
      }
    },

    cargarMunicipios() {
      const estadoSeleccionado = this.lead.Estado;
      this.municipios = municipiosEstados[estadoSeleccionado] || [];
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
    async guardarLead() {
      try {
        const response = await axios.post(
          "http://localhost:4000/leads",
          this.lead
        );
        console.log("Respuesta del servidor:", response.data);
      } catch (error) {
        console.error("Error al guardar el lead:", error);
        // Manejar el error de alguna manera, por ejemplo, mostrar un mensaje al usuario
      }
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
