<template>
  <div class="dashboard-container">
    <!-- Incluye el DashBoard como un componente dentro del contenedor principal -->
    <DashBoard></DashBoard>

    <!-- Contenedor del formulario -->
    <section class="form-container">
      <h2>Crear Proyecto</h2>
      <form @submit.prevent="crearProyecto">
        <div class="input-group">
          <input type="text" v-model="nombreProyecto" placeholder="Nombre del Proyecto" required />
        </div>
        <div class="input-group">
          <textarea v-model="descripcionProyecto" placeholder="Descripción del Proyecto" required></textarea>
        </div>
        <div class="input-group">
          <input type="date" v-model="fechaInicioProyecto" required />
        </div>
        <div class="input-group">
          <input type="date" v-model="fechaFinProyecto" required />
        </div>
        <div class="input-group">
          <input type="number" v-model="presupuestoProyecto" min="1" placeholder="Presupuesto Estimado" required />
        </div>
        <div class="button-group">
          <button type="submit">Crear</button>
        </div>
      </form>
    </section>
  </div>
</template>

<script lang="ts">
import DashBoard from '@/views/DashBoard.vue';  // Asegúrate de que el DashBoard está en la ubicación correcta
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'CrearProyecto',
  components: {
    DashBoard,
  },
  setup() {
    // Variables para el formulario
    const nombreProyecto = ref<string>('');
    const descripcionProyecto = ref<string>('');
    const fechaInicioProyecto = ref<string>('');
    const fechaFinProyecto = ref<string>('');
    const presupuestoProyecto = ref<number>(0);

    // Método para crear el proyecto
    const crearProyecto = (): void => {
      console.log({
        nombreProyecto: nombreProyecto.value,
        descripcionProyecto: descripcionProyecto.value,
        fechaInicioProyecto: fechaInicioProyecto.value,
        fechaFinProyecto: fechaFinProyecto.value,
        presupuestoProyecto: presupuestoProyecto.value,
      });
    };

    return {
      nombreProyecto,
      descripcionProyecto,
      fechaInicioProyecto,
      fechaFinProyecto,
      presupuestoProyecto,
      crearProyecto,
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
  margin-top: 10px;  /* Reduce el margen superior para que se acerque más a la parte superior */
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
.input-group textarea {
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
