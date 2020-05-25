<template>
  <v-container fluid class="down-top-padding">
    <v-row>
        <v-col cols="12" sm="12">
            <BaseCard heading="Footer - Absolute Footer">
                <FooterAbsolute></FooterAbsolute>
            </BaseCard>

            <BaseCard heading="Footer - Padless Footer">
                <FooterPadless></FooterPadless>
            </BaseCard>

            <BaseCard heading="Footer - Company Footer">
                <FooterCompany></FooterCompany>
            </BaseCard>

            <BaseCard heading="Footer - Indigo Footer">
                <FooterIndigo></FooterIndigo>
            </BaseCard>

            <BaseCard heading="Footer - Teal Footer">
                <FooterTeal></FooterTeal>
            </BaseCard>

        </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "Footer",

  data: () => ({
  }),
  components: {
      FooterAbsolute: () => import('@/components/vuetifyComponents/footer/FooterAbsolute'),
      FooterPadless: () => import('@/components/vuetifyComponents/footer/FooterPadless'),
      FooterCompany: () => import('@/components/vuetifyComponents/footer/FooterCompany'),
      FooterIndigo: () => import('@/components/vuetifyComponents/footer/FooterIndigo'),
      FooterTeal: () => import('@/components/vuetifyComponents/footer/FooterTeal'),
  }
};
</script>
