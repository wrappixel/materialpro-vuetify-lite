<template>
  <v-container fluid class="down-top-padding">
    <v-row>
        <v-col cols="12" sm="12">
            <BaseCard heading="Tabs - Fixed tabs">
                <TabsFixed></TabsFixed>
            </BaseCard>

            <BaseCard heading="Tabs - Centered active tab">
                <TabsCenterActive></TabsCenterActive>
            </BaseCard>

            <BaseCard heading="Tabs - Tab Items">
                <TabsItems></TabsItems>
            </BaseCard>

            <BaseCard heading="Tabs - Grow">
                <TabsGrow></TabsGrow>
            </BaseCard>

            <BaseCard heading="Tabs - Pagination">
                <TabsPagination></TabsPagination>
            </BaseCard>

            <BaseCard heading="Tabs - Custom icons">
                <TabsCustomIcons></TabsCustomIcons>
            </BaseCard>

            <BaseCard heading="Tabs - Vertical Tabs">
                <TabsVertical></TabsVertical>
            </BaseCard>

            <BaseCard heading="Tabs - Icons and text">
                <TabsIconsText></TabsIconsText>
            </BaseCard>

            <BaseCard heading="Tabs - Right aligned tabs">
                <TabsRightAlign></TabsRightAlign>
            </BaseCard>

            <BaseCard heading="Tabs - Content">
                <TabsContent></TabsContent>
            </BaseCard>

            <BaseCard heading="Tabs - Align tabs with toolbar title">
                <TabsAlignwithToolbarTitle></TabsAlignwithToolbarTitle>
            </BaseCard>

            <BaseCard heading="Tabs - Dynamic Tabs">
                <TabsDynamic></TabsDynamic>
            </BaseCard>

            <BaseCard heading="Tabs - With search">
                <TabsSearch></TabsSearch>
            </BaseCard>

            <BaseCard heading="Tabs - Desktop tabs">
                <TabsDesktop></TabsDesktop>
            </BaseCard>

            <BaseCard heading="Tabs - With menu">
                <TabswithMenu></TabswithMenu>
            </BaseCard>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "Tabs",

  data: () => ({
  }),
  components: {
      TabsFixed: () => import('@/components/vuetifyComponents/tabs/TabsFixed'),
      TabsCenterActive: () => import('@/components/vuetifyComponents/tabs/TabsCenterActive'),
      TabsItems: () => import('@/components/vuetifyComponents/tabs/TabsItems'),
      TabsGrow: () => import('@/components/vuetifyComponents/tabs/TabsGrow'),
      TabsPagination: () => import('@/components/vuetifyComponents/tabs/TabsPagination'),
      TabsCustomIcons: () => import('@/components/vuetifyComponents/tabs/TabsCustomIcons'),
      TabsVertical: () => import('@/components/vuetifyComponents/tabs/TabsVertical'),
      TabsIconsText: () => import('@/components/vuetifyComponents/tabs/TabsIconsText'),
      TabsRightAlign: () => import('@/components/vuetifyComponents/tabs/TabsRightAlign'),
      TabsContent: () => import('@/components/vuetifyComponents/tabs/TabsContent'),
      TabsAlignwithToolbarTitle: () => import('@/components/vuetifyComponents/tabs/TabsAlignwithToolbarTitle'),
      TabsDynamic: () => import('@/components/vuetifyComponents/tabs/TabsDynamic'),
      TabsSearch: () => import('@/components/vuetifyComponents/tabs/TabsSearch'),
      TabsDesktop: () => import('@/components/vuetifyComponents/tabs/TabsDesktop'),
      TabswithMenu: () => import('@/components/vuetifyComponents/tabs/TabswithMenu')
  }
};
</script>
