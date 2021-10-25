<template>
  <div class="converter-temperature">
    <div class="input-fields">
      <input-number
        :options="temperatureOptions"
        :value="val"
        :id="from"
        @change="changeFrom"
      />
      <input-number
        :options="temperatureOptions"
        :value="result"
        :id="to"
        @change="changeTo"
      />
    </div>
    <div class="numpad">
      <numpad @numClick="addToValue" @clear="clearData" />
    </div>
  </div>
</template>

<script>
import InputNumber from "../input/InputNumber.vue";
import Numpad from "../numpad/Numpad.vue";
import TemperatureCalculator from "../../utils/temperature-converter.js";
export default {
  components: { InputNumber, Numpad },
  methods: {
    changeFrom(id) {
      this.from = id;
    },
    changeTo(id) {
      this.to = id;
    },
    clearData() {
      this.val = 0;
      this.result = 0;
    },
    addToValue(num) {
      this.val *= 10;
      this.val += parseInt(num);
      this.result = TemperatureCalculator.convert(this.from, this.to, this.val);
    },
  },
  data() {
    return {
      val: 0,
      result: 0,
      from: 1,
      to: 1,
      temperatureOptions: [
        { id: 1, name: "Kelvin K" },
        { id: 2, name: "Celcius C" },
        { id: 3, name: "Fahrenheit F" },
      ],
    };
  },
};
</script>

<style>
.converter-temperature {
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.input-feilds {
  width: 100%;
}
</style>