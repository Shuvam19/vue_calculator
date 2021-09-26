<template>
  <div class="input">
    <select v-model="selected" class="input-select">
      <option
        v-for="option in options"
        :key="option"
        class="input-select-items"
      >
        {{ option }}
      </option>
    </select>
    <input class="input-text" />
  </div>
</template>

<script>
export default {
  props: {
    options: Array,
  },
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
  font-size: 20px;
  border: none;
  background-color: aquamarine;
}

.input-text {
  width: 40%;
  text-align: end;
  font-size: 20px;
  border: none;
  background-color: aquamarine;
}

.input-select-items {
  font-size: 20px;
}
</style>