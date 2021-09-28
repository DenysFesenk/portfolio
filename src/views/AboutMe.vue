<template>
  <div class="about-me">
    <h1 class="about-me__name">Denys Fesenko</h1>
    <p class="about-me__subtitle">Front-End Developer</p>
    <div class="about-me__content">
      <div class="about-me__img">
        <img
          src="../assets/my-photo.png"
          alt="my-photo"
          class="about-me__photo"
        />
      </div>
      <div class="about-me__info">
        <h3 class="about-me__title">Thechnical skills:</h3>
        <ul class="about-me__list about-me__list-tech">
          <li class="about-me__item">HTML | HTML5 | BEM</li>
          <li class="about-me__item">CSS | SCSS | SASS | Bootstrap</li>
          <li class="about-me__item">Gulp | Webpack</li>
          <li class="about-me__item">JavaScript</li>
          <li class="about-me__item">Vue | Vue-Router | Vuex | Vue CLI</li>
          <li class="about-me__item">REST API | AJAX | AXIOS</li>
        </ul>
        <h3 class="about-me__title">Experience:</h3>
        <ul class="about-me__list about-me__list-exp">
          <li class="about-me__item">
            Company 'Vadmax LLC' 11.2019 - 1.2021
            <p>
              HTML | CSS | WordPress | Google Web Designer | Email Templates
            </p>
          </li>
          <li class="about-me__item">
            Hope Media Group 7.2021 - 8.2021
            <p>Vue.js | Vue-Router | Nuxt.js</p>
          </li>
        </ul>
        <h3 class="about-me__title">Couses:</h3>
        <ul class="about-me__list about-me__list-courses">
          <li class="about-me__item">
            Udemy (30 hours) - JavaScript(es6 | react) 2019
          </li>
          <li class="about-me__item">
            Books: (You don’t Know JS | JS for Kid) 2020
          </li>
          <li class="about-me__item">Youtube channels</li>
          <li class="about-me__item">
            Beetroot Academy(5 months)
            <p>Front-End (html | css3 | js | vue.js) 2021</p>
          </li>
        </ul>
        <h3 class="about-me__title">Languages:</h3>
        <ul class="about-me__list about-me__list-lagn">
          <li class="about-me__item">Russian</li>
          <li class="about-me__item">English (Intermediate)</li>
          <li class="about-me__item">Polish</li>
          <li class="about-me__item">Ukrainian</li>
        </ul>
        <h3 class="about-me__title">Interests and nobbies:</h3>
        <ul class="about-me__list about-me__list-hobbie">
          <li class="about-me__item">Sport</li>
          <li class="about-me__item">Travelling</li>
          <li class="about-me__item">Volunteer</li>
          <li class="about-me__item">Communication with people</li>
          <li class="about-me__item">Mastering new skills</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About-me",
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.about-me {
  padding: 20px 25px;
  @include flex(center, flex-start, column);
  &__name {
    @include text($H360, 400, $black) {
      font-family: "Kaushan Script", cursive;
    }
  }
  &__subtitle {
    @include text($H200, 400, $black) {
      font-family: "Kaushan Script", cursive;
      word-spacing: 10px;
    }
    padding-left: 17px;
    margin-bottom: 20px;
  }
  &__content {
    display: flex;
    @media screen and (max-width: 500px) {
      flex-direction: column;
    }
  }
  &__img {
    @media screen and (max-width: 500px) {
      margin: auto;
    }
  }
  &__photo {
    border-radius: 5px;
    box-shadow: 4px 4px 14px rgba(0, 0, 0, 0.2);
    margin-right: 150px;
    height: auto;
    @media screen and (max-width: 900px) {
      margin-right: 75px;
      max-width: 300px;
    }
    @media screen and (max-width: 700px) {
      margin-right: 25px;
      max-width: 250px;
    }
    @media screen and (max-width: 600px) {
      max-width: 200px;
    }
    @media screen and (max-width: 500px) {
      min-width: 300px;
    }
  }
  &__title {
    margin-bottom: 12px;
    @include text($H240, 500, $black);
    @media screen and (max-width: 600px) {
      font-size: $H210;
      text-align: center;
    }
  }
  &__list:not(:last-child) {
    margin-bottom: 30px;
    border-bottom: 1px solid $black;
  }
  &__item {
    margin-bottom: 5px;
    padding-left: 15px;
    @include text($H220, 400, $grey-dark) {
      word-spacing: 3px;
    }
    p {
      font-size: $H20;
      word-spacing: 5px;
      @media screen and (max-width: 600px) {
        font-size: $H70;
        word-spacing: none;
      }
    }
    @media screen and (max-width: 600px) {
      font-size: $H90;
      word-spacing: none;
    }
  }
}
</style>
