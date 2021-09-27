<template>
  <div class="whole">
    <div class="calculator">
      <calculator @addToHistory="addToHistoryList" />
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
import Calculator from "../components/calculator/Calculator.vue";
export default {
  name: "Home",
  components: {
    Calculator,
  },
  methods: {
    addToHistoryList(element) {
      this.historyOfOperation.push(element);
    },
  },
  data() {
    return {
      historyOfOperation: [],
    };
  },
};
</script>

<style scoped>
.whole {
  height: 90vh;
  display: flex;
  flex-direction: row;
}

.calculator {
  margin: 2vw;
  width: 40%;
  display: flex;
}

.history {
  background-color: #234;
  width: 60%;
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

.query,
.result {
  padding: 5px;
  font-size: 2vw;
  color: white;
  font-family: "Azeret Mono", monospace;
}

@media screen and (max-width: 900px) {
  .whole {
    height: auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .calculator {
    width: 90vw;
  }

  .history {
    width: 80vw;
    height: 300px;
  }
}
</style>