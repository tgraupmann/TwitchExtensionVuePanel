<props></props>

<template>
  <div>
    <thing-list :things="things"></thing-list>
  </div>
</template>

<script>
import ThingList from "./ThingList.vue";
export default {
  name: "panel-section",
  components: { ThingList },
  props: ["things"],
  data() {
    return {};
  },
};
</script>

<style>
</style>
