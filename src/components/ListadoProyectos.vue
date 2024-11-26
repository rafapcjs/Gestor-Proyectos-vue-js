<script setup lang="ts">
import { ref } from 'vue'
import SearchBar from '@/components/ui/SearchBar.vue'
import DashBoard from '@/views/DashBoard.vue'

const searchQuery = ref('')

const filteredData = ref([
  { id: 1, tipo: 'Interno', nombre: 'Proyecto A', detalles: 'Detalles del Proyecto A' },
  { id: 2, tipo: 'Externo', nombre: 'Proyecto B', detalles: 'Detalles del Proyecto B' },
  { id: 3, tipo: 'Interno', nombre: 'Proyecto C', detalles: 'Detalles del Proyecto C' },
])

// Filtra los proyectos según el término de búsqueda
const filterData = (query: string) => {
  return filteredData.value.filter((proyecto) => {
    return (
      proyecto.nombre.toLowerCase().includes(query.toLowerCase()) ||
      proyecto.tipo.toLowerCase().includes(query.toLowerCase())
    )
  })
}
</script>

<template>
  <DashBoard></DashBoard>

  <!-- Barra de búsqueda -->
  <SearchBar
    v-model="searchQuery"
    @search="filterData(searchQuery)"
    placeholder="Buscar por id"
  />

  <!-- Contenedor de la tabla con clases de Tailwind -->
  <div class="flex justify-center items-center w-full py-12">
    <div class="overflow-x-auto shadow-lg rounded-lg w-3/5">
      <table class="table-auto w-full bg-white border border-gray-200 rounded-lg">
        <thead>
          <tr class="bg-green-600 text-white">
            <th class="text-center py-4 text-white bg-green-500" colspan="5">
              Listado de Proyectos
            </th>
          </tr>
          <tr class="bg-gray-100">
            <th class="px-4 py-2 border-b border-gray-200 text-left font-medium">ID</th>
            <th class="px-4 py-2 border-b border-gray-200 text-left font-medium">Tipo</th>
            <th class="px-4 py-2 border-b border-gray-200 text-left font-medium">Nombre</th>
            <th class="px-4 py-2 border-b border-gray-200 text-left font-medium">Detalles</th>
            <th class="px-4 py-2 border-b border-gray-200 text-left font-medium">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="proyecto in filterData(searchQuery)" :key="proyecto.id" class="hover:bg-gray-50">
            <td class="px-4 py-2 border-b">{{ proyecto.id }}</td>
            <td class="px-4 py-2 border-b">{{ proyecto.tipo }}</td>
            <td class="px-4 py-2 border-b">{{ proyecto.nombre }}</td>
            <td class="px-4 py-2 border-b">{{ proyecto.detalles }}</td>
            <td class="px-4 py-2 border-b">
              <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Editar</button>
              <button class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition ml-2">Eliminar</button> <!-- Margen entre botones -->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
