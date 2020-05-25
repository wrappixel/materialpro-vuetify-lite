<template>
  <v-container fluid class="down-top-padding">
    <v-row>
      <v-col cols="12" sm="12" lg="6">
        <BaseCard heading="Breadcrumb - Large">
            <BreadcrumbLarge></BreadcrumbLarge>
        </BaseCard>
      </v-col>

      <v-col cols="12" sm="12" lg="6">
        <BaseCard heading="Breadcrumb - Custom divider">
            <BreadcrumbCustomdivider></BreadcrumbCustomdivider>
        </BaseCard>
      </v-col>

      <v-col cols="12" sm="12" lg="6">
        <BaseCard heading="Breadcrumb - Icon dividers">
            <BreadcrumbIcondivider></BreadcrumbIcondivider>
        </BaseCard>
      </v-col>

      <v-col cols="12" sm="12" lg="6">
        <BaseCard heading="Breadcrumb - Item slot">
            <BreadcrumbItemSlot></BreadcrumbItemSlot>
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "Breadcrumb",

  data: () => ({
  }),
  components: {
      BreadcrumbLarge: () => import('@/components/vuetifyComponents/breadcrumb/BreadcrumbLarge'),
      BreadcrumbCustomdivider: () => import('@/components/vuetifyComponents/breadcrumb/BreadcrumbCustomdivider'),
      BreadcrumbIcondivider: () => import('@/components/vuetifyComponents/breadcrumb/BreadcrumbIcondivider'),
      BreadcrumbItemSlot: () => import('@/components/vuetifyComponents/breadcrumb/BreadcrumbItemSlot'),
  }
};
</script>
