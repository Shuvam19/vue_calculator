<template>
  <div class="whole">
    <div class="calculator">
      <calculator />
    </div>
    <div class="history">
      <template v-for="history in historyOfOperation" :key="history.id">
        <div class="individual-history">
          <div class="query">{{ history.query }}</div>
          <div class="result">= {{ history.result }}</div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import Calculator from "./components/Calculator.vue";
export default {
  name: "App",
  components: {
    Calculator,
  },
  data() {
    return {
      historyOfOperation: [{ id: 1, query: "1+2+3+4+5", result: "15" }],
    };
  },
};
</script>

<style scoped>
.whole {
  display: flex;
  flex-direction: row;
}

.calculator {
  margin: 30px;
}

.history {
  background-color: #234;
  width: 100%;
  padding: 15px;
  border-radius: 5px;
  display: flex;
  flex-direction: column-reverse;
}

.individual-history {
  background-color: #31475e;
  width: 100%;
  margin: 5px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.query ,.result {
  padding: 5px;
  font-size: 2vw;
  color: white;
  font-family: "Azeret Mono", monospace;
}
</style>
