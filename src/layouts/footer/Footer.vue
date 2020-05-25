<template>
    <v-footer app  color="white" class="footerpart" inset>
      <v-col cols="12">
        <span>© {{ new Date().getFullYear() }} — Material Pro Admin by wrappixel.com</span>
      </v-col>
    </v-footer>
</template>
<script>
export default {
    name: "Footer",
}
</script>
<style lang="scss">
  .v-application .footerpart{
    border-top:1px solid rgba(0,0,0,0.1)!important;
  }
</style>