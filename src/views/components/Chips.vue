<template>
  <v-container fluid class="down-top-padding">
    <v-row>
        <v-col cols="12" sm="12" lg="6">
            <BaseCard heading="Chips - Colored">
                <ChipsColoured></ChipsColoured>
            </BaseCard>
        </v-col>

        <v-col cols="12" sm="12" lg="6">
            <BaseCard heading="Chips - Icon">
                <ChipsIcon></ChipsIcon>
            </BaseCard>
        </v-col>
      
      <v-col cols="12" sm="12" lg="6">
        <BaseCard heading="Chips - Outlined">
            <ChipsOutlined></ChipsOutlined>
        </BaseCard>
      </v-col>

      <v-col cols="12" sm="12" lg="6">
        <BaseCard heading="Chips - Label">
            <ChipsLabel></ChipsLabel>
        </BaseCard>
      </v-col>      

      <v-col cols="12" sm="12" lg="6">
        <BaseCard heading="Chips - No ripple">
            <ChipsNoripple></ChipsNoripple>
        </BaseCard>
      </v-col>

      <v-col cols="12" sm="12" lg="6">
        <BaseCard heading="Chips - Draggable">
            <ChipsDraggable></ChipsDraggable>
        </BaseCard>
      </v-col>

      <v-col cols="12" sm="12">
        <BaseCard heading="Chips - Sizes">
            <ChipsSizes></ChipsSizes>
        </BaseCard>
      </v-col>

      <v-col cols="12" sm="12">
        <BaseCard heading="Chips - Filter">
            <ChipsFilter></ChipsFilter>
        </BaseCard>
      </v-col>

      <v-col cols="12" sm="12">
        <BaseCard heading="Chips - Closable">
            <ChipsClosable></ChipsClosable>
        </BaseCard>

        <BaseCard heading="Chips - Action chips">
            <ChipsAction></ChipsAction>
        </BaseCard>

        <BaseCard heading="Chips - In selects">
            <ChipsSelects></ChipsSelects>
        </BaseCard>

        <BaseCard heading="Chips - Custom lists">
            <ChipsCustomLists></ChipsCustomLists>
        </BaseCard>

        <BaseCard heading="Chips - Additional filtering">
            <ChipsAdditionalFilters></ChipsAdditionalFilters>
        </BaseCard>

        <BaseCard heading="Chips - Expandable">
            <ChipsExpandable></ChipsExpandable>
        </BaseCard>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "Chips",

  data: () => ({
  }),
  components: {
        ChipsColoured: () => import('@/components/vuetifyComponents/chips/ChipsColoured'),
        ChipsIcon: () => import('@/components/vuetifyComponents/chips/ChipsIcon'),
        ChipsOutlined: () => import('@/components/vuetifyComponents/chips/ChipsOutlined'),
        ChipsLabel: () => import('@/components/vuetifyComponents/chips/ChipsLabel'),
        ChipsSizes: () => import('@/components/vuetifyComponents/chips/ChipsSizes'),
        ChipsDraggable: () => import('@/components/vuetifyComponents/chips/ChipsDraggable'),
        ChipsFilter: () => import('@/components/vuetifyComponents/chips/ChipsFilter'),
        ChipsNoripple: () => import('@/components/vuetifyComponents/chips/ChipsNoripple'),
        ChipsClosable: () => import('@/components/vuetifyComponents/chips/ChipsClosable'),
        ChipsAction: () => import('@/components/vuetifyComponents/chips/ChipsAction'),
        ChipsSelects: () => import('@/components/vuetifyComponents/chips/ChipsSelects'),
        ChipsCustomLists: () => import('@/components/vuetifyComponents/chips/ChipsCustomLists'),
        ChipsAdditionalFilters: () => import('@/components/vuetifyComponents/chips/ChipsAdditionalFilters'),
        ChipsExpandable: () => import('@/components/vuetifyComponents/chips/ChipsExpandable'),
  }
};
</script>
