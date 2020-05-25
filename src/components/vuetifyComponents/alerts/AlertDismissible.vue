<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- Dismissible -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <v-list-item-subtitle class="text-wrap line-h20">The <span class="grey--text text--darken-4 font-weight-bold">dismissible</span> prop adds a close button to the end of the alert component. Clicking this button will set its value to false and effectively hide the alert. You can restore the alert by binding <span class="grey--text text--darken-4 font-weight-bold">v-model</span> and setting it to true. The close icon automatically has an <code>aria-label</code> applied that can be changed by modifying the <span class="grey--text text--darken-4 font-weight-bold">close-label</span> prop or changing <span class="grey--text text--darken-4 font-weight-bold">close</span> value in your locale. For more information on how to global modify your locale settings, navigate to the Internationalization page.</v-list-item-subtitle>
        <div class="mt-4">
        <v-alert
            v-model="alert"
            border="left"
            close-text="Close Alert"
            dark
            type="error"
            dismissible
            class="font-weight-light"
        >
            Aenean imperdiet. Quisque id odio. Cras dapibus. Pellentesque ut neque. Cras dapibus.
            Vivamus consectetuer hendrerit lacus. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur blandit mollis lacus. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo.
        </v-alert>

            <div class="text-center">
                <v-btn v-if="!alert" color="info" @click="alert = true">Reset</v-btn>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "AlertDismissible",

  data: () => ({
      alert: true
  })
};
</script>