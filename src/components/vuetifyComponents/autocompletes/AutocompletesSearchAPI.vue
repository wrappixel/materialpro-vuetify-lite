<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- Autocompletes Search API -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <v-list-item-subtitle class="text-wrap">
            Easily hook up dynamic data and create a unique experience. The <code>v-autocomplete</code>'s expansive prop list makes it easy to fine tune every aspect of the input.
        </v-list-item-subtitle>
        <div class="mt-4">
            <v-card
                color="info"
                dark
            >
                <v-card-title class="headline info darken-5">
                Search for Public APIs
                </v-card-title>
                <v-card-text>
                Explore hundreds of free API's ready for consumption! For more information visit
                <a
                    class="grey--text text--lighten-3"
                    href="https://github.com/toddmotto/public-apis"
                    target="_blank"
                >the Github repository</a>.
                </v-card-text>
                <v-card-text>
                <v-autocomplete
                    v-model="model"
                    :items="items"
                    :loading="isLoading"
                    :search-input.sync="search"
                    color="white"
                    hide-no-data
                    hide-selected
                    item-text="Description"
                    item-value="API"
                    label="Public APIs"
                    placeholder="Start typing to Search"
                    prepend-icon="mdi-database-search"
                    return-object
                ></v-autocomplete>
                </v-card-text>
                <v-divider></v-divider>
                <v-expand-transition>
                <v-list v-if="model" class="info lighten-1">
                    <v-list-item
                    v-for="(field, i) in fields"
                    :key="i"
                    >
                    <v-list-item-content>
                        <v-list-item-title v-text="field.value"></v-list-item-title>
                        <v-list-item-subtitle v-text="field.key"></v-list-item-subtitle>
                    </v-list-item-content>
                    </v-list-item>
                </v-list>
                </v-expand-transition>
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    :disabled="!model"
                    color="grey darken-3"
                    @click="model = null"
                >
                    Clear
                    <v-icon right>mdi-close-circle</v-icon>
                </v-btn>
                </v-card-actions>
            </v-card>
        </div>
    </div>
</template>

<script>
export default {
  name: "AutocompletesSearchAPI",

  data: () => ({
      descriptionLimit: 60,
      entries: [],
      isLoading: false,
      model: null,
      search: null,
  }),
  computed: {
      fields () {
        if (!this.model) return []

        return Object.keys(this.model).map(key => {
          return {
            key,
            value: this.model[key] || 'n/a',
          }
        })
      },
      items () {
        return this.entries.map(entry => {
          const Description = entry.Description.length > this.descriptionLimit
            ? entry.Description.slice(0, this.descriptionLimit) + '...'
            : entry.Description

          return Object.assign({}, entry, { Description })
        })
      },
    },

    watch: {
      search () {
        // Items have already been loaded
        if (this.items.length > 0) return

        // Items have already been requested
        if (this.isLoading) return

        this.isLoading = true

        // Lazily load input items
        fetch('https://api.publicapis.org/entries')
          .then(res => res.json())
          .then(res => {
            const { count, entries } = res
            this.count = count
            this.entries = entries
          })
          .catch(err => {
            console.log(err)
          })
          .finally(() => (this.isLoading = false))
      },
    },
};
</script>