<template>
  <div class="flex flex-col items-center justify-start p-4">
    <!-- Dashboard a la izquierda -->
    <DashBoard></DashBoard>


    <!-- Sección para asociar persona al proyecto -->
    <section id="asociarPersonaProyecto" class="w-full max-w-lg p-6 bg-gray-100 rounded-lg shadow-md mt-4">
      <h2 class="text-center text-2xl font-semibold mb-6">Asociar Persona al Proyecto</h2>
    
    
      <form @submit.prevent="asociarPersona">
        <!-- Seleccionar Persona -->
        <div class="mb-4">
          <label for="personaSelect" class="block text-sm font-medium text-gray-700 mb-2">Seleccione Persona:</label>
          <select id="personaSelect" class="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300" required>
            <option value="1">Juan Pérez</option>
            <option value="2">Ana Gómez</option>
            <option value="3">Carlos Rodríguez</option>
          </select>
        </div>

        <!-- Seleccionar Proyecto -->
        <div class="mb-4">
          <label for="proyectoSelect" class="block text-sm font-medium text-gray-700 mb-2">Seleccione Proyecto:</label>
          <select id="proyectoSelect" class="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300" required>
            <option value="101">Proyecto A</option>
            <option value="102">Proyecto B</option>
            <option value="103">Proyecto C</option>
          </select>
        </div>

        <!-- Rol en el Proyecto -->
        <div class="mb-4">
          <input
            type="text"
            id="rolAsociacion"
            class="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
            placeholder="Rol en el Proyecto"
            required
          />
        </div>

        <!-- Responsabilidad en el Proyecto -->
        <div class="mb-4">
          <input
            type="text"
            id="responsabilidadAsociacion"
            class="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
            placeholder="Responsabilidad en el Proyecto"
            required
          />
        </div>

        <!-- Botón de enviar -->
        <div class="flex justify-center">
          <button
            type="submit"
            class="px-6 py-2 bg-green-500 text-white font-medium rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300"
          >
            Asociar
          </button>
        </div>
      </form>
    </section>
  </div>
</template>

<script lang="ts">
import DashBoard from '@/views/DashBoard.vue'; // Asegúrate de que el DashBoard está en la ubicación correcta
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AsociarPersonaProyecto',
  components: {
    DashBoard,
  },
  methods: {
    asociarPersona(): void {
      // Obtener los valores del formulario directamente
      const personaSeleccionada = (document.getElementById('personaSelect') as HTMLSelectElement).value;
      const proyectoSeleccionado = (document.getElementById('proyectoSelect') as HTMLSelectElement).value;
      const rolAsociacion = (document.getElementById('rolAsociacion') as HTMLInputElement).value;
      const responsabilidadAsociacion = (document.getElementById('responsabilidadAsociacion') as HTMLInputElement).value;

      console.log({
        personaSeleccionada,
        proyectoSeleccionado,
        rolAsociacion,
        responsabilidadAsociacion,
      });
    },
  },
});
</script>
