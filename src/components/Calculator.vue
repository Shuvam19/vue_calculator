<template>
  <div class="whole_calculator">
    <!-- Query String -->
    <div class="bg_dark_button query_string">
      {{ queryString || 0 }}
    </div>

    <!-- Calculated Result -->
    <div class="bg_dark_button calculated_result">
      {{ queryString || 0 }}
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
      <div class="bg_dark_button button">xy</div>
      <div class="bg_dark_button button" @click="add('lg(')">lg</div>
      <div class="bg_dark_button button" @click="add('ln(')">ln</div>
      <div class="bg_dark_button button" @click="add('(')">(</div>
      <div class="bg_dark_button button" @click="add(')')">)</div>
    </div>

    <div class="row">
      <div class="bg_dark_button button">√x</div>
      <div class="bg_dark_button button" @click="clear">C</div>
      <div class="bg_dark_button button" @click="remove">=</div>
      <div class="bg_dark_button button">%</div>
      <div class="bg_dark_button button">÷</div>
    </div>

    <div class="row">
      <div class="bg_dark_button button">x!</div>
      <div class="bg_dark_button button" @click="add('7')">7</div>
      <div class="bg_dark_button button" @click="add('8')">8</div>
      <div class="bg_dark_button button" @click="add('9')">9</div>
      <div class="bg_dark_button button" @click="add('*')">x</div>
    </div>

    <div class="row">
      <div class="bg_dark_button button">1/x</div>
      <div class="bg_dark_button button" @click="add('4')">4</div>
      <div class="bg_dark_button button" @click="add('5')">5</div>
      <div class="bg_dark_button button" @click="add('6')">6</div>
      <div class="bg_dark_button button" @click="add('-')">-</div>
    </div>

    <div class="row">
      <div class="bg_dark_button button">π</div>
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
      <div class="bg_dark_button button" @click="calculateAns">=</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calculator",
  data() {
    return {
      queryString: "0",
    };
  },
  methods: {
    add(intValue) {
      if (this.queryString === "0") {
        this.queryString = "";
      }
      this.queryString += intValue;
    },
    remove() {
      this.queryString = this.queryString.substring(
        0,
        this.queryString.length - 1
      );
    },
    calculateAns() {},
    clear() {
      this.queryString = "0";
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