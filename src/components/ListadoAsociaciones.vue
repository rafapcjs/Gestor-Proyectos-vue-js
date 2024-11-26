<script setup lang="ts">
import { ref, computed } from 'vue';
import DashBoard from '@/views/DashBoard.vue';
import SearchBar from './ui/SearchBar.vue';

// Datos de ejemplo para las asociaciones
const asociaciones = ref([
  { id: 1, tipo: 'Gremial', nombre: 'Asociación A', detalles: 'Detalles de la Asociación A' },
  { id: 2, tipo: 'Cultural', nombre: 'Asociación B', detalles: 'Detalles de la Asociación B' },
  { id: 3, tipo: 'Deportiva', nombre: 'Asociación C', detalles: 'Detalles de la Asociación C' },
]);

// Término de búsqueda
const searchQuery = ref('');

// Computed para filtrar los datos según el término de búsqueda
const filteredAsociaciones = computed(() => {
  const query = searchQuery.value.toLowerCase();
  return asociaciones.value.filter((asociacion) => {
    return (
      asociacion.nombre.toLowerCase().includes(query) ||
      asociacion.tipo.toLowerCase().includes(query)
    );
  });
});
</script>

<template>
  <DashBoard></DashBoard>

  <SearchBar v-model="searchQuery" @search="searchQuery(searchQuery)" placeholder="Buscar por id" />


  <!-- Tabla de asociaciones -->
  <div class="flex justify-center items-center w-full py-12">
    <table class="w-[70%] border-collapse shadow-lg bg-white">
      <thead>
        <tr>
          <th colspan="5" class="text-center py-4 text-white bg-green-500">Listado de Asociaciones</th>
        </tr>
        <tr>
          <th class="border border-gray-300 px-4 py-2">ID</th>
          <th class="border border-gray-300 px-4 py-2">Tipo</th>
          <th class="border border-gray-300 px-4 py-2">Asociación</th>
          <th class="border border-gray-300 px-4 py-2">Detalles</th>
          <th class="border border-gray-300 px-4 py-2">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <!-- Se muestra el contenido filtrado según la búsqueda -->
        <tr v-for="asociacion in filteredAsociaciones" :key="asociacion.id">
          <td class="border border-gray-300 px-4 py-2">{{ asociacion.id }}</td>
          <td class="border border-gray-300 px-4 py-2">{{ asociacion.tipo }}</td>
          <td class="border border-gray-300 px-4 py-2">{{ asociacion.nombre }}</td>
          <td class="border border-gray-300 px-4 py-2">{{ asociacion.detalles }}</td>
          <td class="border border-gray-300 px-4 py-2">
            <button class="bg-blue-500 text-white py-2 px-4 rounded hover:opacity-80">Editar</button>
            <button class="bg-red-500 text-white py-2 px-4 rounded hover:opacity-80">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
/* No custom CSS needed with Tailwind */
</style>
