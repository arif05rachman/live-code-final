<template>
  <div class="d-flex justify-content-center">
    <div>
      <h1 class="text-center">LOGIN</h1>
    <b-card>
      <b-form @submit.prevent="login()">
        <b-form-group
          id="input-group-1"
          label="Username:"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.username"
            type="text"
            required
            placeholder="Enter username"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Your Password:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.password"
            type="password"
            required
            placeholder="Enter Password"
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
      </b-form>
    </b-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
      return {
        form: {
          username: '',
          password: '',
        },
      }
  },
  methods: {
    login(){
      this.$axios({
        url: "/login",
        method: "post",
        data: this.form
      })
      .then(({data})=>{
        localStorage.setItem('token', data.token)
        localStorage.setItem('name', data.name)
        this.$store.commit("username")
        this.$store.commit("login")
        this.$router.push({name: "Home"})
      })
      .catch(({response})=>{
        console.log(response.data)
      })
    }
  }
}
</script>

<style>

</style>