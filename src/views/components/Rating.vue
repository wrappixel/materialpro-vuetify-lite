<template>
  <v-container fluid class="down-top-padding">
    <v-row>

      <v-col cols="12" sm="12">
        <BaseCard heading="Rating - Size variants">
            <RatingSizeVarient></RatingSizeVarient>
        </BaseCard>

        <BaseCard heading="Rating - Colors">
            <RatingColors></RatingColors>
        </BaseCard>

        <BaseCard heading="Rating - Custom length">
            <RatingCustomLength></RatingCustomLength>
        </BaseCard>

        <BaseCard heading="Rating - Incremented">
            <RatingIncremented></RatingIncremented>
        </BaseCard>

        <BaseCard heading="Rating - Slots">
            <RatingSlots></RatingSlots>
        </BaseCard>

        <BaseCard heading="Rating - Card ratings">
            <RatingCard></RatingCard>
        </BaseCard>

        <BaseCard heading="Rating - Advanced usage">
            <RatingAdvanceUsage></RatingAdvanceUsage>
        </BaseCard>
        
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "Rating",

  data: () => ({
  }),
  components: {
      RatingSizeVarient: () => import('@/components/vuetifyComponents/rating/RatingSizeVarient'),
      RatingColors: () => import('@/components/vuetifyComponents/rating/RatingColors'),
      RatingCustomLength: () => import('@/components/vuetifyComponents/rating/RatingCustomLength'),
      RatingIncremented: () => import('@/components/vuetifyComponents/rating/RatingIncremented'),
      RatingSlots: () => import('@/components/vuetifyComponents/rating/RatingSlots'),
      RatingCard: () => import('@/components/vuetifyComponents/rating/RatingCard'),
      RatingAdvanceUsage: () => import('@/components/vuetifyComponents/rating/RatingAdvanceUsage')
  }
};
</script>
