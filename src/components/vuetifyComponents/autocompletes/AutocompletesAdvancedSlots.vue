<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- Advanced slots -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <v-list-item-subtitle class="text-wrap">
        The <code>v-autocomplete</code> component is extremely flexible and can fit in just about any use-case. Create custom displays for no-data, item and selection slots to provide a unique user experience. Using slots enables you to easily customize the desired look for your application.
        </v-list-item-subtitle>
        <div class="mt-4">
            <v-toolbar color="info accent-1">
                <v-app-bar-nav-icon class="hidden-sm-and-down white--text"></v-app-bar-nav-icon>
                <v-toolbar-title class="title mr-6 hidden-sm-and-down white--text">Cryptocurrency</v-toolbar-title>
                <v-autocomplete
                v-model="model"
                :items="items"
                :loading="isLoading"
                :search-input.sync="search"
                chips
                clearable
                hide-details
                hide-selected
                item-text="name"
                item-value="symbol"
                label="Search for a coin..."
                solo
                >
                <template v-slot:no-data>
                    <v-list-item>
                    <v-list-item-title>
                        Search for your favorite
                        <strong>Cryptocurrency</strong>
                    </v-list-item-title>
                    </v-list-item>
                </template>
                <template v-slot:selection="{ attr, on, item, selected }">
                    <v-chip
                    v-bind="attr"
                    :input-value="selected"
                    color="blue-grey"
                    class="white--text"
                    v-on="on"
                    >
                    <v-icon left>mdi-coin</v-icon>
                    <span v-text="item.name"></span>
                    </v-chip>
                </template>
                <template v-slot:item="{ item }">
                    <v-list-item-avatar
                    color="indigo"
                    class="headline font-weight-light white--text"
                    >
                    {{ item.name.charAt(0) }}
                    </v-list-item-avatar>
                    <v-list-item-content>
                    <v-list-item-title v-text="item.name"></v-list-item-title>
                    <v-list-item-subtitle v-text="item.symbol"></v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-action>
                    <v-icon>mdi-coin</v-icon>
                    </v-list-item-action>
                </template>
                </v-autocomplete>
                <template v-slot:extension>
                <v-tabs
                    v-model="tab"
                    :hide-slider="!model"
                    color="blue-grey"
                    slider-color="blue-grey"
                >
                    <v-tab :disabled="!model">News</v-tab>
                    <v-tab :disabled="!model">Trading</v-tab>
                    <v-tab :disabled="!model">Blog</v-tab>
                </v-tabs>
                </template>
            </v-toolbar>
        </div>
    </div>
</template>

<script>
export default {
  name: "AutocompletesAdvancedSlots",

  data: () => ({
      isLoading: false,
      items: [],
      model: null,
      search: null,
      tab: null,
  }),
  watch: {
    search() {
      // Items have already been loaded
      if (this.items.length > 0) return;

      this.isLoading = true;

      // Lazily load input items
      window.axios
        .get("https://api.coinmarketcap.com/v2/listings/")
        .then(res => {
          this.items = res.data.data;
        })
        // .catch(err => {
        //   console.log(err);
        // })
        .finally(() => (this.isLoading = false));
    }
  }
};
</script>