<template>
  <v-container fluid class="down-top-padding">
    <v-row>
        <v-col cols="12" sm="12">
            <BaseCard heading="Timeline - Small dots">
                <TimelineSmallDots></TimelineSmallDots>
            </BaseCard>

            <BaseCard heading="Timeline - Icon dots">
                <TimelineIconDots></TimelineIconDots>
            </BaseCard>

            <BaseCard heading="Timeline - Reverse direction">
                <TimelineReverseDir></TimelineReverseDir>
            </BaseCard>

            <BaseCard heading="Timeline - Timeline card">
                <TimelineCard></TimelineCard>
            </BaseCard>

            <BaseCard heading="Timeline - Dense alert">
                <TimelineDenseAlert></TimelineDenseAlert>
            </BaseCard>

            <BaseCard heading="Timeline - Opposite slot">
                <TimelineOppositeSlot></TimelineOppositeSlot>
            </BaseCard>

            <BaseCard heading="Timeline - Avatar dots">
                <TimelineAvatarDots></TimelineAvatarDots>
            </BaseCard>

            <BaseCard heading="Timeline - Colored dots">
                <TimelineColouredDots></TimelineColouredDots>
            </BaseCard>

            <BaseCard heading="Timeline - Advanced">
                <TimelineAdvanced></TimelineAdvanced>
            </BaseCard>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "Timeline",

  data: () => ({
  }),
  components: {
      TimelineSmallDots: () => import('@/components/vuetifyComponents/timeline/TimelineSmallDots'),
      TimelineIconDots: () => import('@/components/vuetifyComponents/timeline/TimelineIconDots'),
      TimelineReverseDir: () => import('@/components/vuetifyComponents/timeline/TimelineReverseDir'),
      TimelineCard: () => import('@/components/vuetifyComponents/timeline/TimelineCard'),
      TimelineDenseAlert: () => import('@/components/vuetifyComponents/timeline/TimelineDenseAlert'),
      TimelineOppositeSlot: () => import('@/components/vuetifyComponents/timeline/TimelineOppositeSlot'),
      TimelineAvatarDots: () => import('@/components/vuetifyComponents/timeline/TimelineAvatarDots'),
      TimelineColouredDots: () => import('@/components/vuetifyComponents/timeline/TimelineColouredDots'),
      TimelineAdvanced: () => import('@/components/vuetifyComponents/timeline/TimelineAdvanced')
  }
};
</script>
