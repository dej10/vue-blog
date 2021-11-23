import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/compose",
    name: "Compose",

    component: () => import("../views/Compose.vue"),
  },
  {
    path: "/posts/:id",
    name: "Post",
    component: () => import("../views/Post.vue"),
  },
  {
    path: "/posts/:id/comments",
    name: "Comments",
    component: () => import("../views/Comments.vue"),
  },
  {
    path: "/posts/delete/:id",
    name: "DeletePost",
    component: () => import("../views/DeletePost.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
