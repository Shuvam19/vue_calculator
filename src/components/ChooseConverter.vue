<template>
  <div class="choose">
    <div
      v-for="converter in listOfConverter"
      :key="converter.id"
      class="converter"
      @click="$emit('ClickedConverter', converter.to)"
    >
      <p class="converter-text">{{ converter.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["ClickedConverter"],
  data() {
    return {
      listOfConverter: [
        { id: 1, name: "Data", to: "ConverterData" },
        { id: 2, name: "Bmi", to: "ConverterBmi" },
        { id: 3, name: "Age", to: "ConverterAge" },
        { id: 4, name: "Discount", to: "ConverterDiscount" },
        { id: 5, name: "Date", to: "ConverterDate" },
        { id: 6, name: "Length", to: "ConverterLength" },
        { id: 7, name: "Area", to: "ConverterArea" },
        { id: 8, name: "Volume", to: "ConverterVolume" },
        { id: 9, name: "Temperature", to: "ConverterTemperature" },
        { id: 10, name: "Speed", to: "ConverterSpeed" },
        { id: 11, name: "Time", to: "ConverterTime" },
        { id: 12, name: "Mass", to: "ConverterMass" },
        { id: 13, name: "Number System", to: "ConverterNumberSystem" },
      ],
    };
  },
};
</script>

<style scoped>
.choose {
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  overflow: scroll;
}

.converter {
  margin: 5px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #234;
  border-radius: 5px;
}
.converter:hover {
  background: #31475e;
}
.converter-text {
  font-weight: 600;
  font-family: "Azeret Mono", monospace;
  display: flex;
  color: white;
  font-size: 20px;
}
</style>