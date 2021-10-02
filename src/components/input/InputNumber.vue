<template>
  <div class="input">
    <select v-model="selected" class="input-select">
      <option
        v-for="option in options"
        class="input-select-items"
        :value="option.id"
        :key="option.id"
      >
        {{ option.name }}
      </option>
    </select>
    <p class="input-text" @click="$emit('active')">{{ value }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "",
    };
  },
  props: {
    options: Array,
    value: String,
  },
  watch: {
    selected: function (val) {
      this.$emit("change", val);
    },
  },
  emits: ["active", "change"],
};
</script>

<style>
.input {
  padding: 0px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.input-select {
  width: 40%;
  height: 40px;
  font-size: 20px;
  border: none;
  color: white;
  background-color: #31475e;
  border-radius: 5px;
}

.input-text {
  width: 40%;
  height: 40px;
  font-size: 20px;
  color: white;
  background-color: #31475e;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-radius: 5px;
}

.input-select-items {
  font-size: 20px;
}
</style>