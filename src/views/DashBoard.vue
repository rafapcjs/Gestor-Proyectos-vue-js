<template>
  <div class="flex">
    <!-- Barra de navegación lateral a la izquierda -->
    <nav class="w-64 h-screen bg-gray-800 text-white p-6 fixed top-0 left-0 z-10">
      <ul>
        <li><router-link to="/crear-proyecto" class="block py-2 text-lg hover:text-blue-500">Crear Proyecto</router-link></li>
        <li><router-link to="/crear-asociacion" class="block py-2 text-lg hover:text-blue-500">Crear Asociación</router-link></li>
        <li><router-link to="/crear-persona" class="block py-2 text-lg hover:text-blue-500">Crear Persona</router-link></li>
        <li><router-link to="/listar-persona" class="block py-2 text-lg hover:text-blue-500">Listado de persona</router-link></li>
        <li><router-link to="/listar-proyecto" class="block py-2 text-lg hover:text-blue-500">Listado de proyectos</router-link></li>
        <li><router-link to="/listar-asociacion" class="block py-2 text-lg hover:text-blue-500">Listado de Asociación</router-link></li>
      </ul>
    </nav>
  
    <!-- Contenido principal del Dashboard -->
    <div class="ml-64 p-6 flex-grow">
      <router-view></router-view> <!-- Muestra el componente según la ruta seleccionada -->
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'DashBoard',
};
</script>

<style scoped>
/* Estilos adicionales si es necesario */
</style>
