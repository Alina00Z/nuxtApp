<template>
  <nav>
    <h1>NUXT</h1>
    <ul>
      <li>
        <nuxt-link active-class="active" exact class="nav-link" to="/">
          Home
        </nuxt-link>
      </li>
      <li>
        <nuxt-link active-class="active" class="nav-link" to="/about">
          About
        </nuxt-link>
      </li>
      <li>
        <nuxt-link active-class="active" class="nav-link" to="/users">
          Users
        </nuxt-link>
      </li>
      <li v-if="!hasToken">
        <nuxt-link active-class="active" class="nav-link" to="/login">
          Login
        </nuxt-link>
      </li>
      <li v-if="hasToken">
        <a @click.prevent="logout" class="nav-link" href="#">
          Logout
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { throws } from 'assert';

export default {
  computed: {
    hasToken() {
        return this.$store.getters.hasToken
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
      this.$router.push('/login');
    }
  },
}
</script>

<style scoped>
* {
  font-size: 30;
  margin: 0px;
}
nav {
  background-color:rgba(167, 167, 167, 0.169);
  padding: 10px 0px 10px 40px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
}
ul {
  list-style: none;
  display: flex;
  flex-direction: row;
}
li {
  padding-top: 8px
}
li:hover {
  cursor: pointer;
  color:rgb(66, 85, 255);
}
li:not(:last-child) {
  margin-right: 10px;
}
.active {
  color:rgb(66, 85, 255);
}
</style>