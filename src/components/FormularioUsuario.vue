<template>
    <div class="container">
      <h1>Formulario de Usuario</h1>
      <form id="usuario-form" @submit.prevent="insertar">
        <div class="form-group">
          <label for="idusuario">Idusuario:</label>
          <input type="text" id="idusuario" name="idusuario" required v-model="idusuario" />
        </div>
        <div class="form-group">
          <label for="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" required v-model="nombre" />
        </div>
        <div class="form-group">
          <label for="apellido">Apellido:</label>
          <input type="text" id="apellido" name="apellido" required v-model="apellido" />
        </div>
        <div class="form-group">
          <label for="cedula">Cedula:</label>
          <input type="text" id="cedula" name="cedula" required v-model="cedula" />
        </div>
        <div class="form-group">
          <label for="telefono">Telefono:</label>
          <input type="text" id="telefono" name="telefono" required v-model="telefono" />
        </div>
        <div class="form-group">
          <label for = "direccion">Direccion:</label>
          <input type="text" id="direccion" name="direccion" required v-model="direccion" />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="text" id="email" name="email" required v-model="email" />
        </div>
  
        <button type="submit" id="guardar" name="guardar">Guardar</button><br>
        <button type="button" id="Eliminar" @click="eliminar">Eliminar</button><br>
        <button type="button" id="Actualizar" @click="actualizar">Actualizar</button><br>
        <button type="button" id="Consultar" @click="consultar">Consultar</button><br>
      </form>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        idusuario: "",
        nombre: "",
        apellido: "",
        cedula: "",
        telefono: "",
        direccion: "",
        email: "",
      };
    },
    methods: {
      insertar() {
        axios
          .post("http://localhost:8080/api/usuarios", {
            idusuario: this.idusuario,
            nombre: this.nombre,
            apellido: this.apellido,
            cedula: this.cedula,
            telefono: this.telefono,
            direccion: this.direccion,
            email: this.email,
          })
          .then((response) => {
            console.log("Usuario registrado con éxito:", response.data);
            alert("Exitoso");
            this.idusuario = "";
            this.nombre = "";
            this.apellido = "";
            this.cedula = "";
            this.telefono = "";
            this.direccion = "";
            this.email = "";
          })
          .catch((error) => {
            console.error("Error al Registrar Usuario", error);
          });
      },
      consultar() {
        axios
          .get("http://localhost:8080/api/usuarios/" + this.idusuario)
          .then((response) => {
            this.nombre = response.data.nombre;
            this.apellido = response.data.apellido;
            this.cedula = response.data.cedula;
            this.telefono = response.data.telefono;
            this.direccion = response.data.direccion;
            this.email = response.data.email;
          })
          .catch((error) => {
            console.error("Error al consultar estudiante", error);
          });
      },
      actualizar() {
        axios
          .put("http://localhost:8080/api/usuarios/actualizar/" + this.idusuario, {
            idusuario: this.idusuario,
            nombre: this.nombre,
            apellido: this.apellido,
            cedula: this.cedula,
            telefono: this.telefono,
            direccion: this.direccion,
            email: this.email,
          })
          .then((response) => {
            console.log("Usuario actualizado con éxito:", response.data);
          })
          .catch((error) => {
            console.error("Error al actualizar Usuario:", error);
          });
      },
      eliminar() {
        axios
          .delete("http://localhost:8080/api/usuarios/" + this.idusuario)
          .then(() => {
            console.log("Usuario eliminado con éxito");
            this.idusuario = "";
            this.nombre = "";
            this.apellido = "";
            this.cedula = "";
            this.telefono = "";
            this.direccion = "";
            this.email = "";
          });
      },
    },
  };
  </script>
  __