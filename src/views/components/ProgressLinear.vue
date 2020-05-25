<template>
  <v-container fluid class="down-top-padding">
    <v-row>

      <v-col cols="12" sm="12">
        <BaseCard heading="Progress Linear - Determinate">
            <ProgressLinearDeterminate></ProgressLinearDeterminate>
        </BaseCard>

        <BaseCard heading="Progress Linear - Indeterminate">
            <ProgressLinearIndeterminate></ProgressLinearIndeterminate>
        </BaseCard>

        <BaseCard heading="Progress Linear - Buffer">
            <ProgressLinearBuffer></ProgressLinearBuffer>
        </BaseCard>

        <BaseCard heading="Progress Linear - Query Indeterminate and Determinate">
            <ProgressLinearQueryIndeterminateDeterminate></ProgressLinearQueryIndeterminateDeterminate>
        </BaseCard>

        <BaseCard heading="Progress Linear - Custom colors">
            <ProgressLinearCustomcolors></ProgressLinearCustomcolors>
        </BaseCard>

        <BaseCard heading="Progress Linear - Rounded">
            <ProgressLinearRounded></ProgressLinearRounded>
        </BaseCard>

        <BaseCard heading="Progress Linear - Stream">
            <ProgressLinearStream></ProgressLinearStream>
        </BaseCard>

        <BaseCard heading="Progress Linear - Striped">
            <ProgressLinearStriped></ProgressLinearStriped>
        </BaseCard>

        <BaseCard heading="Progress Linear - Toolbar loader">
            <ProgressLinearToolbarLoader></ProgressLinearToolbarLoader>
        </BaseCard>

        <BaseCard heading="Progress Linear - File loader">
            <ProgressLinearFileLoader></ProgressLinearFileLoader>
        </BaseCard>

        <BaseCard heading="Progress Linear - Slots">
            <ProgressLinearSlots></ProgressLinearSlots>
        </BaseCard>
        
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "ProgressLinear",

  data: () => ({
  }),
  components: {
      ProgressLinearDeterminate: () => import('@/components/vuetifyComponents/progress-linear/ProgressLinearDeterminate'),
      ProgressLinearIndeterminate: () => import('@/components/vuetifyComponents/progress-linear/ProgressLinearIndeterminate'),
      ProgressLinearBuffer: () => import('@/components/vuetifyComponents/progress-linear/ProgressLinearBuffer'),
      ProgressLinearQueryIndeterminateDeterminate: () => import('@/components/vuetifyComponents/progress-linear/ProgressLinearQueryIndeterminateDeterminate'),
      ProgressLinearCustomcolors: () => import('@/components/vuetifyComponents/progress-linear/ProgressLinearCustomcolors'),
      ProgressLinearRounded: () => import('@/components/vuetifyComponents/progress-linear/ProgressLinearRounded'),
      ProgressLinearStream: () => import('@/components/vuetifyComponents/progress-linear/ProgressLinearStream'),
      ProgressLinearStriped: () => import('@/components/vuetifyComponents/progress-linear/ProgressLinearStriped'),
      ProgressLinearToolbarLoader: () => import('@/components/vuetifyComponents/progress-linear/ProgressLinearToolbarLoader'),
      ProgressLinearFileLoader: () => import('@/components/vuetifyComponents/progress-linear/ProgressLinearFileLoader'),
      ProgressLinearSlots: () => import('@/components/vuetifyComponents/progress-linear/ProgressLinearSlots')
  }
};
</script>
