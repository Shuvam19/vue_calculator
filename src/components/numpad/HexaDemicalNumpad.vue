<template>
  <div class="numpad">
    <div class="numpad-rows">
      <div class="rows">
        <individual-button class="button" @click="$emit('clear')">
          AC
        </individual-button>
        <individual-button class="button" @click="$emit('backspace')">
          clear
        </individual-button>
        <individual-button
          class="button"
          @click="isHexadecimal ? $emit('numClick', 'F') : ''"
        >
          F
        </individual-button>
        <individual-button
          class="button"
          @click="isHexadecimal ? $emit('numClick', 'E') : ''"
        >
          E
        </individual-button>
      </div>
      <div class="rows">
        <individual-button
          class="button"
          @click="isBinary ? '' : $emit('numClick', '7')"
        >
          7
        </individual-button>
        <individual-button
          class="button"
          @click="isOctal || isBinary ? '' : $emit('numClick', '8')"
        >
          8
        </individual-button>
        <individual-button
          class="button"
          @click="isOctal || isBinary ? '' : $emit('numClick', '9')"
        >
          9
        </individual-button>
        <individual-button
          class="button"
          @click="isHexadecimal ? $emit('numClick', 'D') : ''"
        >
          D
        </individual-button>
      </div>
      <div class="rows">
        <individual-button
          class="button"
          @click="isBinary ? '' : $emit('numClick', '4')"
        >
          4
        </individual-button>
        <individual-button
          class="button"
          @click="isBinary ? '' : $emit('numClick', '5')"
        >
          5
        </individual-button>
        <individual-button
          class="button"
          @click="isBinary ? '' : $emit('numClick', '6')"
        >
          6
        </individual-button>
        <individual-button
          class="button"
          @click="isHexadecimal ? $emit('numClick', 'C') : ''"
        >
          C
        </individual-button>
      </div>
      <div class="rows">
        <individual-button class="button" @click="$emit('numClick', '1')">
          1
        </individual-button>
        <individual-button
          class="button"
          @click="isBinary ? '' : $emit('numClick', '2')"
        >
          2
        </individual-button>
        <individual-button
          class="button"
          @click="isBinary ? '' : $emit('numClick', '3')"
        >
          3
        </individual-button>
        <individual-button
          class="button"
          @click="isHexadecimal ? $emit('numClick', 'B') : ''"
        >
          B
        </individual-button>
      </div>
      <div class="rows">
        <individual-button class="button"> </individual-button>
        <individual-button class="button" @click="$emit('numClick', '0')">
          0
        </individual-button>
        <individual-button class="button" @click="$emit('numClick', '.')">
          .
        </individual-button>
        <individual-button
          class="button"
          @click="isHexadecimal ? $emit('numClick', 'A') : ''"
        >
          A
        </individual-button>
      </div>
    </div>
  </div>
</template>

<script>
import IndividualButton from "../button/IndividualButton.vue";
export default {
  components: { IndividualButton },
  emits: ["numClick", "backspace", "clear"],
  props: ["current"],
  computed: {
    isBinary: function () {
      console.log(this.current);
      return this.current == 1;
    },
    isOctal: function () {
      return this.current == 2;
    },
    isDecimal: function () {
      return this.current == 3;
    },
    isHexadecimal: function () {
      return this.current == 4;
    },
  },
};
</script>

<style scoped>
.numpad {
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: row;
  padding: 0 5px;
  /* background: #234; */
  border-radius: 5px;
}
.numpad-rows {
  width: 250px;
  padding: 10px;
}

.rows {
  margin: 10px 0;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  gap: 5px;
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
