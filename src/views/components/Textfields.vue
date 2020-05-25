<template>
  <v-container fluid class="down-top-padding">
    <v-row>
        <v-col cols="12" sm="12">
            <BaseCard heading="Textfields - Single line">
                <TextfieldSingleline></TextfieldSingleline>
            </BaseCard>

            <BaseCard heading="Textfields - Shaped">
                <TextfieldShaped></TextfieldShaped>
            </BaseCard>

            <BaseCard heading="Textfields - Disabled and readonly">
                <TextfieldDisabledReadonly></TextfieldDisabledReadonly>
            </BaseCard>

            <BaseCard heading="Textfields - Dense">
                <TextfieldDense></TextfieldDense>
            </BaseCard>

            <BaseCard heading="Textfields - Icons">
                <TextfieldIcons></TextfieldIcons>
            </BaseCard>

            <BaseCard heading="Textfields - Clearable">
                <TextfieldClearable></TextfieldClearable>
            </BaseCard>

            <BaseCard heading="Textfields - Character counter">
                <TextfieldCharacterCounter></TextfieldCharacterCounter>
            </BaseCard>

            <BaseCard heading="Textfields - Auto hiding details">
                <TextfieldAutohideDetails></TextfieldAutohideDetails>
            </BaseCard>

            <BaseCard heading="Textfields - Password input">
                <TextfieldPasswordInput></TextfieldPasswordInput>
            </BaseCard>

            <BaseCard heading="Textfields - Box style">
                <TextfieldBoxStyle></TextfieldBoxStyle>
            </BaseCard>

            <BaseCard heading="Textfields - Solo style">
                <TextfieldSoloStyle></TextfieldSoloStyle>
            </BaseCard>

            <BaseCard heading="Textfields - Outlined style">
                <TextfieldOutlineStyle></TextfieldOutlineStyle>
            </BaseCard>

            <BaseCard heading="Textfields - Custom colors">
                <TextfieldCustomColors></TextfieldCustomColors>
            </BaseCard>

            <BaseCard heading="Textfields - Masks (using vue-the-mask)">
                <TextfieldMask></TextfieldMask>
            </BaseCard>

            <BaseCard heading="Textfields - Hint text">
                <TextfieldHintText></TextfieldHintText>
            </BaseCard>

            <BaseCard heading="Textfields - Prefixes & suffixes">
                <TextfieldPrefixesSuffixes></TextfieldPrefixesSuffixes>
            </BaseCard>

            <BaseCard heading="Textfields - Icon events">
                <TextfieldIconEvents></TextfieldIconEvents>
            </BaseCard>

            <BaseCard heading="Textfields - Icon slots">
                <TextfieldIconSlots></TextfieldIconSlots>
            </BaseCard>

            <BaseCard heading="Textfields - Label slot">
                <TextfieldLabelSlots></TextfieldLabelSlots>
            </BaseCard>

            <BaseCard heading="Textfields - Validation">
                <TextfieldValidation></TextfieldValidation>
            </BaseCard>

            <BaseCard heading="Textfields - Full-width text field with character counter">
                <TextfieldFullwidthCharahterCounter></TextfieldFullwidthCharahterCounter>
            </BaseCard>

            <BaseCard heading="Textfields - Progress bar">
                <TextfieldProgressbar></TextfieldProgressbar>
            </BaseCard>

            <BaseCard heading="Textfields - Custom validation">
                <TextfieldCustomValidation></TextfieldCustomValidation>
            </BaseCard>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "Textfields",

  data: () => ({
  }),
  components: {
      TextfieldSingleline: () => import('@/components/vuetifyComponents/textfields/TextfieldSingleline'),
      TextfieldShaped: () => import('@/components/vuetifyComponents/textfields/TextfieldShaped'),
      TextfieldDisabledReadonly: () => import('@/components/vuetifyComponents/textfields/TextfieldDisabledReadonly'),
      TextfieldDense: () => import('@/components/vuetifyComponents/textfields/TextfieldDense'),
      TextfieldIcons: () => import('@/components/vuetifyComponents/textfields/TextfieldIcons'),
      TextfieldPasswordInput: () => import('@/components/vuetifyComponents/textfields/TextfieldPasswordInput'),
      TextfieldClearable: () => import('@/components/vuetifyComponents/textfields/TextfieldClearable'),
      TextfieldCharacterCounter: () => import('@/components/vuetifyComponents/textfields/TextfieldCharacterCounter'),
      TextfieldAutohideDetails: () => import('@/components/vuetifyComponents/textfields/TextfieldAutohideDetails'),
      TextfieldBoxStyle: () => import('@/components/vuetifyComponents/textfields/TextfieldBoxStyle'),
      TextfieldSoloStyle: () => import('@/components/vuetifyComponents/textfields/TextfieldSoloStyle'),
      TextfieldOutlineStyle: () => import('@/components/vuetifyComponents/textfields/TextfieldOutlineStyle'),
      TextfieldCustomColors: () => import('@/components/vuetifyComponents/textfields/TextfieldCustomColors'),
      TextfieldMask: () => import('@/components/vuetifyComponents/textfields/TextfieldMask'),
      TextfieldHintText: () => import('@/components/vuetifyComponents/textfields/TextfieldHintText'),
      TextfieldPrefixesSuffixes: () => import('@/components/vuetifyComponents/textfields/TextfieldPrefixesSuffixes'),
      TextfieldIconEvents: () => import('@/components/vuetifyComponents/textfields/TextfieldIconEvents'),
      TextfieldIconSlots: () => import('@/components/vuetifyComponents/textfields/TextfieldIconSlots'),
      TextfieldLabelSlots: () => import('@/components/vuetifyComponents/textfields/TextfieldLabelSlots'),
      TextfieldValidation: () => import('@/components/vuetifyComponents/textfields/TextfieldValidation'),
      TextfieldFullwidthCharahterCounter: () => import('@/components/vuetifyComponents/textfields/TextfieldFullwidthCharahterCounter'),
      TextfieldProgressbar: () => import('@/components/vuetifyComponents/textfields/TextfieldProgressbar'),
      TextfieldCustomValidation: () => import('@/components/vuetifyComponents/textfields/TextfieldCustomValidation')
  }
};
</script>
