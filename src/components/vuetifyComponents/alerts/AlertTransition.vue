<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- Transition -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <v-list-item-subtitle class="text-wrap">The <span class="grey--text text--darken-4 font-weight-bold">transition</span> prop allows you to apply a transition to the alert which is viewable when the component hides and shows. For more information, you can checkout any of Vuetify's prebuilt transitions or review how to create your own.</v-list-item-subtitle>
        <div class="mt-4">
        <div class="text-center mb-4">
            <v-btn color="primary" @click="alert = !alert">Toggle</v-btn>
        </div>
        <v-alert
            :value="alert"
            color="success"
            dark
            border="top"
            icon="mdi-home"
            transition="scale-transition"
        >
            Phasellus tempus. Fusce ac felis sit amet ligula pharetra condimentum. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Pellentesque posuere. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo.
            Phasellus nec sem in justo pellentesque facilisis. Phasellus magna. Cras risus ipsum, faucibus ut, ullamcorper id, varius ac, leo. In hac habitasse platea dictumst. Praesent turpis.
        </v-alert>
        </div>
    </div>
</template>

<script>
export default {
  name: "AlertTransition",

  data: () => ({
      alert: true
  })
};
</script>