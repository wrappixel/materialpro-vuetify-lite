<template>
  <v-container fluid class="down-top-padding">
    <v-row>

      <v-col cols="12" sm="12">
        <BaseCard heading="Progress Circular - Colored">
            <ProgressCircularColoured></ProgressCircularColoured>
        </BaseCard>

        <BaseCard heading="Progress Circular - Indeterminate">
            <ProgressCircularIndeterminate></ProgressCircularIndeterminate>
        </BaseCard>

        <BaseCard heading="Progress Circular - Size & Width">
            <ProgressCircularSizeWidth></ProgressCircularSizeWidth>
        </BaseCard>

        <BaseCard heading="Progress Circular - Rotate">
            <ProgressCircularRotate></ProgressCircularRotate>
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "ProgressCircular",

  data: () => ({
  }),
  components: {
      ProgressCircularColoured: () => import('@/components/vuetifyComponents/progress-circular/ProgressCircularColoured'),
      ProgressCircularIndeterminate: () => import('@/components/vuetifyComponents/progress-circular/ProgressCircularIndeterminate'),
      ProgressCircularSizeWidth: () => import('@/components/vuetifyComponents/progress-circular/ProgressCircularSizeWidth'),
      ProgressCircularRotate: () => import('@/components/vuetifyComponents/progress-circular/ProgressCircularRotate')
  }
};
</script>
