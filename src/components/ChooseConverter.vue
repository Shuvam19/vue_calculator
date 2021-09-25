<template>
  <div class="choose">
    <div
      v-for="converter in listOfConverter"
      :key="converter"
      class="converter"
    >
      <p class="converter-text">{{ converter }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listOfConverter: [
        "Data",
        "Bmi",
        "Age",
        "Discount",
        "Date",
        "Length",
        "Area",
        "Volume",
        "Temperature",
        "Speed",
        "Time",
        "Mass",
        "Number System",
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