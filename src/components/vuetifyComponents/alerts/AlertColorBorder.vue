<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- Coloured Border -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <v-list-item-subtitle  class="text-wrap line-h20" >The <span class="grey--text text--darken-4 font-weight-bold">colored-border</span> prop removes the alert background in order to accent the <span class="grey--text text--darken-4 font-weight-bold">border</span> prop. If a <span class="grey--text text--darken-4 font-weight-bold">type</span> is set, it will use the types default color. If no <span class="grey--text text--darken-4 font-weight-bold">color</span> or <span class="grey--text text--darken-4 font-weight-bold">type</span> is set, the color will default to the inverted color of the applied theme (black for light and white/gray for dark).</v-list-item-subtitle>
        <div class="mt-4">
            <v-alert border="left" colored-border color="success" elevation="2">
            Aliquam eu nunc. Fusce commodo aliquam arcu. In consectetuer turpis ut velit. Nulla facilisi..
            Morbi mollis tellus ac sapien. Fusce vel dui. Praesent ut ligula non mi varius sagittis. Vivamus consectetuer hendrerit lacus. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
            </v-alert>
            <v-alert
            border="top"
            colored-border
            type="info"
            elevation="2"
            >Vestibulum ullamcorper mauris at ligula. Nam pretium turpis et arcu. Ut varius tincidunt libero. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Morbi nec metus.</v-alert>
            <v-alert
            border="bottom"
            colored-border
            type="warning"
            elevation="2"
            >Sed in libero ut nibh placerat accumsan. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.</v-alert>
            <v-alert
            border="right"
            colored-border
            type="error"
            elevation="2"
            >Fusce commodo aliquam arcu. Pellentesque posuere. Phasellus tempus</v-alert>
        </div>
    </div>
</template>

<script>
export default {
  name: "AlertColorBorder",

  data: () => ({
  })
};
</script>