<script setup>

import { Icon } from '@iconify/vue';
const props = defineProps({ item: Object, level: Number });
</script>

<template>
    <!---Single Item-->
    <v-list-item
        :href="item.external ? item.to : undefined"
        :to="!item.external ? item.to : undefined"

        class="mb-1"
        rounded="pill"
        :disabled="item.disabled"
        :target="item.external === true ? '_blank' : undefined"
    >
        <!---If icon-->
        <template v-slot:prepend>
            <Icon :icon="'solar:' + item.icon" height="19" width="19" :level="level"  :class="'position-relative z-index-2 '" />
        </template>
        <v-list-item-title
            >{{ item.title }}
            <span v-if="item.children">
                <span v-if="item.chip" class="ps-3">
                    <v-chip
                        color="secondary"
                        
                        :size="item.chipIcon ? 'x-small' : 'x-small'"
                        :variant="item.chipVariant"
                        :prepend-icon="item.chipIcon"
                    >
                        {{ item.chip }}
                    </v-chip>
                </span>
            </span>
        </v-list-item-title>

        <!---If Caption-->
        <v-list-item-subtitle v-if="item.subCaption" class="text-caption mt-n1 hide-menu">
            {{ item.subCaption }}
        </v-list-item-subtitle>
        <!---If any chip or label-->
        <template v-slot:append v-if="item.chip">
            <v-chip
                color="secondary"
                rounded="md"
                :size="item.chipIcon ? 'x-small' : 'x-small'"
                :variant="item.chipVariant"
                :prepend-icon="item.chipIcon"
            >
                {{ item.chip }}
            </v-chip>
        </template>
    </v-list-item>
</template>
