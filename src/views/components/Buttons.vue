<template>
  <v-container fluid class="down-top-padding">
    <v-row>
      <v-col cols="12" sm="12">
        <BaseCard heading="Buttons - Text">
            <ButtonText></ButtonText>
        </BaseCard>
        
        <BaseCard heading="Buttons - Raised">
            <ButtonRaised></ButtonRaised>
        </BaseCard>

        <BaseCard heading="Buttons - Depressed">
            <ButtonDepressed></ButtonDepressed>
        </BaseCard>

        <BaseCard heading="Buttons - Button Dropdown Variants">
            <ButtonDropdown></ButtonDropdown>
        </BaseCard>

        <BaseCard heading="Buttons - Icon">
            <ButtonIcon></ButtonIcon>
        </BaseCard>

        <BaseCard heading="Buttons - Floating">
            <ButtonFloating></ButtonFloating>
        </BaseCard>

        <BaseCard heading="Buttons - Sizing">
            <ButtonSizing></ButtonSizing>
        </BaseCard>

        <BaseCard heading="Buttons - Loaders">
            <ButtonLoaders></ButtonLoaders>
        </BaseCard>

      </v-col>

      <v-col cols="12" sm="12" lg="6">
        <BaseCard heading="Buttons - Outlined">
            <ButtonOutlined></ButtonOutlined>
        </BaseCard>
      </v-col>
      
      <v-col cols="12" sm="12" lg="6">
        <BaseCard heading="Buttons - Tile">
            <ButtonTile></ButtonTile>
        </BaseCard>
      </v-col>

      <v-col cols="12" sm="12" lg="6">
        <BaseCard heading="Buttons - Rounded">
            <ButtonRounded></ButtonRounded>
        </BaseCard>
      </v-col>

      <v-col cols="12" sm="12" lg="6">
        <BaseCard heading="Buttons - Block">
            <ButtonBlock></ButtonBlock>
        </BaseCard>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "Buttons",

  data: () => ({
  }),
  components: {
      ButtonText: () => import('@/components/vuetifyComponents/buttons/ButtonText'),
      ButtonRaised: () => import('@/components/vuetifyComponents/buttons/ButtonRaised'),
      ButtonDepressed: () => import('@/components/vuetifyComponents/buttons/ButtonDepressed'),
      ButtonDropdown: () => import('@/components/vuetifyComponents/buttons/ButtonDropdown'),
      ButtonIcon: () => import('@/components/vuetifyComponents/buttons/ButtonIcon'),
      ButtonFloating: () => import('@/components/vuetifyComponents/buttons/ButtonFloating'),
      ButtonSizing: () => import('@/components/vuetifyComponents/buttons/ButtonSizing'),
      ButtonLoaders: () => import('@/components/vuetifyComponents/buttons/ButtonLoaders'),
      ButtonOutlined: () => import('@/components/vuetifyComponents/buttons/ButtonOutlined'),
      ButtonTile: () => import('@/components/vuetifyComponents/buttons/ButtonTile'),
      ButtonRounded: () => import('@/components/vuetifyComponents/buttons/ButtonRounded'),
      ButtonBlock: () => import('@/components/vuetifyComponents/buttons/ButtonBlock'),
  }
};
</script>
