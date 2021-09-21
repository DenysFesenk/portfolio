<template>
  <div class="AllAboutMe">
    denys fesenko
  </div>
</template>

<script>

export default {
  name: "All-about-me",
  data() {
    return {
    };
  },

};
</script>

<style lang="scss">
.AllAboutMe {
  padding: 20px 25px;
  display: flex;
  justify-content: center;
  &__item{
    max-width: 700px;
    border: 1px solid #ccc;
    padding: 20px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    &:not(last-child){
      margin-bottom: 30px;
    }
  }
}
</style>
