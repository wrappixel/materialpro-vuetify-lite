<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- IconColors -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <v-list-item-subtitle class="text-wrap">
           Using color helpers you can change the color of an icon from the standard dark and light themes.
        </v-list-item-subtitle>
        <div class="mt-4">
            <v-row justify="space-around">
                <v-icon large color="green darken-2">mdi-domain</v-icon>

                <v-icon large color="blue darken-2">mdi-message-text</v-icon>

                <v-icon large color="purple darken-2">mdi-dialpad</v-icon>

                <v-icon large color="teal darken-2">mdi-email</v-icon>

                <v-icon large color="blue-grey darken-2">mdi-call-split</v-icon>

                <v-icon large color="orange darken-2">mdi-arrow-up-bold-box-outline</v-icon>
            </v-row>
        </div>
    </div>
</template>

<script>
export default {
  name: "IconColors",

  data: () => ({
  }),
};
</script>