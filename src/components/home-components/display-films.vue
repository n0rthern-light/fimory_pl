<template>
  <v-card xs12 :color="color" class="elevation-0">
   <v-card-title primary-title>
      <div>
        <div class="headline">{{title}}</div>
      </div>
   </v-card-title>
      <v-container
        fluid
        grid-list-lg
      >
      <v-layout row wrap>
        <v-flex xs12 md6 v-for="movie in items" :key="movie.title">
          <moviecard 
            :title="movie.title"
            :author="movie.author"
            :date_produced="movie.date_produced"
            :duration="movie.duration"
            :image="movie.image"
            :rating="movie.rating"
            :card_color="movie.color">
          </moviecard>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
import moviecard from '@/components/partials/movie-card'
export default {
  components: {
    moviecard
  },
  props: {
    title: {
      type: String,
      required: true
    },
    items: {
      type: Object,
      required: true
    },
    color: {
      type: String,
      required: true,
      default: 'transparent'
    }
  }
}
</script>

<style>

</style>