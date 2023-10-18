<template>
    <div class="container">
      <h1>Formulario de inicio de sesión</h1>
      <form id="login-form" @submit.prevent="iniciarSesion">
          <div class="form-group">
          <label for="username">Username:</label>
          <input type="text" id="username" name="username" required v-model="username" />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" name="password" required v-model="password" />
        </div>
        <button type="submit" id="iniciar-sesion" name="iniciar-sesion">Iniciar Sesión</button><br>
        <button type="button" id="guardar-contrasena" name="guardar-contrasena" @click="guardarUsuarioPassword">Guardar Contraseña</button><br>
        <button type="button" id="listar-logeados" name="listar-logeados" @click="listarLogeadosContraseña">Listar Logeados Contraseña</button><br>
      </form>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  export default {
    data() {
      return {
        idu: "",
        username: "",
        password: "",
      };
    },
    methods: {
      iniciarSesion() {
    // Crear un objeto de usuario para enviar al backend
    const usuarioingresado = {
      idu: this.idu,
      username: this.username,
      password: this.password,
    };
  
    axios
      .post("http://localhost:8080/api/usuarioslogin/login", usuarioingresado)
      .then((response) => {
        if (response.data) {
          // El inicio de sesión fue exitoso, redirige al usuario a la página de inicio
          this.$router.push("/home");
        } else {
          alert("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
        }
      })
      .catch((error) => {
        alert("Error al iniciar sesión: " + error.message);
      });
  
      },
      guardarUsuarioPassword() {
             axios
            .post("http://localhost:8080/api/usuarioslogin", {
              idu: this.idu,
              username: this.username,
              password: this.pasword,
            })
            .then((response) => {
              console.log("Username y Password registrados con éxito:", response.data);
              alert("Exitoso");
              this.idu = "";
              this.username = "";
              this.password = "";
            })
            .catch((error) => {
              console.error("Error al Registrar Username y Password", error);
            });
        
      },
      listarLogeadosContraseña() {
        axios
        axios
      .get(`http://localhost:8080/api/usuarioslogin/listarlogeados?&idu=1`)
          .then((response) => {
            this.username = response.data.username;
            this.password = response.data.password;
          })
          .catch((error) => {
            console.error("Error al obtener la lista de usuarios logeados:", error);
          })
          },
    },
  };
  </script>