<template>
  <div class="d-flex justify-content-center">
    <div>
      <h1 class="text-center">ALL COUNTRY</h1>
    <b-card>
      <CardCountry v-for="country in countries" :key="country.id" :country="country"></CardCountry>
    </b-card>
    </div>
  </div>
</template>

<script>
import CardCountry from '../components/CardCountry'
export default {
  name: "Country",
  components: {
    CardCountry
  },
  computed: {
    countries: function(){
      return this.$store.state.countries
    }
  },
  created(){
    this.$store.dispatch("getCountries")
  },
}
</script>

<style>

</style>