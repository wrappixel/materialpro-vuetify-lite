<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- Autocompletes Asynchronous Items -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <v-list-item-subtitle class="text-wrap">
        Sometimes you need to load data externally based upon a search query. Use the <code>search-input</code> prop with the 
        <span class="grey--text text--darken-4 font-weight-bold">.sync</span> modifier when using the <code>autocomplete</code> prop. 
        We also make use of the new <code>cache-items</code> prop. This will keep a unique list of all items that have been passed to the 
        <code>items</code> prop and is <span class="grey--text text--darken-4 font-weight-bold">REQUIRED</span> when using asynchronous items and the <span class="grey--text text--darken-4 font-weight-bold">multiple</span> prop.
        </v-list-item-subtitle>
        <div class="mt-4">
            <v-toolbar
                dark
                color="info"
            >
                <v-toolbar-title>State selection</v-toolbar-title>
                <v-autocomplete
                v-model="select"
                :loading="loading"
                :items="items"
                :search-input.sync="search"
                cache-items
                class="mx-4"
                flat
                hide-no-data
                hide-details
                label="What state are you from?"
                solo-inverted
                ></v-autocomplete>
                <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
            </v-toolbar>
        </div>
    </div>
</template>

<script>
export default {
  name: "AutocompletesAsynchronousItems",

  data: () => ({
      loading: false,
        items: [],
        search: null,
        select: null,
        states: [
          'Alabama',
          'Alaska',
          'American Samoa',
          'Arizona',
          'Arkansas',
          'California',
          'Colorado',
          'Connecticut',
          'Delaware',
          'District of Columbia',
          'Federated States of Micronesia',
          'Florida',
          'Georgia',
          'Guam',
          'Hawaii',
          'Idaho',
          'Illinois',
          'Indiana',
          'Iowa',
          'Kansas',
          'Kentucky',
          'Louisiana',
          'Maine',
          'Marshall Islands',
          'Maryland',
          'Massachusetts',
          'Michigan',
          'Minnesota',
          'Mississippi',
          'Missouri',
          'Montana',
          'Nebraska',
          'Nevada',
          'New Hampshire',
          'New Jersey',
          'New Mexico',
          'New York',
          'North Carolina',
          'North Dakota',
          'Northern Mariana Islands',
          'Ohio',
          'Oklahoma',
          'Oregon',
          'Palau',
          'Pennsylvania',
          'Puerto Rico',
          'Rhode Island',
          'South Carolina',
          'South Dakota',
          'Tennessee',
          'Texas',
          'Utah',
          'Vermont',
          'Virgin Island',
          'Virginia',
          'Washington',
          'West Virginia',
          'Wisconsin',
          'Wyoming',
        ],
  }),
  watch: {
      search (val) {
        val && val !== this.select && this.querySelections(val)
      },
    },
    methods: {
      querySelections (v) {
        this.loading = true
        // Simulated ajax query
        setTimeout(() => {
          this.items = this.states.filter(e => {
            return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
          })
          this.loading = false
        }, 500)
      },
    },
};
</script>