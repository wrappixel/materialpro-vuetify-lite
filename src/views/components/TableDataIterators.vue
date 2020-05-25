<template>
  <v-container fluid class="down-top-padding">
    <v-row>
      <v-col cols="12" sm="12">
        <BaseCard heading="TableDataIterators - Slots">
            <TableDataIteratorsSlots></TableDataIteratorsSlots>
        </BaseCard>

        <BaseCard heading="TableDataIterators - Expand">
            <TableDataIteratorsExpand></TableDataIteratorsExpand>
        </BaseCard>

        <BaseCard heading="TableDataIterators - Filter">
            <TableDataIteratorsFilter></TableDataIteratorsFilter>
        </BaseCard>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "TableDataIterators",

  data: () => ({
  }),
  components: {
      TableDataIteratorsSlots: () => import('@/components/vuetifyComponents/tables-data-iterators/TableDataIteratorsSlots'),
      TableDataIteratorsExpand: () => import('@/components/vuetifyComponents/tables-data-iterators/TableDataIteratorsExpand'),
      TableDataIteratorsFilter: () => import('@/components/vuetifyComponents/tables-data-iterators/TableDataIteratorsFilter')
  }
};
</script>
