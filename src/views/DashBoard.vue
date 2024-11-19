<template>
    <div class="dashboard-container">
      <!-- Barra de navegación lateral a la izquierda -->
      <nav class="sidebar">
        <ul>
          <li><router-link to="/crear-proyecto">Crear Proyecto</router-link></li>
          <li><router-link to="/crear-asociacion">Crear Asociación</router-link></li>
          <li><router-link to="/crear-persona">Crear Persona</router-link></li>
        </ul>
      </nav>
  
      <!-- Contenido principal del Dashboard -->
      <div class="content">
        <router-view></router-view> <!-- Muestra el componente según la ruta seleccionada -->
      </div>
    </div>
  </template>
  
  <script lang="ts">
  export default {
    name: 'DashBoard',
  };
  </script>
  
  <style scoped>
  .dashboard-container {
    display: flex;
    justify-content: flex-start;
  }
  
  .sidebar {
    width: 250px;
    height: 100vh;
    background-color: #333;
    color: white;
    padding: 20px;
    position: fixed;
    left: 0;  /* Mover la barra de navegación a la izquierda */
    top: 0;
    z-index: 10;
  }
  
  .sidebar ul {
    list-style: none;
    padding: 0;
  }
  
  .sidebar li {
    margin: 15px 0;
  }
  
  .sidebar a {
    color: white;
    text-decoration: none;
    font-size: 18px;
    transition: color 0.3s ease;
  }
  
  .sidebar a:hover {
    color: #007bff;
  }
  
  .content {
    margin-left: 270px; /* Ajustar según el ancho de la barra lateral */
    padding: 20px;
    flex-grow: 1;
  }
  </style>
  