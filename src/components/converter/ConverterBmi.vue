<template>
  <div class="converter-bmi">
    <div class="input-fields">
      <input-number :options="weightOptions" />
      <input-number :options="heightOptions" />
    </div>
    <div class="numpad">
      <numpad />
    </div>
  </div>
</template>

<script>
import InputNumber from "../input/InputNumber.vue";
import Numpad from "../numpad/Numpad.vue";
export default {
  components: { InputNumber, Numpad },
  data() {
    return {
      weightOptions: [
        { id: 1, name: "Kilograms" },
        { id: 2, name: "Pounds" },
      ],
      heightOptions: [
        { id: 1, name: "Centimeters" },
        { id: 2, name: "Meters" },
        { id: 3, name: "Feet" },
        { id: 4, name: "Inches" },
      ],
    };
  },
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