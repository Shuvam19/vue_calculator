<template>
  <div class="converter-data">
    <div class="input-feilds">
      <input-number
        class="input-options"
        :options="unitOptions"
        :value="from.val"
        @change="changeFrom"
        @active="isFromActive = true"
      />
      <input-number
        class="input-options"
        :options="unitOptions"
        :value="to.val"
        @change="changeTo"
        @active="isFromActive = false"
      />
    </div>
    <div class="numpad">
      <numpad @numClick="addToValue" />
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
      from: { id: "1", val: "" },
      to: { id: "1", val: "" },
      factor: 1024,
      unitOptions: [
        { id: 1, name: "Byte B" },
        { id: 2, name: "Kilobyte KB" },
        { id: 3, name: "Megabyte MB" },
        { id: 4, name: "Gigabyte GB" },
        { id: 5, name: "Terabyte TB" },
        { id: 6, name: "Petabyte PB" },
      ],
    };
  },
  methods: {
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
      this.from.val += num;
      this.to.val = this.calculateValue(
        this.from.val,
        this.from.id,
        this.to.id
      );
    },
    addTo(num) {
      this.to.val += num;
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
          val = val * this.factor;
        }
        return val;
      } else {
        let val = value;
        for (let i = from; i < to; i++) {
          val = val / this.factor;
        }
        return val;
      }
    },
  },
  components: { Numpad, InputNumber },
  name: "ConverterData",
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