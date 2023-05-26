<template>
    <form>
      <select v-model="key" @change="onSortChange($event)">
        <option value="height">Height</option>
        <option value="weight">Weight</option>
        <option value="firstname">Firstname</option>
      </select>

      Sort by : {{ sort }}
    </form>
  </template>
  
  <script>
  export default {
    name: "PlayerForm",
    props: {
      player: {
        type: Object,
        required: true,
      },
    },

    data() {
      return {
        sort: localStorage.getItem("sort") || "height"
      };
    },

    methods: {
      onSortChange(e) {
        console.log(e.target.value)
        this.sort = e.target.value
        localStorage.setItem("sort", e.target.value)
      }
    }

  }
  </script>
  
  <style>
  </style>
  