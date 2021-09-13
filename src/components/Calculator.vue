<template>
  <div class="whole_calculator">
    <!-- Query String -->
    <div class="bg_dark_button query_string">
      {{ queryString || 0 }}
    </div>

    <!-- Calculated Result -->
    <div class="bg_dark_button calculated_result">
      {{ calculatedAns || 0 }}
    </div>

    <div class="bg_dark_button calculated_result">
      {{ bracketQuery || 0 }}
    </div>

    <!-- Individual Rows Buttons -->
    <div class="row">
      <div class="bg_dark_button button">2nd</div>
      <div class="bg_dark_button button">deg</div>
      <div class="bg_dark_button button" @click="add('sin(')">sin</div>
      <div class="bg_dark_button button" @click="add('cos(')">con</div>
      <div class="bg_dark_button button" @click="add('tan(')">tan</div>
    </div>

    <div class="row">
      <div class="bg_dark_button button" @click="add('^')">xy</div>
      <div class="bg_dark_button button" @click="add('lg(')">lg</div>
      <div class="bg_dark_button button" @click="add('ln(')">ln</div>
      <div class="bg_dark_button button" @click="add('(')">(</div>
      <div class="bg_dark_button button" @click="add(')')">)</div>
    </div>

    <div class="row">
      <div class="bg_dark_button button" @click="add('√')">√x</div>
      <div class="bg_dark_button button" @click="clear">C</div>
      <div class="bg_dark_button button" @click="remove">=</div>
      <div class="bg_dark_button button" @click="addBracketQuery('%')">%</div>
      <div class="bg_dark_button button" @click="add('÷')">÷</div>
    </div>

    <div class="row">
      <div class="bg_dark_button button" @click="add('!')">x!</div>
      <div class="bg_dark_button button" @click="add('7')">7</div>
      <div class="bg_dark_button button" @click="add('8')">8</div>
      <div class="bg_dark_button button" @click="add('9')">9</div>
      <div class="bg_dark_button button" @click="add('*')">x</div>
    </div>

    <div class="row">
      <div class="bg_dark_button button" @click="add('^-1')">1/x</div>
      <div class="bg_dark_button button" @click="add('4')">4</div>
      <div class="bg_dark_button button" @click="add('5')">5</div>
      <div class="bg_dark_button button" @click="add('6')">6</div>
      <div class="bg_dark_button button" @click="add('-')">-</div>
    </div>

    <div class="row">
      <div class="bg_dark_button button" @click="add('π')">π</div>
      <div class="bg_dark_button button" @click="add('1')">1</div>
      <div class="bg_dark_button button" @click="add('2')">2</div>
      <div class="bg_dark_button button" @click="add('3')">3</div>
      <div class="bg_dark_button button" @click="add('+')">+</div>
    </div>

    <div class="row">
      <div class="bg_dark_button button"></div>
      <div class="bg_dark_button button">e</div>
      <div class="bg_dark_button button" @click="add('0')">0</div>
      <div class="bg_dark_button button" @click="add('.')">.</div>
      <div class="bg_dark_button button" @click="CalculateAndSave">=</div>
    </div>
  </div>
</template>

<script>
import Calculate from "./../utils/calculate.js";
export default {
  name: "Calculator",
  data() {
    return {
      queryString: "",
      calculatedAns: 0,
      bracketQuery: "",
      noofbrackets: 0,
    };
  },
  methods: {
    isOperation(lastChar) {
      return ["*", "%", "+", "-", "÷"].find((val) => lastChar == val);
    },
    addBracketQuery(value) {
      if (this.bracketQuery === "") {
        this.bracketQuery += "(";
        this.noofbrackets++;
      }
      this.bracketQuery = this.removeLastCharIfNeeded(this.bracketQuery, value);
      if (value == "(" || value.includes('(')) this.noofbrackets++;
      if (value == ")") this.noofbrackets--;
      this.bracketQuery += value;
    },
    removeLastCharIfNeeded(value, symbol) {
      const length = value.length;
      let lastChar = value.charAt(length - 1);
      if (this.isOperation(lastChar) && this.isOperation(symbol)) {
        value = value.substr(0, length - 1);
      }
      return value;
    },
    add(value) {
      this.queryString = this.removeLastCharIfNeeded(this.queryString, value);
      this.addBracketQuery(value);
      this.queryString += value;
      // this.calculateAns()
    },
    remove() {
      this.queryString = this.queryString.substring(
        0,
        this.queryString.length - 1
      );
      this.bracketQuery = this.bracketQuery.substring(
        0,
        this.bracketQuery.length - 1
      );
      // this.calculateAns()
    },
    CalculateAndSave() {
      this.calculateAns();
      this.bracketQuery = "(" + this.calculatedAns;
      this.queryString = "" + this.calculatedAns;
    },
    calculateAns() {
      let queryToSend = this.bracketQuery;
      for (let i = 0; i < this.noofbrackets; i++) {
        queryToSend += ")";
      }
      this.calculatedAns = Calculate.getResult(queryToSend);
    },
    percentage() {},
    clear() {
      this.queryString = "";
      this.bracketQuery = "";
      this.calculatedAns = 0;
      this.noofbrackets = 0;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Azeret+Mono:wght@200&display=swap");

.whole_calculator {
  width: 400px;
  margin: 50px auto;
  padding: 30px;
  background: #234;
  border-radius: 5px;
}

.bg_dark_button {
  background: #31475e;
  color: white;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  font-weight: 600;
  font-family: "Azeret Mono", monospace;
}

.query_string {
  padding: 20px;
  text-align: right;
}

.calculated_result {
  margin: 5px 0px;
  padding: 10px 20px;
  text-align: right;
}

.row {
  margin: 10px 0;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
}

.button {
  width: 13%;
}

.button:hover {
  background: #3d5875;
}
</style>