<script setup>
import Hero from "@/components/molecules/Hero.vue";
import HomeCard from "@/components/molecules/HomeCard.vue";
import ListingJobs from "@/components/molecules/ListingJobs.vue";
import ViewAllJobs from "../components/atoms/ViewAllJobs.vue";
</script>

<template>
  <Hero />
  <HomeCard />
  <ListingJobs :limit="3" />
  <ViewAllJobs :showButton="true" />
</template>
