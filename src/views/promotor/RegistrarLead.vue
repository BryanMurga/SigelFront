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
        <form
          @submit.prevent="crearLead"
          class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-8"
        >
          <div class="mb-8">
            <h2 class="text-2xl text-center font-bold mb-4">
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
                  class="input-field"
                />
                <p
                  v-if="lead.NombreCompleto && !validateNombre"
                  class="error-message"
                >
                  Por favor, ingresa un nombre válido.
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
                  class="input-field"
                />
                <p
                  v-if="lead.CorreoElectronico && !validateCorreoElectronico"
                  class="error-message"
                >
                  Por favor, ingresa un correo electrónico válido.
                </p>
              </div>

              <div class="mb-4 col-span-5 md:col-span-2">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="nombre"
                  >Teléfono: </label
                >
                <input
                  v-model="lead.Telefono"
                  type="number"
                  id="telefono"
                  placeholder="Número de telefono"
                  class="input-field"
                />
                <p
                  v-if="lead.Telefono && !validateTelefono"
                  class="error-message"
                >
                  Por favor, ingresa un número de teléfono válido.
                </p>
              </div>
            </div>
            <hr class="my-1 border-black" />
            <div class="mb-4">
              <h2 class="text-2xl text-center font-bold mb-4">
                Datos de Contacto
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
                    class="input-field"
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
                    class="input-field"
                  />
                </div>

                <!-- Otros campos... -->
              </div>
            </div>
          </div>

          <hr class="my-1 border-black" />
          <div class="mb-4">
            <h2 class="text-2xl text-center font-bold mb-4">
              Datos de Procedencia
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
                  class="input-field"
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
                  class="input-field"
                />
              </div>

              <!-- Otros campos... -->
            </div>
          </div>

          <hr class="my-1 border-black" />
          <div class="mb-4">
            <h2 class="text-2xl text-center font-bold mb-4">
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
                  class="input-field"
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
                  class="input-field"
                />
              </div>

              <!-- Otros campos... -->
            </div>
          </div>

          <hr class="my-1 border-black" />
          <div class="mb-4">
            <h2 class="text-2xl text-center font-bold mb-4">
              Datos de Complementarios
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
                  class="input-field"
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
                  class="input-field"
                />
              </div>

              <!-- Otros campos... -->
            </div>
          </div>

          <!-- Otras secciones... -->

          <div class="flex items-center justify-center mt-8">
            <button type="submit" class="button-primary">Guardar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import SideBarProm from "../../components/SideBarProm.vue";

export default {
  data() {
    return {
      lead: {
        NombreCompleto: "",
        CorreoElectronico: "",
        // Otros campos...
      },
    };
  },
  computed: {
    validateNombre() {
      return /^[A-Za-z\s]+$/.test(this.lead.NombreCompleto);
    },
    validateCorreoElectronico() {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.lead.CorreoElectronico);
    },
    // Otros métodos de validación...
  },
  methods: {
    crearLead() {
      // Lógica para enviar los datos al servidor...
    },
  },
  components: {
    SideBarProm,
  },
};
</script>

<style scoped>
/* Estilos específicos para esta vista si es necesario */
</style>
