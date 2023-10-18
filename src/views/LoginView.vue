<template>
    <div class="Usuariologin">
      <div class="components">
      <FormularioLogin/> 
      <TablaLogin /> 
    </div>
  </div>
  </template>
  
  <script>
    import FormularioLogin from "@/components/FormularioLogin.vue";
    import TablaLogin from "@/components/TablaLogin.vue";
  
    export default {
      name: 'LoginView', 
      components: {
        FormularioLogin, 
        TablaLogin, 
      }
    }
  </script>
  
  <style>
  body {
    font-family: Arial, sans-serif;
    background-color: #afad4a;
    margin: 0;
    padding: 0;
  }
  
  .components {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-auto-rows: 1fr;
  }
  .container {
    /* max-width: 400px;*/
    margin: 1rem;
    padding: 1rem;
    background-color: #7892af;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
  }
  
  h1 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  form {
    padding: 2%;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }
  button {
    display: block;
    width: 100%;
    padding: 10%;
    background-color: #a7ad52;
    color: #fff;
    border: none;
    box-shadow: 0 0 10px rgba(0, 0, 0.2);
    border-radius: 5px;
    cursor: pointer;
  
  }
  button:hover {
    background-color: #0056b3;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
    
  }
  
  th, td {
    padding: 10px;
    text-align: left;
  /*   border-bottom: 1px solid #ddd;*/
  border-style: solid;
    
  }
  tr{
  
    border-style: solid;
  }
  
  th {
    background-color: #3700ff;
    color: #fff;
    border-style: solid;
  }
  
  tr:hover {
    background-color: #3a38b8;
  }
  </style>
  