<script setup>
import { RouterLink } from "vue-router";
import { defineProps } from "vue";

defineProps({
  showButton: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
    <RouterLink
      to="/jobs"
      class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
      >View All Jobs
    </RouterLink>
  </section>
</template>
