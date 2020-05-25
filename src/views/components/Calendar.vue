<template>
  <v-container fluid class="down-top-padding">
    <v-row>

      <v-col cols="12" sm="12">
        <BaseCard heading="Calendar - Weekly">
            <CalendarWeekly></CalendarWeekly>
        </BaseCard>

        <BaseCard heading="Calendar - Daily">
            <CalendarDaily></CalendarDaily>
        </BaseCard>

        <BaseCard heading="Calendar - Slots">
            <CalendarSlots></CalendarSlots>
        </BaseCard>

        <BaseCard heading="Calendar - Events">
            <CalendarEvents></CalendarEvents>
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "Calendar",

  data: () => ({
  }),
  components: {
      CalendarWeekly: () => import('@/components/vuetifyComponents/calendar/CalendarWeekly'),
      CalendarDaily: () => import('@/components/vuetifyComponents/calendar/CalendarDaily'),
      CalendarEvents: () => import('@/components/vuetifyComponents/calendar/CalendarEvents'),
      CalendarSlots: () => import('@/components/vuetifyComponents/calendar/CalendarSlots'),
  }
};
</script>
