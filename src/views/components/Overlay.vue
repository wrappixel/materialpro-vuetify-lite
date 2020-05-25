<template>
  <v-container fluid class="down-top-padding">
    <v-row>
        <v-col cols="12" sm="12" >
            <BaseCard heading="Overlay - Absolute">
                <OverlayAbsolute></OverlayAbsolute>
            </BaseCard>

            <BaseCard heading="Overlay - Opacity">
                <OverlayOpacity></OverlayOpacity>
            </BaseCard>

            <BaseCard heading="Overlay - ZIndex">
                <OverlayZindex></OverlayZindex>
            </BaseCard>

            <BaseCard heading="Overlay - Loader">
                <OverlayLoader></OverlayLoader>
            </BaseCard>
            
            <BaseCard heading="Overlay - Advanced">
                <OverlayAdvanced></OverlayAdvanced>
            </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "Overlay",

  data: () => ({
  }),
  components: {
      OverlayAbsolute: () => import('@/components/vuetifyComponents/overlay/OverlayAbsolute'),
      OverlayOpacity: () => import('@/components/vuetifyComponents/overlay/OverlayOpacity'),
      OverlayZindex: () => import('@/components/vuetifyComponents/overlay/OverlayZindex'),
      OverlayLoader: () => import('@/components/vuetifyComponents/overlay/OverlayLoader'),
      OverlayAdvanced: () => import('@/components/vuetifyComponents/overlay/OverlayAdvanced')
  }
};
</script>
