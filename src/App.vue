<template>
  <div id="app">
    <h1 class="title">World time application</h1>

    <zones @update-clock="updateClock" @add-clock="addClock" />

    <error-message
      v-if="showError"
      message="You have reached clock amount limit"
      @close-message="closeErrorMessage"
    />
    <clock
      v-for="(clock, index) in clocks"
      :clock="clock"
      :id="index"
      :key="index"
      @delete-clock="deleteClock"
      class="title"
    />
  </div>
</template>

<script>
import Zones from "./components/Zones.vue";
import ErrorMessage from "./components/ErrorMessage.vue";
import Clock from "./components/Clock.vue";
import timeDetails from "@/mixins/timeDetails.js";

export default {
  mixins: [timeDetails],
  name: "App",
  components: {
    Zones,
    ErrorMessage,
    Clock,
  },
  data() {
    return {
      clocks: [],
      zone: "Europe/Kiev",
      showError: false,
    };
  },
  mounted() {
    this.getClockDetails().then((clockDetails) => {
      this.addClock(clockDetails);
    });
    setInterval(this.updateClocksTime, 1000);
  },
  methods: {
    updateClock(clockDetails) {
      if (!this.clocks.length) {
        this.addClock(clockDetails);
        return;
      }

      this.clocks.splice(this.clocks.length - 1, 1, clockDetails);
    },
    addClock(clock) {
      if (this.isReachedClockLimit) {
        this.showErrorMessage();
      } else {
        this.clocks.push(clock);
      }
    },
    showErrorMessage() {
      this.showError = true;
    },
    closeErrorMessage() {
      this.showError = false;
    },
    deleteClock(clockId) {
      console.log("deleteClock " + clockId);
      this.clocks.splice(clockId, 1);
    },
    increaseDateTime(clock) {
      const increasedSeconds = clock.date.getSeconds() + 1;
      const updatedDate = clock.date.setSeconds(increasedSeconds);
      clock.date = new Date(updatedDate);
      return clock;
    },
    updateClocksTime() {
      this.clocks = this.clocks.map((clock) => this.increaseDateTime(clock));
    },
  },
  computed: {
    isReachedClockLimit() {
      return this.clocks.length + 1 > 5;
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  text-align: center;
}

.default-el {
  border: 1px solid #75c5b7;
  padding: 10px;
  cursor: pointer;
  outline: none;
  transition: all 0.2s;
  font-weight: 600;
  border-radius: 2px;
  color: #75c5b7;
  background: #f8fff6;
}

.btn {
  background-color: #75c5b7;
  color: #fff;

  &:active {
    background-color: #fff;
  }
}

.ml-1 {
  margin-left: 0.2rem;
}

.error {
  max-width: 60%;
}
</style>
