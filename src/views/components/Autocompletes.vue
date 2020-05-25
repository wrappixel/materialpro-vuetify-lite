<template>
  <v-container fluid class="down-top-padding">
    <v-row>
        <v-col cols="12" sm="12" lg="12">
            <BaseCard heading="Autocompletes - Searching an API">
                <AutocompletesSearchAPI></AutocompletesSearchAPI>
            </BaseCard>

            <BaseCard heading="Autocompletes - Custom filter on autocomplete">
                <AutocompletesCustomFilter></AutocompletesCustomFilter>
            </BaseCard>

            <BaseCard heading="Autocompletes - Dense">
                <AutocompletesDence></AutocompletesDence>
            </BaseCard>

            <BaseCard heading="Autocompletes - Slots">
                <AutocompletesSlots></AutocompletesSlots>
            </BaseCard>

            <BaseCard heading="Autocompletes - Asynchronous items">
                <AutocompletesAsynchronousItems></AutocompletesAsynchronousItems>
            </BaseCard>

            <BaseCard heading="Autocompletes - Advanced slots">
                <AutocompletesAdvancedSlots></AutocompletesAdvancedSlots>
            </BaseCard>

            <BaseCard heading="Autocompletes - State selector">
                <AutocompletesStateSelector></AutocompletesStateSelector>
            </BaseCard>
        </v-col>
        
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "Autocompletes",

  data: () => ({
  }),
  components: {
      AutocompletesSearchAPI: () => import('@/components/vuetifyComponents/autocompletes/AutocompletesSearchAPI'),
      AutocompletesCustomFilter: () => import('@/components/vuetifyComponents/autocompletes/AutocompletesCustomFilter'),
      AutocompletesDence: () => import('@/components/vuetifyComponents/autocompletes/AutocompletesDence'),
      AutocompletesSlots: () => import('@/components/vuetifyComponents/autocompletes/AutocompletesSlots'),
      AutocompletesAsynchronousItems: () => import('@/components/vuetifyComponents/autocompletes/AutocompletesAsynchronousItems'),
      AutocompletesAdvancedSlots: () => import('@/components/vuetifyComponents/autocompletes/AutocompletesAdvancedSlots'),
      AutocompletesStateSelector: () => import('@/components/vuetifyComponents/autocompletes/AutocompletesStateSelector'),
  }
};
</script>
