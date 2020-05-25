<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- Icon -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <v-list-item-subtitle class="text-wrap line-h20">The <span class="grey--text text--darken-4 font-weight-bold">icon</span> prop allows you to add an icon to the beginning of the alert component. If a <span class="grey--text text--darken-4 font-weight-bold">type</span> is provided, this will override the default type icon. Additionally setting the <span class="grey--text text--darken-4 font-weight-bold">icon</span> prop to false will remove the icon altogether.</v-list-item-subtitle>
        <div class="mt-4">
        <v-alert
            color="error"
            dark
            icon="mdi-firework"
            dense
        >Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. Vivamus quis mi.</v-alert>
        <v-alert
            color="info"
            dark
            icon="mdi-material-design"
            border="right"
        >Phasellus blandit leo ut odio. Morbi mattis ullamcorper velit. Donec orci lectus, aliquam ut, faucibus non.</v-alert>
        <v-alert
            color="warning"
            dark
            icon="mdi-vuetify"
            border="left"
            prominent
        >Praesent congue erat at massa. Nullam vel sem. Aliquam lorem ante, dapibus in, viverra quis, feugiat a.</v-alert>
        </div>
    </div>
</template>

<script>
export default {
  name: "AlertIcon",

  data: () => ({
  })
};
</script>