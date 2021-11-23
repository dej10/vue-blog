<template>
  <div class="container">
    <h1>Post Details</h1>
    <div class="post">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
    <button @click="showComments">Show Comments</button> |
    <div
      class="comments"
      :v-if="isActive"
      v-for="comment in comments"
      :key="comment.body"
    >
      <span>{{ comment.email }} says...</span>
      <ul>
        <li>{{ comment.body }}</li>
      </ul>
    </div>
    <button @click="hideComments">Hide Comments</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {},
      comments: {},
      isActive: false,
    };
  },

  created() {
    fetch("http://jsonplaceholder.typicode.com/posts/" + this.$route.params.id)
      .then((response) => response.json())
      .then((data) => (this.post = data));
  },
  methods: {
    showComments() {
      this.isActive = true;
      fetch(
        "http://jsonplaceholder.typicode.com/posts/" +
          this.$route.params.id +
          "/comments"
      )
        .then((response) => response.json())
        .then((data) => (this.comments = data));
    },
    hideComments() {
      this.isActive = false;
      this.comments = {};
    },
  },
};
</script>

<style>
.comments {
  text-align: left;
  padding-top: 20px;
  padding-left: 10%;
  padding-right: 10%;
}
button {
  text-align: justify;
  margin-bottom: 5px;
}
</style>
