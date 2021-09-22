<template>
  <div class="navigation">
    <router-link class="link" to="/">calculator</router-link>
    <router-link class="link" to="/converter">converter</router-link>
  </div>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
.navigation {
  margin: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}

.link {
  padding: 5px;
  text-decoration: none;
  color: black;
}
</style>
