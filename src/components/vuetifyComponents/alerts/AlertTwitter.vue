<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- Twitter -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <v-list-item-subtitle class="text-wrap line-h20">By combining <span class="grey--text text--darken-4 font-weight-bold">color</span>, <span class="grey--text text--darken-4 font-weight-bold">dismissible</span>, <span class="grey--text text--darken-4 font-weight-bold">border</span>, <span class="grey--text text--darken-4 font-weight-bold">elevation</span>, <span class="grey--text text--darken-4 font-weight-bold">icon</span>, and <span class="grey--text text--darken-4 font-weight-bold">colored-border</span> props you can create stylish custom alerts such as this twitter notification.</v-list-item-subtitle>
        <div class="mt-4">
        <v-alert
            v-model="alert"
            dismissible
            color="cyan"
            border="left"
            elevation="2"
            colored-border
            icon="mdi-twitter"
        >
            You've got
            <strong>5</strong> new updates on your timeline!.
        </v-alert>

        <div class="text-center">
            <v-btn v-if="!alert" dark @click="alert = true">Reset Alert</v-btn>
        </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "AlertTwitter",

  data: () => ({
      alert: true,
  })
};
</script>