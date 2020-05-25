<template>
  <v-container fluid class="down-top-padding">
    <v-row>

      <v-col cols="12" sm="12">
        <BaseCard heading="Time Pickers - Colors">
            <TimePickerColors></TimePickerColors>
        </BaseCard>

        <BaseCard heading="Time Pickers - Disabled">
            <TimePickerDisabled></TimePickerDisabled>
        </BaseCard>

        <BaseCard heading="Time Pickers - Read-only">
            <TimePickerReadonly></TimePickerReadonly>
        </BaseCard>

        <BaseCard heading="Time Pickers - 24h format">
            <TimePicker24hFormat></TimePicker24hFormat>
        </BaseCard>

        <BaseCard heading="Time Pickers - Allowed times">
            <TimePickerAllowedTimes></TimePickerAllowedTimes>
        </BaseCard>

        <BaseCard heading="Time Pickers - Setting picker width">
            <TimePickerSettingPickerWidth></TimePickerSettingPickerWidth>
        </BaseCard>

        <BaseCard heading="Time Pickers - AM/PM switch in title">
            <TimePickerAmPmSwitchinTitle></TimePickerAmPmSwitchinTitle>
        </BaseCard>

        <BaseCard heading="Time Pickers - No title">
            <TimePickerNoTitle></TimePickerNoTitle>
        </BaseCard>

        <BaseCard heading="Time Pickers - With seconds">
            <TimePickerWithSeconds></TimePickerWithSeconds>
        </BaseCard>

        <BaseCard heading="Time Pickers - Scrollable">
            <TimePickerScrollable></TimePickerScrollable>
        </BaseCard>

        <BaseCard heading="Time Pickers - In dialog and menu">
            <TimePickerInDialogMenu></TimePickerInDialogMenu>
        </BaseCard>

        <BaseCard heading="Time Pickers - Range">
            <TimePickerInRange></TimePickerInRange>
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "TimePickers",

  data: () => ({
  }),
  components: {
      TimePickerColors: () => import('@/components/vuetifyComponents/time-pickers/TimePickerColors'),
      TimePickerDisabled: () => import('@/components/vuetifyComponents/time-pickers/TimePickerDisabled'),
      TimePickerReadonly: () => import('@/components/vuetifyComponents/time-pickers/TimePickerReadonly'),
      TimePicker24hFormat: () => import('@/components/vuetifyComponents/time-pickers/TimePicker24hFormat'),
      TimePickerAllowedTimes: () => import('@/components/vuetifyComponents/time-pickers/TimePickerAllowedTimes'),
      TimePickerSettingPickerWidth: () => import('@/components/vuetifyComponents/time-pickers/TimePickerSettingPickerWidth'),
      TimePickerAmPmSwitchinTitle: () => import('@/components/vuetifyComponents/time-pickers/TimePickerAmPmSwitchinTitle'),
      TimePickerNoTitle: () => import('@/components/vuetifyComponents/time-pickers/TimePickerNoTitle'),
      TimePickerWithSeconds: () => import('@/components/vuetifyComponents/time-pickers/TimePickerWithSeconds'),
      TimePickerScrollable: () => import('@/components/vuetifyComponents/time-pickers/TimePickerScrollable'),
      TimePickerInDialogMenu: () => import('@/components/vuetifyComponents/time-pickers/TimePickerInDialogMenu'),
      TimePickerInRange: () => import('@/components/vuetifyComponents/time-pickers/TimePickerInRange')
  }
};
</script>
