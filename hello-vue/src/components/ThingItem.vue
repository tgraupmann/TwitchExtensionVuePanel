<template>
  <div class="item-thing">
    <span class="item-thing-name">Name: {{ name }}</span>
    <span class="item-thing-type">Type: {{ type }}</span>
  </div>
</template>

<script>
export default {
  name: "thing-item",
  props: ["name", "type"],
  data() {
    return {};
  },
};
</script>
