<template>
  <v-container fluid class="down-top-padding">
    <v-row>
        <v-col cols="12" sm="12">
            <BaseCard heading="Grids - Auto sizing columns">
                <GridsAutosizeColumns></GridsAutosizeColumns>
            </BaseCard>

            <BaseCard heading="Grids - Equal width columns">
                <GridsEqualWidthColumns></GridsEqualWidthColumns>
            </BaseCard>

            <BaseCard heading="Grids - One column width">
                <GridsOnecolumnWidth></GridsOnecolumnWidth>
            </BaseCard>

            <BaseCard heading="Grids - Variable content width">
                <GridsVariableContentWidth></GridsVariableContentWidth>
            </BaseCard>

            <BaseCard heading="Grids - Grow and Shrink">
                <GridsGrowShrink></GridsGrowShrink>
            </BaseCard>

            <BaseCard heading="Grids - Row and column breakpoints">
                <GridsRowColumnBreakpoints></GridsRowColumnBreakpoints>
            </BaseCard>

            <BaseCard heading="Grids - Unique layouts">
                <GridsUniqueLayouts></GridsUniqueLayouts>
            </BaseCard>

            <BaseCard heading="Grids - Vertical alignment">
                <GridsVerticalAlign></GridsVerticalAlign>
            </BaseCard>

            <BaseCard heading="Textfields - Horizontal alignment">
                <GridsHorizontalAlign></GridsHorizontalAlign>
            </BaseCard>

            <BaseCard heading="Textfields - No gutters">
                <GridsNoGutters></GridsNoGutters>
            </BaseCard>

            <BaseCard heading="Textfields - Column wrapping">
                <GridsColumnWrapping></GridsColumnWrapping>
            </BaseCard>

            <BaseCard heading="Textfields - Order classes">
                <GridsOrderClasses></GridsOrderClasses>
            </BaseCard>

            <BaseCard heading="Textfields - Order last / first">
                <GridsOrderFirstLast></GridsOrderFirstLast>
            </BaseCard>

            <BaseCard heading="Textfields - Offset">
                <GridsOffset></GridsOffset>
            </BaseCard>

            <BaseCard heading="Textfields - Offset breakpoint">
                <GridsOffsetBreakpoint></GridsOffsetBreakpoint>
            </BaseCard>

            <BaseCard heading="Textfields - Margin utilities">
                <GridsMarginUtilities></GridsMarginUtilities>
            </BaseCard>

            <BaseCard heading="Textfields - Nested grid">
                <GridsNested></GridsNested>
            </BaseCard>

            <BaseCard heading="Textfields - Spacers">
                <GridsSpacers></GridsSpacers>
            </BaseCard>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "Grids",

  data: () => ({
  }),
  components: {
      GridsAutosizeColumns: () => import('@/components/vuetifyComponents/grids/GridsAutosizeColumns'),
      GridsEqualWidthColumns: () => import('@/components/vuetifyComponents/grids/GridsEqualWidthColumns'),
      GridsOnecolumnWidth: () => import('@/components/vuetifyComponents/grids/GridsOnecolumnWidth'),
      GridsVariableContentWidth: () => import('@/components/vuetifyComponents/grids/GridsVariableContentWidth'),
      GridsGrowShrink: () => import('@/components/vuetifyComponents/grids/GridsGrowShrink'),
      GridsRowColumnBreakpoints: () => import('@/components/vuetifyComponents/grids/GridsRowColumnBreakpoints'),
      GridsUniqueLayouts: () => import('@/components/vuetifyComponents/grids/GridsUniqueLayouts'),
      GridsVerticalAlign: () => import('@/components/vuetifyComponents/grids/GridsVerticalAlign'),
      GridsHorizontalAlign: () => import('@/components/vuetifyComponents/grids/GridsHorizontalAlign'),
      GridsNoGutters: () => import('@/components/vuetifyComponents/grids/GridsNoGutters'),
      GridsColumnWrapping: () => import('@/components/vuetifyComponents/grids/GridsColumnWrapping'),
      GridsOrderClasses: () => import('@/components/vuetifyComponents/grids/GridsOrderClasses'),
      GridsOrderFirstLast: () => import('@/components/vuetifyComponents/grids/GridsOrderFirstLast'),
      GridsOffsetBreakpoint: () => import('@/components/vuetifyComponents/grids/GridsOffsetBreakpoint'),
      GridsOffset: () => import('@/components/vuetifyComponents/grids/GridsOffset'),
      GridsMarginUtilities: () => import('@/components/vuetifyComponents/grids/GridsMarginUtilities'),
      GridsNested: () => import('@/components/vuetifyComponents/grids/GridsNested'),
      GridsSpacers: () => import('@/components/vuetifyComponents/grids/GridsSpacers'),
  }
};
</script>
