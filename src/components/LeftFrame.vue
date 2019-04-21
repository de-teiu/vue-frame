<template>
  <div class="left-frame">
    <div class="left-frame-content">left</div>
    <div
      class="frame-border"
      @mousedown="startResizeFrame()"
      @mouseup="endResizeFrame()"
      @mousemove="resizeFrame()"
    ></div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      isDragged: false
    };
  },
  methods: {
    startResizeFrame: () => {
      isDragged = true;
    },
    endResizeFrame: () => {
      isDragged = false;
    },
    resizeFrame: () => {}
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
