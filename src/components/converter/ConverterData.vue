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
      this.calculateValue(this.from, this.to);
    },
    addTo(num) {
      this.to.val += num;
      this.calculateValue(this.to, this.from);
    },
    calculateValue(here, there) {
      console.log("Came geere");
      if (here.id == there.id) {
        here.val = there.val;
        console.log(here, there);
        console.log(this.from, this.to);
      } else if (here.id < there.id) {
        this.upWards();
      } else {
        this.downWards();
      }
    },
    upWards() {},
    downWards() {},
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
.input-feilds {
  width: 100%;
}
</style>