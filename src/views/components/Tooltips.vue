<template>
  <v-container fluid class="down-top-padding">
    <v-row>
        <v-col cols="12" sm="12">
            <BaseCard heading="Tooltips - Alignment">
                <TooltipAlignment></TooltipAlignment>
            </BaseCard>

            <BaseCard heading="Tooltips - Visibility">
                <TooltipVisibility></TooltipVisibility>
            </BaseCard>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "Tooltips",

  data: () => ({
  }),
  components: {
      TooltipAlignment: () => import('@/components/vuetifyComponents/tooltips/TooltipAlignment'),
      TooltipVisibility: () => import('@/components/vuetifyComponents/tooltips/TooltipVisibility')
  }
};
</script>
