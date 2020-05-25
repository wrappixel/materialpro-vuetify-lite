<template>
  <v-container fluid class="down-top-padding">
    <v-row>
      <v-col cols="12" sm="12">
        <BaseCard heading="Badge - Tabs">
            <BadgeTabs></BadgeTabs>
        </BaseCard>

        <BaseCard heading="Badge - Customization options">
            <BadgeCustomization></BadgeCustomization>
        </BaseCard>

      </v-col>
      <v-col cols="12" sm="12" lg="6">
        <BaseCard heading="Badge - Show-on-hover">
            <BadgeShowonHover></BadgeShowonHover>
        </BaseCard>
      </v-col>
      <v-col cols="12" sm="12" lg="6">
        <BaseCard heading="Badge - Dynamic notifications">
            <BadgeDynamicNotification></BadgeDynamicNotification>
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "Badge",

  data: () => ({
  }),
  components: {
      BadgeTabs: () => import('@/components/vuetifyComponents/badge/BadgeTabs'),
      BadgeCustomization: () => import('@/components/vuetifyComponents/badge/BadgeCustomization'),
      BadgeShowonHover: () => import('@/components/vuetifyComponents/badge/BadgeShowonHover'),
      BadgeDynamicNotification: () => import('@/components/vuetifyComponents/badge/BadgeDynamicNotification'),
  }
};
</script>
