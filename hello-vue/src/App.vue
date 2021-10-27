<template>
  <div id="app">
    <panel-section :things="things"></panel-section>
  </div>
</template>

<script>
import PanelSection from "./components/PanelSection.vue";
export default {
  name: "app",
  components: { PanelSection },
  data() {
    return {
      things: [
        {
          name: "hello",
          type: "world",
        },
        {
          name: "thing1",
          type: "thing2",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.item-thing {
  background-color: #444;
  padding: 20px;
}

.item-thing-name {
  font-weight: bold;
  color: white;
}

.item-thing-type {
  color: cyan;
}
</style>
