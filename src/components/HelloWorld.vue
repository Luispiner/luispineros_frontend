<template>
  <div class="hello">
    <!-- Título dinámico que muestra el contenido de la propiedad 'msg' -->
    <h1>{{ msg }}</h1>
    <p>
      <!-- Información y enlaces a la documentación de Vue CLI -->
      Avicola Graciela Visitenos para Tener el gusto de atenderlo,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>SIVAG- Sistema de Inventarios y Ventas Avivola Graciela -Desarrollado por: FiveBoxes Systems</h3>
    
    
  </div>
</template>

<script>
export default {
  // Nombre del componente
  name: 'HelloWorld',
  // Propiedades que el componente espera recibir
  props: {
    msg: String // 'msg' se espera como una cadena (String)
  }
}
</script>

<!-- Estilos CSS para este componente con el atributo 'scoped' -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;  
}
</style>
