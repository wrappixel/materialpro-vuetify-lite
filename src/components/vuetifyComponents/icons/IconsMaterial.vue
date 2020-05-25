<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- IconsMaterial -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <v-list-item-subtitle class="text-wrap">
           Material Design is also supported. For more information on how to install it please navigate.
        </v-list-item-subtitle>
        <div class="mt-4">
            <v-row justify="space-around" class="mb-2">
                <span class="group pa-2">
                    <v-icon>mdi-home-outline</v-icon>
                    <v-icon>mdi-calendar</v-icon>
                    <v-icon>mdi-alert-circle</v-icon>
                </span>

                <span class="group pa-2 info">
                    <v-icon dark>mdi-folder-star</v-icon>
                    <v-icon dark>mdi-apps</v-icon>
                    <v-icon dark>mdi-format-rotate-90</v-icon>
                </span>
                </v-row>

                <v-row justify="space-around" class="mb-2">
                <span class="group pa-2">
                    <v-icon medium>mdi-home-outline</v-icon>
                    <v-icon medium>mdi-calendar</v-icon>
                    <v-icon medium>mdi-alert-circle</v-icon>
                </span>

                <span class="group pa-2 info">
                    <v-icon medium dark>mdi-folder-star</v-icon>
                    <v-icon medium dark>mdi-apps</v-icon>
                    <v-icon medium dark>mdi-format-rotate-90</v-icon>
                </span>
                </v-row>

                <v-row justify="space-around" class="mb-2">
                <span class="group pa-2">
                    <v-icon large>mdi-home-outline</v-icon>
                    <v-icon large>mdi-calendar</v-icon>
                    <v-icon large>mdi-alert-circle</v-icon>
                </span>

                <span class="group pa-2 info">
                    <v-icon large dark>mdi-folder-star</v-icon>
                    <v-icon large dark>mdi-apps</v-icon>
                    <v-icon large dark>mdi-format-rotate-90</v-icon>
                </span>
                </v-row>

                <v-row justify="space-around">
                <span class="group pa-2">
                    <v-icon x-large>mdi-home-outline</v-icon>
                    <v-icon x-large>mdi-calendar</v-icon>
                    <v-icon x-large>mdi-alert-circle</v-icon>
                </span>

                <span class="group pa-2 info">
                    <v-icon x-large dark>mdi-folder-star</v-icon>
                    <v-icon x-large dark>mdi-apps</v-icon>
                    <v-icon x-large dark>mdi-format-rotate-90</v-icon>
                </span>
                </v-row>
        </div>
    </div>
</template>

<style>
.group {
  display: flex;
  flex: 1;
  justify-content: space-around;
}
</style>

<script>
export default {
  name: "IconsMaterial",

  data: () => ({
  }),
};
</script>