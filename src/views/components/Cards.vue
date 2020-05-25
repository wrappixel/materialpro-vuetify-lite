<template>
  <v-container fluid class="down-top-padding">
    <v-row>

      <v-col cols="12" sm="12">
        <BaseCard heading="Cards - Outlined cards">
            <CardOutlined></CardOutlined>
        </BaseCard>
        <BaseCard heading="Cards - Intermediate">
            <CardIntermediate></CardIntermediate>
        </BaseCard>
        <BaseCard heading="Cards - Information card">
            <CardInformation></CardInformation>
        </BaseCard>
        <BaseCard heading="Cards - Media with text">
            <CardMediaText></CardMediaText>
        </BaseCard>
        <BaseCard heading="Cards - Grids">
            <CardGrids></CardGrids>
        </BaseCard>
        <BaseCard heading="Cards - Horizontal cards">
            <CardHorizontal></CardHorizontal>
        </BaseCard>
        <BaseCard heading="Cards - Custom actions">
            <CardCustomAction></CardCustomAction>
        </BaseCard>
        <BaseCard heading="Cards - Twitter card">
            <CardTwitter></CardTwitter>
        </BaseCard>
        <BaseCard heading="Cards - Loading card">
            <CardLoading></CardLoading>
        </BaseCard>
        <BaseCard heading="Cards - Weather card">
            <CardWeather></CardWeather>
        </BaseCard>
        <BaseCard heading="Cards - Advanced">
            <CardAdvanced></CardAdvanced>
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "Cards",

  data: () => ({
  }),
  components: {
      CardOutlined: () => import('@/components/vuetifyComponents/cards/CardOutlined'),
      CardIntermediate: () => import('@/components/vuetifyComponents/cards/CardIntermediate'),
      CardInformation: () => import('@/components/vuetifyComponents/cards/CardInformation'),
      CardMediaText: () => import('@/components/vuetifyComponents/cards/CardMediaText'),
      CardGrids: () => import('@/components/vuetifyComponents/cards/CardGrids'),
      CardHorizontal: () => import('@/components/vuetifyComponents/cards/CardHorizontal'),
      CardCustomAction: () => import('@/components/vuetifyComponents/cards/CardCustomAction'),
      CardTwitter: () => import('@/components/vuetifyComponents/cards/CardTwitter'),
      CardLoading: () => import('@/components/vuetifyComponents/cards/CardLoading'),
      CardWeather: () => import('@/components/vuetifyComponents/cards/CardWeather'),
      CardAdvanced: () => import('@/components/vuetifyComponents/cards/CardAdvanced'),
  }
};
</script>
