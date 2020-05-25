<template>
  <v-container fluid class="down-top-padding">
    <v-row>
        <v-col cols="12" sm="12" lg="6">
            <BaseCard heading="Toolbar - Prominent toolbars">
                <ToolbarProminent></ToolbarProminent>
            </BaseCard>
        </v-col>

        <v-col cols="12" sm="12" lg="6">
            <BaseCard heading="Toolbar - Dense toolbars">
                <ToolbarDence></ToolbarDence>
            </BaseCard>
        </v-col>
      
      <v-col cols="12" sm="12" lg="6">
        <BaseCard heading="Toolbar - Contextual action bars">
            <ToolbarContextualActionbar></ToolbarContextualActionbar>
        </BaseCard>
      </v-col>

      <v-col cols="12" sm="12" lg="6">
        <BaseCard heading="Toolbar - Collapse">
            <ToolbarCollapse></ToolbarCollapse>
        </BaseCard>
      </v-col>

      <v-col cols="12" sm="12" lg="6">
        <BaseCard heading="Toolbar - Floating with search">
            <ToolbarFloatingSearch></ToolbarFloatingSearch>
        </BaseCard>
      </v-col>

      <v-col cols="12" sm="12" lg="6">
        <BaseCard heading="Toolbar - Flexible toolbar and card toolbar">
            <ToolbarFlexibleCard></ToolbarFlexibleCard>
        </BaseCard>
      </v-col>

      <v-col cols="12" sm="12" lg="6">
        <BaseCard heading="Toolbar - Extended">
            <ToolbarExtended></ToolbarExtended>
        </BaseCard>
      </v-col>

      <v-col cols="12" sm="12" lg="6">
        <BaseCard heading="Toolbar - Extension height">
            <ToolbarExtendedHeight></ToolbarExtendedHeight>
        </BaseCard>
      </v-col>

      <v-col cols="12" sm="12">
        <BaseCard heading="Toolbar - Light and Dark">
            <ToolbarLightDark></ToolbarLightDark>
        </BaseCard>

        <BaseCard heading="Toolbar - Variations">
            <ToolbarVariations></ToolbarVariations>
        </BaseCard>

        <BaseCard heading="Toolbar - Prominent w/ Background">
            <ToolbarProminentBackground></ToolbarProminentBackground>
        </BaseCard>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "Toolbar",

  data: () => ({
  }),
  components: {
      ToolbarProminent: () => import('@/components/vuetifyComponents/toolbar/ToolbarProminent'),
      ToolbarDence: () => import('@/components/vuetifyComponents/toolbar/ToolbarDence'),
      ToolbarContextualActionbar: () => import('@/components/vuetifyComponents/toolbar/ToolbarContextualActionbar'),
      ToolbarCollapse: () => import('@/components/vuetifyComponents/toolbar/ToolbarCollapse'),
      ToolbarFloatingSearch: () => import('@/components/vuetifyComponents/toolbar/ToolbarFloatingSearch'),
      ToolbarFlexibleCard: () => import('@/components/vuetifyComponents/toolbar/ToolbarFlexibleCard'),
      ToolbarExtended: () => import('@/components/vuetifyComponents/toolbar/ToolbarExtended'),
      ToolbarExtendedHeight: () => import('@/components/vuetifyComponents/toolbar/ToolbarExtendedHeight'),
      ToolbarLightDark: () => import('@/components/vuetifyComponents/toolbar/ToolbarLightDark'),
      ToolbarVariations: () => import('@/components/vuetifyComponents/toolbar/ToolbarVariations'),
      ToolbarProminentBackground: () => import('@/components/vuetifyComponents/toolbar/ToolbarProminentBackground')
  }
};
</script>
