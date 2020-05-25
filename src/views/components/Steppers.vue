<template>
  <v-container fluid class="down-top-padding">
    <v-row>
        <v-col cols="12" sm="12">
            <BaseCard heading="Steppers - Editable steps">
                <SteppersEditable></SteppersEditable>
            </BaseCard>

            <BaseCard heading="Steppers - Non-editable steps">
                <SteppersNonEditable></SteppersNonEditable>
            </BaseCard>

            <BaseCard heading="Steppers - Optional steps">
                <SteppersOptional></SteppersOptional>
            </BaseCard>

            <BaseCard heading="Steppers - Horizontal steps">
                <SteppersHorizontal></SteppersHorizontal>
            </BaseCard>

            <BaseCard heading="Steppers - Vertical steppers">
                <SteppersVertical></SteppersVertical>
            </BaseCard>

            <BaseCard heading="Steppers - Linear steppers">
                <SteppersLinear></SteppersLinear>
            </BaseCard>

            <BaseCard heading="Steppers - Non-linear steppers">
                <SteppersNonLinear></SteppersNonLinear>
            </BaseCard>

            <BaseCard heading="Steppers - Alternate labels">
                <SteppersAlternateLabels></SteppersAlternateLabels>
            </BaseCard>

            <BaseCard heading="Steppers - Multi-line error state">
                <SteppersMultilineErrorState></SteppersMultilineErrorState>
            </BaseCard>

            <BaseCard heading="Steppers - Alternative label multi-line error state">
                <SteppersAlternateLabelsMultilineErrorState></SteppersAlternateLabelsMultilineErrorState>
            </BaseCard>

            <BaseCard heading="Steppers - Vertical multi-line error state">
                <SteppersVerticalMultilineErrorState></SteppersVerticalMultilineErrorState>
            </BaseCard>

            <BaseCard heading="Steppers - Dynamic steps">
                <SteppersDynamic></SteppersDynamic>
            </BaseCard>

        </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "Steppers",

  data: () => ({
  }),
  components: {
      SteppersEditable: () => import('@/components/vuetifyComponents/steppers/SteppersEditable'),
      SteppersNonEditable: () => import('@/components/vuetifyComponents/steppers/SteppersNonEditable'),
      SteppersOptional: () => import('@/components/vuetifyComponents/steppers/SteppersOptional'),
      SteppersHorizontal: () => import('@/components/vuetifyComponents/steppers/SteppersHorizontal'),
      SteppersVertical: () => import('@/components/vuetifyComponents/steppers/SteppersVertical'),
      SteppersLinear: () => import('@/components/vuetifyComponents/steppers/SteppersLinear'),
      SteppersNonLinear: () => import('@/components/vuetifyComponents/steppers/SteppersNonLinear'),
      SteppersAlternateLabels: () => import('@/components/vuetifyComponents/steppers/SteppersAlternateLabels'),
      SteppersMultilineErrorState: () => import('@/components/vuetifyComponents/steppers/SteppersMultilineErrorState'),
      SteppersAlternateLabelsMultilineErrorState: () => import('@/components/vuetifyComponents/steppers/SteppersAlternateLabelsMultilineErrorState'),
      SteppersVerticalMultilineErrorState: () => import('@/components/vuetifyComponents/steppers/SteppersVerticalMultilineErrorState'),
      SteppersDynamic: () => import('@/components/vuetifyComponents/steppers/SteppersDynamic'),
  }
};
</script>
