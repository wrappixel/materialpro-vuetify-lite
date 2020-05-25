<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- Border -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <v-list-item-subtitle class="text-wrap">The <span class="grey--text text--darken-4 font-weight-bold">border</span> prop adds a simple border to one of the 4 sides of the alert. This can be combined props like with <span class="grey--text text--darken-4 font-weight-bold">color, dark,</span> and <span class="grey--text text--darken-4 font-weight-bold">type</span> to provide unique accents to the alert.</v-list-item-subtitle>
        <div class="mt-4">
            <v-alert
            border="top"
            color="success"
            dark
            >I'm an alert with a top border and success color</v-alert>
            <v-alert
            border="right"
            color="info"
            dark
            >I'm an alert with a right border and info color</v-alert>
            <v-alert
            border="bottom"
            color="success"
            dark
            >I'm an alert with a bottom border and success color</v-alert>
            <v-alert border="left" color="info" dark>I'm an alert with a border left type info</v-alert>
        </div>
    </div>
</template>

<script>
export default {
  name: "AlertBorder",

  data: () => ({
  })
};
</script>