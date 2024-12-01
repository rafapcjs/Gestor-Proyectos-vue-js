<template>
  <div class="flex flex-col items-center justify-start py-2">
    <DashBoard></DashBoard>
    <section id="registrarProyecto" class="w-full max-w-lg p-6 bg-gray-100 rounded-lg shadow-md mt-4">
      <h2 class="text-2xl font-bold text-center mb-6 text-gray-800">{{ isEditing ? 'Editar Proyecto' : 'Registrar Proyecto' }}</h2>
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <!-- Nombre del proyecto -->
        <div>
          <input
            type="text"
            v-model="nombreProyecto"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Nombre del Proyecto"
            required
          />
        </div>
        <!-- Descripción del proyecto -->
        <div>
          <textarea
            v-model="descripcionProyecto"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            placeholder="Descripción del Proyecto"
            required
          ></textarea>
        </div>
        <!-- Fecha de inicio -->
        <div>
          <label for="fechaInicioProyecto" class="block text-gray-600 font-medium mb-1">Fecha de Inicio:</label>
          <input
            type="date"
            v-model="fechaInicioProyecto"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        <!-- Fecha de fin -->
        <div>
          <label for="fechaFinProyecto" class="block text-gray-600 font-medium mb-1">Fecha de Fin:</label>
          <input
            type="date"
            v-model="fechaFinProyecto"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        <!-- Presupuesto -->
        <div>
          <input
            type="number"
            v-model="presupuestoProyecto"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            min="1"
            placeholder="Presupuesto Estimado"
            required
          />
        </div>
        <!-- Botón -->
        <div class="flex justify-center">
          <button
            type="submit"
            class="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
          >
            {{ isEditing ? 'Actualizar' : 'Registrar' }}
          </button>
        </div>
      </form>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useProyectoStore } from '@/stores/proyectoStore';
import DashBoard from '@/views/DashBoard.vue';
import type { Proyecto } from '@/models/Proyecto';

export default defineComponent({
  name: 'RegistrarProyecto',
  components: {
    DashBoard,
  },
  setup() {
    const router = useRouter();
    const store = useProyectoStore();

    const nombreProyecto = ref<string>('');
    const descripcionProyecto = ref<string>('');
    const fechaInicioProyecto = ref<string>('');
    const fechaFinProyecto = ref<string>('');
    const presupuestoProyecto = ref<number>(0);
    const isEditing = ref<boolean>(false);

    onMounted(() => {
      if (store.selectedProyecto) {
        const proyecto = store.selectedProyecto;
        nombreProyecto.value = proyecto.nombre;
        descripcionProyecto.value = proyecto.detalles;
        fechaInicioProyecto.value = proyecto.fechaInicio.toISOString().split('T')[0];
        fechaFinProyecto.value = proyecto.fechaFin.toISOString().split('T')[0];
        presupuestoProyecto.value = proyecto.presupuesto;
        isEditing.value = true;
      }
    });

    const handleSubmit = () => {
      const proyecto: Proyecto = {
        id: isEditing.value ? store.selectedProyecto!.id : Date.now(),
        nombre: nombreProyecto.value,
        detalles: descripcionProyecto.value,
        fechaInicio: new Date(fechaInicioProyecto.value),
        fechaFin: new Date(fechaFinProyecto.value),
        presupuesto: presupuestoProyecto.value,
      };

      if (isEditing.value) {
        store.updateProyecto(proyecto);
      } else {
        store.addProyecto(proyecto);
      }

      router.push('/listar-proyecto');
    };

    return {
      nombreProyecto,
      descripcionProyecto,
      fechaInicioProyecto,
      fechaFinProyecto,
      presupuestoProyecto,
      handleSubmit,
      isEditing,
    };
  },
});
</script>