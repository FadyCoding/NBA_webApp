<template>
    <div class="container">
      <div class="card">
<!--         <img :src="card.imageUrl" alt="Card Image">-->
        <h2>{{ card.title }}</h2>
        <p>{{ card.description }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        card: [
          {
            id: 1,
            title: 'Card Title 1',
            description: 'Futur MVP, yall know !',
            imageUrl: '@/assets/Luka_Doncic_AG.jpg'
          }
        ]
      }
    }
  }
  </script>

<style>
		.container {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			align-items: center;
			height: 100%;
		}
		
		.card {
			background-color: #f2f2f2;
			border-radius: 10px;
			box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
			margin: 10px;
			overflow: hidden;
			width: 300px;
			height: 400px;
			transition: transform 0.2s ease-in-out;
		}
		
		.card:hover {
			transform: scale(1.1);
		}
		
		.card img {
			height: 200px;
			object-fit: cover;
			width: 100%;
		}
		
		.card h2 {
			font-size: 24px;
			margin: 20px;
			text-align: center;
		}
		
		.card p {
			font-size: 16px;
			margin: 20px;
			text-align: justify;
		}
		
		@media screen and (max-width: 768px) {
			.card {
				width: 90%;
				height: auto;
			}
		}

</style>