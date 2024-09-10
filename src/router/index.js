import { createRouter, createWebHistory } from "vue-router";
import HomeViews from "@/views/HomeViews.vue";
import JobsViews from "@/views/JobsViews.vue";
import JobView from "@/views/JobView.vue";
import AddJobViews from "@/views/AddJobViews.vue";
import NotFoundViews from "@/views/NotFoundViews.vue";
import FormEdit from "@/components/molecules/FormEdit.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeViews,
    },
    {
      path: "/jobs",
      name: "jobs",
      component: JobsViews,
    },
    {
      path: "/jobs/:id",
      name: "job",
      component: JobView,
    },
    {
      path: "/jobs/add",
      name: "add-job",
      component: AddJobViews,
    },
    {
      path: "/jobs/edit/:id",
      name: "edit-job",
      component: FormEdit,
    },
    {
      path: "/:catchAll(.*)",
      name: "not-found",
      component: NotFoundViews,
    },
  ],
});

export default router;
