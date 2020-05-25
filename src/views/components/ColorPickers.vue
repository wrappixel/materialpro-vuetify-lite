<template>
  <v-container fluid class="down-top-padding">
    <v-row>

      <v-col cols="12" sm="12">
        <BaseCard heading="Color Pickers - Model">
            <ColorPickersModel></ColorPickersModel>
        </BaseCard>

        <BaseCard heading="Color Pickers - Swatches">
            <ColorPickersSwatches></ColorPickersSwatches>
        </BaseCard>

        <BaseCard heading="Color Pickers - Inputs">
            <ColorPickersInputs></ColorPickersInputs>
        </BaseCard>

        <BaseCard heading="Color Pickers - Canvas">
            <ColorPickersCanvas></ColorPickersCanvas>
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "ColorPickers",

  data: () => ({
  }),
  components: {
      ColorPickersModel: () => import('@/components/vuetifyComponents/color-pickers/ColorPickersModel'),
      ColorPickersSwatches: () => import('@/components/vuetifyComponents/color-pickers/ColorPickersSwatches'),
      ColorPickersInputs: () => import('@/components/vuetifyComponents/color-pickers/ColorPickersInputs'),
      ColorPickersCanvas: () => import('@/components/vuetifyComponents/color-pickers/ColorPickersCanvas'),
  }
};
</script>
