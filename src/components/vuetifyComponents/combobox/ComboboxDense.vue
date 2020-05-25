<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- Dense -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <v-list-item-subtitle class="text-wrap">
        You can use <code>dense</code> prop to reduce combobox height and lower max height of list items.
        </v-list-item-subtitle>
        <div class="mt-4">
            <v-row>
                <v-col cols="12">
                    <v-combobox
                    v-model="select"
                    :items="items"
                    label="Combobox"
                    multiple
                    outlined
                    dense
                    ></v-combobox>
                </v-col>
                </v-row>
        </div>
    </div>
</template>

<script>
export default {
  name: "ComboboxDense",

  data: () => ({
      select: ['Vuetify', 'Programming'],
        items: [
          'Programming',
          'Design',
          'Vue',
          'Vuetify',
        ],
  })
};
</script>