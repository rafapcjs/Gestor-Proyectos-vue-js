<template>
  <div class="flex flex-col items-center justify-start p-4">
    <DashBoard></DashBoard>
    <section id="asociarPersonaProyecto" class="w-full max-w-lg p-6 bg-gray-100 rounded-lg shadow-md mt-4">
      <h2 class="text-center text-2xl font-semibold mb-6">Asociar Persona al Proyecto</h2>
      <form @submit.prevent="asociarPersona">
        <div class="mb-4">
          <label for="personaSelect" class="block text-sm font-medium text-gray-700 mb-2">Seleccione Persona:</label>
          <select v-model="selectedPersonaId" id="personaSelect" class="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300" required>
            <option v-for="persona in personas" :key="persona.id" :value="persona.id">{{ persona.nombrePersona }}</option>
          </select>
        </div>
        <div class="mb-4">
          <label for="proyectoSelect" class="block text-sm font-medium text-gray-700 mb-2">Seleccione Proyecto:</label>
          <select v-model="selectedProyectoId" id="proyectoSelect" class="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300" required>
            <option v-for="proyecto in proyectos" :key="proyecto.id" :value="proyecto.id">{{ proyecto.nombre }}</option>
          </select>
        </div>
        <div class="mb-4">
          <input v-model="rol" type="text" id="rolAsociacion" class="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300" placeholder="Rol en el Proyecto" required />
        </div>
        <div class="mb-4">
          <input v-model="responsabilidad" type="text" id="responsabilidadAsociacion" class="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300" placeholder="Responsabilidad en el Proyecto" required />
        </div>
        <div class="flex justify-center">
          <button type="submit" class="px-6 py-2 bg-green-500 text-white font-medium rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300">Asociar</button>
        </div>
      </form>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { usePersonaStore } from '@/stores/personaStore';
import { useProyectoStore } from '@/stores/proyectoStore';
import DashBoard from '@/views/DashBoard.vue';
import { useAsociacionStore } from '@/stores/asosiacionStore';
 
export default defineComponent({
  name: 'AsociarPersonaProyecto',
  components: {
    DashBoard,
  },
  setup() {
    const personaStore = usePersonaStore();
    const proyectoStore = useProyectoStore();
    const asociacionStore = useAsociacionStore();
    const router = useRouter();

    const personas = personaStore.personas;
    const proyectos = proyectoStore.proyectos;
    const selectedPersonaId = ref<number | null>(null);
    const selectedProyectoId = ref<number | null>(null);
    const rol = ref<string>('');
    const responsabilidad = ref<string>('');

    onMounted(() => {
      if (asociacionStore.selectedAsociacion) {
        const { personaId, proyectoId, rol: selectedRol, responsabilidad: selectedResponsabilidad } = asociacionStore.selectedAsociacion;
        selectedPersonaId.value = personaId;
        selectedProyectoId.value = proyectoId;
        rol.value = selectedRol;
        responsabilidad.value = selectedResponsabilidad;
      }
    });

    const asociarPersona = () => {
      if (selectedPersonaId.value && selectedProyectoId.value) {
        const nuevaAsociacion = {
          id: asociacionStore.selectedAsociacion ? asociacionStore.selectedAsociacion.id : Date.now(),
          personaId: selectedPersonaId.value,
          proyectoId: selectedProyectoId.value,
          rol: rol.value,
          responsabilidad: responsabilidad.value,
        };

        if (asociacionStore.selectedAsociacion) {
          asociacionStore.updateAsociacion(nuevaAsociacion);
        } else {
          asociacionStore.addAsociacion(nuevaAsociacion);
        }

        asociacionStore.clearSelectedAsociacion();
        router.push('/listar-asociacion'); // Redirigir a /listar-asociacion después de crear la asociación
      }
    };

    return {
      personas,
      proyectos,
      selectedPersonaId,
      selectedProyectoId,
      rol,
      responsabilidad,
      asociarPersona,
    };
  },
});
</script>