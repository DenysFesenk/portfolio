<template>
  <div class="works">
    <h2 class="works__title">My Work:</h2>
    <ul class="works__list">
      <li class="works__item">
        <a
          href="https://denysfesenk.github.io/beetrootFrontEndCobra/projects/exam/app/"
          class="works__link"
          target="_blank"
          >BHROMAON</a
        >
      </li>
      <li class="works__item">
        <a
          href="https://denysfesenk.github.io/beetrootFrontEndCobra/projects/cahee/app/"
          class="works__link"
          target="_blank"
          >CAHEE</a
        >
      </li>
      <li class="works__item">
        <a
          href="https://denysfesenk.github.io/beetrootFrontEndCobra/projects/our-team/app/"
          class="works__link"
          target="_blank"
          >OUR-TEAM</a
        >
      </li>
      <li class="works__item">
        <a
          href="https://cbd-df.netlify.app/"
          class="works__link"
          target="_blank"
          >CDB</a
        >
      </li>
      <li class="works__item">
        <a
          href="https://todo-list-df.netlify.app"
          class="works__link"
          target="_blank"
          >TODO-LIST</a
        >
      </li>
      <li class="works__item">
        <a
          href="https://denysfesenk.github.io/tz/projects/antagosoft/app/"
          class="works__link"
          target="_blank"
          >TZ-1</a
        >
      </li>
      <li class="works__item">
        <a
          href="https://denysfesenk.github.io/tz/projects/dist/app/"
          class="works__link"
          target="_blank"
          >TZ-2</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Works",
};
</script>
<style lang="scss">
.works {
  @include flex(center, center, column);
  height: 80vh;
  &__title {
    @include text($H240, 400, $black);
    margin-bottom: 40px;
  }
  &__list {
    @include flex(center);
    flex-wrap: wrap;
    max-width: 600px;
    @media screen and (max-width: 500px) {
      max-width: 400px;
    }
  }
  &__item {
    margin: 0 20px 20px 0;
    padding: 15px 20px;
    border: 3px solid $black;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: -1px 1px 14px rgba(0, 0, 0, 0.2);
    @include transition;
    &:hover {
      background-color: beige;
      box-shadow: none;
    }
  }
  &__link {
    color: inherit;
    font-family: 'Ubuntu', sans-serif;
  }
}
</style>
