<template>
    <p>Firstname : {{ player.firstname }}</p>
    <p>Lastname : {{ player.lastname }}</p>
</template>

<script>

export default {
    name: 'PlayerTeam',
    props: ['player']  

}
</script>

<style>

</style>