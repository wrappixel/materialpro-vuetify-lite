<template>
  <v-container fluid class="down-top-padding">
    <v-row>
      <v-col cols="12" sm="12">
        <BaseCard heading="Table Simple - Fixed height">
            <TableSimpleFixHeight></TableSimpleFixHeight>
        </BaseCard>

        <BaseCard heading="Table Simple - Fixed header">
            <TableSimpleFixHeader></TableSimpleFixHeader>
        </BaseCard>

        <BaseCard heading="Table Simple - Dense table">
            <TableSimpleDense></TableSimpleDense>
        </BaseCard>

        <BaseCard heading="Table Simple - Dark theme">
            <TableSimpleDarktheme></TableSimpleDarktheme>
        </BaseCard>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "TableSimple",

  data: () => ({
  }),
  components: {
      TableSimpleFixHeight: () => import('@/components/vuetifyComponents/tables-simple/TableSimpleFixHeight'),
      TableSimpleFixHeader: () => import('@/components/vuetifyComponents/tables-simple/TableSimpleFixHeader'),
      TableSimpleDense: () => import('@/components/vuetifyComponents/tables-simple/TableSimpleDense'),
      TableSimpleDarktheme: () => import('@/components/vuetifyComponents/tables-simple/TableSimpleDarktheme')
  }
};
</script>
