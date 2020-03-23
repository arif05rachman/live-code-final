<template>
  <div>
    <div>
      <b-card>
      <b-form @submit.prevent="addReport()">
        <b-form-group
          id="input-group-1"
          label="country:"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.CountryId"
            type="number"
            required
            placeholder="Enter country"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Your cases:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.cases"
            type="number"
            required
            placeholder="Enter cases"
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
      </b-form>
      </b-card>
      <b-card>
        List REPORT
        <div v-for="report in reports" :key="report.id" class="d-flex justify-content-center">
          <div>
            <b-card>
              <h1>{{report.Country.name}}</h1>
          </b-card>
          <b-card>
          <p class="text-center bg-primary">Cases: {{report.cases}}</p>
          </b-card>
          <b-card>
          <button @click.prevent="deleteReport(report.id)" class="bg-danger">Delete Report</button>
          </b-card>
          </div>
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profil",
   data() {
      return {
        form: {
          cases: '',
          CountryId: '',
        },
      }
  },
  methods: {
    addReport(){
      this.$axios({
        url: "/reports",
        method: "post",
        headers: {
          token: localStorage.getItem("token")
        },
        data: this.form
      })
      .then(({data})=>{
        this.$store.dispatch("getReports")
        console.log(data)
      })
      .catch(({response})=>{
        console.log(response)
      })
    },
    deleteReport(id){
      this.$axios({
        url: "/reports/"+id,
        method: "delete",
        headers: {
          token: localStorage.getItem("token")
        }
      })
      .then(({data})=>{
        this.$store.dispatch("getReports")
        console.log(data)
      })
      .catch(({response})=>{
        console.log(response)
      })
    }
  },
  computed: {
    reports: function(){
      return this.$store.state.reports
    }
  },
  created(){
    this.$store.dispatch("getReports")
  },
}
</script>

<style>

</style>