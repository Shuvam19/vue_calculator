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

    <!-- <div class="bg_dark_button calculated_result">
      {{ bracketQuery || 0 }}
    </div> -->

    <!-- Individual Rows Buttons -->
    <div class="row">
      <div class="bg_dark_button button" @click="switchArc">2nd</div>
      <div
        class="bg_dark_button button"
        @click="degOrRadian = !degOrRadian"
        :disabled="radianDisabled"
      >
        {{ degOrRadian ? "deg" : "rad" }}
      </div>
      <div
        class="bg_dark_button button"
        @click="arcOrNot ? add('arcsin(') : add('sin(')"
      >
        sin<sup>{{ arcOrNot ? "-1" : "" }}</sup>
      </div>
      <div
        class="bg_dark_button button"
        @click="arcOrNot ? add('arccos(') : add('cos(')"
      >
        con<sup>{{ arcOrNot ? "-1" : "" }}</sup>
      </div>
      <div
        class="bg_dark_button button"
        @click="arcOrNot ? add('arctan(') : add('tan(')"
      >
        tan<sup>{{ arcOrNot ? "-1" : "" }}</sup>
      </div>
    </div>

    <div class="row">
      <div class="bg_dark_button button" @click="add('^')">x<sup>y</sup></div>
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
      uniqueNo: 0,
      calculatedAns: 0,
      bracketQuery: "",
      radianDisabled: false,
      noofbrackets: 0,
      degOrRadian: true,
      arcOrNot: false,
      symbolStack: [],
    };
  },
  emits: ["addToHistory"],
  methods: {
    switchArc() {
      this.arcOrNot = !this.arcOrNot;
      if (this.arcOrNot) {
        this.degOrRadian = false;
        this.radianDisabled = false;
      } else this.radianDisabled = true;
    },
    addBracketQuery(value) {
      if (this.bracketQuery === "") {
        this.bracketQuery += "(";
        this.noofbrackets++;
      }
      this.bracketQuery = this.removeLastCharIfNeeded(this.bracketQuery, value);
      if (value == "(" || value.includes("(")) this.noofbrackets++;
      if (value == ")") this.noofbrackets--;
      this.bracketQuery += value;
    },
    removeLastCharIfNeeded(value, symbol) {
      const length = value.length;
      let lastChar = value.charAt(length - 1);
      if (Calculate.isSymbol(lastChar) && Calculate.isSymbol(symbol)) {
        value = value.substr(0, length - 1);
      }
      if (
        symbol != ")" &&
        !Calculate.isSymbol(symbol) &&
        lastChar == "°" &&
        Calculate.isTrigo(this.symbolStack[this.symbolStack.length - 1])
      ) {
        value = value.substr(0, length - 1);
      }
      return value;
    },
    addDegIfNeeded() {
      let length = this.queryString.length;
      let lastChar = this.queryString.charAt(length - 1);
      if (
        this.degOrRadian &&
        lastChar != ")" &&
        Calculate.isTrigo(this.symbolStack[this.symbolStack.length - 1])
      ) {
        this.addBracketQuery("°");
        this.queryString += "°";
      }
    },
    addToStackIfNeeded(value) {
      if (Calculate.isTrigo(value)) {
        this.symbolStack.push(value);
      }
      if (value == ")") {
        this.symbolStack.pop();
      }
    },
    add(value) {
      this.addToStackIfNeeded(value);
      this.queryString = this.removeLastCharIfNeeded(this.queryString, value);
      this.addBracketQuery(value);
      this.queryString += value;
      this.addDegIfNeeded();
      this.calculateAns();
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
      this.$emit("addToHistory", {
        id: this.uniqueNo++,
        query: this.queryString,
        result: this.calculatedAns,
      });
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
    clear() {
      this.queryString = "";
      this.bracketQuery = "";
      this.calculatedAns = 0;
      this.noofbrackets = 0;
      this.symbolStack = [];
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Azeret+Mono:wght@200&display=swap");

.whole_calculator {
  width: 400px;
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