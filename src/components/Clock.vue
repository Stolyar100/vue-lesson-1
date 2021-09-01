<template lang="">
  <div class="clock">
    <h1 class="clock__title">{{ time.hours }}:{{ time.minutes }}:{{ time.seconds }} -
      {{ time.details.timezone }}</h1>
    <button @click="deleteClock" class="clock__button">&times;</button>
  </div>
</template>
<script>
export default {
  name: "Clock",
  props: {
    time: Object,
    id: Number,
  },
  methods: {
    deleteClock() {
      this.$emit("delete-clock", this.id);
    },
  },
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
