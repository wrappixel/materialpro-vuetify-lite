<template>
  <v-container fluid class="down-top-padding">
    <v-row>
      <v-col cols="12" sm="12">
        <BaseCard heading="List Item Groups - De-emphasized selections">
            <GrpListItemDeemphasizedSelections></GrpListItemDeemphasizedSelections>
        </BaseCard>
        </v-col>
        <v-col cols="12" sm="12" lg="6">
            <BaseCard heading="List Item Groups - Select multiple items">
                <GrpListItemSelectMultiple></GrpListItemSelectMultiple>
            </BaseCard>
        </v-col>
        <v-col cols="12" sm="12" lg="6">
            <BaseCard heading="List Item Groups - Mandatory">
                <GrpListItemMandatory></GrpListItemMandatory>
            </BaseCard>
        </v-col>
        <v-col cols="12" sm="12">
        <BaseCard heading="List Item Groups - Custom active class">
            <GrpListItemCustomActiveClass></GrpListItemCustomActiveClass>
        </BaseCard>

        <BaseCard heading="List Item Groups - Selection controls">
            <GrpListItemSelectionControls></GrpListItemSelectionControls>
        </BaseCard>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "ItemGroups",

  data: () => ({
  }),
  components: {
      GrpListItemDeemphasizedSelections: () => import('@/components/vuetifyComponents/listitem-group/GrpListItemDeemphasizedSelections'),
      GrpListItemSelectMultiple: () => import('@/components/vuetifyComponents/listitem-group/GrpListItemSelectMultiple'),
      GrpListItemMandatory: () => import('@/components/vuetifyComponents/listitem-group/GrpListItemMandatory'),
      GrpListItemCustomActiveClass: () => import('@/components/vuetifyComponents/listitem-group/GrpListItemCustomActiveClass'),
      GrpListItemSelectionControls: () => import('@/components/vuetifyComponents/listitem-group/GrpListItemSelectionControls')
  }
};
</script>
