<template>
  <main class="h-screen w-full bg-gray-200">
    <section class="container mx-auto h-full w-full lg:max-w-6xl py-12">
      <div
        class="flex h-full w-full bg-white rounded-xl shadow-lg overflow-hidden"
      >
        <!-- Imagen representativa -->
        <div class="hidden lg:block h-full w-1/2">
          <figure class="h-full w-full">
            <img
              src="/uninterlogo.webp"
              alt="logo-uninter"
              class="w-full h-full object-cover"
            />
          </figure>
        </div>
        <!-- Formulario -->
        <div class="h-full w-full lg:w-1/2">
          <div
            class="flex flex-col items-center justify-center h-full w-full py-8"
          >
            <div class="my-10">
              <div class="flex justify-center w-full pb-6">
                <figure class="block lg:hidden w-28 h-28">
                  <img
                    src="/Uninter - Logo (Responsive).webp"
                    alt="logo-uninter"
                  />
                </figure>
              </div>
              <h1 class="text-center text-lg md:text-2xl font-bold uppercase">
                Inicio de sesión
              </h1>
              <h2
                class="text-center text-base md:text-lg font-semibold text-[#273746] capitalize"
              >
                Sistema de Gestión y control de Leads.
              </h2>
            </div>

            <div class="w-full max-w-xs md:max-w-xl lg:max-w-md">
              <form @submit="entrar">
                <div>
                  <InputLabel for="email" value="Correo Electrónico" />
                  <TextInput
                    id="email"
                    v-model="formData.email"
                    type="email"
                    class="mt-1 block w-full"
                    placeholder="Ingrese su correo electrónico"
                    autofocus
                    autocomplete="email"
                  />
                </div>

                <div class="mt-6">
                  <InputLabel for="password" value="Contraseña" />
                  <TextInput
                    id="password"
                    v-model="formData.password"
                    type="password"
                    class="mt-1 block w-full"
                    placeholder="Ingrese su contraseña"
                  />
                </div>

                <div class="flex mt-4">
                  <button
                    @submit="entrar"
                    class="py-3 w-full text-white bg-[#00457B] hover:bg-[#003167] lg:bg-[#3d566d] lg:hover:bg-[#273746] rounded-xl duration-200"
                  >
                    Iniciar Sesión
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <!-- Copyrigth -->
      <footer class="flex justify-center w-full h-fit py-3">
        <h5 class="text-sm font-semibold">
          © {{ new Date().getFullYear() }} - Universidad Internacional.
        </h5>
      </footer>
    </section>
  </main>
</template>

<script>
import axios from "axios";
import Cookies from 'js-cookie';
import { setRole } from "../sessions";
import { setUserName } from "../sessions";

// Componentes
import TextInput from "./../components/TextInput.vue";
import InputLabel from "./../components/InputLabel.vue";

export default {
  components: {
    TextInput,
    InputLabel,
  },
  data() {
    return {
      formData: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async entrar(event) {
      event.preventDefault();

      try {
        const response = await axios.post(
          "http://localhost:3000/api/auth/login",
          {
            email: this.formData.email,
            password: this.formData.password,
          }
        );

        const { token, user } = response.data;

        // Almacenar el token en una cookie con una fecha de expiración
        Cookies.set('token', token, { expires: 1 }); // Cookie expira en 1 días

        console.log("Inicio de Sesión Exitoso");
        const userRole = user.role;
        const userName = user.userName;
        
        //Almacena en el localStorage el nombre y rol del usuario
        setRole(userRole)
        setUserName(userName)

        if (userRole === "admin") {
          this.$router.push({ name: "home-adm" });
        } else if (userRole === "coordinador") {
          this.$router.push({ name: "alumno-coordinador" });
        } else if (userRole === "promotor") {
          this.$router.push({ name: "dash-promotor" });
        } else {
          console.error("Rol de usuario no reconocido:", userRole);
          // Puedes redirigir a una página de error o realizar otras acciones apropiadas
        }
      } catch (error) {
        console.error("Error al iniciar sesión:", error.response.data);
        // Manejar errores de la solicitud
      }
    },
  },
};
</script>
