<template>
  <v-container fluid class="down-top-padding">
    <v-row>
        <v-col cols="12" sm="12">
            <BaseCard heading="Divider - Inset dividers">
                <DividerInset></DividerInset>
            </BaseCard>

            <BaseCard heading="Divider - Vertical dividers">
                <DividerVertical></DividerVertical>
            </BaseCard>

            <BaseCard heading="Divider - Vertical inset dividers">
                <DividerVerticalInset></DividerVerticalInset>
            </BaseCard>

            <BaseCard heading="Dividers - Dividers and subheaders">
                <DividerSubheaders></DividerSubheaders>
            </BaseCard>

            <BaseCard heading="Dividers - Dividers in Portrait View">
                <DividerPortrait></DividerPortrait>
            </BaseCard>
        </v-col>

    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "Dividers",

  data: () => ({
  }),
  components: {
      DividerInset: () => import('@/components/vuetifyComponents/dividers/DividerInset'),
      DividerVertical: () => import('@/components/vuetifyComponents/dividers/DividerVertical'),
      DividerVerticalInset: () => import('@/components/vuetifyComponents/dividers/DividerVerticalInset'),
      DividerSubheaders: () => import('@/components/vuetifyComponents/dividers/DividerSubheaders'),
      DividerPortrait: () => import('@/components/vuetifyComponents/dividers/DividerPortrait'),
  }
};
</script>
