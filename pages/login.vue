<template>
  <section>
    <div v-if="$route.query.message" class="danger-login">
      Need login first
    </div>

    <form @submit.prevent="onSubmit">
      <div>
        <input type="text">
        <button type="submit">Login</button>
      </div>
      <nuxt-link to="/">Home</nuxt-link>
    </form>
  </section>
</template>

<script>
export default {
  layout: 'empty',
  methods: {
    onSubmit() {
      this.$store.dispatch('login');
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
input {
  display: 100%;
}
.danger-login {
  padding: 10px;
  margin: 0px auto 20px;
  border-radius: 10px;
  width: 400px;
  text-align: center;
  background-color:rgb(254, 74, 74)
}
</style>