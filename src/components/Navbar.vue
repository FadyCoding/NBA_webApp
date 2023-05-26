<template>

<nav>
    <ul>
        <li><a href="#">Welcome to the NBA Live Game App</a></li>
    </ul>
</nav>

</template>
  
<script>
export default {
  name: 'AppNavBar',
  props: {}

  }
  
</script>
  
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

nav {
  background-color: #2f00ff;
  overflow: hidden;
}

nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}

nav li {
  margin: 0 10px;
}

nav a {
  font-family: 'Changa One', cursive;
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none; /* takes the link below off */
}

nav a:hover {
  background-color: #a80909;
  color: rgb(233, 225, 225);
}

  </style>