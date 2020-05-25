<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- Toggle Navigation Drawers -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <v-list-item-subtitle class="text-wrap">
        Using the functional component <code>v-app-bar-nav-icon</code> you can toggle the state of other components such as a v-navigation-drawer.
        </v-list-item-subtitle>
        <div class="mt-4">
            <v-card
                class="mx-auto overflow-hidden"
                height="400"
            >
                <v-app-bar
                color="success"
                dark
                >
                <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

                <v-toolbar-title>Title</v-toolbar-title>
                </v-app-bar>

                <v-navigation-drawer
                v-model="drawer"
                absolute
                temporary
                >
                <v-list
                    nav
                    dense
                >
                    <v-list-item-group
                    active-class="success--text text--accent-4"
                    >
                    <v-list-item>
                        <v-list-item-icon>
                        <v-icon>mdi-home</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Home</v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-icon>
                        <v-icon>mdi-account</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Account</v-list-item-title>
                    </v-list-item>

                    </v-list-item-group>
                </v-list>
                </v-navigation-drawer>
            </v-card>
        </div>
    </div>
</template>

<script>
export default {
  name: "AppbarToggleNavigation",

  data: () => ({
      drawer: false,
  })
};
</script>