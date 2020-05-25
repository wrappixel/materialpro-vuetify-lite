<template>
  <v-container fluid class="down-top-padding">
    <v-row>
      <v-col cols="12" sm="12">
        <BaseCard heading="Slide Groups - Custom icons">
            <GrpSlideCustomIcons></GrpSlideCustomIcons>
        </BaseCard>
        
        <BaseCard heading="Slide Groups - Active class">
            <GrpSlideActiveClass></GrpSlideActiveClass>
        </BaseCard>

        <BaseCard heading="Slide Groups - Multiple">
            <GrpSlideMultiple></GrpSlideMultiple>
        </BaseCard>

        <BaseCard heading="Slide Groups - Mandatory">
            <GrpSlideMandatory></GrpSlideMandatory>
        </BaseCard>

        <BaseCard heading="Slide Groups - Pseudo Carousel">
            <GrpSlidePseudoCarousel></GrpSlidePseudoCarousel>
        </BaseCard>

        <BaseCard heading="Slide Groups - Centered active item">
            <GrpSlideCenteredActiveItem></GrpSlideCenteredActiveItem>
        </BaseCard>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "SlideGroups",

  data: () => ({
  }),
  components: {
      GrpSlideCustomIcons: () => import('@/components/vuetifyComponents/slide-group/GrpSlideCustomIcons'),
      GrpSlideActiveClass: () => import('@/components/vuetifyComponents/slide-group/GrpSlideActiveClass'),
      GrpSlideMultiple: () => import('@/components/vuetifyComponents/slide-group/GrpSlideMultiple'),
      GrpSlideMandatory: () => import('@/components/vuetifyComponents/slide-group/GrpSlideMandatory'),
      GrpSlidePseudoCarousel: () => import('@/components/vuetifyComponents/slide-group/GrpSlidePseudoCarousel'),
      GrpSlideCenteredActiveItem: () => import('@/components/vuetifyComponents/slide-group/GrpSlideCenteredActiveItem')
  }
};
</script>
