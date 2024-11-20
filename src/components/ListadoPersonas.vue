<script setup lang="ts">
import DashBoard from '@/views/DashBoard.vue';
</script>

<template>
        <DashBoard></DashBoard>

    
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th colspan="5">Listado de Personas</th>
          </tr>
          <tr>
            <th>ID</th>
            <th>Tipo</th>
            <th>Nombre</th>
            <th>Detalles</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Admin</td>
            <td>Juan Pérez</td>
            <td>Administrador del sistema</td>
            <td>
              <button>Editar</button>
              <button>Eliminar</button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Usuario</td>
            <td>María López</td>
            <td>Usuario regular</td>
            <td>
              <button>Editar</button>
              <button>Eliminar</button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Invitado</td>
            <td>Carlos Gómez</td>
            <td>Invitado temporal</td>
            <td>
              <button>Editar</button>
              <button>Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <style scoped>
  /* Contenedor de la tabla centrado en la pantalla */
 .table-container
 {

    display: flex;
    justify-content: center;
    align-items: center;
  width: 80vw;
  height:-50vh;

}
  
  th, td {
    border: 1px solid #ddd; /* Borde de las celdas */
    padding: 12px 15px; /* Espaciado dentro de las celdas */
    text-align: left;
  }
  
  th {
    background-color: #4CAF50; /* Color de fondo para los encabezados */
    color: white; /* Texto blanco en los encabezados */
  }
  
  button {
    padding: 6px 12px;
    margin: 0 5px;
    border: none;
    color: white;
    cursor: pointer;
    border-radius: 4px;
  }
  
  button:first-of-type {
    background-color: #2196F3; /* Azul para el botón de Editar */
  }
  
  button:last-of-type {
    background-color: #f44336; /* Rojo para el botón de Eliminar */
  }
  
  button:hover {
    opacity: 0.8; /* Efecto de opacidad al pasar el mouse sobre los botones */
  }
  </style>
  