<template>
  <v-container fluid class="down-top-padding">
    <v-row>
        <v-col cols="12" sm="12">
            <BaseCard heading="Sparkline - Fill">
                <SparklineFill></SparklineFill>
            </BaseCard>
        </v-col>

        <v-col cols="12" sm="12">
            <BaseCard heading="Sparkline - Take a break">
                <SparklineTakeBreak></SparklineTakeBreak>
            </BaseCard>
        </v-col>

        <v-col cols="12" sm="12">
            <BaseCard heading="Sparkline - Dashboard card">
                <SparklineDashboardCard></SparklineDashboardCard>
            </BaseCard>
        </v-col>

        <v-col cols="12" sm="12">
            <BaseCard heading="Sparkline - Custom labels">
                <SparklineCustomLabels></SparklineCustomLabels>
            </BaseCard>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "Sparkline",

  data: () => ({
  }),
  components: {
      SparklineFill: () => import('@/components/vuetifyComponents/sparkline/SparklineFill'),
      SparklineTakeBreak: () => import('@/components/vuetifyComponents/sparkline/SparklineTakeBreak'),
      SparklineDashboardCard: () => import('@/components/vuetifyComponents/sparkline/SparklineDashboardCard'),
      SparklineCustomLabels: () => import('@/components/vuetifyComponents/sparkline/SparklineCustomLabels')
  }
};
</script>
