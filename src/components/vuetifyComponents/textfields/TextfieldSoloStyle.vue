<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- TextfieldSoloStyle -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <v-list-item-subtitle class="text-wrap">
           Text fields can be used with an alternative solo design.
        </v-list-item-subtitle>
        <div class="mt-4">
            <v-form>
                <v-container>
                <v-row>

                    <v-col cols="12" sm="6">
                    <v-text-field
                        v-model="first"
                        label="First Name"
                        solo
                    ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6">
                    <v-text-field
                        v-model="last"
                        label="Last Name"
                        solo-inverted
                    ></v-text-field>
                    </v-col>

                </v-row>
                </v-container>
            </v-form>
        </div>
    </div>
</template>

<script>
export default {
  name: "TextfieldSoloStyle",

  data: () => ({
      first: 'John',
      last: 'Doe',
  })
};
</script>