<script setup lang="ts">
import MainView from './Main.vue';
</script>
<template>
    <v-locale-provider >
        <v-app>
            <MainView />
        </v-app>
    </v-locale-provider>
</template>
