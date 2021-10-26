<template>
  <div class="converter-number-system">
    <div class="input-fields">
      <input-number
        :options="numberOptions"
        :id="from"
        @change="changeFrom"
        :value="val"
      />
      <input-number
        :options="numberOptions"
        :id="to"
        @change="changeTo"
        :value="result"
      />
    </div>
    <div class="numpad">
      <hexa-demical-numpad
        @numClick="addToValue"
        @clear="clearData"
        @backspace="backspace"
        :current="from"
      />
    </div>
  </div>
</template>

<script>
import InputNumber from "../input/InputNumber.vue";
import HexaDemicalNumpad from "../numpad/HexaDemicalNumpad.vue";
import NumberSystemConverter from "../../utils/number-system-converter.js";
export default {
  components: { InputNumber, HexaDemicalNumpad },
  methods: {
    changeFrom(id) {
      this.from = id;
    },
    changeTo(id) {
      this.to = id;
    },
    addToValue(num) {
      this.val += num;
      this.result = NumberSystemConverter.convert(this.from, this.to, this.val);
    },
    clearData() {
      this.val = "";
      this.result = "";
    },
    backspace() {
      console.log(this.val.length);
      this.val = this.val.substring(0, this.val.length - 1);
    },
  },
  data() {
    return {
      val: "",
      result: "",
      from: 1,
      to: 1,
      numberOptions: [
        { id: 1, name: "Binary" },
        { id: 2, name: "Octal" },
        { id: 3, name: "Decimal" },
        { id: 4, name: "HexaDecimal" },
      ],
    };
  },
  watch: {
    from: function (val) {
      switch (val) {
        case 1:
      }
    },
  },
};
</script>

<style>
.converter-number-system {
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.input-fields {
  width: 100%;
}
</style>