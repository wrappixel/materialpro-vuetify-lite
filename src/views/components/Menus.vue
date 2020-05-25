<template>
  <v-container fluid class="down-top-padding">
    <v-row>
      <v-col cols="12" sm="12">
        <BaseCard heading="Menus - Absolute position">
            <MenusAbsolutePosition></MenusAbsolutePosition>
        </BaseCard>

        <BaseCard heading="Menus - Menu with activator and tooltip">
            <MenusActivatorTooltip></MenusActivatorTooltip>
        </BaseCard>

        <BaseCard heading="Menus - Hover">
            <MenusHover></MenusHover>
        </BaseCard>

        <BaseCard heading="Menus - Custom transitions">
            <MenusCustomTransitions></MenusCustomTransitions>
        </BaseCard>

        <BaseCard heading="Menus - Disabled">
            <MenusDisabled></MenusDisabled>
        </BaseCard>

        <BaseCard heading="Menus - X offset">
            <MenusXoffset></MenusXoffset>
        </BaseCard>

        <BaseCard heading="Menus - Y offset">
            <MenusYoffset></MenusYoffset>
        </BaseCard>

        <BaseCard heading="Menus - Close on click">
            <MenusCloseonClick></MenusCloseonClick>
        </BaseCard>

        <BaseCard heading="Menus - Close on content click">
            <MenusCloseonContentClick></MenusCloseonContentClick>
        </BaseCard>

        <BaseCard heading="Menus - Absolute position without activator">
            <MenusAbsolutePositionwithoutActivator></MenusAbsolutePositionwithoutActivator>
        </BaseCard>

        

        <BaseCard heading="Menus - Popover menu">
            <MenusPopoverMenu></MenusPopoverMenu>
        </BaseCard>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "Menus",

  data: () => ({
  }),
  components: {
      MenusAbsolutePosition: () => import('@/components/vuetifyComponents/menus/MenusAbsolutePosition'),
      MenusActivatorTooltip: () => import('@/components/vuetifyComponents/menus/MenusActivatorTooltip'),
      MenusHover: () => import('@/components/vuetifyComponents/menus/MenusHover'),
      MenusCustomTransitions: () => import('@/components/vuetifyComponents/menus/MenusCustomTransitions'),
      MenusDisabled: () => import('@/components/vuetifyComponents/menus/MenusDisabled'),
      MenusXoffset: () => import('@/components/vuetifyComponents/menus/MenusXoffset'),
      MenusYoffset: () => import('@/components/vuetifyComponents/menus/MenusYoffset'),
      MenusCloseonClick: () => import('@/components/vuetifyComponents/menus/MenusCloseonClick'),
      MenusCloseonContentClick: () => import('@/components/vuetifyComponents/menus/MenusCloseonContentClick'),
      MenusAbsolutePositionwithoutActivator: () => import('@/components/vuetifyComponents/menus/MenusAbsolutePositionwithoutActivator'),
      MenusPopoverMenu: () => import('@/components/vuetifyComponents/menus/MenusPopoverMenu')
  }
};
</script>
