<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- Dence -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <v-list-item-subtitle class="text-wrap line-h20">The <span class="grey--text text--darken-4 font-weight-bold">dense</span> prop decreases the height of the alert to create a simple and compact style. When combined with the <span class="grey--text text--darken-4 font-weight-bold">border</span> prop the border thickness will be decreased to stay consistent with the style.</v-list-item-subtitle>
        <div class="mt-4">
        <v-alert dense type="info">
            I'm a dense alert with a
            <span class="font-weight-medium">type</span> of info
        </v-alert>
        <v-alert dense text type="success">
            I'm a dense alert with the
            <span class="font-weight-medium">text</span> prop and a
            <span class="font-weight-medium">type</span> of success
        </v-alert>
        <v-alert dense border="left" type="warning">
            I'm a dense alert with the
            <span class="font-weight-medium">border</span> prop and a
            <span class="font-weight-medium">type</span> of warning
        </v-alert>
        <v-alert dense outlined type="error">
            I'm a dense alert with the
            <span class="font-weight-medium">outlined</span> prop and a
            <span class="font-weight-medium">type</span> of error
        </v-alert>
        </div>
    </div>
</template>

<script>
export default {
  name: "AlertDence",

  data: () => ({
      
  })
};
</script>