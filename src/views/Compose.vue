<template>
  <div id="postForm">
    <h1>Compose</h1>
    <form @submit.prevent="submitPost" method="post" autocomplete="off">
      <div class="title-input">
        <label for="title">Title</label>
        <input
          id="title"
          class="title-input"
          cols="150"
          type="text"
          name="blogTitle"
          placeholder=""
          v-model="blogTitle"
          required
        />
      </div>
      <div class="">
        <label for="posts">Post</label>
        <textarea
          id="posts"
          v-model="blogBody"
          class="title-input"
          name="blogPost"
          rows="5"
          cols="30"
          required
        >
        </textarea>
      </div>
      <button class="btn" type="submit">Publish</button>
    </form>
    <h2 v-show="IsActive">User Posts</h2>
    <div>
      <h5>{{ blogs.title }}</h5>
      <p>
        <em>{{ blogs.body }}</em>
        <button @click="onUpdate" v-show="isActive">edit</button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogs: {},
      blogTitle: "",
      blogBody: "",
      isActive: false,
    };
  },

  methods: {
    submitPost() {
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
          title: this.blogTitle,
          body: this.blogBody,
          userId: 1,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          this.blogs = data;
          console.log(this.blogs.title, this.blog.body);
        });

      alert("submitted");
      this.blogBody = "";
      this.blogTitle = "";
      this.isActive = true;
    },

    onUpdate() {
      fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "PUT",
        body: JSON.stringify({
          id: 1,
          title: "foo",
          body: "bar",
          userId: 1,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
    },
  },
};
</script>

<style>
name-input {
  align-content: left;
  padding-bottom: 10px;
}

btn {
  padding-top: 10%;
}
</style>
