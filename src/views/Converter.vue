<template>
  <div class="whole">
    <div class="choose-converter">
      <choose-converter />
    </div>
    <div class="converter">
      <component :is="comp" />
    </div>
  </div>
</template>

<script>
import ChooseConverter from "../components/ChooseConverter.vue";
import converter from "../components/converter";
export default {
  data() {
    return {
      comp: "ConverterData",
    };
  },
  components: { ChooseConverter, ...converter },
};
</script>

<style scoped>
.whole {
  display: flex;
  flex-direction: row;
}

.choose-converter {
  width: 30vw;
}

.converter {
  width: fit-content;
  height: fit-content;
  padding: 0 5px;
  display: flex;
  flex-direction: row;
  background: #234;
  border-radius: 5px;
}
</style>