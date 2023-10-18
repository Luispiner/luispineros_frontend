<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo1.png">
    <HelloWorld msg="Huevos Frescos De La Mejor Calidad "/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
