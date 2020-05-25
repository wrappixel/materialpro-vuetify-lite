<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- IconClickable -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <v-list-item-subtitle class="text-wrap">
           Binding any click event to <code>v-icon</code> will automatically change the cursor to a pointer.
        </v-list-item-subtitle>
        <div class="mt-4">
            <v-card>
                <v-toolbar
                color="info"
                dark
                dense
                flat
                >
                <v-toolbar-title class="body-2">Upcoming Changes</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </v-card-text>

                <v-card-actions>
                <v-spacer></v-spacer>
                <v-icon
                    large
                    @click.stop
                >
                    mdi-chevron-right
                </v-icon>
                </v-card-actions>
            </v-card>
        </div>
    </div>
</template>

<script>
export default {
  name: "IconClickable",

  data: () => ({
      methods: {
            next () {
                alert('You clicked next!')
            },
        },
  }),
};
</script>