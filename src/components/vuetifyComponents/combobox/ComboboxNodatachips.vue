<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- No data chips -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <v-list-item-subtitle class="text-wrap">
        In this example we utilize a custom no-data slot to provide context to the user when searching / creating items.
        </v-list-item-subtitle>
        <div class="mt-4">
            <v-combobox
                v-model="model"
                :items="items"
                :search-input.sync="search"
                hide-selected
                hint="Maximum of 5 tags"
                label="Add some tags"
                multiple
                persistent-hint
                small-chips
                >
                <template v-slot:no-data>
                    <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>
                        No results matching "<strong>{{ search }}</strong>". Press <kbd>enter</kbd> to create a new one
                        </v-list-item-title>
                    </v-list-item-content>
                    </v-list-item>
                </template>
                </v-combobox>
        </div>
    </div>
</template>

<script>
export default {
  name: "ComboboxNodatachips",

  data: () => ({
      items: ['Gaming', 'Programming', 'Vue', 'Vuetify'],
      model: ['Vuetify'],
      search: null,
  }),
  watch: {
      model (val) {
        if (val.length > 5) {
          this.$nextTick(() => this.model.pop())
        }
      },
    }
};
</script>