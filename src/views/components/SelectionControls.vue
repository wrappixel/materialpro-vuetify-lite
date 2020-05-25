<template>
  <v-container fluid class="down-top-padding">
    <v-row>
        <v-col cols="12" sm="12" lg="6">
            <BaseCard heading="Selection Controls - Checkboxes - Boolean">
                <SelectionControlsChkBoolean></SelectionControlsChkBoolean>
            </BaseCard>
        </v-col>
        <v-col cols="12" sm="12" lg="6">
            <BaseCard heading="Selection Controls - Checkboxes - Array">
                <SelectionControlsChkArray></SelectionControlsChkArray>
            </BaseCard>
        </v-col>
        
        <v-col cols="12" sm="12">
            <BaseCard heading="Selection Controls - Checkboxes - States">
                <SelectionControlsChkStates></SelectionControlsChkStates>
            </BaseCard>

            <BaseCard heading="Selection Controls - Checkboxes - Colors">
                <SelectionControlsChkColors></SelectionControlsChkColors>
            </BaseCard>

            <BaseCard heading="Selection Controls - Checkboxes - Inline with a textfield">
                <SelectionControlsChkInlinetextfield></SelectionControlsChkInlinetextfield>
            </BaseCard>

            <BaseCard heading="Selection Controls - Radios - Default">
                <SelectionControlsRadioDefault></SelectionControlsRadioDefault>
            </BaseCard>

            <BaseCard heading="Selection Controls - Radios - Direction">
                <SelectionControlsRadioDirection></SelectionControlsRadioDirection>
            </BaseCard>

            <BaseCard heading="Selection Controls - Radios - Colors">
                <SelectionControlsRadioColors></SelectionControlsRadioColors>
            </BaseCard>

            <BaseCard heading="Selection Controls - Switches - Boolean">
                <SelectionControlsSwitchBoolean></SelectionControlsSwitchBoolean>
            </BaseCard>

            <BaseCard heading="Selection Controls - Switches - Array">
                <SelectionControlsSwitchArray></SelectionControlsSwitchArray>
            </BaseCard>

            <BaseCard heading="Selection Controls - Switches - States">
                <SelectionControlsSwitchStates></SelectionControlsSwitchStates>
            </BaseCard>

            <BaseCard heading="Selection Controls - Switches - Colors">
                <SelectionControlsSwitchColors></SelectionControlsSwitchColors>
            </BaseCard>
        </v-col>
        <v-col cols="12" sm="12" lg="6">

            <BaseCard heading="Selection Controls - Switches - Flat">
                <SelectionControlsSwitchFlat></SelectionControlsSwitchFlat>
            </BaseCard>
        </v-col>
        <v-col cols="12" sm="12" lg="6">

            <BaseCard heading="Selection Controls - Switches - inset">
                <SelectionControlsSwitchInset></SelectionControlsSwitchInset>
            </BaseCard>
        </v-col>
        <v-col cols="12" sm="12">

            <BaseCard heading="Selection Controls - Label slot">
                <SelectionControlsLblSlot></SelectionControlsLblSlot>
            </BaseCard>

        </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "SelectionControls",

  data: () => ({
  }),
  components: {
      SelectionControlsChkBoolean: () => import('@/components/vuetifyComponents/selection-controls/SelectionControlsChkBoolean'),
      SelectionControlsChkArray: () => import('@/components/vuetifyComponents/selection-controls/SelectionControlsChkArray'),
      SelectionControlsChkStates: () => import('@/components/vuetifyComponents/selection-controls/SelectionControlsChkStates'),
      SelectionControlsChkColors: () => import('@/components/vuetifyComponents/selection-controls/SelectionControlsChkColors'),
      SelectionControlsChkInlinetextfield: () => import('@/components/vuetifyComponents/selection-controls/SelectionControlsChkInlinetextfield'),
      SelectionControlsRadioDefault: () => import('@/components/vuetifyComponents/selection-controls/SelectionControlsRadioDefault'),
      SelectionControlsRadioDirection: () => import('@/components/vuetifyComponents/selection-controls/SelectionControlsRadioDirection'),
      SelectionControlsRadioColors: () => import('@/components/vuetifyComponents/selection-controls/SelectionControlsRadioColors'),
      SelectionControlsSwitchBoolean: () => import('@/components/vuetifyComponents/selection-controls/SelectionControlsSwitchBoolean'),
      SelectionControlsSwitchArray: () => import('@/components/vuetifyComponents/selection-controls/SelectionControlsSwitchArray'),
      SelectionControlsSwitchStates: () => import('@/components/vuetifyComponents/selection-controls/SelectionControlsSwitchStates'),
      SelectionControlsSwitchColors: () => import('@/components/vuetifyComponents/selection-controls/SelectionControlsSwitchColors'),
      SelectionControlsSwitchFlat: () => import('@/components/vuetifyComponents/selection-controls/SelectionControlsSwitchFlat'),
      SelectionControlsSwitchInset: () => import('@/components/vuetifyComponents/selection-controls/SelectionControlsSwitchInset'),
      SelectionControlsLblSlot: () => import('@/components/vuetifyComponents/selection-controls/SelectionControlsLblSlot')
  }
};
</script>
