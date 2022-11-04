<template>

  <section class="src-componentes-formulario-av">
    <div class="jumbotron">
      <h2>Formulario</h2>
      <hr>
      <hr>
      <br>

      <vue-form :state="formState" @submit.prevent="enviar()">
 
        <validate tag="div">
          <label for="nombre">Nombre</label>
          <input 
            type="text" 
            id="nombre" 
            class="form-control" 
            autocomplete="off"
            v-model.trim="formData.nombre" 
            name="nombre"
            required
            :minlength="nombreMinLength"
            :maxlength="nombreMaxLength"
            no-espacios
          >
           <field-messages name="nombre" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="minlength" class="alert alert-danger mt-1">
              Este campo debe poseer al menos {{ nombreMinLength }} caracteres.
            </div>  
            <div slot="no-espacios" class="alert alert-danger mt-1">
              Este campo no permite espacios intermedios
            </div>
         

          </field-messages>
        </validate>
    
        <br>
 
        <validate tag="div">
          <label for="descripcion">Descripción</label>
          <input 
            type="descripcion" 
            id="descripcion" 
            class="form-control" 
            autocomplete="off"
            v-model.trim="formData.descripcion" 
            name="descripcion"
            required
          >
           <field-messages name="descripcion" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="descripcion" class="alert alert-danger mt-1">Descripcion No válida</div>
          </field-messages>
        </validate>
        <br>

        <validate tag="div">
          <label for="importe">Importe</label>
          <input 
            type="number" 
            id="importe" 
            class="form-control" 
            autocomplete="off"
            v-model.number="formData.importe" 
            name="importe"
            required
            :min="importeMin"
            :max="importeMax"
          >
           <field-messages name="importe" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
     
    
          </field-messages>
        </validate>
      <br>
        <button class="btn btn-success my-3" :disabled="formState.$invalid">Enviar</button>

      <br>
      <br>

      <h2>Detalles de gastos</h2>
      <hr>
      <hr>
      <br>
  
          <table class="table table-dark">
          <tr>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Importe</th>
            <th>Fecha</th>

          </tr>
          <tr v-for="(usuario,index) in usuarios" :key="index">
                  <td>{{ usuario.nombre }}</td>
                  <td>{{ usuario.descripcion }}</td> 
                  <td>{{ usuario.importe }} </td>
                   <td>{{ usuario.fecha }} </td>

                <br>
               
              </tr>
         <tr :style="{ 'background-color': limiteVerde?'orange':'null' }" >
                  <td></td> 
                  <td>TOTAL:</td> 
                  <td>{{total }}</td> 
                  <td></td>  
         </tr>
 
        </table>
  
 
      <br>
 

      </vue-form>    

 

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
        limiteVerde: false,
        limiteMagenta: false,
        limiteNaranja: false,
        formState : {},
        formData: this.getInitialData(),
        nombreMinLength: 3,
        nombreMaxLength: 15,
        total: 0,
          usuarios: [
             { nombre:null, 
              descripcion: null,
              importe: null,
              fecha: null,}, 
        ],




      }
    },
    methods: {
      getInitialData() {
        return {
          nombre: null,
          descripcion: null,
          importe: null, 
          fecha: null,
          total: null
        }
    },
    enviar() {
      console.log({...this.formData})
       this.usuarios.push({ nombre: this.formData.nombre, 
                           descripcion:this.formData.descripcion,
                           importe: "$" +this.formData.importe , 
                            fecha:   new Date().toLocaleDateString('es-ar', { weekday:"long", year:"numeric", month:"short", day:"numeric"}),

                          });
 
      this.total=  this.total +  this.formData.importe 
      if(this.total>5000){
        this.limiteVerde = true
      }
       this.formData = this.getInitialData()
      this.formState._reset()
    },

  

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-componentes-formulario-av {

  }

  .jumbotron {
    background-color: rgb(10, 95, 67);
    color: white;
  }

  hr {
    background-color: #bbb;
  }

  pre {
    color: white;
  }
</style>
