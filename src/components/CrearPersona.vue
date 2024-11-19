<template>
  <div class="dashboard-container">
    <!-- Dashboard a la izquierda -->
    <DashBoard></DashBoard>

    <!-- Sección para registrar persona -->
    <section id="registrarPersona" class="form-container">
      <h2 class="title_persona">Registrar Persona</h2>
      <form @submit.prevent="registrarPersona">
        <input
          type="text"
          v-model="nombrePersona"
          placeholder="Nombre Completo"
          required
        />
        <input
          type="text"
          v-model="telefonoPersona"
          placeholder="Teléfono"
          required
        />
        <input
          type="text"
          v-model="direccionPersona"
          placeholder="Dirección"
          required
        />
        <input
          type="email"
          v-model="correoPersona"
          placeholder="Correo Electrónico"
          required
        />
        <label for="fechaNacimientoPersona">Fecha de Nacimiento:</label>
        <input
          type="date"
          v-model="fechaNacimientoPersona"
          required
        />
        <br />
        <button type="submit">Registrar</button>
      </form>
    </section>
  </div>
</template>

<script lang="ts">
import DashBoard from '@/views/DashBoard.vue';  // Asegúrate de que el DashBoard está en la ubicación correcta
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'RegistrarPersona',
  components: {
    DashBoard,
  },
  setup() {
    // Variables reactivas para el formulario
    const nombrePersona = ref<string>('');
    const telefonoPersona = ref<string>('');
    const direccionPersona = ref<string>('');
    const correoPersona = ref<string>('');
    const fechaNacimientoPersona = ref<string>('');

    // Método para manejar el registro
    const registrarPersona = () => {
      const persona = {
        nombre: nombrePersona.value,
        telefono: telefonoPersona.value,
        direccion: direccionPersona.value,
        correo: correoPersona.value,
        fechaNacimiento: fechaNacimientoPersona.value,
      };

      console.log(persona); // En un caso real, aquí podrías enviar los datos al servidor
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

<style scoped>
.dashboard-container {
  display: flex;  /* Usamos flexbox para la disposición lado a lado */
}

.form-container {
  max-width: 600px;
  margin-left: 270px; /* Ajuste para que el formulario no se sobreponga al menú lateral */
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  flex-grow: 1;  /* Esto asegura que el formulario ocupe el espacio restante */
}

.title_persona {
  font-size: 24px;
  font-weight: bold;
}

form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

input,
button {
  padding: 10px;
  font-size: 16px;
}

button {
  cursor: pointer;
  background-color: #4CAF50;
  color: white;
  border: none;
}

button:hover {
  background-color: #45a049;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
