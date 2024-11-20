<template>
  <div class="dashboard-container">
    <!-- Dashboard a la izquierda -->
    <DashBoard></DashBoard>

    <!-- Sección para asociar persona al proyecto -->
    <section id="asociarPersonaProyecto" class="form-container">
      <h2>Asociar Persona al Proyecto</h2>
      <form @submit.prevent="asociarPersona">
        <div class="input-group">
          <label for="personaSelect">Seleccione Persona:</label>
          <select id="personaSelect" class="input-field" required>
            <option value="1">Juan Pérez</option>
            <option value="2">Ana Gómez</option>
            <option value="3">Carlos Rodríguez</option>
          </select>
        </div>

        <div class="input-group">
          <label for="proyectoSelect">Seleccione Proyecto:</label>
          <select id="proyectoSelect" class="input-field" required>
            <option value="101">Proyecto A</option>
            <option value="102">Proyecto B</option>
            <option value="103">Proyecto C</option>
          </select>
        </div>

        <div class="input-group">
          <input type="text" id="rolAsociacion" class="input-field" placeholder="Rol en el Proyecto" required />
        </div>

        <div class="input-group">
          <input type="text" id="responsabilidadAsociacion" class="input-field" placeholder="Responsabilidad en el Proyecto" required />
        </div>

        <div class="button-group">
          <button type="submit">Asociar</button>
        </div>
      </form>
    </section>
  </div>
</template>

<script lang="ts">
import DashBoard from '@/views/DashBoard.vue';  // Asegúrate de que el DashBoard está en la ubicación correcta
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

h2 {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
}

.input-group {
  margin-bottom: 15px;
}

.input-group input,
.input-group select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

.input-group textarea {
  resize: vertical;
  min-height: 100px;
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
