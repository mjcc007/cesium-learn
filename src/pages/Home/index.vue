<script setup lang="ts">
import { h } from "vue";
import { RouterLink } from "vue-router";
import type { MenuOption } from "naive-ui";

const menuOptions: MenuOption[] = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: "flight",
          },
        },
        { default: () => "飞机" }
      ),
    key: "flight",
  },
  {
    key: "Building",
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: "building",
          },
        },
        { default: () => "建筑物模型" }
      ),
  },
  {
    key: "entity",
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: "entity",
          },
        },
        { default: () => "实体" }
      ),
  },
];
</script>

<template>
  <div class="main">
    <div class="menu">
      <n-menu :options="menuOptions" />
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  width: 100%;
  height: 100%;
  .menu {
    width: 180px;
    height: 100%;
    background-color: dimgrey;
  }
  .content {
    flex: 1;
    border: 1px solid yellow;
  }
}
</style>
