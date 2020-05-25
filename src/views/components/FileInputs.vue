<template>
  <v-container fluid class="down-top-padding">
    <v-row>
        <v-col cols="12" sm="12">
            <BaseCard heading="File inputs - Multiple">
                <FileInputsMultiple></FileInputsMultiple>
            </BaseCard>

            <BaseCard heading="File inputs - Accept formats">
                <FileInputsAcceptFormats></FileInputsAcceptFormats>
            </BaseCard>

            <BaseCard heading="File inputs - With chips">
                <FileInputsChips></FileInputsChips>
            </BaseCard>

            <BaseCard heading="File inputs - Size displaying">
                <FileInputsSize></FileInputsSize>
            </BaseCard>

            <BaseCard heading="File inputs - Counter">
                <FileInputsCounter></FileInputsCounter>
            </BaseCard>

            <BaseCard heading="File inputs - Custom icons">
                <FileInputsCustomIcon></FileInputsCustomIcon>
            </BaseCard>

            <BaseCard heading="File inputs - Dense">
                <FileInputsDense></FileInputsDense>
            </BaseCard>

            <BaseCard heading="File inputs - Selection slot">
                <FileInputsSelectionSlot></FileInputsSelectionSlot>
            </BaseCard>

            <BaseCard heading="File inputs - Validation">
                <FileInputsValidation></FileInputsValidation>
            </BaseCard>

            <BaseCard heading="File inputs - Complex selection slots">
                <FileInputsComplexSlots></FileInputsComplexSlots>
            </BaseCard>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "FileInputs",

  data: () => ({
  }),
  components: {
      FileInputsMultiple: () => import('@/components/vuetifyComponents/file-inputs/FileInputsMultiple'),
      FileInputsAcceptFormats: () => import('@/components/vuetifyComponents/file-inputs/FileInputsAcceptFormats'),
      FileInputsChips: () => import('@/components/vuetifyComponents/file-inputs/FileInputsChips'),
      FileInputsSize: () => import('@/components/vuetifyComponents/file-inputs/FileInputsSize'),
      FileInputsCounter: () => import('@/components/vuetifyComponents/file-inputs/FileInputsCounter'),
      FileInputsCustomIcon: () => import('@/components/vuetifyComponents/file-inputs/FileInputsCustomIcon'),
      FileInputsDense: () => import('@/components/vuetifyComponents/file-inputs/FileInputsDense'),
      FileInputsSelectionSlot: () => import('@/components/vuetifyComponents/file-inputs/FileInputsSelectionSlot'),
      FileInputsValidation: () => import('@/components/vuetifyComponents/file-inputs/FileInputsValidation'),
      FileInputsComplexSlots: () => import('@/components/vuetifyComponents/file-inputs/FileInputsComplexSlots'),
  }
};
</script>
