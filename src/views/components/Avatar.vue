<template>
  <v-container fluid class="down-top-padding">
    <v-row>
        <v-col cols="12" sm="12" lg="6">
            <BaseCard heading="Avatar - Size">
                <AvatarSize></AvatarSize>
            </BaseCard>
            
        </v-col>

        <v-col cols="12" sm="12" lg="6">
            <BaseCard heading="Avatar - Default slot">
                <AvatarDefaultSlot></AvatarDefaultSlot>
            </BaseCard>
        </v-col>
        
        <v-col cols="12" sm="12">
            <BaseCard heading="Avatar - Profile Card">
                <AvatarProfileCard></AvatarProfileCard>
            </BaseCard>

            <BaseCard heading="Avatar - Advanced usage">
                <AvatarAdvancedUsage></AvatarAdvancedUsage>
            </BaseCard>

            <BaseCard heading="Avatar - Tile">
                <AvatarTile></AvatarTile>
            </BaseCard>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "Avatar",

  data: () => ({}),
  components: {
      AvatarSize: () => import('@/components/vuetifyComponents/avatar/AvatarSize'),
      AvatarDefaultSlot: () => import('@/components/vuetifyComponents/avatar/AvatarDefaultSlot'),
      AvatarProfileCard: () => import('@/components/vuetifyComponents/avatar/AvatarProfileCard'),
      AvatarAdvancedUsage: () => import('@/components/vuetifyComponents/avatar/AvatarAdvancedUsage'),
      AvatarTile: () => import('@/components/vuetifyComponents/avatar/AvatarTile'),
  }
};
</script>
