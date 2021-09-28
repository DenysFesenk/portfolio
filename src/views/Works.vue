<template>
  <div class="works">
    <h2 class="works__title">Enythink</h2>
    <ul class="works__list">
      <li class="worls__item"><a href="https://denysfesenk.github.io/beetrootFrontEndCobra/projects/exam/app/" class="works__link" target="_blank">1</a></li>
      <li class="worls__item"><a href="https://denysfesenk.github.io/beetrootFrontEndCobra/projects/cahee/app/" class="works__link" target="_blank">2</a></li>
      <li class="worls__item"><a href="https://denysfesenk.github.io/beetrootFrontEndCobra/projects/our-team/app/" class="works__link" target="_blank">3</a></li>
      <li class="worls__item"><a href="https://cbd-df.netlify.app/" class="works__link" target="_blank">4</a></li>
      <li class="worls__item"><a href="https://ski-care.netlify.app/" class="works__link" target="_blank">5</a></li>
      <li class="worls__item"><a href="https://todo-list-df.netlify.app" class="works__link" target="_blank">6</a></li>
      <li class="worls__item"><a href="https://denysfesenk.github.io/tz/projects/antagosoft/app/" class="works__link" target="_blank">7</a></li>
      <li class="worls__item"><a href="https://denysfesenk.github.io/tz/projects/dist/app/" class="works__link" target="_blank">8</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Works",
};
</script>
<style lang="scss">
  .works{
    @include flex(center, center);
    &__title{
      @include text($H240, 400, $black);
    }
  }
</style>