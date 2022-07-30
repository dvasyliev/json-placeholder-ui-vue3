<template>
  <div class="AppLayout">
    <div class="AppLayout-sidebar">
      <div v-if="$slots['logo']" class="AppLayout-logo">
        <slot name="logo" />
      </div>

      <aside v-if="$slots['navigation']" class="AppLayout-navigation">
        <slot name="navigation" />
      </aside>
    </div>

    <div class="AppLayout-container">
      <div class="AppLayout-topbar">
        <div class="AppLayout-flexSpace" />

        <div v-if="$slots['profile']" class="AppLayout-profile">
          <slot name="profile" />
        </div>
      </div>

      <main class="AppLayout-main">
        <slot />
      </main>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.AppLayout {
  display: flex;
  min-height: 100vh;
  margin: 0 auto;

  &-sidebar {
    width: 100%;
    max-width: 260px;
    padding: 8px;
    background-color: #4337c9;
  }

  &-logo {
    display: flex;
    align-items: center;
    width: 100%;
    height: 65px;
    padding: 8px;
  }

  &-container {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    background-color: #f3f4f6;
  }

  &-topbar {
    display: flex;
    align-items: center;
    height: 65px;
    padding: 8px;
    background-color: #ffffff;
    box-shadow: 0px 1px 2px #dedee0;
  }

  &-flexSpace {
    flex-grow: 1;
  }

  &-profile {
    max-width: 120px;
    padding: 8px;
  }

  &-main {
    padding: 16px;
  }
}
</style>
