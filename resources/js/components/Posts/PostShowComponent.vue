<template>
  <div class="container">

    <span class="btn badge-info" @click="indexLink()"><i class="fas fa-arrow-left"></i> Back</span>
    <h1 class="text-center">{{ post.title }}</h1>
<p><i class="fas fa-eye"></i> {{ post.counter }} </p>
    <div class="row">
      <div class="col">
        <p v-html=post.text></p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import laravel_routers from "../../laravel_routers.js";

export default {
  props: ['id'],
  name: 'PostShowComponent',
  data: function () {
    return {
      //Variables
      post: [],
      slug: this.id
    };
  },
  mounted() {
    this.getPost()
  },

  methods: {
    //Post
    getPost() {
      axios.get(laravel_routers('v1.api.post.get.slug', this.slug))
          .then(response => {
            this.post = response.data.data[0];
            this.incrementView();
          });
    },
    //increment view
    incrementView() {
      axios.post(laravel_routers('v1.api.post.increment', this.post.id), {
        id: this.post.id
      })
    },

    //Redirect to index
    indexLink() {
      window.location.href = laravel_routers('post.index');
    },

  }
}
</script>
