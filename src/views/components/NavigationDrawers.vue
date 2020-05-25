<template>
  <v-container fluid class="down-top-padding">
    <v-row>
      <v-col cols="12" sm="12">
        <BaseCard heading="NavigationDrawers - Colored drawer">
            <NavigationDrawersColoured></NavigationDrawersColoured>
        </BaseCard>
        
        <BaseCard heading="NavigationDrawers - Permanent floating drawer">
            <NavigationDrawersPermentFloating></NavigationDrawersPermentFloating>
        </BaseCard>

        <BaseCard heading="NavigationDrawers - Mini">
            <NavigationDrawersMini></NavigationDrawersMini>
        </BaseCard>

        <BaseCard heading="NavigationDrawers - Temporary">
            <NavigationDrawersTemporary></NavigationDrawersTemporary>
        </BaseCard>

        <BaseCard heading="NavigationDrawers - Right positioned">
            <NavigationDrawersRightPositioned></NavigationDrawersRightPositioned>
        </BaseCard>

        <BaseCard heading="NavigationDrawers - Expand on hover">
            <NavigationDrawersExpandonHover></NavigationDrawersExpandonHover>
        </BaseCard>

        <BaseCard heading="NavigationDrawers - Backgrounds">
            <NavigationDrawersBackgrounds></NavigationDrawersBackgrounds>
        </BaseCard>

        <BaseCard heading="NavigationDrawers - Combined drawers">
            <NavigationDrawersCombined></NavigationDrawersCombined>
        </BaseCard>

        <BaseCard heading="NavigationDrawers - Bottom drawer">
            <NavigationDrawersBottom></NavigationDrawersBottom>
        </BaseCard>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "NavigationDrawers",

  data: () => ({
  }),
  components: {
      NavigationDrawersColoured: () => import('@/components/vuetifyComponents/navigation-drawers/NavigationDrawersColoured'),
      NavigationDrawersPermentFloating: () => import('@/components/vuetifyComponents/navigation-drawers/NavigationDrawersPermentFloating'),
      NavigationDrawersMini: () => import('@/components/vuetifyComponents/navigation-drawers/NavigationDrawersMini'),
      NavigationDrawersTemporary: () => import('@/components/vuetifyComponents/navigation-drawers/NavigationDrawersTemporary'),
      NavigationDrawersRightPositioned: () => import('@/components/vuetifyComponents/navigation-drawers/NavigationDrawersRightPositioned'),
      NavigationDrawersExpandonHover: () => import('@/components/vuetifyComponents/navigation-drawers/NavigationDrawersExpandonHover'),
      NavigationDrawersBackgrounds: () => import('@/components/vuetifyComponents/navigation-drawers/NavigationDrawersBackgrounds'),
      NavigationDrawersCombined: () => import('@/components/vuetifyComponents/navigation-drawers/NavigationDrawersCombined'),
      NavigationDrawersBottom: () => import('@/components/vuetifyComponents/navigation-drawers/NavigationDrawersBottom')
  }
};
</script>
