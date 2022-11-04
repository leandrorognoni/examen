<template>
  <div class="container-fluid mt-3">
    <div class="jumbotron">
      <h1>Examen Parcial - PNT2</h1>
      <h3>Rognoni Leandro</h3>

      <br>

      <Navbar />
      <router-view></router-view>
  
    </div>
  </div>
</template>

<script>

import Navbar from './componentes/Navbar.vue'


export default {
  name: 'App',
  components: {
 
    Navbar  
  }
}
</script>

<style>
  h1 {
    color: rgb(41, 95, 62);
    background-color: rgb(138, 185, 156);;
  }
</style>
