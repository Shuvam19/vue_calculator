<template>
  <div class="converter-bmi">
    <div class="input-fields">
      <!-- <input-number /> -->
      <!-- <input-number /> -->
    </div>
    <div class="numpad">
        <numpad />
    </div>
  </div>
</template>

<script>
// import InputNumber from "../input/InputNumber.vue";
import Numpad from '../numpad/Numpad.vue';
export default {
  components: {  Numpad },
};
</script>

<style>
.converter-data {
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.input-feilds {
  width: 100%;
}
</style>