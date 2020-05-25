<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- Type -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <v-list-item-subtitle class="text-wrap">
            The
            <span class="grey--text text--darken-4 font-weight-bold">type</span> prop provides 4 default <code>v-alert</code> styles: <span class="grey--text text--darken-4 font-weight-bold">success, info, warning,</span> and <span class="grey--text text--darken-4 font-weight-bold">error</span>. Each of these styles provide a default icon and color. The default colors can be configured globally by customizing Vuetify's theme.
        </v-list-item-subtitle>
        <div class="mt-4">
            <v-alert type="success">I'm a success alert.</v-alert>

            <v-alert type="info">I'm an info alert.</v-alert>

            <v-alert type="warning">I'm a warning alert.</v-alert>

            <v-alert type="error">I'm an error alert.</v-alert>
        </div>
    </div>
</template>

<script>
export default {
  name: "AlertType",

  data: () => ({
  })
};
</script>