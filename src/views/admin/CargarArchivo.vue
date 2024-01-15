<template>
  <div class="flex-1">
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div class="lg:ml-64 p-4">
        <i class="fa-solid fa-home fa-xl" style="color: #48c9b0"></i>
        <span id="posicion" class="ml-2 text-gray-500 dark:text-gray-400 text-lg">Subir Archivos</span>
      </div>

      <sideBarADM />
      <div class="p-5 lg:ml-64 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-500 dark:text-grey">Selecciona los archivos</h5>
      </div>

      <div class="flex items-center justify-center mt-8 h-full">
  <!-- Vue3 Dropzone Component -->
  <div v-bind="getRootProps()" class="bg-slate-600 p-8 rounded-lg text-center text-white">
    <i class="fas fa-cloud-upload-alt text-4xl mb-4"></i>
    <input v-bind="getInputProps()" />
    <p v-if="isDragActive">Suelta el archivo seleccionado aquí para poder cargarlo al sistema...</p>
    <p v-else>Para subir un archivo, haz clic o arrastra el archivo que deseas subir.</p>
    <div v-show="isDragActive" class="mt-4">
      <progress ref="progressBar" max="100" value="0"></progress>
    </div>
  </div>
</div>


     
      <div class="flex items-center justify-center mt-4">
        <button @click="$router.go(-1)" class="px-4 py-2
        text-sm font-medium leading-5 text-white transition-colors
        duration-150 bg-red-500 border border-transparent rounded-lg
        active:bg-red-600 hover:bg-red-700 focus:outline-none
        focus:shadow-outline-red">Cancelar</button>
        </div>

      
    </div>
  </div>
</template>


<script>
import { ref, watch } from "vue";
import { useDropzone } from "vue3-dropzone";
import sideBarADM from "../../components/SideBarADM.vue";
import axios from "axios";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export default {
  components: {
    sideBarADM,
  },
  setup() {
    const progressBar = ref(null);

    async function onDrop(acceptedFiles, rejectedFiles) {
      console.log("Archivos aceptados:", acceptedFiles);
      console.log("Archivos rechazados:", rejectedFiles);

      if (acceptedFiles.length > 0) {
        const file = acceptedFiles[0];
        await uploadFile(file);
      }
    }

    async function uploadFile(file) {
      try {
        const formData = new FormData();
        formData.append("file", file);

        const response = await axios.post(
          "http://localhost:4000/cargar-archivo/upload-leads",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
            onUploadProgress(progressEvent) {
              const percentCompleted = Math.round(
                (progressEvent.loaded * 100) / progressEvent.total
              );
              progressBar.value.value = percentCompleted;
            },
          }
        );

        console.log(response.data);
        toast("¡Archivo subido correctamente!", {
          theme: "colored",
          type: "success",
          pauseOnHover: false,
          hideProgressBar: true,
          dangerouslyHTMLString: true,
        });

        

        // Puedes manejar la respuesta del servidor después de cargar el archivo
        // Por ejemplo, mostrar un mensaje de éxito al usuario
      } catch (error) {
        console.error("Error al cargar el archivo:", error);

        if (error.response && error.response.status === 500) {
          // Archivo no correspondiente (puedes ajustar el código de estado según tu backend)
          toast(
            "Advertencia: No se pudo subir el archivo. No corresponden los datos",
            {
              theme: "colored",
              type: "warning",
              pauseOnHover: false,
              hideProgressBar: true,
              dangerouslyHTMLString: true,
            }
          );
        } else if (error.response && error.response.status === 400) {
          // Otro error
          toast("¡Error al subir el archivo! Revisa el archivo .CSV ", {
            theme: "colored",
            type: "error",
            pauseOnHover: false,
            hideProgressBar: true,
            dangerouslyHTMLString: true,
          });
        }
      }
    }

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop,
    });

    watch(isDragActive, () => {
      if (!isDragActive) {
        progressBar.value.value = 0;
      }
    });

    return {
      getRootProps,
      getInputProps,
      isDragActive,
      progressBar,
    };
  },
};
</script>

<style scoped>
.image-container {
  background-image: url(/uninterlogo.png);
  background-position: center;
  background-size: cover;
  height: 16em;
  width: 16em;
}

progress {
  width: 100%;
  height: 20px;
  margin-top: 8px;
}
</style>
