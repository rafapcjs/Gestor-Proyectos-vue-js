<template>
    <div class="dashboard-container">
      <!-- Incluye el DashBoard como un componente dentro del contenedor principal -->
      <DashBoard></DashBoard>
  
      <!-- Contenedor del formulario -->
      <section class="form-container">
        <h2>Crear Proyecto</h2>
        <form @submit.prevent="crearProyecto">
          <input type="text" v-model="nombreProyecto" placeholder="Nombre del Proyecto" required />
          <textarea v-model="descripcionProyecto" placeholder="Descripción del Proyecto" required></textarea>
          <input type="date" v-model="fechaInicioProyecto" required />
          <input type="date" v-model="fechaFinProyecto" required />
          <input type="number" v-model="presupuestoProyecto" min="1" placeholder="Presupuesto Estimado" required />
          <button type="submit">Crear</button>
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
  
  h2 {
    text-align: center;
    color: #333;
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  
  input,
  textarea {
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    transition: all 0.3s ease;
  }
  
  input:focus,
  textarea:focus {
    border-color: #007bff;
    outline: none;
  }
  
  textarea {
    resize: vertical;
    min-height: 100px;
  }
  
  button {
    padding: 12px;
    font-size: 16px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  </style>
  