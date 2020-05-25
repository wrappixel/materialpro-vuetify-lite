<template>
  <v-container fluid class="down-top-padding">
    <v-row>
        <v-col cols="12" sm="12">
            <BaseCard heading="Parallex - With content">
                <ParallexContent></ParallexContent>
            </BaseCard>

            <BaseCard heading="Parallex - Custom height">
                <ParallexCustomHeight></ParallexCustomHeight>
            </BaseCard>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "Parallex",

  data: () => ({
  }),
  components: {
      ParallexContent: () => import('@/components/vuetifyComponents/parallex/ParallexContent'),
      ParallexCustomHeight: () => import('@/components/vuetifyComponents/parallex/ParallexCustomHeight')
  }
};
</script>
