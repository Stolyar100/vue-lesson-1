<template lang="">
  <div class="clock">
    <h1 class="clock__title">{{ hours }}:{{ minutes }}:{{ seconds }} -
      {{ clock.details.timezone }}</h1>
    <button @click="deleteClock" class="clock__button">&times;</button>
  </div>
</template>
<script>
export default {
  name: "Clock",
  props: {
    clock: Object,
    id: Number,
  },
  methods: {
    deleteClock() {
      this.$emit("delete-clock", this.id);
    },
  },
  computed: {
    hours() {
      return this.clock.date.getHours()
    },
    minutes() {
      return this.clock.date.getMinutes()
    },
    seconds() {
      return this.clock.date.getSeconds()
    },
  }
};
</script>
<style lang="scss" scoped>
.clock {
  display: flex;
  justify-content: space-between;
  padding: 0px 15px 0px 15px;

  &__button {
    border: 0;
    background-color: transparent;
    font-size: 35px;
    cursor: pointer;
    color: #2c3e50;
  }
}
</style>
