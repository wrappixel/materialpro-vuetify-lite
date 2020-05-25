<template>
  <v-container fluid class="down-top-padding">
    <v-row>
      <v-col cols="12" sm="12">
        <BaseCard heading="Appbar - Dense">
            <AppbarDence></AppbarDence>
        </BaseCard>

        <BaseCard heading="Appbar - Prominent w/ scroll shrink">
            <AppbarProminentShrink></AppbarProminentShrink>
        </BaseCard>

        <BaseCard heading="Appbar - Prominent w/ scroll shrink and image">
            <AppbarProminentShrinkImage></AppbarProminentShrinkImage>
        </BaseCard>

        <BaseCard heading="Appbar - Hiding on scroll">
            <AppbarHidingScroll></AppbarHidingScroll>
        </BaseCard>

        <BaseCard heading="Appbar - Collapsible bars">
            <AppbarCollpsibleBar></AppbarCollpsibleBar>
        </BaseCard>

        <BaseCard heading="Appbar - Elevate bar on scroll">
            <AppbarElevateBar></AppbarElevateBar>
        </BaseCard>

        <BaseCard heading="Appbar - Inverted scrolling">
            <AppbarInvertedScroll></AppbarInvertedScroll>
        </BaseCard>

        <BaseCard heading="Appbar - Toggle Navigation Drawers">
            <AppbarToggleNavigation></AppbarToggleNavigation>
        </BaseCard>

        <BaseCard heading="Appbar - Scroll threshold">
            <AppbarScrollThreshold></AppbarScrollThreshold>
        </BaseCard>

        <BaseCard heading="Appbar - Prominent w/ scroll shrink and image, fading on scroll">
            <AppbarShrinkFadeonScroll></AppbarShrinkFadeonScroll>
        </BaseCard>

        <BaseCard heading="Appbar - With menu">
            <AppbarwithMenu></AppbarwithMenu>
        </BaseCard>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "Appbar",

  data: () => ({
  }),
  components: {
      AppbarCollpsibleBar: () => import('@/components/vuetifyComponents/appbar/AppbarCollpsibleBar'),
      AppbarDence: () => import('@/components/vuetifyComponents/appbar/AppbarDence'),
      AppbarElevateBar: () => import('@/components/vuetifyComponents/appbar/AppbarElevateBar'),
      AppbarHidingScroll: () => import('@/components/vuetifyComponents/appbar/AppbarHidingScroll'),
      AppbarInvertedScroll: () => import('@/components/vuetifyComponents/appbar/AppbarInvertedScroll'),
      AppbarProminentShrink: () => import('@/components/vuetifyComponents/appbar/AppbarProminentShrink'),
      AppbarProminentShrinkImage: () => import('@/components/vuetifyComponents/appbar/AppbarProminentShrinkImage'),
      AppbarScrollThreshold: () => import('@/components/vuetifyComponents/appbar/AppbarScrollThreshold'),
      AppbarShrinkFadeonScroll: () => import('@/components/vuetifyComponents/appbar/AppbarShrinkFadeonScroll'),
      AppbarToggleNavigation: () => import('@/components/vuetifyComponents/appbar/AppbarToggleNavigation'),
      AppbarwithMenu: () => import('@/components/vuetifyComponents/appbar/AppbarwithMenu'),
  }
};
</script>
