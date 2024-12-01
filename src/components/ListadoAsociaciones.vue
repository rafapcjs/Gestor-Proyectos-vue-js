<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import DashBoard from '@/views/DashBoard.vue';
import { usePersonaStore } from '@/stores/personaStore';
import { useProyectoStore } from '@/stores/proyectoStore';
 import type { Asociacion } from '@/models/Asosiacion';
import { useAsociacionStore } from '@/stores/asosiacionStore';

const asociacionStore = useAsociacionStore();
const personaStore = usePersonaStore();
const proyectoStore = useProyectoStore();
const router = useRouter();

const asociaciones = asociacionStore.asociaciones;
const searchQuery = ref('');

const filteredAsociaciones = computed(() => {
  if (!searchQuery.value) {
    return asociaciones;
  }
  return asociaciones.filter(asociacion => asociacion.id.toString().includes(searchQuery.value));
});

const getPersonaName = (personaId: number) => {
  const persona = personaStore.personas.find(p => p.id === personaId);
  return persona ? persona.nombrePersona : 'Desconocido';
};

const getProyectoName = (proyectoId: number) => {
  const proyecto = proyectoStore.proyectos.find(p => p.id === proyectoId);
  return proyecto ? proyecto.nombre : 'Desconocido';
};

 
const handleEdit = (asociacion: Asociacion): void => {
  asociacionStore.selectAsociacion(asociacion);
  router.push('/crear-asociacion');
};

const handleDelete = (id: number) => {
  asociacionStore.deleteAsociacion(id);
  asociacionStore.clearSelectedAsociacion();
};
</script>

<template>
  <div class="flex flex-col items-center justify-start py-2">
    <DashBoard></DashBoard>
    <div class="w-full max-w-4xl p-6 bg-gray-100 rounded-lg shadow-md mt-4">
      <h2 class="text-2xl font-bold text-center mb-6 text-gray-800">Listado de Asociaciones</h2>
      <div class="mb-4">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Buscar por ID"
          class="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
        />
      </div>
      <table class="table-auto w-full bg-white border border-gray-200 rounded-lg">
        <thead>
          <tr class="bg-green-600 text-white">
            <th class="px-4 py-2 border-b border-gray-200 text-left font-medium">ID</th>
            <th class="px-4 py-2 border-b border-gray-200 text-left font-medium">Persona</th>
            <th class="px-4 py-2 border-b border-gray-200 text-left font-medium">Proyecto</th>
            <th class="px-4 py-2 border-b border-gray-200 text-left font-medium">Rol</th>
            <th class="px-4 py-2 border-b border-gray-200 text-left font-medium">Responsabilidad</th>
            <th class="px-4 py-2 border-b border-gray-200 text-left font-medium">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="asociacion in filteredAsociaciones" :key="asociacion.id" class="hover:bg-gray-50">
            <td class="px-4 py-2 border-b">{{ asociacion.id }}</td>
            <td class="px-4 py-2 border-b">{{ getPersonaName(asociacion.personaId) }}</td>
            <td class="px-4 py-2 border-b">{{ getProyectoName(asociacion.proyectoId) }}</td>
            <td class="px-4 py-2 border-b">{{ asociacion.rol }}</td>
            <td class="px-4 py-2 border-b">{{ asociacion.responsabilidad }}</td>
            <td class="px-4 py-2 border-b">
              <button @click="handleEdit(asociacion)" class="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Editar</button>
              <button @click="handleDelete(asociacion.id)" class="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition ml-2">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>