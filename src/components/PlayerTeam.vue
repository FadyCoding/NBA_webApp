<template>
	<div class="card">
		<div class="front">
			<h2>{{player.firstname}} {{player.lastname}}</h2>
			<p>
				<!--displays a non null value of height in meters-->
				<span v-if="player.height.meters">
					Height: {{player.height.meters}} m
				<br>
				</span>
				<!--displays a non null value of weight in kilograms-->
				<span v-if="player.weight.kilograms">
					Weight: {{player.weight.kilograms}} kg
				<br>
				</span>
			</p>
		</div>

		<div class="back">
		<p>
				<!--displays a non null value of the player's starting date-->
				<span v-if="player.nba.start">
					Starting season: {{player.nba.start}}
				<br>
				</span>
				<!--displays a non null value of the player's college-->
				<span v-if="player.college">
					College: {{player.college}}
				</span>
				<br>
				<!--displays a non null value of weight in kilograms-->
				<span v-if="player.leagues.standard.pos">
					Position: {{player.leagues.standard.pos}}
				<br>
				</span>

			</p>
		</div>
    </div>
  
  </template>

<script>

export default {
    name: 'PlayerTeam',
    props: ['player']  

}
</script>

<style>
.container {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	margin: 0 auto;
	gap: 13px;
	justify-content: center;
	align-items: center;
	max-width: 1080px;
	margin-top: 1em;
}

.card {
	color: inherit;
	cursor: pointer;
	perspective: 1000px;
	position: relative;
	height: 200px;
	padding: 13px;
	}


.front {
	background-size: cover;
	font-size: 1.618rem;
	font-weight: 600;
	color: #fff;
	overflow: hidden;
	font-family: Poppins, sans-serif;
	flex-wrap: wrap;
}
.front:before {
	position: absolute;
	display: block;
	content: "";
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: #2f00ff;
	z-index: -1;
}
.card:hover .front {
	transform: rotateY(180deg);
}
.card:nth-child(even):hover .front {
	transform: rotateY(-180deg);
}

.back {
	background: #a80909;
	color: white;
	transform: rotateY(-180deg);
}
.card:hover .back {
	transform: rotateY(0deg);
}
.card:nth-child(even) .back {
	transform: rotateY(180deg);
}
.card:nth-child(even):hover .back {
	transform: rotateY(0deg);
}

.front, .back {
	display: flex;
	border-radius: 6px;
	background-position: center;
	background-size: cover;
	text-align: center;
	justify-content: center;
	align-items: center;
	position: absolute;
	height: 100%;
	width: 100%;
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
	transform-style: preserve-3d;
	transition: ease-in-out 600ms;
}

.front {
	background-size: cover;
	font-size: 1.618rem;
	font-weight: 600;
	color: #fff;
	overflow: hidden;
	font-family: Poppins, sans-serif;
}
.front:before {
	position: absolute;
	display: block;
	content: "";
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: #2f00ff;
	z-index: -1;
}
	

</style>