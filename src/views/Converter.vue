<template>
  <div class="test">
    <numpad />
  </div>
</template>

<script>
import Numpad from "../components/numpad/Numpad.vue";
export default {
  components: { Numpad},
};
</script>

<style>
.test {
  width: fit-content;
  padding: 0 5px;
  display: flex;
  flex-direction: row;
  background: #234;
  border-radius: 5px;
}
</style>