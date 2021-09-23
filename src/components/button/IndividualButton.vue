<template>
  <div class="bg_dark_button">
    <slot />
  </div>
</template>

<script>
export default {
  name: "IndividualButton",
};
</script>

<style scoped>
.bg_dark_button {
  background: #31475e;
  color: white;
  border-radius: 5px;
  padding: 10px;
  font-weight: 600;
  font-family: "Azeret Mono", monospace;
  display: flex;
  justify-content: center;
  align-items: center;
}

.bg_dark_button:hover {
  background: #3d5875;
}
</style>