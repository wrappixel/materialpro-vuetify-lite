<template>
  <v-container fluid class="down-top-padding">
    <v-row>
        <v-col cols="12" sm="12">
            <BaseCard heading="Selects - Disabled">
                <SelectsDisabled></SelectsDisabled>
            </BaseCard>

            <BaseCard heading="Selects - Read-only">
                <SelectsReadonly></SelectsReadonly>
            </BaseCard>

            <BaseCard heading="Selects - Light theme">
                <SelectsLightTheme></SelectsLightTheme>
            </BaseCard>

            <BaseCard heading="Selects - Icons">
                <SelectsIcons></SelectsIcons>
            </BaseCard>

            <BaseCard heading="Selects - Multiple">
                <SelectsMultiple></SelectsMultiple>
            </BaseCard>

            <BaseCard heading="Selects - Dense">
                <SelectsDence></SelectsDence>
            </BaseCard>

            <BaseCard heading="Selects - Customized item text and value">
                <SelectsCustomizedTextValue></SelectsCustomizedTextValue>
            </BaseCard>

            <BaseCard heading="Selects - Custom menu props">
                <SelectsCustomMenuprops></SelectsCustomMenuprops>
            </BaseCard>

            <BaseCard heading="Selects - Prepend/Append item slots">
                <SelectsPrependAppendSlots></SelectsPrependAppendSlots>
            </BaseCard>

            <BaseCard heading="Selects - Change selection appearance">
                <SelectsSelectionAppearance></SelectsSelectionAppearance>
            </BaseCard>

        </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "Selects",

  data: () => ({
  }),
  components: {
      SelectsDisabled: () => import('@/components/vuetifyComponents/selects/SelectsDisabled'),
      SelectsReadonly: () => import('@/components/vuetifyComponents/selects/SelectsReadonly'),
      SelectsLightTheme: () => import('@/components/vuetifyComponents/selects/SelectsLightTheme'),
      SelectsIcons: () => import('@/components/vuetifyComponents/selects/SelectsIcons'),
      SelectsMultiple: () => import('@/components/vuetifyComponents/selects/SelectsMultiple'),
      SelectsDence: () => import('@/components/vuetifyComponents/selects/SelectsDence'),
      SelectsCustomizedTextValue: () => import('@/components/vuetifyComponents/selects/SelectsCustomizedTextValue'),
      SelectsCustomMenuprops: () => import('@/components/vuetifyComponents/selects/SelectsCustomMenuprops'),
      SelectsPrependAppendSlots: () => import('@/components/vuetifyComponents/selects/SelectsPrependAppendSlots'),
      SelectsSelectionAppearance: () => import('@/components/vuetifyComponents/selects/SelectsSelectionAppearance')
  }
};
</script>
