<template>
  <div>
    <thing-item
      v-for="(item, index) in things"
      :key="index"
      :name="item.name"
      :type="item.type"
    >
    </thing-item>
  </div>
</template>

<script>
import ThingItem from "./ThingItem.vue";
export default {
  name: "thing-list",
  components: { ThingItem },
  props: ["things"],
  data() {
    return {};
  },
};
</script>

<style>
</style>
