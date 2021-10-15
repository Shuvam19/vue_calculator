<template>
  <div class="converter-discount">
    <div class="input-fields">
      <div class="original-price">
        <p class="default-input-text">Original price</p>
        <p class="default-input" @click="isDiscount = false">{{ price }}</p>
      </div>
      <div class="discount">
        <p class="default-input-text">Discount (% Off)</p>
        <p class="default-input" @click="isDiscount = true">{{ discount }}</p>
      </div>
      <div class="final-price">
        <p class="default-input-text">Final Price</p>
        <p class="default-input">
          {{ answer }}
        </p>
      </div>
    </div>
    <div class="numpad">
      <numpad @numClick="addToValue" @clear="clearData" />
    </div>
  </div>
</template>

<script>
import Numpad from "../numpad/Numpad.vue";
export default {
  components: { Numpad },
  data() {
    return {
      isDiscount: false,
      price: 0,
      discount: 0,
      answer: 0,
    };
  },
  watch: {
    price: function () {
      console.log(this.price);
      this.answer = this.price - (this.price * this.discount) / 100;
    },
    discount: function () {
      console.log(this.discount);
      this.answer = this.price - (this.price * this.discount) / 100;
    },
  },
  methods: {
    addToValue(num) {
      if (this.isDiscount) {
        this.discount = this.discount * 10 + parseInt(num);
      } else {
        this.price = this.price * 10 + parseInt(num);
      }
    },
    clearData() {
      this.price = 0;
      this.discount = 0;
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.converter-discount {
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.input-fields {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.original-price,
.discount,
.final-price {
  padding: 0px 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.default-input {
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
</style>