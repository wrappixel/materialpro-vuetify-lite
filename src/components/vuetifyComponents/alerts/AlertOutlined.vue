<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- Outlined -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <v-list-item-subtitle class="text-wrap">The <span class="grey--text text--darken-4 font-weight-bold">outlined</span> prop inverts the style of an alert, inheriting the currently applied <span class="grey--text text--darken-4 font-weight-bold">color</span>, applying it to the text and border, and making its background transparent.</v-list-item-subtitle>
        <div class="mt-4">
        <v-alert outlined color="info">
            <div class="title">Lorem Ipsum</div>
            <div>Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. </div>
        </v-alert>
        <v-alert
            outlined
            type="success"
            text
        >Praesent venenatis metus at tortor pulvinar varius. Aenean commodo ligula eget dolor. Praesent ac massa at ligula laoreet iaculis.</v-alert>
        <v-alert
            outlined
            type="warning"
            prominent
            border="left"
        >Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Suspendisse non nisl sit amet velit hendrerit rutrum. Nullam vel sem.</v-alert>
        </div>
    </div>
</template>

<script>
export default {
  name: "AlertOutlined",

  data: () => ({
  })
};
</script>