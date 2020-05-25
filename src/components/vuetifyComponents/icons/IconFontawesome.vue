<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- IconFontawesome -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <v-list-item-subtitle class="text-wrap">
           Font Awesome is also supported. Simply use the <code>fa-</code> prefixed icon name. Please note that you still need to include the Font Awesome icons in your project. For more information on how to install it, please navigate to the installation page
        </v-list-item-subtitle>
        <div class="mt-4">
            <v-row align="center" justify="space-around">
                <v-icon>fas fa-lock</v-icon>

                <v-icon>fas fa-search</v-icon>

                <v-icon>fas fa-list</v-icon>

                <v-icon>fas fa-edit</v-icon>

                <v-icon>fas fa-tachometer-alt</v-icon>

                <v-icon>fas fa-circle-notch fa-spin</v-icon>
            </v-row>
        </div>
    </div>
</template>

<script>
export default {
  name: "IconFontawesome",

  data: () => ({
  }),
};
</script>