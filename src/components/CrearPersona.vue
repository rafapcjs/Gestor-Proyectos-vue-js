<template>
  <div class="dashboard-container">
    <!-- Dashboard a la izquierda -->
    <DashBoard></DashBoard>

    <!-- Sección para registrar persona -->
    <section id="registrarPersona" class="form-container">
      <h2 class="title_persona">Registrar Persona</h2>
      <form @submit.prevent="registrarPersona">
        <div class="input-group">
          <input
            type="text"
            v-model="nombrePersona"
            class="input-field"
            placeholder="Nombre Completo"
            required
          />
        </div>

        <div class="input-group">
          <input
            type="text"
            v-model="telefonoPersona"
            class="input-field"
            placeholder="Teléfono"
            required
          />
        </div>

        <div class="input-group">
          <input
            type="text"
            v-model="direccionPersona"
            class="input-field"
            placeholder="Dirección"
            required
          />
        </div>

        <div class="input-group">
          <input
            type="email"
            v-model="correoPersona"
            class="input-field"
            placeholder="Correo Electrónico"
            required
          />
        </div>

        <div class="input-group">
          <label for="fechaNacimientoPersona">Fecha de Nacimiento:</label>
          <input
            type="date"
            v-model="fechaNacimientoPersona"
            class="input-field"
            required
          />
        </div>

        <div class="button-group">
          <button type="submit">Registrar</button>
        </div>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 1px;
}

.form-container {
  width: 100%;
  max-width: 600px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-top: 10px;
}

.title_persona {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
}

.input-group {
  margin-bottom: 15px;
}

.input-group input,
.input-group select,
.input-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

.input-group label {
  font-size: 16px;
  margin-bottom: 5px;
  display: block;
}

.button-group {
  display: flex;
  justify-content: center;
}

button {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #45a049;
}
</style>
