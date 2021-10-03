<template>
  <div class="converter-data">
    <div class="input-feilds">
      <input-number
        class="input-options"
        :options="unitOptions"
        :value="from.val"
        :id="from.id"
        @change="changeFrom"
        @active="isFromActive = true"
      />
      <input-number
        class="input-options"
        :options="unitOptions"
        :value="to.val"
        :id="to.id"
        @change="changeTo"
        @active="isFromActive = false"
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
export default {
  data() {
    return {
      isFromActive: true,
      from: { id: 1, val: 0 },
      to: { id: 1, val: 0 },
    };
  },
  props: {
    unitOptions: Array,
  },
  methods: {
    clearData() {
      this.from = { id: 1, val: 0 };
      this.to = { id: 1, val: 0 };
    },
    changeFrom(id) {
      this.from.id = id;
    },
    changeTo(id) {
      this.to.id = id;
    },
    addToValue(num) {
      if (this.isFromActive) this.addFrom(num);
      else this.addTo(num);
    },
    addFrom(num) {
      this.from.val *= 10;
      this.from.val += parseInt(num, 10);
      this.to.val = this.calculateValue(
        this.from.val,
        this.from.id,
        this.to.id
      );
    },
    addTo(num) {
      this.to.val *= 10;
      this.to.val += parseInt(num, 10);
      this.from.val = this.calculateValue(
        this.to.val,
        this.to.id,
        this.from.id
      );
    },
    calculateValue(value, from, to) {
      if (from == to) {
        return value;
      }
      if (from > to) {
        let val = value;
        for (let i = to; i < from; i++) {
          val = val * this.unitOptions[i-1].factor;
        }
        return val;
      } else {
        let val = value;
        for (let i = from; i < to; i++) {
          val = val / this.unitOptions[i-1].factor;
        }
        return val;
      }
    },
  },
  components: { Numpad, InputNumber },
  name: "ConverterDefault",
};
</script>

<style scoped>
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