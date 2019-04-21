<template>
  <div
    class="left-frame"
    @mousemove="resizeFrame"
    @mouseup="endResizeFrame"
    v-bind:style="{width:width + 'px'}"
  >
    <div class="left-frame-content">{{isDragged}}</div>
    <div class="frame-border" @mousedown="startResizeFrame"></div>
  </div>
</template>

<script>
export default {
  props: {
    width: Number
  },

  data() {
    return {
      isDragged: false
    };
  },
  methods: {
    startResizeFrame() {
      this.isDragged = true;
    },
    endResizeFrame() {
      this.isDragged = false;
    },
    resizeFrame(event) {
      if (this.isDragged) {
        this.width = event.clientX + 10;
      }
    }
  }
};
</script>

<style scoped>
.left-frame {
  background-color: red;
  display: flex;
}

.left-frame-content {
  flex-grow: 1;
}

.frame-border {
  width: 10px;
  background-color: gray;
}
</style>
