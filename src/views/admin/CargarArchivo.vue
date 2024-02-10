<template>
  <DashboardLayout name="Subir archivos">

    <!-- Drag and Drop -->
    <div v-bind="getRootProps()" class="flex items-center justify-center w-full">
      <label for="dropzone-file"
        class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 duration-150">
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
          <svg class="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 20 16">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
          </svg>
          <p class="mb-2 text-sm text-gray-500"><span class="font-semibold">
            Haz clic para subir</span> o arrastra y suelta</p>
          <p class="text-xs text-gray-500 text-center max-w-xs md:max-w-2xl w-full">
            Recuerda que los archivos compatibles tienen que tener la siguiente extensión <span class="underline">.CSV</span>
          </p>
        </div>
        <input v-bind="getInputProps()" type="file" class="hidden" />
      </label>
      <div v-show="isDragActive" class="mt-4">
        <progress ref="progressBar" max="100" value="0"></progress>
      </div>
    </div>
    <!-- Fin de Drag and Drop -->

    <div class="flex justify-center my-6 w-full">
      <button @click="$router.go(-1)" class="py-2 px-4 text-white bg-red-500 hover:bg-red-600 active:bg-red-700 rounded-md duration-150">
        Cancelar
      </button>
    </div>

  </DashboardLayout>
</template>


<script>
import { ref, watch } from "vue";
import { useDropzone } from "vue3-dropzone";
import axios from "axios";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

import DashboardLayout from '../../layouts/DashboardLayout.vue';

export default {
  components: {
    DashboardLayout
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