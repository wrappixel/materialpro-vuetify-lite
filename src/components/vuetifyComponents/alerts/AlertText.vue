<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- Text -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <v-list-item-subtitle class="text-wrap">The <span class="grey--text text--darken-4 font-weight-bold">text</span> prop is a simple alert variant that applies a reduced opacity background of the provided <span class="grey--text text--darken-4 font-weight-bold">color</span>. Similar to other styled props, <span class="grey--text text--darken-4 font-weight-bold">text</span> can be combined with other props like <span class="grey--text text--darken-4 font-weight-bold">dense</span>, <span class="grey--text text--darken-4 font-weight-bold">prominent</span>, and <span class="grey--text text--darken-4 font-weight-bold">outlined</span> to create a unique and customized component.</v-list-item-subtitle>
        <div class="mt-4">
            <v-alert text color="info">
            <h3 class="headline">Lorem Ipsum</h3>
            <div>Maecenas nec odio et ante tincidunt tempus. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci.</div>

            <v-divider class="my-4 info" style="opacity: 0.22"></v-divider>

            <v-row align="center" no-gutters>
                <v-col
                class="grow"
                >Proin magna. Vivamus in erat ut urna cursus vestibulum. Etiam imperdiet imperdiet orci.</v-col>
                <v-spacer></v-spacer>
                <v-col class="shrink">
                <v-btn color="info" outlined>Okay</v-btn>
                </v-col>
            </v-row>
            </v-alert>
            <v-alert
            text
            outlined
            color="info"
            icon="mdi-fire"
            >Nullam tincidunt adipiscing enim. In consectetuer turpis ut velit. Maecenas egestas arcu quis ligula mattis placerat.</v-alert>
            <v-alert
            text
            dense
            color="warning"
            icon="mdi-clock-fast"
            border="left"
            >Vestibulum ullamcorper mauris at ligula. Nulla porta dolor. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor.</v-alert>
            <v-alert
            text
            prominent
            type="error"
            icon="mdi-cloud-alert"
            >Praesent blandit laoreet nibh. Praesent nonummy mi in odio. Phasellus tempus.</v-alert>
        </div>
    </div>
</template>

<script>
export default {
  name: "AlertText",

  data: () => ({
  })
};
</script>