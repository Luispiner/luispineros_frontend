<template>
    <div class="container">
      <h1>Tabla de Usuarios</h1>
      <table>
        <thead>
          <tr>
            <th>Idusuario</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Cedula</th>
            <th>Telefono</th>
            <th>Direccion</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="usuario in usuarios" :key="usuario.idusuario">
            <td>{{ usuario.idusuario }}</td>
            <td>{{ usuario.nombre }}</td>
            <td>{{ usuario.apellido }}</td>
            <td>{{ usuario.cedula }}</td>
            <td>{{ usuario.telefono }}</td>
            <td>{{ usuario.direccion }}</td>
            <td>{{ usuario.email }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        usuarios: [],
      };
    },
    methods: {
      obtenerUsuarios() {
        // Método para obtener la lista de todos los usuarios
        axios.get("http://localhost:8080/api/usuarios/Listar")
          .then((response) => {
            this.usuarios = response.data;
          })
          .catch((error) => {
            console.error("Error al obtener la lista de usuarios:", error);
          });
      },
    },
    mounted() {
      // Llamar al método para obtener la lista de usuarios al cargar el componente
      this.obtenerUsuarios();
    },
  };
  </script>