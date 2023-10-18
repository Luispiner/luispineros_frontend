<template>
    <div class="container">
      <h1>Tabla de Login</h1>
      <table>
        <thead>
          <tr>
            <th>idu</th>
            <th>username</th>
            <th>password</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="usuario in usuarioslogin" :key="usuario.idu">
            <td>{{ usuario.idu }}</td>
            <td>{{ usuario.username }}</td>
            <td>{{ usuario.password }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  const API_URL = process.env.API_URL || "http://localhost:8080/api/usuarioslogin";
  
  export default {
    data() {
      return {
        usuarioslogin: [],
      };
    },
    methods: {
      obtenerUsuarios() {
        axios
          .get(`${API_URL}/listarlogeados`)
          .then((response) => {
            this.usuarioslogin = response.data;
          })
          .catch((error) => {
            console.error(
              "Error al obtener la lista de usuarios logeados:",
              error
            );
          });
      },
    },
    mounted() {
      this.obtenerUsuarios();
    },
  };
  </script>