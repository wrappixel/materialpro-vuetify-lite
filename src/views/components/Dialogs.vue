<template>
  <v-container fluid class="down-top-padding">
    <v-row>
        <v-col cols="12" sm="12" lg="6">
            <BaseCard heading="Dialogs - Without activator">
                <DialogsActivator></DialogsActivator>
            </BaseCard>
        </v-col>

        <v-col cols="12" sm="12" lg="6">
            <BaseCard heading="Dialogs - Modal">
                <DialogsModal></DialogsModal>
            </BaseCard>
        </v-col>
      
      <v-col cols="12" sm="12" lg="6">
        <BaseCard heading="Dialogs - Scrollable">
            <DialogsScrollable></DialogsScrollable>
        </BaseCard>
      </v-col>

      <v-col cols="12" sm="12" lg="6">
        <BaseCard heading="Dialogs - Form">
            <DialogsForm></DialogsForm>
        </BaseCard>
      </v-col>

      <v-col cols="12" sm="12" lg="6">
        <BaseCard heading="Dialogs - Overflowed">
            <DialogsOverflowed></DialogsOverflowed>
        </BaseCard>
      </v-col>

      <v-col cols="12" sm="12" lg="6">
        <BaseCard heading="Dialogs - Loader">
            <DialogsLoader></DialogsLoader>
        </BaseCard>
      </v-col>

      <v-col cols="12" sm="12">
        <BaseCard heading="Dialogs - Fullscreen">
            <DialogsFullscreen></DialogsFullscreen>
        </BaseCard>

        <BaseCard heading="Dialogs - Nested dialogs">
            <DialogsNested></DialogsNested>
        </BaseCard>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "Dialogs",

  data: () => ({
  }),
  components: {
      DialogsActivator: () => import('@/components/vuetifyComponents/dialogs/DialogsActivator'),
      DialogsModal: () => import('@/components/vuetifyComponents/dialogs/DialogsModal'),
      DialogsScrollable: () => import('@/components/vuetifyComponents/dialogs/DialogsScrollable'),
      DialogsOverflowed: () => import('@/components/vuetifyComponents/dialogs/DialogsOverflowed'),
      DialogsForm: () => import('@/components/vuetifyComponents/dialogs/DialogsForm'),
      DialogsLoader: () => import('@/components/vuetifyComponents/dialogs/DialogsLoader'),
      DialogsFullscreen: () => import('@/components/vuetifyComponents/dialogs/DialogsFullscreen'),
      DialogsNested: () => import('@/components/vuetifyComponents/dialogs/DialogsNested'),
  }
};
</script>
