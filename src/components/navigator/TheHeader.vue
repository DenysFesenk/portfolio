<template>
  <div class="header">
    <ul class="header__list">
      <li class="header__item" v-for="route in routes" :key="route.name">
        <router-link class="header__item-link" :to="route.path">
          {{ route.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "The-header",
  data() {
    return {
      routes: [
        {
          path: "/",
          name: "About Me",
        },
        {
          path: "/works",
          name: "Works",
        },
        {
          path: "/contact",
          name: "Contact",
        }
      ],
    };
  },
};
</script>

<style lang="scss">
.header {
  &__list {
    @include flex(flex-end, center);
    padding: 20px;
  }
  &__item {
    &:not(:last-child) {
      margin-right: 20px;
    }
  }
  &__item-link{
    @include text($H210, 400, $black);
    @include transition;
    &.router-link-exact-active {
        color: $grey;
      }
    &:hover{
      border-bottom: 1px solid $grey-dark;
      color: $grey-dark;
    }
  }
}
</style>
