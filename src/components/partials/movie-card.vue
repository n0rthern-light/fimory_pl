<template>
  <v-card :color="card_color" class="white--text">
    <v-layout row>
      <v-flex xs8>
        <v-card-title primary-title>
          <div>
            <h2>{{title}}</h2>
            <div>{{author}}</div>
            <div>({{date_produced}})</div>
            <div>{{duration}} min</div>
          </div>
        </v-card-title>
      </v-flex>
      <v-flex xs4>
        <v-img
          :src=image
          height="125px"
          contain
          class="mt-2"
        ></v-img>
      </v-flex>
    </v-layout>
    <v-divider light></v-divider>
    <v-card-actions class="pa-3">
      <v-btn class="light-green darken-4">Oglądaj</v-btn>
      <v-spacer></v-spacer>
      <span>Ocena: {{rating}} / 10</span>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    duration: {
      type: String,
      required: true
    },
    date_produced: {
      type: String,
      required: true
    },
    rating: {
      type: String,
      required: true,
      default: 'Brak oceny'
    },
    image: {
      type: String,
      required: true
    },
    card_color: {
      type: String,
      required: true,
      default: 'grey darken-4'
    }
  }
}
</script>

<style>

</style>
