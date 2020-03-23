<template>
  <div>
    <b-card>
      <h1 class="text-center">{{country.name}}</h1>
      <hr>
      <div class="d-flex justify-content-center">
        <p class="bg-primary mx-2 px-2">Cases: {{country.cases}}</p> 
        <p class="bg-danger mx-2 px-2">Deaths: {{country.deaths}}</p> 
        <p class="bg-info mx-2 px-2">Recovered: {{country.recovered}}</p> 
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "CardCountry",
  props: ["country"]
}
</script>

<style>

</style>