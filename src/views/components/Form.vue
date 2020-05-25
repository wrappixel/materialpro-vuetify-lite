<template>
  <v-container fluid class="down-top-padding">
    <v-row>
        <v-col cols="12" sm="12">
            <BaseCard heading="Form - Creating rules">
                <FormCreateRules></FormCreateRules>
            </BaseCard>

            <BaseCard heading="Form - Validation with submit & clear">
                <FormSubmitValidation></FormSubmitValidation>
            </BaseCard>

            <BaseCard heading="Form - Vuelidate">
                <FormVuelidate></FormVuelidate>
            </BaseCard>

            <BaseCard heading="Form - Vee-validate">
                <FormVeevalidate></FormVeevalidate>
            </BaseCard>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "Form",

  data: () => ({
  }),
  components: {
      FormCreateRules: () => import('@/components/vuetifyComponents/form/FormCreateRules'),
      FormSubmitValidation: () => import('@/components/vuetifyComponents/form/FormSubmitValidation'),
      FormVuelidate: () => import('@/components/vuetifyComponents/form/FormVuelidate'),
      FormVeevalidate: () => import('@/components/vuetifyComponents/form/FormVeevalidate'),
  }
};
</script>
