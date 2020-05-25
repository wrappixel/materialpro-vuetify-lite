<template>
  <v-container fluid class="down-top-padding">
    <v-row>
        <v-col cols="12" sm="12">

            <BaseCard heading="SkeletonLoaders - Implementation methods">
                <SkeletonLoadersImplementationMethods></SkeletonLoadersImplementationMethods>
            </BaseCard>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "SkeletonLoaders",

  data: () => ({
  }),
  components: {
      SkeletonLoadersImplementationMethods: () => import('@/components/vuetifyComponents/skeleton-loaders/SkeletonLoadersImplementationMethods'),
  }
};
</script>
