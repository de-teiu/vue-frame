<template>
  <div class="frame">
    <left-frame v-bind:width="200"></left-frame>
    <right-frame></right-frame>
  </div>
</template>

<script>
import LeftFrame from "./LeftFrame.vue";
import RightFrame from "./RightFrame.vue";

export default {
  components: {
    LeftFrame,
    RightFrame
  }
};
</script>

<style scoped>
.frame {
  display: flex;
  flex-direction: row;
  height: 100vh;
}
</style>
