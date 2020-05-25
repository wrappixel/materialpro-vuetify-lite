<template>
  <v-container fluid class="down-top-padding">
    <v-row>
        <v-col cols="12" sm="12" lg="6">
            <BaseCard heading="Bottomsheet - Persistent">
                <BottomsheetPersistent></BottomsheetPersistent>
            </BaseCard>
        </v-col>

        <v-col cols="12" sm="12" lg="6">
            <BaseCard heading="Bottomsheet - v-model control">
                <BottomsheetVmodelControl></BottomsheetVmodelControl>
            </BaseCard>
        </v-col>

        <v-col cols="12" sm="12" lg="6">
            <BaseCard heading="Bottomsheet - Music Player">
                <BottomsheetMusicplayer></BottomsheetMusicplayer>
            </BaseCard>
        </v-col>

        <v-col cols="12" sm="12" lg="6">
            <BaseCard heading="Bottomsheet - Open in list">
                <BottomsheetOpenList></BottomsheetOpenList>
            </BaseCard>
      </v-col>

      <v-col cols="12" sm="12" lg="6">
            <BaseCard heading="Bottomsheet - Inset">
                <BottomsheetInset></BottomsheetInset>
            </BaseCard>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "Bottomsheet",

  data: () => ({
  }),
  components: {
      BottomsheetPersistent: () => import('@/components/vuetifyComponents/bottomsheet/BottomsheetPersistent'),
      BottomsheetVmodelControl: () => import('@/components/vuetifyComponents/bottomsheet/BottomsheetVmodelControl'),
      BottomsheetMusicplayer: () => import('@/components/vuetifyComponents/bottomsheet/BottomsheetMusicplayer'),
      BottomsheetOpenList: () => import('@/components/vuetifyComponents/bottomsheet/BottomsheetOpenList'),
      BottomsheetInset: () => import('@/components/vuetifyComponents/bottomsheet/BottomsheetInset'),
  }
};
</script>
