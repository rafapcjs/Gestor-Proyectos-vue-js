<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { usePersonaStore } from '@/stores/personaStore';
import SearchBar from '@/components/ui/SearchBar.vue';
import DashBoard from '@/views/DashBoard.vue';
import type { Persona } from '@/models/Persona';

const searchQuery = ref<string>('');
const store = usePersonaStore();
const router = useRouter();

const filterData = (query: string): Persona[] => {
  if (!query) return store.personas;
  return store.personas.filter((persona: Persona) => persona.id.toString() === query);
};

const handleEdit = (persona: Persona) => {
  store.selectPersona(persona);
  router.push('/crear-persona');
};

const handleDelete = (id: number) => {
  store.deletePersona(id);
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
            <th class="text-center py-6 text-white bg-green-500" colspan="7">Listado de Personas</th>
          </tr>
          <tr class="bg-gray-100">
            <th class="px-4 py-2 border-b border-gray-200 text-left font-medium">ID</th>
            <th class="px-4 py-2 border-b border-gray-200 text-left font-medium">Nombre</th>
            <th class="px-4 py-2 border-b border-gray-200 text-left font-medium">Teléfono</th>
            <th class="px-4 py-2 border-b border-gray-200 text-left font-medium">Dirección</th>
            <th class="px-4 py-2 border-b border-gray-200 text-left font-medium">Correo</th>
            <th class="px-4 py-2 border-b border-gray-200 text-left font-medium">Fecha de Nacimiento</th>
            <th class="px-4 py-2 border-b border-gray-200 text-left font-medium">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="persona in filterData(searchQuery)" :key="persona.id" class="hover:bg-gray-50">
            <td class="px-4 py-2 border-b">{{ persona.id }}</td>
            <td class="px-4 py-2 border-b">{{ persona.nombrePersona }}</td>
            <td class="px-4 py-2 border-b">{{ persona.telefonoPersona }}</td>
            <td class="px-4 py-2 border-b">{{ persona.direccionPersona }}</td>
            <td class="px-4 py-2 border-b">{{ persona.correoPersona }}</td>
            <td class="px-4 py-2 border-b">{{ persona.fechaNacimientoPersona.toLocaleDateString() }}</td>
            <td class="px-4 py-2 border-b">
              <button @click="handleEdit(persona)" class="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Editar</button>
              <button @click="handleDelete(persona.id)" class="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition ml-2">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>