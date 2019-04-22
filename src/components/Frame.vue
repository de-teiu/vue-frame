<template>
  <div
    class="frame"
    v-bind:class="{dragged: isDragged}"
    @mousemove="resizeFrame"
    @mouseup="endResizeFrame"
  >
    <left-frame v-bind:width="leftWidth" @startResize="startResize"></left-frame>
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
  },
  data() {
    return {
      isDragged: false,
      leftWidth: 200
    };
  },
  methods: {
    startResize() {
      this.isDragged = true;
    },
    resizeFrame(event) {
      if (this.isDragged) {
        this.leftWidth = event.clientX + 2;
      }
    },
    endResizeFrame() {
      this.isDragged = false;
    }
  }
};
</script>

<style scoped>
.frame {
  display: flex;
  flex-direction: row;
  height: 100vh;
}

.dragged * {
  cursor: col-resize;
}
</style>
