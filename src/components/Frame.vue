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

const LEFT_FRAME_MIN_WIDTH = 45;
const FRAME_ADJUSTED_SETTING = 2;

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
      if (event.buttons === 0) {
        this.endResizeFrame();
        return;
      }
      if (this.isDragged) {
        if (event.clientX + FRAME_ADJUSTED_SETTING < LEFT_FRAME_MIN_WIDTH) {
          this.leftWidth = LEFT_FRAME_MIN_WIDTH;
          return;
        }
        this.leftWidth = event.clientX + FRAME_ADJUSTED_SETTING;
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
