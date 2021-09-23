<template>
  <div class="whole-numpad">
    <div class="rows">
      <individual-button class="button" @click="add('lg(')">
        7
      </individual-button>
      <individual-button class="button" @click="add('ln(')">
        8
      </individual-button>
      <individual-button class="button" @click="add('(')">
        9
      </individual-button>
    </div>
    <div class="rows">
      <individual-button class="button" @click="add('lg(')">
        4
      </individual-button>
      <individual-button class="button" @click="add('ln(')">
        5
      </individual-button>
      <individual-button class="button" @click="add('(')">
        6
      </individual-button>
    </div>
    <div class="rows">
      <individual-button class="button" @click="add('lg(')">
        1
      </individual-button>
      <individual-button class="button" @click="add('ln(')">
        2
      </individual-button>
      <individual-button class="button" @click="add('(')">
        3
      </individual-button>
    </div>
    <div class="rows">
      <individual-button class="button" @click="add('lg(')">
      </individual-button>
      <individual-button class="button" @click="add('ln(')">
        0
      </individual-button>
      <individual-button class="button" @click="add('(')">
        .
      </individual-button>
    </div>
  </div>
  <div class="column">
    <individual-button class="extra-button">AC</individual-button>
    <individual-button class="extra-button">=</individual-button>
  </div>
</template>

<script>
import IndividualButton from "../button/IndividualButton.vue";
export default {
  components: { IndividualButton },
  emits: {},
};
</script>

<style scoped>
.whole-numpad {
  width: 250px;
  padding: 10px;
}

.rows {
  margin: 10px 0;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
}

.button {
  width: 23%;
}

.column {
  display: flex;
  flex-direction: column;
  padding: 20px 10px 20px 0px;
  justify-content: space-between;
}
.extra-button {
  height: 37%;
}
</style>