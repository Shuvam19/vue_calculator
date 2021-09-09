<template>
  <div class="whole_calculator">
    <!-- Calculator Result -->
    <div class="bg_dark_button calculated_value">
      {{ calculatedValue }}
    </div>

    <div class="row">
      <div class="bg_dark_button button">2nd</div>
      <div class="bg_dark_button button">deg</div>
      <div class="bg_dark_button button">sin</div>
      <div class="bg_dark_button button">con</div>
      <div class="bg_dark_button button">tan</div>
    </div>

    <div class="row">
      <div class="bg_dark_button button">0</div>
      <div class="bg_dark_button button">lg</div>
      <div class="bg_dark_button button">ln</div>
      <div class="bg_dark_button button">(</div>
      <div class="bg_dark_button button">)</div>
    </div>

    <div class="row">
      <div class="bg_dark_button button"></div>
      <div class="bg_dark_button button">C</div>
      <div class="bg_dark_button button">0</div>
      <div class="bg_dark_button button">%</div>
      <div class="bg_dark_button button"></div>
    </div>

    <div class="row">
      <div class="bg_dark_button button">x!</div>
      <div class="bg_dark_button button">7</div>
      <div class="bg_dark_button button">8</div>
      <div class="bg_dark_button button">9</div>
      <div class="bg_dark_button button">X</div>
    </div>

    <div class="row">
      <div class="bg_dark_button button">1/x</div>
      <div class="bg_dark_button button">4</div>
      <div class="bg_dark_button button">5</div>
      <div class="bg_dark_button button">6</div>
      <div class="bg_dark_button button">-</div>
    </div>

    <div class="row">
      <div class="bg_dark_button button">0</div>
      <div class="bg_dark_button button">1</div>
      <div class="bg_dark_button button">2</div>
      <div class="bg_dark_button button">3</div>
      <div class="bg_dark_button button">+</div>
    </div>

    <div class="row">
      <div class="bg_dark_button button"></div>
      <div class="bg_dark_button button">1</div>
      <div class="bg_dark_button button">2</div>
      <div class="bg_dark_button button">3</div>
      <div class="bg_dark_button button">=</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calculator",
  data() {
    return {
      calculatedValue: 0,
    };
  },
};
</script>

<style scoped>
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
  font-size: 120%;
}

.calculated_value {
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
</style>