<template>
  <div class="container">
    <h1>POSTS</h1>
    <div class="posts" v-for="post in postDetails" :key="post.title">
      <span>
        <h3>
          {{ post.title }}
        </h3>
        <p>{{ post.body.substring(0, 150) }}...</p>
        <router-link :to="'/posts/' + post.id">
          <button class="">Read More</button></router-link
        >
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      postDetails: [],
    };
  },

  mounted() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => (this.postDetails = data))
      .catch((err) => console.log(err));
  },
};
</script>

<style>
.posts {
  padding-bottom: 50px;
  padding-left: 15%;
  padding-right: 15%;
  text-align: justify;
}

.container,
h1 {
  padding-bottom: 10px;
}
</style>
