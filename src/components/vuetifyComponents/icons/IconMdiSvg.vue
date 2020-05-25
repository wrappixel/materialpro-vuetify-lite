<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- IconMdiSvg -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <v-list-item-subtitle class="text-wrap">
           You can manually import only the icons you use when using the @mdi/js package. If you want to use SVG icons with <code>VIcon</code> component, read about using them here.
        </v-list-item-subtitle>
        <div class="mt-4">
            <v-row
                align="center"
                justify="center"
            >
                <v-icon>{{ icons.mdiAccount }}</v-icon>
                <div class="mx-2"></div>
                <v-icon>{{ icons.mdiPencil }}</v-icon>
                <div class="mx-2"></div>
                <v-icon>{{ icons.mdiShareVariant }}</v-icon>
                <div class="mx-2"></div>
                <v-btn
                color="primary"
                depressed
                >
                <v-icon left>{{ icons.mdiDelete }}</v-icon>
                Delete
                </v-btn>
            </v-row>
        </div>
    </div>
</template>

<script>

import {
    mdiAccount,
    mdiPencil,
    mdiShareVariant,
    mdiDelete,
  } from '@mdi/js'

export default {
  name: "IconMdiSvg",

  data: () => ({
      icons: {
        mdiAccount,
        mdiPencil,
        mdiShareVariant,
        mdiDelete,
      },
  }),
};
</script>