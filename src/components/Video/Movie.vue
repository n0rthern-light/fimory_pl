<template>
  <v-card xs12 :color="transparent" class="elevation-0">
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
        <v-flex xs12>
          <iframe width="1280" height="720" :src="url" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen align-center></iframe>
        </v-flex>
      </v-layout>
      </v-container>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      title: 'Pada Shrek',
      url: 'https://www.youtube.com/embed/AesqUS2udb4'
    }
  }
}
</script>

<style>

</style>