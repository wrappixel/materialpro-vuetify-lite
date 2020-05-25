<template>
  <v-container fluid class="down-top-padding">
    <v-row>
        <v-col cols="12" sm="12">
            <BaseCard heading="Textareas - Icons">
                <TextareasIcon></TextareasIcon>
            </BaseCard>

            <BaseCard heading="Textareas - Auto grow">
                <TextareasAutoGrow></TextareasAutoGrow>
            </BaseCard>

            <BaseCard heading="Textareas - Background color">
                <TextareasBackgroundColor></TextareasBackgroundColor>
            </BaseCard>

            <BaseCard heading="Textareas - Browser autocomplete">
                <TextareasBrowserAutocomplete></TextareasBrowserAutocomplete>
            </BaseCard>

            <BaseCard heading="Textareas - Clearable">
                <TextareasClearable></TextareasClearable>
            </BaseCard>

            <BaseCard heading="Textareas - Counter">
                <TextareasCounter></TextareasCounter>
            </BaseCard>

            <BaseCard heading="Textareas - No resize">
                <TextareasNoresize></TextareasNoresize>
            </BaseCard>

            <BaseCard heading="Textareas - Rows">
                <TextareasRows></TextareasRows>
            </BaseCard>

            <BaseCard heading="Textareas - Beautiful Forms">
                <TextareasBeautifulForms></TextareasBeautifulForms>
            </BaseCard>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "Textareas",

  data: () => ({
  }),
  components: {
      TextareasIcon: () => import('@/components/vuetifyComponents/textareas/TextareasIcon'),
      TextareasAutoGrow: () => import('@/components/vuetifyComponents/textareas/TextareasAutoGrow'),
      TextareasBackgroundColor: () => import('@/components/vuetifyComponents/textareas/TextareasBackgroundColor'),
      TextareasBrowserAutocomplete: () => import('@/components/vuetifyComponents/textareas/TextareasBrowserAutocomplete'),
      TextareasClearable: () => import('@/components/vuetifyComponents/textareas/TextareasClearable'),
      TextareasCounter: () => import('@/components/vuetifyComponents/textareas/TextareasCounter'),
      TextareasNoresize: () => import('@/components/vuetifyComponents/textareas/TextareasNoresize'),
      TextareasRows: () => import('@/components/vuetifyComponents/textareas/TextareasRows'),
      TextareasBeautifulForms: () => import('@/components/vuetifyComponents/textareas/TextareasBeautifulForms')
  }
};
</script>
