<template>
  <button class="Button">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.Button {
  height: 50px;
  padding: 0 24px;
  border: none;
  border-radius: 8px;
  box-shadow: none;
  font-size: 16px;
  background-color: #ffffff;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
}
</style>
