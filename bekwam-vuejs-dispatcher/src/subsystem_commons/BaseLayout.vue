<template>
  <section class="hero is-halfheight">
    <div class="hero-head"></div>
    <div class="hero-body">
      <div class="container">
        <slot></slot>
      </div>
    </div>
    <div class="hero-foot"></div>
  </section>
</template>

<script>
export default {
  name: "BaseLayout"
}
</script>

<style scoped>

</style>