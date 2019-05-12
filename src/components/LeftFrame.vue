<template>
  <div class="left-frame" v-bind:style="{width:width + 'px'}">
    <div class="left-frame-content">ヒダリー</div>
    <div class="frame-border" @mousedown="$emit('startResize')"></div>
  </div>
</template>

<script>
export default {
  props: {
    width: Number
  }
};
</script>

<style scoped>
.left-frame {
  background-color: rgb(240, 240, 255);
  display: flex;
}

.left-frame-content {
  flex-grow: 1;
  padding-left: 10px;
}

.frame-border {
  width: 3px;
  background-color: rgb(208, 208, 208);
  border-left: solid 0.5px rgb(170, 170, 170);
  border-right: solid 0.5px black;
}

.frame-border:hover {
  cursor: col-resize;
}
</style>
