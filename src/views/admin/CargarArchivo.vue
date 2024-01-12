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

      <div class="flex items-center justify-center mt-8">
        <!-- Vue3 Dropzone Component -->
        <div v-bind="getRootProps()" class="bg-gray-200 p-8 rounded-lg text-center">
          <i class="fas fa-cloud-upload-alt text-4xl mb-4"></i>
          <input v-bind="getInputProps()" />
          <p v-if="isDragActive">Suelta el archivo aquí para poder cargar...</p>
          <p v-else>Haz clic o arrastra el archivo que deseas subir</p>
          <div v-show="isDragActive" class="mt-4">
            <progress ref="progressBar" max="100" value="0"></progress>
          </div>
        </div>
      </div>

      <div class="flex items-center justify-center mt-4">
        <button @click="openDropzone" class="bg-blue-500 text-white py-2 px-4 rounded-lg">Abrir Dropzone</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue';
import { useDropzone } from 'vue3-dropzone';
import sideBarADM from '../../components/SideBarADM.vue';
import axios from 'axios';

export default {
  components: {
    sideBarADM,
  },
  setup() {
    const progressBar = ref(null);

    async function onDrop(acceptedFiles, rejectedFiles) {
      console.log('Archivos aceptados:', acceptedFiles);
      console.log('Archivos rechazados:', rejectedFiles);

      if (acceptedFiles.length > 0) {
        const file = acceptedFiles[0];
        await uploadFile(file);
      }
    }

    async function uploadFile(file) {
      try {
        const formData = new FormData();
        formData.append('file', file);

        const response = await axios.post('http://localhost:4000/cargar-archivo/upload-leads', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          onUploadProgress(progressEvent) {
            const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            progressBar.value.value = percentCompleted;
          },
        });

        console.log(response.data);
        // Aquí puedes manejar la respuesta del servidor después de cargar el archivo
        // Por ejemplo, mostrar un mensaje de éxito al usuario
      } catch (error) {
        console.error('Error al cargar el archivo:', error);
        // Aquí puedes manejar errores, por ejemplo, mostrar un mensaje de error al usuario
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
