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

    <div class="flex items-center justify-center mt-8">
      <div class="w-full max-w-xl p-6">
        <form @submit.prevent="crearLead" class="bg-white shadow-md rounded">
          <div class="mb-8">
            <h2
              class="text-2xl text-white text-center font-bold mb-4 bg-emerald-500 rounded-xl"
            >
              Datos Personales
            </h2>
            <div class="grid grid-cols-5 gap-4">
              <!-- Nombre Completo -->
              <div class="mb-4 col-span-5 md:col-span-2">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="nombre"
                  >Nombre Completo:</label
                >
                <input
                  v-model="lead.NombreCompleto"
                  type="text"
                  id="nombre"
                  placeholder="Nombre completo"
                  class="input-field rounded-md"
                />
                <p
                  v-if="lead.NombreCompleto && !validateNombre"
                  class="error-message text-red-600"
                >
                  Por favor, ingresa un nombre válido.
                </p>
              </div>

              <!-- Teléfono -->
              <div class="mb-4 col-span-5 md:col-span-2">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="nombre"
                  >Teléfono:</label
                >
                <input
                  v-model="lead.Telefono"
                  @input="validateTelefono"
                  type="tel"
                  id="telefono"
                  placeholder="Número de teléfono"
                  class="input-field rounded-md"
                />
                <p
                  v-if="lead.Telefono && !isTelefonoValido"
                  class="error-message text-red-600"
                >
                  Por favor, ingresa un número de teléfono válido.
                </p>
              </div>
              <!-- Teléfono Adicional -->
              <div class="mb-4 col-span-5 md:col-span-2">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="nombre"
                  >Teléfono Adicional:
                </label>
                <input
                  v-model="lead.Telefono2"
                  type="number"
                  id="telefono"
                  placeholder="Número de telefono"
                  class="input-field rounded-md"
                />
                <p
                  v-if="lead.Telefono2 && !validateTelefono"
                  class="error-message text-red-600"
                >
                  Por favor, ingresa un número de teléfono válido.
                </p>
              </div>
              <!-- Correo Electrónico -->
              <div class="mb-4 col-span-5 md:col-span-3">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="correoelectronico"
                  >Correo Electrónico:</label
                >
                <input
                  v-model="lead.CorreoElectronico"
                  type="text"
                  id="correoelectronico"
                  placeholder="Correo Electrónico"
                  class="input-field rounded-md"
                />
                <p
                  v-if="lead.CorreoElectronico && !validateCorreoElectronico"
                  class="error-message text-red-600"
                >
                  Por favor, ingresa un correo electrónico válido.
                </p>
              </div>

              <!-- Correo Electrónico Adicional -->
              <div class="mb-4 col-span-5 md:col-span-3">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="correoelectronico"
                  >Correo Electrónico Adicional:</label
                >
                <input
                  v-model="lead.CorreoElectronico2"
                  type="text"
                  id="correoelectronico"
                  placeholder="Correo Electrónico"
                  class="input-field rounded-md"
                />
                <p
                  v-if="lead.CorreoElectronico2 && !validateCorreoElectronico"
                  class="error-message text-red-600"
                >
                  Por favor, ingresa un correo electrónico válido.
                </p>
              </div>

              <!-- Fecha de Nacimiento... -->
              <div class="mb-4 col-span-1 md:col-span-2">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="fechanacimiento"
                >
                  Fecha de Nacimiento:
                </label>
                <!-- chechar -->
                <DatePicker
                  v-model="lead.FechaNacimiento"
                  placeholder="Fecha de Nacimiento"
                  class="input-field rounded-md"
                />
              </div>
            </div>
            <hr class="my-1 border-black" />

            <div class="mb-4">
              <h2
                class="text-2xl text-white text-center font-bold mb-4 bg-emerald-500 rounded-xl"
              >
                Datos de Procedencia Académica
              </h2>
              <div class="grid grid-cols-5 gap-4">
                <!-- EscuelaProcedencia	 -->
                <div class="mb-4 col-span-5 md:col-span-2">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="escuela"
                    >Escuela de Procedencia:
                  </label>
                  <input
                    v-model="lead.EscuelaProcedencia"
                    type="text"
                    id="escuela"
                    placeholder="Nombre de Escuela"
                    class="input-field rounded-md"
                  />
                  <p
                    v-if="lead.EscuelaProcedencia && !validateEscuela"
                    class="error-message text-red-600"
                  >
                    Por favor, ingresa un Nombre válido.
                  </p>
                </div>

                <!-- Campo para seleccionar el país -->
                <!-- Campo para seleccionar el país -->
                <div class="mb-4 col-span-5 md:col-span-2">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="pais"
                  >
                    País:
                  </label>
                  <select
                    v-model="lead.Pais"
                    @change="cargarOpcionesUbicacion"
                    id="pais"
                    class="input-field rounded-md"
                  >
                    <option value="" disabled selected>
                      Selecciona un país
                    </option>
                    <option
                      v-for="country in countries"
                      :key="country.name.common"
                      :value="country.name.common"
                    >
                      {{ country.name.common }}
                    </option>
                  </select>
                </div>

                <!-- Campo para seleccionar el estado -->
                <div
                  v-if="lead.Pais === 'Mexico'"
                  class="mb-4 col-span-5 md:col-span-2"
                >
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="estado"
                  >
                    Estado:
                  </label>
                  <select
                    v-model="lead.Estado"
                    @change="cargarMunicipios"
                    id="estado"
                    class="input-field rounded-md"
                  >
                    <option value="" disabled selected>
                      Selecciona un estado
                    </option>
                    <option
                      v-for="estado in estados"
                      :key="estado"
                      :value="estado"
                    >
                      {{ estado }}
                    </option>
                  </select>
                </div>

                <!-- Campo para seleccionar el municipio -->
                <div
                  v-if="lead.Pais === 'Mexico'"
                  class="mb-4 col-span-5 md:col-span-2"
                >
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="municipio"
                  >
                    Municipio:
                  </label>
                  <select
                    v-model="lead.Municipio"
                    id="municipio"
                    class="input-field rounded-md"
                  >
                    <option value="" disabled selected>
                      Selecciona un municipio
                    </option>
                    <option
                      v-for="municipio in municipios"
                      :key="municipio"
                      :value="municipio"
                    >
                      {{ municipio }}
                    </option>
                  </select>
                </div>

                <!-- Campos para escribir estado y municipio -->
                <div
                  v-if="lead.Pais !== 'Mexico'"
                  class="mb-4 col-span-5 md:col-span-2"
                >
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="otroEstado"
                  >
                    Estado:
                  </label>
                  <input
                    v-model="lead.Estado"
                    type="text"
                    id="otroEstado"
                    placeholder="Escribe el estado"
                    class="input-field rounded-md"
                  />
                </div>

                <div
                  v-if="lead.Pais !== 'Mexico'"
                  class="mb-4 col-span-5 md:col-span-2"
                >
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="otroMunicipio"
                  >
                    Municipio:
                  </label>
                  <input
                    v-model="lead.Municipio"
                    type="text"
                    id="otroMunicipio"
                    placeholder="Escribe el municipio"
                    class="input-field rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>

          <hr class="my-1 border-black" />
          <div class="mb-4">
            <h2
              class="text-2xl text-white text-center font-bold mb-4 bg-emerald-500 rounded-xl"
            >
              Datos de Seguimiento
            </h2>
            <div class="grid grid-cols-5 gap-4">
              <!-- Ps Seguimiento" -->
              <div class="mb-4 col-span-5 md:col-span-3">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="pseguimiento"
                >
                  PSeguimiento:
                </label>
                <select
                  v-model="lead.PSeguimiento"
                  id="pseguimiento"
                  class="input-field rounded-md"
                >
                  <option
                    v-for="opcion in opcionesSeguimiento"
                    :key="opcion"
                    :value="opcion"
                  >
                    {{ opcion }}
                  </option>
                </select>
              </div>

              <!-- Grado -->
              <div class="mb-4 col-span-5 md:col-span-3">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="grado"
                >
                  Grado:
                </label>
                <select
                  v-model="lead.Grado"
                  id="grado"
                  class="input-field rounded-md"
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

              <!-- Programa -->
              <div class="mb-4 col-span-5 md:col-span-3">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="programa"
                >
                  Programa:
                </label>
                <select
                  v-model="lead.Programa"
                  id="programa"
                  class="input-field rounded-md"
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

              <!-- Estatus Inscripción -->
<div class="mb-4 col-span-5 md:col-span-3">
  <label class="block text-gray-700 text-sm font-bold mb-2" for="estatusInscripcion">
    Estatus de Inscripción:
  </label>
  <select v-model="lead.EstatusInscripcion" id="estatusInscripcion" class="input-field rounded-md">
    <option v-for="opcion in opcionesEstatusInscripcion" :key="opcion" :value="opcion">
      {{ opcion }}
    </option>
  </select>
</div>

<!-- En el área correspondiente de tu formulario -->
<div class="mb-4 col-span-5 md:col-span-3">
  <label class="block text-gray-700 text-sm font-bold mb-2" for="semestreIngreso">
    Semestre de Ingreso:
  </label>
  <select v-model="lead.SemestreIngreso" id="semestreIngreso" class="input-field rounded-md">
    <option v-for="opcion in opcionesSemestreIngreso" :key="opcion" :value="opcion">
      {{ opcion }}
    </option>
  </select>
</div>

<!-- En el área correspondiente de tu formulario -->
<div class="mb-4 col-span-5 md:col-span-3">
  <label class="block text-gray-700 text-sm font-bold mb-2" for="ciclo">
    Ciclo:
  </label>
  <input
    v-model="lead.Ciclo"
    type="text"
    id="ciclo"
    placeholder="Ej: 2024-1"
    class="input-field rounded-md"
  />
</div>

<!-- Campaña -->
<div class="mb-4 col-span-5 md:col-span-3">
  <label class="block text-gray-700 text-sm font-bold mb-2" for="campanaId">
    Campaña:
  </label>
  <select v-model="lead.CampanaID" id="campanaId" class="input-field rounded-md">
    <option v-for="campana in opcionesCampanas" :key="campana.CampanaID" :value="campana.CampanaID">
      {{ campana.Nombre }}
    </option>
  </select>
</div>






              <!-- Otros campos... -->
            </div>
          </div>

          <hr class="my-1 border-black" />
          <div class="mb-4">
            <h2
              class="text-2xl text-white text-center font-bold mb-4 bg-emerald-500 rounded-xl"
            >
              Datos de Programa
            </h2>
            <div class="grid grid-cols-5 gap-4">
              <!-- Teléfono -->
              <div class="mb-4 col-span-5 md:col-span-2">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="telefono"
                  >Teléfono:</label
                >
                <input
                  v-model="lead.Telefono"
                  type="text"
                  id="telefono"
                  placeholder="Teléfono"
                  class="input-field rounded-md"
                />
              </div>

              <!-- Celular -->
              <div class="mb-4 col-span-5 md:col-span-3">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="celular"
                  >Celular:</label
                >
                <input
                  v-model="lead.Celular"
                  type="text"
                  id="celular"
                  placeholder="Celular"
                  class="input-field rounded-md"
                />
              </div>

              <!-- Otros campos... -->
            </div>
          </div>

          <hr class="my-1 border-black" />
          <div class="mb-4">
            <h2
              class="text-2xl text-white text-center font-bold mb-4 bg-emerald-500 rounded-xl"
            >
              Datos Complementarios
            </h2>
            <div class="grid grid-cols-5 gap-4">
              <!-- Teléfono -->
              <div class="mb-4 col-span-5 md:col-span-2">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="telefono"
                  >Teléfono:</label
                >
                <input
                  v-model="lead.Telefono"
                  type="text"
                  id="telefono"
                  placeholder="Teléfono"
                  class="input-field rounded-md"
                />
              </div>

              <!-- Celular -->
              <div class="mb-4 col-span-5 md:col-span-3">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="celular"
                  >Celular:</label
                >
                <input
                  v-model="lead.Celular"
                  type="text"
                  id="celular"
                  placeholder="Celular"
                  class="input-field rounded-md"
                />
              </div>

              <!-- Otros campos... -->
            </div>
          </div>

          <!-- Otras secciones... -->

          <div
            class="flex items-center justify-center mt-8 bg-blue-600 rounded-lg"
          >
            <button type="submit" class="button-primary text-white mt-2 mb-2">
              Guardar
            </button>
          </div>
          <div
            class="flex items-center justify-center mt-4 bg-red-600 rounded-lg"
          >
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
      opcionesEstatusInscripcion: ['INSO', 'REZA', 'INSC', 'BAJA', 'ARCHIVAR'],

      opcionesSemestreIngreso: [
        '1 Semestre',
        '2 Semestre',
        '3 Semestre',
        '4 Semestre',
        '5 Semestre',
        '6 Semestre',
        '7 Semestre',
        '8 Semestre',
        'Maestria', 'Doctorado', 'Licenciatura', 'Diplomados'
      ],

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
  },

  async mounted() {
    await this.loadCountries();

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
