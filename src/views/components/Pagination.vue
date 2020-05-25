<template>
  <v-container fluid class="down-top-padding">
    <v-row>
        <v-col cols="12" sm="12">
            <BaseCard heading="Pagination - Long">
                <PaginationLong></PaginationLong>
            </BaseCard>

            <BaseCard heading="Pagination - Limit">
                <PaginationLimit></PaginationLimit>
            </BaseCard>

            <BaseCard heading="Pagination - Circle">
                <PaginationCircle></PaginationCircle>
            </BaseCard>

            <BaseCard heading="Pagination - Icons">
                <PaginationIcons></PaginationIcons>
            </BaseCard>
            
            <BaseCard heading="Pagination - Disabled">
                <PaginationDisabled></PaginationDisabled>
            </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "Pagination",

  data: () => ({
  }),
  components: {
      PaginationLong: () => import('@/components/vuetifyComponents/pagination/PaginationLong'),
      PaginationLimit: () => import('@/components/vuetifyComponents/pagination/PaginationLimit'),
      PaginationCircle: () => import('@/components/vuetifyComponents/pagination/PaginationCircle'),
      PaginationIcons: () => import('@/components/vuetifyComponents/pagination/PaginationIcons'),
      PaginationDisabled: () => import('@/components/vuetifyComponents/pagination/PaginationDisabled')
  }
};
</script>
