<template>
  <converter-default :factor="factor" :unitOptions="unitOptions" />
</template>

<script>
import ConverterDefault from "./ConverterDefault.vue";
export default {
  components: { ConverterDefault },
  data() {
    return {
      unitOptions: [
        { id: 1, name: "Picosecond ps", factor: 1000000 },
        { id: 2, name: "MicroSecond us", factor: 1000 },
        { id: 3, name: "MilliSecond ms", factor: 1000 },
        { id: 4, name: "Second s", factor: 60 },
        { id: 5, name: "Minute min", factor: 60 },
        { id: 6, name: "Hour hour", factor: 24 },
        { id: 7, name: "Day day", factor: 7 },
        { id: 8, name: "Week wk", factor: 52 },
        { id: 9, name: "Year yr", factor: 1 },
      ],
    };
  },
};
</script>

<style scoped>
</style>