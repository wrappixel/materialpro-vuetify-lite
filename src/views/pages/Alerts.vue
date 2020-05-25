<template>
  <v-container fluid class="down-top-padding">
    <v-row>
        <v-col cols="12" sm="12" lg="6">
            <BaseCard heading="Alert - Type">
                <AlertType></AlertType>
            </BaseCard>
        </v-col>

        <v-col cols="12" sm="12" lg="6">
            <BaseCard heading="Alert - Border">
                <AlertBorder></AlertBorder>
            </BaseCard>
        </v-col>

        <v-col cols="12" sm="12" lg="6">
            <BaseCard heading="Alert - Text">
                <AlertText></AlertText>
            </BaseCard>
        </v-col>

        <v-col cols="12" sm="12" lg="6">
            <BaseCard heading="Alert - Coloured Border">
                <AlertColorBorder></AlertColorBorder>
            </BaseCard>
        </v-col>
        <v-col cols="12" sm="12">
            <BaseCard heading="Alert - Dismissible">
                <AlertDismissible></AlertDismissible>
            </BaseCard>

            <BaseCard heading="Alert - Prominent">
                <AlertProminent></AlertProminent>
            </BaseCard>

            <BaseCard heading="Alert - Icon">
                <AlertIcon></AlertIcon>
            </BaseCard>

            <BaseCard heading="Alert - Dence">
                <AlertDence></AlertDence>
            </BaseCard>

            <BaseCard heading="Alert - Outlined">
                <AlertOutlined></AlertOutlined>
            </BaseCard>

            <BaseCard heading="Alert - Transition">
                <AlertTransition></AlertTransition>
            </BaseCard>

            <BaseCard heading="Alert - Twitter alert">
                <AlertTwitter></AlertTwitter>
            </BaseCard>
        
      </v-col>
    </v-row>
    
  </v-container>
</template>

<script>

export default {
  name: "Alerts",

  data: () => ({
  }),
  components: {
      AlertType: () => import('@/components/vuetifyComponents/alerts/AlertType'),
      AlertBorder: () => import('@/components/vuetifyComponents/alerts/AlertBorder'),
      AlertText: () => import('@/components/vuetifyComponents/alerts/AlertText'),
      AlertColorBorder: () => import('@/components/vuetifyComponents/alerts/AlertColorBorder'),
      AlertDismissible: () => import('@/components/vuetifyComponents/alerts/AlertDismissible'),
      AlertProminent: () => import('@/components/vuetifyComponents/alerts/AlertProminent'),
      AlertIcon: () => import('@/components/vuetifyComponents/alerts/AlertIcon'),
      AlertDence: () => import('@/components/vuetifyComponents/alerts/AlertDence'),
      AlertOutlined: () => import('@/components/vuetifyComponents/alerts/AlertOutlined'),
      AlertTransition: () => import('@/components/vuetifyComponents/alerts/AlertTransition'),
      AlertTwitter: () => import('@/components/vuetifyComponents/alerts/AlertTwitter'),
  }
};
</script>
