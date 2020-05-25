<template>
  <v-container fluid class="down-top-padding">
    <v-row>
        <v-col cols="12" sm="12">
            <BaseCard heading="Lazy">
                <Lazy></Lazy>
            </BaseCard>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "Lazy",

  data: () => ({
  }),
  components: {
      Lazy: () => import('@/components/vuetifyComponents/lazy/Lazy')
  }
};
</script>
