<template>
  <v-card class="mb-7">
    <v-toolbar flat>
        <v-toolbar-title>
            
            {{ heading }}
        </v-toolbar-title>

        <v-spacer></v-spacer>
      </v-toolbar>
      <v-divider></v-divider>
       <div class="pa-4">
            <slot/>
       </div>     
  </v-card>
</template>

<script>

  export default {
    name: 'BaseCard',

    props: {
      heading: {
        type: String,
        default: '',
      }
    },
    data:  () => ({
        
    }),
    
    methods:{
     
    }
  }
</script>