<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- Prominent -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <v-list-item-subtitle class="text-wrap">The <span class="grey--text text--darken-4 font-weight-bold">prominent</span> prop provides a more pronounced alert by increasing the height and applying a halo to the icon. When applying both <span class="grey--text text--darken-4 font-weight-bold">prominent</span> and <span class="grey--text text--darken-4 font-weight-bold">dense</span> together, the alert will take on the appearance of a normal alert but with the <span class="grey--text text--darken-4 font-weight-bold">prominent</span> icon effects.</v-list-item-subtitle>
        <div class="mt-4">
            <v-alert prominent type="error">
                <v-row align="center">
                <v-col
                    class="grow"
                >Nunc nonummy metus. Nunc interdum lacus sit amet orci.</v-col>
                <v-col class="shrink">
                    <v-btn>Take action</v-btn>
                </v-col>
                </v-row>
            </v-alert>
            <v-alert
                color="warning"
                dark
                dense
                icon="mdi-school"
                prominent
                class="pa-3"
            >Sed augue ipsum, egestas nec, vestibulum et, malesuada adipiscing, dui. Aenean ut eros.</v-alert>
            <v-alert
                icon="mdi-shield-lock-outline"
                prominent
                text
                type="info"
            >Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Sed in libero ut nibh placerat accumsan.</v-alert>
        </div>
    </div>
</template>

<script>
export default {
  name: "AlertProminent",

  data: () => ({
  })
};
</script>