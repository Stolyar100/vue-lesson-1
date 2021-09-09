<template>
  <div class="available-zones">
    <div>
      <label>
        <p>Available zones</p>
        <select v-model="zone" class="select default-el">
          <option v-for="(zone, index) in zones" :value="zone" :key="index">
            {{ zone }}
          </option>
        </select>
      </label>

      <div class="get-zones">
        <button @click="updateClock" class="btn default-el">
          Get current time
        </button>

        <button @click="addClock" class="btn default-el ml-1">+</button>
      </div>
    </div>
  </div>
</template>

<script>
import timeDetails from "@/mixins/timeDetails.js";
import WorldTimeApiService from '../services/WorldTimeApiService'

export default {
  name: "WorldTime",
  mixins: [timeDetails],
  data() {
    return {
      zones: [],
    };
  },
  mounted() {
    WorldTimeApiService.getTimeZones().then((res) => {
      this.zones = res.data;
    });
  },
  methods: {
    addClock() {
      this.getClockDetails().then((clockDetails) => {
        this.$emit("add-clock", clockDetails);
      });
    },
    updateClock() {
      this.getClockDetails().then((clockDetails) => {
        this.$emit("update-clock", clockDetails);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.available-zones {
  margin-top: 20px;
}

.get-zones {
  margin-top: 10px;
}
</style>
