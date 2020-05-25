<template>
  <v-container fluid class="down-top-padding">
    <v-row>
      <v-col cols="12" sm="12">
        <BaseCard heading="Chip Groups - Column">
            <GrpChipColumn></GrpChipColumn>
        </BaseCard>
        
        <BaseCard heading="Chip Groups - Mandatory">
            <GrpChipMandatory></GrpChipMandatory>
        </BaseCard>

        <BaseCard heading="Chip Groups - Multiple">
            <GrpChipMultiple></GrpChipMultiple>
        </BaseCard>

        <BaseCard heading="Chip Groups - Toothbrush card">
            <GrpChipToothbrushCard></GrpChipToothbrushCard>
        </BaseCard>

        <BaseCard heading="Chip Groups - Blouse product card">
            <GrpChipBlouseProductCard></GrpChipBlouseProductCard>
        </BaseCard>

        <BaseCard heading="Chip Groups - Filter results">
            <GrpChipFilterResults></GrpChipFilterResults>
        </BaseCard>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "ChipGroups",

  data: () => ({
  }),
  components: {
      GrpChipColumn: () => import('@/components/vuetifyComponents/chip-group/GrpChipColumn'),
      GrpChipMandatory: () => import('@/components/vuetifyComponents/chip-group/GrpChipMandatory'),
      GrpChipMultiple: () => import('@/components/vuetifyComponents/chip-group/GrpChipMultiple'),
      GrpChipToothbrushCard: () => import('@/components/vuetifyComponents/chip-group/GrpChipToothbrushCard'),
      GrpChipBlouseProductCard: () => import('@/components/vuetifyComponents/chip-group/GrpChipBlouseProductCard'),
      GrpChipFilterResults: () => import('@/components/vuetifyComponents/chip-group/GrpChipFilterResults'),
  }
};
</script>
