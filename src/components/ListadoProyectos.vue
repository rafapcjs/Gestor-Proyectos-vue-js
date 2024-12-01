 <script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useProyectoStore } from '@/stores/proyectoStore';
import SearchBar from '@/components/ui/SearchBar.vue';
import DashBoard from '@/views/DashBoard.vue';
import type { Proyecto } from '@/models/Proyecto';

const searchQuery = ref<string>('');
const store = useProyectoStore();
const router = useRouter();

const filterData = (query: string): Proyecto[] => {
  if (!query) return store.proyectos;
  return store.proyectos.filter((proyecto: Proyecto) => proyecto.id.toString() === query);
};

const handleEdit = (proyecto: Proyecto) => {
  store.selectProyecto(proyecto);
  router.push('/crear-proyecto');
};

const handleDelete = (id: number) => {
  store.deleteProyecto(id);
};
</script>

<template>
  <DashBoard></DashBoard>
  <SearchBar v-model="searchQuery" @search="filterData(searchQuery)" placeholder="Buscar por ID" />
  <div class="flex justify-center items-center w-full py-12">
    <div class="overflow-x-auto shadow-lg rounded-lg w-3/5">
      <table class="table-auto w-full bg-white border border-gray-200 rounded-lg">
        <thead>
          <tr class="bg-green-600 text-white">
            <th class="text-center py-6 text-white bg-green-500" colspan="7">Listado de Proyectos</th>
          </tr>
          <tr class="bg-gray-100">
            <th class="px-4 py-2 border-b border-gray-200 text-left font-medium">ID</th>
            <th class="px-4 py-2 border-b border-gray-200 text-left font-medium">Nombre</th>
            <th class="px-4 py-2 border-b border-gray-200 text-left font-medium">Detalles</th>
            <th class="px-4 py-2 border-b border-gray-200 text-left font-medium">Fecha de Inicio</th>
            <th class="px-4 py-2 border-b border-gray-200 text-left font-medium">Fecha de Fin</th>
            <th class="px-4 py-2 border-b border-gray-200 text-left font-medium">Presupuesto</th>
            <th class="px-4 py-2 border-b border-gray-200 text-left font-medium">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="proyecto in filterData(searchQuery)" :key="proyecto.id" class="hover:bg-gray-50">
            <td class="px-4 py-2 border-b">{{ proyecto.id }}</td>
            <td class="px-4 py-2 border-b">{{ proyecto.nombre }}</td>
            <td class="px-4 py-2 border-b">{{ proyecto.detalles }}</td>
            <td class="px-4 py-2 border-b">{{ new Date(proyecto.fechaInicio).toLocaleDateString() }}</td>
            <td class="px-4 py-2 border-b">{{ new Date(proyecto.fechaFin).toLocaleDateString() }}</td>
            <td class="px-4 py-2 border-b">{{ proyecto.presupuesto }}</td>
            <td class="px-4 py-2 border-b">
              <button @click="handleEdit(proyecto)" class="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Editar</button>
              <button @click="handleDelete(proyecto.id)" class="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition ml-2">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>