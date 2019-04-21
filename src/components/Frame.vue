<template>
  <div class="frame">
    <left-frame :style="{'width':'200px'}"></left-frame>
    <right-frame :style="{'flex-grow':'1'}"></right-frame>
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
