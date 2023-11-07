<template>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet" />

  <div class="flex h-screen bg-gray-100">
    <!-- Menú lateral -->
    <div class="bg-gray-800 text-white w-64 flex flex-col">
      <div class="image-container w-[50%]">
        <!-- Agregar la imagen -->
      </div>
      <!-- Nombre de usuario -->
      <div class="text-center py-4 text-lg font-bold">Nombre de Usuario</div>
      <ul class="flex flex-col justify-center items-center">
        <li class="py-5"><a href="#"><i class="fas fa-home" style="color: #48C9B0;"></i> Home</a></li>
        <li class="py-5"><a href="#"><i class="fas fa-bars-progress" style="color: #48C9B0;"></i> Leads</a></li>
        <li class="py-5"><a href="#"><i class="fas fa-circle-plus" style="color: #48C9B0;"></i> Asignar</a></li>
        <li class="py-5"><a href="#"><i class="fas fa-user-slash" style="color: #48C9B0;"></i> Reasignar</a></li>
        <li class="py-5"><a href="#"><i class="fas fa-arrow-right-from-bracket" style="color: #48C9B0;"></i> Sign Out</a>
        </li>
      </ul>
    </div>

    <!-- Contenido principal -->
    <div class="flex-1 p-8">
      <!-- Barra de búsqueda (fuera del menú lateral) -->
      <div class="flex justify-start items-center">
        
        <input type="text" placeholder="Buscar..." class="w-full bg-white-700 rounded p-2 text-white pl-10" />
        <i class="fas fa-search absolute pl-3 text-gray-500"></i>
      </div>
    </div>

  </div>
</template>

<style scoped>
.image-container {
  background-image: url(/logo.png);
  background-position: center;
  background-size: cover;
  height: 16em;
  width: 16em;
}
</style>