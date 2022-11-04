<template>

  <section class="src-componentes-formulario-av">
    <div class="jumbotron">
      <h2>Respuestas</h2>
      <hr>
      <hr>
      <br>
 
<table class="table table-bordered table-dark">
          <tr>
            <th>Numero de pregunta</th>
            <th>Respuesta</th>
  
          </tr>
          <tr v-for="(respuesta,index) in respuestas" :key="index">
                  <td>{{ respuesta.numero }}</td>
                  <td>{{ respuesta.respuesta }}</td> 
 
                <br>
               
          </tr>
          
        </table>
    
    </div>
  </section>

</template>

<script>

  export default  {
    name: 'src-componentes-formulario-av',
    props: [],
    mounted () {

    },
    data () {
      return {

       
           respuestas: [
             { numero:1, 
              respuesta: "b",
               },       
             { numero:2, 
              respuesta: "c",
               }, 
             { numero:3, 
              respuesta: "e",
               }, 
        ],




      }
    },
    methods: {
      getInitialData() {
        return {
       
       
        }
    },
    
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-componentes-respuestas{

  }

  .jumbotron {
    background-color: rgb(48, 128, 100);
    color: white;
  }

  hr {
    background-color: #bbb;
  }

  pre {
    color: white;
  }
</style>
