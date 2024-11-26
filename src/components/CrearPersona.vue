<template>
  <div class="flex flex-col items-center justify-start py-2">
    <!-- Dashboard a la izquierda -->
    <DashBoard></DashBoard>

    <!-- Sección para registrar persona -->
    <section id="registrarPersona" class="w-full max-w-lg p-6 bg-gray-100 rounded-lg shadow-md mt-4">
      <h2 class="text-2xl font-bold text-center mb-6 text-gray-800">Registrar Persona</h2>
      <form @submit.prevent="registrarPersona" class="space-y-4">
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
            Registrar
          </button>
        </div>
      </form>
    </section>
  </div>
</template>

<script lang="ts">
import DashBoard from '@/views/DashBoard.vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'RegistrarPersona',
  components: {
    DashBoard,
  },
  setup() {
    const nombrePersona = ref<string>('');
    const telefonoPersona = ref<string>('');
    const direccionPersona = ref<string>('');
    const correoPersona = ref<string>('');
    const fechaNacimientoPersona = ref<string>('');

    const registrarPersona = () => {
      const persona = {
        nombre: nombrePersona.value,
        telefono: telefonoPersona.value,
        direccion: direccionPersona.value,
        correo: correoPersona.value,
        fechaNacimiento: fechaNacimientoPersona.value,
      };

      console.log(persona);
    };

    return {
      nombrePersona,
      telefonoPersona,
      direccionPersona,
      correoPersona,
      fechaNacimientoPersona,
      registrarPersona,
    };
  },
});
</script>
