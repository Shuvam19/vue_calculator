<template>
  <div class="converter-age">
    <div class="input-fields">
      <div class="from-date">
        <p class="default-input-text">Date Of Birth</p>
        <input
          type="date"
          :max="toDate"
          v-model="fromDate"
          class="default-input"
        />
      </div>
      <div class="to-date">
        <p class="default-input-text">ToDay</p>
        <input
          type="date"
          :min="fromDate"
          v-model="toDate"
          class="default-input"
        />
      </div>
    </div>
    <div class="difference">
      <div class="age-next-date">
        <div class="age">
          <p style="font-size: 20px">Age</p>
          <div class="years">
            <p style="font-size: 25px">{{ yearsAlive }}</p>
            <p class="font-15">years</p>
          </div>
          <div class="months-and-days">
            <p class="font-15">{{ monthsAlive }}</p>
            <p class="font-15">months</p>
            <p class="font-15">{{ daysAlive }}</p>
            <p class="font-15">days</p>
          </div>
        </div>
        <div class="next-birthday">
          <p style="font-size: 20px">Next Birthday</p>
          <p class="font-15">Tueday</p>
          <div class="time-left-for-birthday">
            <p class="font-15">{{ nextBirthDayMonths }}</p>
            <p class="font-15">months</p>
            <p class="font-15">{{ nextBirthDayDays }}</p>
            <p class="font-15">days</p>
          </div>
        </div>
      </div>
      <div class="summary">
        <p style="font-size: 25px">Summary</p>
        <div class="all-differences">
          <div class="row">
            <div class="years-diffrence">
              <p>{{ diffInYears }}</p>
              <p>years</p>
            </div>
            <div class="months-difference">
              <p>{{ diffInMonths }}</p>
              <p>Months</p>
            </div>
            <div class="weeks-difference">
              <p>{{ diffInWeeks }}</p>
              <p>Weeks</p>
            </div>
          </div>
          <div class="row">
            <div class="days-difference">
              <p>{{ diffInDays }}</p>
              <p>Days</p>
            </div>
            <div class="hours-difference">
              <p>{{ diffInHours }}</p>
              <p>Hours</p>
            </div>
            <div class="minutes-difference">
              <p>{{ diffInMin }}</p>
              <p>Minutes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DateConverter from "../../utils/date-converter.js";
export default {
  data() {
    return {
      fromDate: new Date().toISOString().substr(0, 10),
      toDate: new Date().toISOString().substr(0, 10),
      diffmills: "",
      diffmillsNext: "",
    };
  },
  computed: {
    diffInMin: function () {
      return DateConverter.getNoOfMin(this.diffmills);
    },
    diffInHours: function () {
      return DateConverter.getNoOfHours(this.diffmills);
    },
    diffInDays: function () {
      return DateConverter.getNoOfDays(this.diffmills);
    },
    diffInWeeks: function () {
      return DateConverter.getNoOfWeeks(this.diffmills);
    },
    diffInMonths: function () {
      return DateConverter.getNoOfMonths(this.diffmills);
    },
    diffInYears: function () {
      return DateConverter.getNoOfYears(this.diffmills);
    },
    yearsAlive: function () {
      return DateConverter.getNoOfRemainingYears(this.diffmills);
    },
    monthsAlive: function () {
      return DateConverter.getNoOfRemainingMonths(this.diffmills);
    },
    daysAlive: function () {
      return DateConverter.getNoOfRemainingDays(this.diffmills);
    },
    nextBirthDayMonths: function () {
      return DateConverter.getNoOfRemainingMonths(this.diffmillsNext);
    },
    nextBirthDayDays: function () {
      return DateConverter.getNoOfRemainingDays(this.diffmillsNext);
    },
  },
  methods: {
    calculatediff() {
      var datefrom = new Date(this.fromDate);
      var dateto = new Date(this.toDate);
      this.diffmills = Math.abs(dateto - datefrom);
      datefrom.setFullYear(datefrom.getFullYear() + 1);
      this.diffmillsNext = Math.abs(dateto - datefrom);
    },
  },
  watch: {
    fromDate: "calculatediff",
    toDate: "calculatediff",
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.converter-age {
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
  font-family: monospace;
  color: white;
  flex-direction: column;
  justify-content: space-evenly;
}

.age-next-date {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.age {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.font-15 {
  font-size: 15px;
}

.years,
.months-and-days,
.time-left-for-birthday {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 5px;
}

.summary {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.next-birthday {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.all-differences {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 10px;
}

.years-diffrence,
.months-difference,
.days-difference,
.weeks-difference,
.hours-difference,
.minutes-difference {
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
}
</style>