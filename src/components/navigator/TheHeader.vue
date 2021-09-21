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
          name: "All About Me",
        },
        {
          path: "/myworks",
          name: "My Works",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.header {
  &__list {
    @include flex(center, center);
    padding: 20px 0;
  }
  &__item {
    &:not(:last-child) {
      margin-right: 20px;
    }
  }
  &__item-link{
    @include text($H210, 700, $black);
    &.router-link-exact-active {
        color: #b8860b;
        border-bottom: 1px solid #b8860b;
      }
  }
}
</style>
