<template>
  <div class="converter-number-system">
    <div class="input-fields">
        <input-number :options="numberOptions" />
        <input-number :options="numberOptions" />
    </div>
    <div class="numpad">
        <hexa-demical-numpad />
    </div>
  </div>
</template>

<script>
import InputNumber from '../input/InputNumber.vue';
import HexaDemicalNumpad from '../numpad/HexaDemicalNumpad.vue';
export default {
  components: { InputNumber, HexaDemicalNumpad },
  data() {
    return {
      numberOptions: [
        { id: 1, name: "Binary" },
        { id: 2, name: "Octal" },
        { id: 1, name: "Decimal" },
        { id: 2, name: "HexaDecimal" },
      ],
    };
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