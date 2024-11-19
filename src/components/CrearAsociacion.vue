<template>
    <div class="dashboard-container">
      <!-- Dashboard a la izquierda -->
      <DashBoard></DashBoard>
  
      <!-- Sección para asociar persona al proyecto -->
      <section id="asociarPersonaProyecto" class="form-container">
        <h2>Asociar Persona al Proyecto</h2>
        <form @submit.prevent="asociarPersona">
          <label for="personaSelect">Seleccione Persona:</label>
          <select id="personaSelect" required>
            <option value="1">Juan Pérez</option>
            <option value="2">Ana Gómez</option>
            <option value="3">Carlos Rodríguez</option>
          </select>
  
          <label for="proyectoSelect">Seleccione Proyecto:</label>
          <select id="proyectoSelect" required>
            <option value="101">Proyecto A</option>
            <option value="102">Proyecto B</option>
            <option value="103">Proyecto C</option>
          </select>
  
          <input type="text" id="rolAsociacion" placeholder="Rol en el Proyecto" required />
          <input type="text" id="responsabilidadAsociacion" placeholder="Responsabilidad en el Proyecto" required />
  
          <button type="submit">Asociar</button>
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
    display: flex;  /* Usamos flexbox para la disposición lado a lado */
  }
  
  .form-container {
    max-width: 600px;
    margin-left: 270px; /* Ajuste para que el formulario no se sobreponga al menú lateral */
    padding: 20px;
    background-color: #f4f4f9;
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
  
  label {
    font-size: 16px;
    color: #555;
  }
  
  select,
  input {
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    transition: all 0.3s ease;
  }
  
  select:focus,
  input:focus {
    border-color: #007bff;
    outline: none;
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
  </style>
  