<template>
  <v-container fluid class="down-top-padding">
    <v-row>
        <v-col cols="12" sm="12">
            <BaseCard heading="Overflow buttons - Counter">
                <OverflowButtonsCounter></OverflowButtonsCounter>
            </BaseCard>

            <BaseCard heading="Overflow buttons - Disabled">
                <OverflowButtonsDisabled></OverflowButtonsDisabled>
            </BaseCard>

            <BaseCard heading="Overflow buttons - Dense">
                <OverflowButtonsDense></OverflowButtonsDense>
            </BaseCard>

            <BaseCard heading="Overflow buttons - Editable">
                <OverflowButtonsEditable></OverflowButtonsEditable>
            </BaseCard>

            <BaseCard heading="Overflow buttons - Filled">
                <OverflowButtonsFilled></OverflowButtonsFilled>
            </BaseCard>

            <BaseCard heading="Overflow buttons - Hint">
                <OverflowButtonsHint></OverflowButtonsHint>
            </BaseCard>

            <BaseCard heading="Overflow buttons - Loading">
                <OverflowButtonsLoading></OverflowButtonsLoading>
            </BaseCard>

            <BaseCard heading="Overflow buttons - Menu props">
                <OverflowButtonsMenuProps></OverflowButtonsMenuProps>
            </BaseCard>

            <BaseCard heading="Overflow buttons - Read-only">
                <OverflowButtonsReadonly></OverflowButtonsReadonly>
            </BaseCard>

            <BaseCard heading="Overflow buttons - Segmented">
                <OverflowButtonsSegmented></OverflowButtonsSegmented>
            </BaseCard>

        </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "OverflowButtons",

  data: () => ({
  }),
  components: {
      OverflowButtonsCounter: () => import('@/components/vuetifyComponents/overflow-buttons/OverflowButtonsCounter'),
      OverflowButtonsDisabled: () => import('@/components/vuetifyComponents/overflow-buttons/OverflowButtonsDisabled'),
      OverflowButtonsDense: () => import('@/components/vuetifyComponents/overflow-buttons/OverflowButtonsDense'),
      OverflowButtonsEditable: () => import('@/components/vuetifyComponents/overflow-buttons/OverflowButtonsEditable'),
      OverflowButtonsFilled: () => import('@/components/vuetifyComponents/overflow-buttons/OverflowButtonsFilled'),
      OverflowButtonsHint: () => import('@/components/vuetifyComponents/overflow-buttons/OverflowButtonsHint'),
      OverflowButtonsLoading: () => import('@/components/vuetifyComponents/overflow-buttons/OverflowButtonsLoading'),
      OverflowButtonsMenuProps: () => import('@/components/vuetifyComponents/overflow-buttons/OverflowButtonsMenuProps'),
      OverflowButtonsReadonly: () => import('@/components/vuetifyComponents/overflow-buttons/OverflowButtonsReadonly'),
      OverflowButtonsSegmented: () => import('@/components/vuetifyComponents/overflow-buttons/OverflowButtonsSegmented')
  }
};
</script>
