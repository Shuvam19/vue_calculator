<template>
  <div class="converter-date">
    <div class="input-fields">
      <div class="from-date">
        <p class="default-input-text">From</p>
        <input type="date" class="default-input" />
      </div>
      <div class="to-date">
        <p class="default-input-text">To</p>
        <input type="date" class="default-input" />
      </div>
    </div>
    <div class="difference">
      <div class="defference-text">Difference</div>
      <div class="difference-numbers">
        <div class="difference-years">
          <p>Years</p>
          <p>0</p>
        </div>
        <div class="difference-months">
          <p>Months</p>
          <p>0</p>
        </div>
        <div class="difference-days">
          <p>Days</p>
          <p>0</p>
        </div>
      </div>
      <div class="difference-from-to">
        <div class="difference-from">
          <p>From</p>
          <p>Oct 16,2021</p>
        </div>
        <div class="difference-to">
          <p>From</p>
          <p>Oct 16,2021</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.converter-date {
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}

.input-fields {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.from-date,
.to-date {
  padding: 0px 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.default-input-text {
  width: 40%;
  height: 40px;
  font-size: 20px;
  color: white;
  background-color: #31475e;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
}

.default-input {
  width: 40%;
  height: 40px;
  font-size: 20px;
  color: white;
  border: none;
  background-color: #31475e;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-radius: 5px;
}

.difference {
  width: 300px;
  height: 200px;
  background-color: #31475e;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between
}

.defference-text {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  color: white;
  font-family: monospace;
}

.difference-numbers {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
}

.difference-years,
.difference-months,
.difference-days {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 25px;
  color: white;
  font-family: monospace;
}

.difference-from-to {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.difference-from,
.difference-to {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 18px;
  color: white;
  font-family: monospace;
}
</style>