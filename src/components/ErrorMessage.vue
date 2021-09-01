<template lang="">
  <div class="error">
    <h1 class="error__title">{{message}}</h1>
    <button @click="closeError" class="error__button">&times;</button>
  </div>
</template>
<script>
export default {
  name: "ErrorMessage",
  props: {
    message: String,
  },
  methods: {
    closeError() {
      this.$emit("close-message");
    },
  },
};
</script>
<style lang="scss" scoped>
.error {
  display: flex;
  justify-content: space-between;
  padding: 0px 15px 0px 15px;

  &__title {
    color: #d8300f;
  }

  &__button {
    border: 0;
    background-color: transparent;
    font-size: 35px;
    cursor: pointer;
    color: #2c3e50;
  }
}
</style>
