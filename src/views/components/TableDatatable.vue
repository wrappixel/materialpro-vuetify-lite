<template>
  <v-container fluid class="down-top-padding">
    <v-row>
      <v-col cols="12" sm="12">
        <BaseCard heading="Table Datatable - Selectable rows">
            <DatatablesSelectableRows></DatatablesSelectableRows>
        </BaseCard>

        <BaseCard heading="Table Datatable - Grouped rows">
            <DatatablesGroupedRows></DatatablesGroupedRows>
        </BaseCard>

        <BaseCard heading="Table Datatable - Sort on multiple columns">
            <DatatablesSortonMultipleColumns></DatatablesSortonMultipleColumns>
        </BaseCard>

        <BaseCard heading="Table Datatable - Search">
            <DatatablesSearch></DatatablesSearch>
        </BaseCard>

        <BaseCard heading="Table Datatable - Remove default header and footer">
            <DatatablesRemoveDefaultHeaderFooter></DatatablesRemoveDefaultHeaderFooter>
        </BaseCard>

        <BaseCard heading="Table Datatable - Loading state">
            <DatatablesLoadingState></DatatablesLoadingState>
        </BaseCard>

        <BaseCard heading="Table Datatable - Dense">
            <DatatablesDense></DatatablesDense>
        </BaseCard>

        <BaseCard heading="Table Datatable - Footer props">
            <DatatablesFooterProps></DatatablesFooterProps>
        </BaseCard>

        <BaseCard heading="Table Datatable - Filterable columns">
            <DatatablesFilterableColumns></DatatablesFilterableColumns>
        </BaseCard>

        <BaseCard heading="Table Datatable - Slots">
            <DatatablesSlots></DatatablesSlots>
        </BaseCard>

        <BaseCard heading="Table Datatable - Simple Checkbox">
            <DatatablesSimpleCheckbox></DatatablesSimpleCheckbox>
        </BaseCard>

        <BaseCard heading="Table Datatable - Expandable rows">
            <DatatablesExpandableRows></DatatablesExpandableRows>
        </BaseCard>

        <BaseCard heading="Table Datatable - Custom filtering">
            <DatatablesCustomFiltering></DatatablesCustomFiltering>
        </BaseCard>

        <BaseCard heading="Table Datatable - Customizing default header">
            <DatatablesCustomizingDefaultHeader></DatatablesCustomizingDefaultHeader>
        </BaseCard>

        <BaseCard heading="Table Datatable - Customizing default rows">
            <DatatablesCustomizingDefaultRows></DatatablesCustomizingDefaultRows>
        </BaseCard>

        <BaseCard heading="Table Datatable - External pagination">
            <DatatablesExternalPagination></DatatablesExternalPagination>
        </BaseCard>

        <BaseCard heading="Table Datatable - External sorting">
            <DatatablesExternalSorting></DatatablesExternalSorting>
        </BaseCard>

        <BaseCard heading="Table Datatable - Paginate and sort server-side">
            <DatatablesPaginateSortServerside></DatatablesPaginateSortServerside>
        </BaseCard>

        <BaseCard heading="Table Datatable - Content Editing">
            <DatatablesContentEditing></DatatablesContentEditing>
        </BaseCard>

        <BaseCard heading="Table Datatable - CRUD Actions">
            <DatatablesCRUDActions></DatatablesCRUDActions>
        </BaseCard>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "TableDatatable",

  data: () => ({
  }),
  components: {
      DatatablesSelectableRows: () => import('@/components/vuetifyComponents/tables-datatable/DatatablesSelectableRows'),
      DatatablesGroupedRows: () => import('@/components/vuetifyComponents/tables-datatable/DatatablesGroupedRows'),
      DatatablesSortonMultipleColumns: () => import('@/components/vuetifyComponents/tables-datatable/DatatablesSortonMultipleColumns'),
      DatatablesSearch: () => import('@/components/vuetifyComponents/tables-datatable/DatatablesSearch'),
      DatatablesRemoveDefaultHeaderFooter: () => import('@/components/vuetifyComponents/tables-datatable/DatatablesRemoveDefaultHeaderFooter'),
      DatatablesLoadingState: () => import('@/components/vuetifyComponents/tables-datatable/DatatablesLoadingState'),
      DatatablesDense: () => import('@/components/vuetifyComponents/tables-datatable/DatatablesDense'),
      DatatablesFooterProps: () => import('@/components/vuetifyComponents/tables-datatable/DatatablesFooterProps'),
      DatatablesFilterableColumns: () => import('@/components/vuetifyComponents/tables-datatable/DatatablesFilterableColumns'),
      DatatablesSlots: () => import('@/components/vuetifyComponents/tables-datatable/DatatablesSlots'),
      DatatablesSimpleCheckbox: () => import('@/components/vuetifyComponents/tables-datatable/DatatablesSimpleCheckbox'),
      DatatablesExpandableRows: () => import('@/components/vuetifyComponents/tables-datatable/DatatablesExpandableRows'),
      DatatablesCustomFiltering: () => import('@/components/vuetifyComponents/tables-datatable/DatatablesCustomFiltering'),
      DatatablesCustomizingDefaultHeader: () => import('@/components/vuetifyComponents/tables-datatable/DatatablesCustomizingDefaultHeader'),
      DatatablesCustomizingDefaultRows: () => import('@/components/vuetifyComponents/tables-datatable/DatatablesCustomizingDefaultRows'),
      DatatablesExternalPagination: () => import('@/components/vuetifyComponents/tables-datatable/DatatablesExternalPagination'),
      DatatablesExternalSorting: () => import('@/components/vuetifyComponents/tables-datatable/DatatablesExternalSorting'),
      DatatablesPaginateSortServerside: () => import('@/components/vuetifyComponents/tables-datatable/DatatablesPaginateSortServerside'),
      DatatablesContentEditing: () => import('@/components/vuetifyComponents/tables-datatable/DatatablesContentEditing'),
      DatatablesCRUDActions: () => import('@/components/vuetifyComponents/tables-datatable/DatatablesCRUDActions')
  }
};
</script>
