<template>
    <div class="player">
        <p>Firstname : {{ player.firstname }}</p>
        <p>Lastname : {{ player.lastname }}</p>
    </div>

</template>

<script>

export default {
    name: 'PlayerTeam',
    props: ['player']  

}
</script>

<style>

.player{
    position: relative;
    flex-basis: 25%;
    justify-content: center;
    padding: 30px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 0.3);
    cursor: pointer;
}

</style>