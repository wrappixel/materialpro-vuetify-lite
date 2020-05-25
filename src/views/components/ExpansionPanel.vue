<template>
  <v-container fluid class="down-top-padding">
    <v-row>
        <v-col cols="12" sm="12">
            <BaseCard heading="Expansion panels - Disabled">
                <ExpansionDisabled></ExpansionDisabled>
            </BaseCard>

            <BaseCard heading="Expansion panels - Readonly">
                <ExpansionReadonly></ExpansionReadonly>
            </BaseCard>

            <BaseCard heading="Expansion panels - Popout">
                <ExpansionPopout></ExpansionPopout>
            </BaseCard>

            <BaseCard heading="Expansion panels - Inset">
                <ExpansionInset></ExpansionInset>
            </BaseCard>

            <BaseCard heading="Expansion panels - Accordion">
                <ExpansionAccordion></ExpansionAccordion>
            </BaseCard>

            <BaseCard heading="Expansion panels - Focusable">
                <ExpansionFocusable></ExpansionFocusable>
            </BaseCard>

            <BaseCard heading="Expansion panels - External control">
                <ExpansionExternalControl></ExpansionExternalControl>
            </BaseCard>

            <BaseCard heading="Expansion panels - Custom icon">
                <ExpansionCustomicon></ExpansionCustomicon>
            </BaseCard>

            <BaseCard heading="Expansion panels - Advanced">
                <ExpansionAdvanced></ExpansionAdvanced>
            </BaseCard>
        </v-col>

    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "Expansionpanels",

  data: () => ({
  }),
  components: {
      ExpansionDisabled: () => import('@/components/vuetifyComponents/expansionpanel/ExpansionDisabled'),
      ExpansionReadonly: () => import('@/components/vuetifyComponents/expansionpanel/ExpansionReadonly'),
      ExpansionPopout: () => import('@/components/vuetifyComponents/expansionpanel/ExpansionPopout'),
      ExpansionInset: () => import('@/components/vuetifyComponents/expansionpanel/ExpansionInset'),
      ExpansionAccordion: () => import('@/components/vuetifyComponents/expansionpanel/ExpansionAccordion'),
      ExpansionFocusable: () => import('@/components/vuetifyComponents/expansionpanel/ExpansionFocusable'),
      ExpansionExternalControl: () => import('@/components/vuetifyComponents/expansionpanel/ExpansionExternalControl'),
      ExpansionCustomicon: () => import('@/components/vuetifyComponents/expansionpanel/ExpansionCustomicon'),
      ExpansionAdvanced: () => import('@/components/vuetifyComponents/expansionpanel/ExpansionAdvanced'),
  }
};
</script>
