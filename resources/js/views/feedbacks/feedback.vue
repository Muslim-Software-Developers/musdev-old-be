<template>
  <b-row>
    <b-col cols="12" lg="6">
      <b-card no-header>
        <template slot="header">
          User id:  {{ $route.params.id }}
        </template>
        <b-table striped small fixed responsive="sm" :items="items($route.params.id)" :fields="fields">
          <template slot="value" slot-scope="data">
            <strong>{{data.item.value}}</strong>
          </template>
        </b-table>
        <template slot="footer">
          <b-button class="mr-auto" @click="goBack">Back</b-button>
          <b-button class="ml-auto" @click="goBack">Accept</b-button>
        </template>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
import usersData from './UsersData'
export default {
  name: 'Feedback',
  props: {
    caption: {
      type: String,
      default: 'feedback id'
    },
  },
  data: () => {
    return {
      items: (id) => {
        const user = usersData.find( user => user.id.toString() === id)
        const userDetails = user ? Object.entries(user) : [['id', 'Not found']]
        return userDetails.map(([key, value]) => {return {key: key, value: value}})
      },
      fields: [
        {key: 'key'},
        {key: 'value'},
      ],
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
      // this.$router.replace({path: '/users'})
    }
  }
}
</script>
