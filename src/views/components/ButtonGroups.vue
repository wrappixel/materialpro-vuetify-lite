<template>
  <v-container fluid class="down-top-padding">
    <v-row>
      <v-col cols="12" sm="12">
        <BaseCard heading="Button Groups - Rounded buttons">
            <GrpButtonRounded></GrpButtonRounded>
        </BaseCard>
        
        <BaseCard heading="Button Groups - Mandatory">
            <GrpButtonMandatory></GrpButtonMandatory>
        </BaseCard>

        <BaseCard heading="Button Groups - Multiple">
            <GrpButtonMultiple></GrpButtonMultiple>
        </BaseCard>

        <BaseCard heading="Button Groups - In toolbar">
            <GrpButtonIntoolbar></GrpButtonIntoolbar>
        </BaseCard>

        <BaseCard heading="Button Groups - Selected action">
            <GrpButtonSelectionAction></GrpButtonSelectionAction>
        </BaseCard>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "ButtonGroups",

  data: () => ({
  }),
  components: {
      GrpButtonRounded: () => import('@/components/vuetifyComponents/button-group/GrpButtonRounded'),
      GrpButtonMandatory: () => import('@/components/vuetifyComponents/button-group/GrpButtonMandatory'),
      GrpButtonIntoolbar: () => import('@/components/vuetifyComponents/button-group/GrpButtonIntoolbar'),
      GrpButtonMultiple: () => import('@/components/vuetifyComponents/button-group/GrpButtonMultiple'),
      GrpButtonSelectionAction: () => import('@/components/vuetifyComponents/button-group/GrpButtonSelectionAction'),
  }
};
</script>
