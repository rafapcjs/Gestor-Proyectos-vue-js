<template>
  <div class="flex flex-col items-center justify-start py-2">
    <DashBoard></DashBoard>
    <section id="registrarPersona" class="w-full max-w-lg p-6 bg-gray-100 rounded-lg shadow-md mt-4">
      <h2 class="text-2xl font-bold text-center mb-6 text-gray-800">{{ isEditing ? 'Editar Persona' : 'Registrar Persona' }}</h2>
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <!-- Nombre -->
        <div>
          <input
            type="text"
            v-model="nombrePersona"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Nombre Completo"
            required
          />
        </div>
        <!-- Teléfono -->
        <div>
          <input
            type="text"
            v-model="telefonoPersona"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Teléfono"
            required
          />
        </div>
        <!-- Dirección -->
        <div>
          <input
            type="text"
            v-model="direccionPersona"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Dirección"
            required
          />
        </div>
        <!-- Correo -->
        <div>
          <input
            type="email"
            v-model="correoPersona"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Correo Electrónico"
            required
          />
        </div>
        <!-- Fecha de Nacimiento -->
        <div>
          <label for="fechaNacimientoPersona" class="block text-gray-600 font-medium mb-1">Fecha de Nacimiento:</label>
          <input
            type="date"
            v-model="fechaNacimientoPersona"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
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
import { usePersonaStore } from '@/stores/personaStore';
import DashBoard from '@/views/DashBoard.vue';
import type { Persona } from '@/models/Persona';

export default defineComponent({
  name: 'RegistrarPersona',
  components: {
    DashBoard,
  },
  setup() {
    const router = useRouter();
    const store = usePersonaStore();

    const nombrePersona = ref<string>('');
    const telefonoPersona = ref<string>('');
    const direccionPersona = ref<string>('');
    const correoPersona = ref<string>('');
    const fechaNacimientoPersona = ref<string>('');
    const isEditing = ref<boolean>(false);

    onMounted(() => {
      if (store.selectedPersona) {
        const persona = store.selectedPersona;
        nombrePersona.value = persona.nombrePersona;
        telefonoPersona.value = persona.telefonoPersona;
        direccionPersona.value = persona.direccionPersona;
        correoPersona.value = persona.correoPersona;
        fechaNacimientoPersona.value = persona.fechaNacimientoPersona.toISOString().split('T')[0];
        isEditing.value = true;
      }
    });

    const handleSubmit = () => {
      const persona: Persona = {
        id: isEditing.value ? store.selectedPersona!.id : Date.now(),
        nombrePersona: nombrePersona.value,
        telefonoPersona: telefonoPersona.value,
        direccionPersona: direccionPersona.value,
        correoPersona: correoPersona.value,
        fechaNacimientoPersona: new Date(fechaNacimientoPersona.value),
      };

      if (isEditing.value) {
        store.updatePersona(persona);
      } else {
        store.addPersona(persona);
      }

      router.push('/listar-persona');
    };

    return {
      nombrePersona,
      telefonoPersona,
      direccionPersona,
      correoPersona,
      fechaNacimientoPersona,
      handleSubmit,
      isEditing,
    };
  },
});
</script>