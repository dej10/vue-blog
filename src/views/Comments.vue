<template>
  <div class="container">
    <h1>comments</h1>
    <h2>comments for post {{ this.$route.params.id }}</h2>
    <div class="comments" v-for="comment in comments" :key="comment.body">
      <span>{{ comment.email }} says...</span>
      <ul>
        <li>{{ comment.body }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comments: {},
    };
  },

  mounted() {
    fetch(
      "https://jsonplaceholder.typicode.com/posts/" +
        this.$route.params.id +
        "/comments"
    )
      .then((response) => response.json())
      .then((data) => (this.comments = data));
  },
};
</script>

<style>
.comments {
  text-align: justify;
  padding-bottom: 30px;
}
</style>
