<template>
  <v-container fluid class="down-top-padding">
    <v-row>
      <v-col cols="12" sm="12">
        <BaseCard heading="Banner - Single-line (desktop)">
            <BannerSingleLine></BannerSingleLine>
        </BaseCard>
      </v-col>
      <v-col cols="12" sm="12" lg="6">
        <BaseCard heading="Banner - Two-line (mobile)">
            <BannerTwoLine></BannerTwoLine>
        </BaseCard>
      </v-col>
      <v-col cols="12" sm="12" lg="6">
        <BaseCard heading="Banner - Icon slot">
            <BannerIconSlot></BannerIconSlot>
        </BaseCard>
      </v-col>
      <v-col cols="12" sm="12" lg="6">
        <BaseCard heading="Banner - Icon click event">
            <BannerIconClickEvent></BannerIconClickEvent>
        </BaseCard>
      </v-col>
      <v-col cols="12" sm="12" lg="6">
        <BaseCard heading="Banner - Actions slot">
            <BannerActionSlot></BannerActionSlot>
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "Banner",

  data: () => ({
  }),
    components: {
        BannerSingleLine: () => import('@/components/vuetifyComponents/banner/BannerSingleLine'),
        BannerTwoLine: () => import('@/components/vuetifyComponents/banner/BannerTwoLine'),
        BannerIconSlot: () => import('@/components/vuetifyComponents/banner/BannerIconSlot'),
        BannerIconClickEvent: () => import('@/components/vuetifyComponents/banner/BannerIconClickEvent'),
        BannerActionSlot: () => import('@/components/vuetifyComponents/banner/BannerActionSlot'),
    }
};
</script>
