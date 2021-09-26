<template>
  <div class="converter-data">
    <div class="input-feilds">
      <input-number class="input-options" :options="unitOptions" />
      <input-number class="input-options" :options="unitOptions" />
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
  data() {
    return {
      unitOptions: [
        "Byte B",
        "Kilobyte KB",
        "Megabyte MB",
        "Gigabyte GB",
        "Terabyte TB",
        "Petabyte PB",
      ],
    };
  },
  components: { Numpad, InputNumber },
  name: "ConverterData",
};
</script>

<style scoped>
.converter-data {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.input-options {
}
</style>