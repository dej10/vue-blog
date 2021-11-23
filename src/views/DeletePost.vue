<template>
  <div>
    <p>Post: {{ this.$route.params.id }} has been deleted</p>
  </div>
</template>

<script>
export default {
  mounted() {
    fetch(
      "https://jsonplaceholder.typicode.com/posts/" + this.$route.params.id,
      {
        method: "DELETE",
      }
    );
  },
};
</script>
