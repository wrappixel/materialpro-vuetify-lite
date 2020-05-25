<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- Autocompletes State Selector -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <v-list-item-subtitle class="text-wrap">
            Using a combination of <code>v-autocomplete</code> slots and transitions, you can create a stylish toggleable autocomplete field such as this state selector.
        </v-list-item-subtitle>
        <div class="mt-4">
            <v-card>
                <v-card-title class="headline font-weight-regular info white--text">Profile</v-card-title>
                <v-card-text>
                <v-subheader class="pa-0">Where do you live?</v-subheader>
                <v-autocomplete
                    v-model="model"
                    :hint="!isEditing ? 'Click the icon to edit' : 'Click the icon to save'"
                    :items="states"
                    :readonly="!isEditing"
                    :label="`State — ${isEditing ? 'Editable' : 'Readonly'}`"
                    persistent-hint
                    prepend-icon="mdi-city"
                >
                    <template v-slot:append-outer>
                    <v-slide-x-reverse-transition
                        mode="out-in"
                    >
                        <v-icon
                        :key="`icon-${isEditing}`"
                        :color="isEditing ? 'success' : 'info'"
                        @click="isEditing = !isEditing"
                        v-text="isEditing ? 'mdi-check-outline' : 'mdi-circle-edit-outline'"
                        ></v-icon>
                    </v-slide-x-reverse-transition>
                    </template>
                </v-autocomplete>
                </v-card-text>
            </v-card>
        </div>
    </div>
</template>

<script>
export default {
  name: "AutocompletesStateSelector",

  data: () => ({
        isEditing: false,
        model: null,
        states: [
          'Alabama', 'Alaska', 'American Samoa', 'Arizona',
          'Arkansas', 'California', 'Colorado', 'Connecticut',
          'Delaware', 'District of Columbia', 'Federated States of Micronesia',
          'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
          'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
          'Louisiana', 'Maine', 'Marshall Islands', 'Maryland',
          'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
          'Missouri', 'Montana', 'Nebraska', 'Nevada',
          'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
          'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio',
          'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
          'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
          'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia',
          'Washington', 'West Virginia', 'Wisconsin', 'Wyoming',
        ],
  })
};
</script>