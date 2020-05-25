<template>
  <v-container fluid class="down-top-padding">
    <v-row>
        <v-col cols="12" sm="12">
            <BaseCard heading="Lists - Disabled lists">
                <ListsDisabled></ListsDisabled>
            </BaseCard>

            <BaseCard heading="Lists - Shaped lists">
                <ListsShaped></ListsShaped>
            </BaseCard>

            <BaseCard heading="Lists - Dense">
                <ListsDence></ListsDence>
            </BaseCard>

            <BaseCard heading="Lists - Flat">
                <ListsFlat></ListsFlat>
            </BaseCard>

            <BaseCard heading="Lists - Rounded">
                <ListsRounded></ListsRounded>
            </BaseCard>

            <BaseCard heading="Lists - Avatar with title and action">
                <ListsAvatarTitleAction></ListsAvatarTitleAction>
            </BaseCard>

            <BaseCard heading="Lists - Icon with 2 lines and action">
                <ListsIcon2lineAction></ListsIcon2lineAction>
            </BaseCard>

            <BaseCard heading="Lists - Avatar with 3 lines">
                <ListsAvatar3Lines></ListsAvatar3Lines>
            </BaseCard>

            <BaseCard heading="Lists - Avatar with title and action">
                <ListsAvatarwithTitleAction></ListsAvatarwithTitleAction>
            </BaseCard>

            <BaseCard heading="Lists - Nested lists">
                <ListsNested></ListsNested>
            </BaseCard>

            <BaseCard heading="Lists - Subheadings and dividers">
                <ListsSubheadingsDividers></ListsSubheadingsDividers>
            </BaseCard>

            <BaseCard heading="Lists - Card image with toolbar and list">
                <ListsImagewithToolbar></ListsImagewithToolbar>
            </BaseCard>

            <BaseCard heading="Lists - Title with sub-title, actions and action-text">
                <ListsTitlewithSubtitleActiontext></ListsTitlewithSubtitleActiontext>
            </BaseCard>

            <BaseCard heading="Lists - Action with title and sub-title">
                <ListsActionwithTitleSubtitle></ListsActionwithTitleSubtitle>
            </BaseCard>

            <BaseCard heading="Lists - Expansion Lists">
                <ListsExpansion></ListsExpansion>
            </BaseCard>

            <BaseCard heading="Lists - Navigation lists">
                <ListsNavigation></ListsNavigation>
            </BaseCard>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "Lists",

  data: () => ({
  }),
  components: {
      ListsDisabled: () => import('@/components/vuetifyComponents/lists/ListsDisabled'),
      ListsShaped: () => import('@/components/vuetifyComponents/lists/ListsShaped'),
      ListsDence: () => import('@/components/vuetifyComponents/lists/ListsDence'),
      ListsFlat: () => import('@/components/vuetifyComponents/lists/ListsFlat'),
      ListsRounded: () => import('@/components/vuetifyComponents/lists/ListsRounded'),
      ListsAvatarTitleAction: () => import('@/components/vuetifyComponents/lists/ListsAvatarTitleAction'),
      ListsIcon2lineAction: () => import('@/components/vuetifyComponents/lists/ListsIcon2lineAction'),
      ListsAvatar3Lines: () => import('@/components/vuetifyComponents/lists/ListsAvatar3Lines'),
      ListsAvatarwithTitleAction: () => import('@/components/vuetifyComponents/lists/ListsAvatarwithTitleAction'),
      ListsNested: () => import('@/components/vuetifyComponents/lists/ListsNested'),
      ListsSubheadingsDividers: () => import('@/components/vuetifyComponents/lists/ListsSubheadingsDividers'),
      ListsImagewithToolbar: () => import('@/components/vuetifyComponents/lists/ListsImagewithToolbar'),
      ListsTitlewithSubtitleActiontext: () => import('@/components/vuetifyComponents/lists/ListsTitlewithSubtitleActiontext'),
      ListsActionwithTitleSubtitle: () => import('@/components/vuetifyComponents/lists/ListsActionwithTitleSubtitle'),
      ListsExpansion: () => import('@/components/vuetifyComponents/lists/ListsExpansion'),
      ListsNavigation: () => import('@/components/vuetifyComponents/lists/ListsNavigation')
  }
};
</script>
