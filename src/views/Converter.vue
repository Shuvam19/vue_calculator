<template>
  <div class="whole">
    <div class="choose-converter">
      <choose-converter @ClickedConverter="changeConverter" />
    </div>
    <div class="converter">
      <component :is="converterName" />
    </div>
  </div>
</template>

<script>
import ChooseConverter from "../components/ChooseConverter.vue";
import converter from "../components/converter";
export default {
  methods: {
    changeConverter(newName) {
      this.converterName = newName;
    },
  },
  data() {
    return {
      converterName: "ConverterData",
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
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>