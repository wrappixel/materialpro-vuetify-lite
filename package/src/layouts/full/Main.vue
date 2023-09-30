<script setup lang="ts">
import { ref, shallowRef, onMounted } from 'vue';
import { RouterView } from 'vue-router';
import { useDisplay } from "vuetify";
import sidebarItems from './vertical-sidebar/sidebarItem';
import NavGroup from './vertical-sidebar/NavGroup/index.vue';
import NavItem from './vertical-sidebar/NavItem/index.vue';
import Logo from './logo/Logo.vue';
// Icon Imports
import ProfileDD from './vertical-header/ProfileDD.vue'
import BuyNow from './vertical-sidebar/Buynow/index.vue'
import { PowerIcon } from 'vue-tabler-icons';
const drawer = ref(undefined || true);
const innerW = window.innerWidth;
const { mdAndUp, mdAndDown } = useDisplay();
onMounted(() => {
    if (innerW < 950) {
        drawer.value = !drawer.value;
    }
});
const sidebarMenu = shallowRef(sidebarItems);
const sDrawer = ref(true);

</script>

<template>
    <v-app-bar elevation="10" color="primary">
        <div class="pe-5">
            <div class="">
                <Logo />
            </div>
        </div>
        <v-app-bar-nav-icon class="" @click="sDrawer = !sDrawer" />
        <v-spacer />
        <ProfileDD />
    </v-app-bar>
    <v-main>
        <!-- ---------------------------------------------- -->
        <!---Sidebar -->
        <!-- ---------------------------------------------- -->
        <v-navigation-drawer left :permanent="mdAndUp" class="leftSidebar bg-muted border-right-0" elevation="10" app
            :temporary="mdAndDown" v-model="sDrawer" expand-on-hover>
            <perfect-scrollbar class="scrollnavbar">
                <div class="profile">
                <div class="profile-pic profile-pic py-7 px-3">
                    <v-avatar size="45">
                        <img src="@/assets/images/profile/user2.jpg" width="50" alt="Julia" />
                    </v-avatar>
                </div>
                <div class="profile-name d-flex align-center px-3">
                    <h5 class="text-surface font-weight-medium">Julia Roberts</h5>
                    <div class="ml-auto profile-logout">
                        <v-btn variant="text" icon rounded="md" color="surface" >
                            <PowerIcon size="22"/>
                        </v-btn>
                    </div>
                </div>
            </div>
                <v-list class="py-5 px-4 bg-muted" density="compact">
                    <!---Menu Loop -->
                    <template v-for="(item, i) in sidebarMenu">
                        <!---Item Sub Header -->
                        <NavGroup :item="item" v-if="item.header" :key="item.title" />
                        <!---Single Item-->
                        <NavItem :item="item" v-else class="leftPadding" />
                        <!---End Single Item-->
                    </template>
                    <!-- <Moreoption/> -->
                </v-list>
                <div>
                    <BuyNow/>
                </div>
            </perfect-scrollbar>
        </v-navigation-drawer>
        <v-container fluid class="page-wrapper">
            <div class="maxWidth">
                <RouterView />
            </div>
        </v-container>
    </v-main>
</template>
