<template>
    <form>
      <label for="firstname">Firstname:</label>
      <input type="text" id="firstname" name="firstname" v-model="firstname" required>
      
      <label for="lastname">Lastname:</label>
      <input type="text" id="lastname" name="lastname" v-model="lastname" required>
  
      <label for="team">Team:</label>
      <input type="text" id="team" name="team" v-model="team" required>
      
      <button type="submit" @click.prevent="validateForm()">Submit</button>
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
        firstname: "",
        lastname: "",
        team: "",
      };
    },

    mounted() {
      // populate form fields with player data
      this.firstname = this.player.firstname;
      this.lastname = this.player.lastname;
      this.team = this.player.team;
    },
    
    methods: {
      validateForm() {
        if (this.firstname === "" || this.lastname === "" || this.team === "") {
          alert("Please fill in all fields");
          return false;
        }
        // additional validation logic can be added here
        return true;
      },
    },
  };
  </script>
  
  <style>
  </style>
  